import Progress from "../../models/Progress";

const createProgress = async (
  userId: string,
  scores: number,
  timeTaken: number,
  mistakes: string[]
) => {
  const progress = new Progress({ userId, scores, timeTaken, mistakes });
  await progress.save();
};

const getProgress = async (userId: string) => {
  const userProgress = await Progress.find({ userId }).sort({ date: -1 });
};

export { createProgress, getProgress };
