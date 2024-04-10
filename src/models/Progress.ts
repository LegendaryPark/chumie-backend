import mongoose, { Document, Model, Schema } from "mongoose";

interface IProgress extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  scores: number[];
  timeTaken: number[]; // Time in seconds
  mistakes: {
    wordPairId: mongoose.Schema.Types.ObjectId;
    attempts: number;
  }[];
  date: Date;
}

const progressSchema = new mongoose.Schema<IProgress>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  scores: [Number],
  timeTaken: [Number],
  mistakes: [
    {
      wordPairId: { type: mongoose.Schema.Types.ObjectId, ref: "WordPair" },
      attempts: Number,
    },
  ],
  date: { type: Date, default: Date.now },
});

const ProgressModel: Model<IProgress> = mongoose.model<IProgress>(
  "Progress",
  progressSchema
);

export default ProgressModel;
