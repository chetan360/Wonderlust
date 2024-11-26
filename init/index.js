const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/wonderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const inifDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was intialized.");
};

inifDB();
