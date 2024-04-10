import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function checkRole(role: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization)
      return res.status(403).send("Authorization required");
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      //   req.user = decoded;
      if (decoded.role !== role)
        return res.status(403).send("Insufficient permissions");
      next();
    } catch (err) {
      return res.status(401).send("Invalid or expired token");
    }
  };
}
