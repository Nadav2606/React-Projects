const mongoose = require("mongoose");
require("dotenv").config();
//Movies
const Movie = require("./models/Movie");
const movieData = require("./data/movies");
//Users
const Users = require("./models/Users");
const userData = require("./data/users");

const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qiwsr8c.mongodb.net/${process.env.DB_NAME}`;

const seed = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("💥 Mongodb connected successfully 💥");
    console.log("clearing old data....");

    await Movie.deleteMany({});
    await Users.deleteMany({});

    const moviesWithoutOldIds = movieData.map(({ id, ...rest }) => rest);
    const insertMovies = await Movie.insertMany(moviesWithoutOldIds);
    console.log("🎬 Movies inserted successfully 🎬");

    const usersWithoutOldIds = userData.map(({ id, ...rest }) => rest);
    const insertUsers = await Users.insertMany(usersWithoutOldIds);
    console.log("👤 Users inserted successfully 👤");
  } catch (error) {
    console.error(" seeding Failed:", error.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("💥 Mongodb disconnected successfully 💥");
    process.exit(0);
  }
};

seed();
