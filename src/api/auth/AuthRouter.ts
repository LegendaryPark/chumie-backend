import { Router, Request, Response } from "express";
import { logInUser, registerUser } from "./AuthController";

const router: Router = Router();

router.post("/register", async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    await registerUser(username, password);
    res.status(201).send("Account created Successfully");
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.query;
    const { accessToken, refreshToken } = await logInUser(
      username as string,
      password as string
    );
    res.status(200).json({ accessToken, refreshToken });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default router;
