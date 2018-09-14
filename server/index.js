"use strict";

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

const dbName = 'tweeter';

MongoClient.connect(MONGODB_URI, (err, client) => {
    if (err) {
      console.error(`Failed to connect: ${MONGODB_URI}`);
      throw err;
    }
    console.log(`Connected to mongodb: ${MONGODB_URI}`);

    const db = client.db(dbName);

    const DataHelpers = require("./lib/data-helpers.js")(db);

    const tweetsRoutes = require("./routes/tweets")(DataHelpers);

    app.use("/tweets", tweetsRoutes);

});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});


