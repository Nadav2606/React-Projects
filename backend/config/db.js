// async function connectDB() {}

const mongoose = require("mongoose");

const connectDB = async () => {
  const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qiwsr8c.mongodb.net/${process.env.DB_NAME}`;

  if (!DB_URI) {
    console.error("Missing env configuration");
    process.exit(1);
  }

  try {
    await mongoose.connect(DB_URI);
    console.log("💥 Mongodb connected successfully 💥");
  } catch (error) {
    console.error("Mongodb connection falied 😞", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
