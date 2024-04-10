import { Router, Request, Response } from "express";
import { getWordPair } from "./WordPairController";

const router: Router = Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getWordPair();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`Failed : ${err}`);
  }
});

export default router;
