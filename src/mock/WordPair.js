"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var wordPairSchema = new mongoose_1.Schema({
    english: { type: String, required: true },
    french: { type: String, required: true },
});
var WordPair = mongoose_1.default.model("WordPair", wordPairSchema);
exports.default = WordPair;
