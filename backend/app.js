require("dotenv").config();

const express = require('express');
const cors = require('cors');

const connectDB = require("./config/db");
const moviesRoutes = require('./routes/movies');
const usersRoutes = require("./routes/users");

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/movies', moviesRoutes);
app.use("/api/users", usersRoutes);

// http://localhost:3000/api/movies 

app.use("/", (req, res, next) => {
  res.json({
    message: "Welcome to our movies api!🎬",
    tip: "Try visit /api/movies or /api/users 🍿",
    status: "Server is working enjoy 😉"
  })
})

app.use((req, res) => {
    res.status(404).json({
     error: "Oops! are you sure you meant to get here?🍿",
     message: `The route ${req.url} does not exist on our api.`,
     hint: "Check your spelling or try '/' to see the welcome page"
    })
})

const PORT = 5000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
}

start();
