"use strict";

// Requiring a JSON file automatically parses it and returns the data. These
// are just example tweets to make it less tedious to style the app initially.
const db = {
  MongoClient: require("mongodb").MongoClient
}

module.exports = db;

