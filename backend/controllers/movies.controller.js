const Movie = require("../models/Movie.js");
const { options } = require("../routes/movies.js");

const getAllMoviesByFilter = async (req, res) => {
  try {
    const { year, genre, search } = req.query;

    const filter = {};

    if (year) filter.year = parseInt(year);

    if (genre) filter.genre = { $regex: genre, $options: "i" };

    if (search) filter.title = { $regex: search, $options: "i" };

    const moviesResult = await Movie.find(filter);

    res.json(moviesResult);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while fetching movies.",
      error: error.message,
    });
  }
};
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        error: "Oops Movie not found 🎬",
        message: "No movie is available, please try again later.",
      });
    }

    res.json(movie);
  } catch (error) {
    res
      .status(400)
      .json({ message: `${req.params.id}`, error: "Invalid id ⚠️." });
  }
};

const createMovie = async (req, res) => {
  try {
    const { title, year } = req.body;

    if (!title || !year) {
      return res.status(206).json({
        error: "Missing Fields ⚠️",
        message: "Both 'title' and 'year' are required.",
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message, error: "Validation failed ⚠️" });
  }

  const newMovie = await Movie.create({
    ...req.body,
    poster:
      req.body.poster ||
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=600&q=80",
  });

  res.status(201).json(newMovie);
};

const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!movie) {
      return res.status(404).json({
        error: "Movie not found 🎬",
        message: `Can't update movie ${req.params.id} it doesn't exist.`,
      });
    }

    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message, error: "Update Failed ⚠️" });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

    if (!deletedMovie) {
      return res.status(404).json({
        error: "Movie not found 🎬",
        message: `Can't delete movie ${req.params.id} it doesn't exist.`,
      });
    }

    res.json({
      message: "Movie deleted successfully 🗑️",
      deleted: deletedMovie,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message, error: "Faild to Delete Movie ⚠️" });
  }
};

module.exports = {
  getAllMoviesByFilter,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
