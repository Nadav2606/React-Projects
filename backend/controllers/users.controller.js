const User = require("../models/Users");
const Movie = require("../models/Movie");

// GET /api/users?search=nadav&genre=Action
const getAllUsers = async (req, res) => {
  try {
    const { search, genre } = req.query;

    const filter = {};

    if (search) {
      filter.$or = [
        { username: { $regex: search, $options: "i" } },
        { fullName: { $regex: search, $options: "i" } },
      ];
    }

    if (genre) {
      filter.favoriteGenres = { $regex: `^${genre}$`, $options: "i" };
    }

    const users = await User.find(filter);

    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: "Failed to get users ⚠️",
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: "User not found 👤",
        message: `No user with id ${req.params.id}.`,
      });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({
      error: "Invalid user id ⚠️",
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, fullName, avatar, favoriteGenres } = req.body;

    if (!username || !email) {
      return res.status(400).json({
        error: "Missing fields ⚠️",
        message: "Both 'username' and 'email' are required.",
      });
    }

    const taken = await User.findOne({
      username: { $regex: `^${username}$`, $options: "i" },
    });

    if (taken) {
      return res.status(409).json({
        error: "Username taken 🙅",
        message: `The username '${username}' is already in use.`,
      });
    }

    const newUser = await User.create({
      username,
      email,
      fullName: fullName || username,
      avatar:
        avatar ||
        `https://placehold.co/200x200/1a1a2e/eaeaea?text=${encodeURIComponent(username)}`,
      favoriteGenres: favoriteGenres || [],
      watchlist: [],
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({
      error: "Failed to create user ⚠️",
      message: error.message,
    });
  }
};

const getUserWatchlist = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("watchlist");

    if (!user) {
      return res.status(404).json({
        error: "User not found 👤",
        message: `No user with id ${req.params.id}.`,
      });
    }

    res.json({
      user: user.username,
      count: user.watchlist.length,
      movies: user.watchlist,
    });
  } catch (error) {
    res.status(400).json({
      error: "Failed to get watchlist ⚠️",
      message: error.message,
    });
  }
};

const addToWatchlist = async (req, res) => {
  try {
    const { movieId } = req.body;

    if (!movieId) {
      return res.status(400).json({
        error: "Missing field ⚠️",
        message: "'movieId' is required in the body.",
      });
    }

    const user = await User.findById(req.params.id);
    const movie = await Movie.findById(movieId);

    if (!user) {
      return res.status(404).json({
        error: "User not found 👤",
        message: `No user with id ${req.params.id}.`,
      });
    }

    if (!movie) {
      return res.status(404).json({
        error: "Movie not found 🎬",
        message: `Can't add - no movie with id ${movieId}.`,
      });
    }

    if (user.watchlist.includes(movieId)) {
      return res.status(409).json({
        error: "Already in watchlist 📋",
        message: `'${movie.title}' is already in ${user.username}'s watchlist.`,
      });
    }

    user.watchlist.push(movieId);
    await user.save();

    res.status(201).json({
      message: `'${movie.title}' added to ${user.username}'s watchlist 🍿`,
      watchlist: user.watchlist,
    });
  } catch (error) {
    res.status(400).json({
      error: "Failed to add movie ⚠️",
      message: error.message,
    });
  }
};

const removeFromWatchlist = async (req, res) => {
  try {
    const { movieId } = req.params;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: "User not found 👤",
        message: `No user with id ${req.params.id}.`,
      });
    }

    const exists = user.watchlist.includes(movieId);

    if (!exists) {
      return res.status(404).json({
        error: "Not in watchlist 📋",
        message: `Movie ${movieId} isn't in ${user.username}'s watchlist.`,
      });
    }

    user.watchlist = user.watchlist.filter((id) => id.toString() !== movieId);

    await user.save();

    res.json({
      message: `Movie ${movieId} removed from ${user.username}'s watchlist 🗑️`,
      watchlist: user.watchlist,
    });
  } catch (error) {
    res.status(400).json({
      error: "Failed to remove movie ⚠️",
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  getUserWatchlist,
  addToWatchlist,
  removeFromWatchlist,
};
