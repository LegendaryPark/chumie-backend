"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var WordPair_1 = require("./WordPair");
require("dotenv/config");
mongoose_1.default
  .connect(
    "mongodb+srv://pbjkmn00:GGmY4rynrZHe5jYO@backenddb.cju44jv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(function () {
    return console.log("Connected to MongoDB");
  })
  .catch(function (err) {
    return console.log(err);
  });

var pairs = [
  { english: "bicycle", french: "vélo" },
  { english: "railroad", french: "chemin de fer" },
  { english: "folder", french: "dossier" },
  { english: "butter", french: "beurre" },
  { english: "cereal", french: "céréale" },
  { english: "hungry", french: "faim" },
  { english: "forest", french: "forêt" },
  { english: "camel", french: "chameau" },
  { english: "weekly", french: "hebdomadaire" },
  { english: "desk", french: "bureau" },
  { english: "sibling", french: "frère et sœur" },
  { english: "limestone", french: "calcaire" },
];
WordPair_1.default
  .insertMany(pairs)
  .then(function () {
    console.log("Successfully inserted");
    mongoose_1.default.connection.close();
  })
  .catch(function (error) {
    console.error("An error occurred during the data insertion", error);
    mongoose_1.default.connection.close();
  });
