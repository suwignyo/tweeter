"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // We have a connection to the "tweeter" db, starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // ==> Refactored and wrapped as new, tweet-specific function:

 db.collection("tweets").find({}, (err, results) => {
    if (err) throw err;

    // ==> Fair warning: This is going to log a lot of stuff...
    console.log("for each item yielded by the cursor:");
    results.each((err, item) => console.log("  ", item));
    db.close();
  });

});