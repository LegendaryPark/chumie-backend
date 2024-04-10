import mongoose, { Document, Model, Schema } from "mongoose";

interface IWordPair extends Document {
  english: string;
  french: string;
}

const wordPairSchema: Schema = new Schema<IWordPair>({
  english: { type: String, required: true },
  french: { type: String, required: true },
});

const WordPair: Model<IWordPair> = mongoose.model<IWordPair>(
  "WordPair",
  wordPairSchema
);

export default WordPair;
