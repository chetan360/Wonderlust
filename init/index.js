// // 1. MUST BE AT THE VERY TOP OF THE FILE
// const dns = require("dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]); // Force Node to use Google DNS
// require("node:dns").setDefaultResultOrder("ipv4first"); // Force IPv4

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl =
  "mongodb+srv://chetansmankar360:GKzuYdAB1vJRss68@cluster0.5iqio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  try {
    // 2. Add 'family: 4' to force IPv4 in the driver
    await mongoose.connect(dbUrl, { family: 4 });
    console.log("MongoDB is connected");

    await initDB();

    mongoose.connection.close();
    console.log("Connection closed.");
  } catch (err) {
    console.log("Connection Error:", err);
  }
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6745db2915fb3e72fc8020af",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized.");
};

main();
