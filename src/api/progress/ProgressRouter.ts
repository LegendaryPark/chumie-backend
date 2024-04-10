import { Router, Request, Response } from "express";
import { createProgress, getProgress } from "./ProgressController";
import { checkRole } from "../../middleware/checkRole";

const router: Router = Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, scores, timeTaken, mistakes } = req.body;
    const result = await createProgress(userId, scores, timeTaken, mistakes);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get(
  "/:userId",
  checkRole("admin"),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const result = await getProgress(userId);
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
);

export default router;
