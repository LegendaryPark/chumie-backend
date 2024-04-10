import WordPair from "../../models/WordPair";

const getWordPair = async () => {
  const wordPairs = await WordPair.find();
  return wordPairs;
};

export { getWordPair };
