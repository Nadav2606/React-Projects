const express = require("express");
const moviesController = require("../controllers/movies.controller");

const router = express.Router();

router.get("/", moviesController.getAllMoviesByFilter);
router.get("/:id", moviesController.getMovieById);
router.post("/", moviesController.createMovie);
router.put("/:id", moviesController.updateMovie);
router.delete("/:id", moviesController.deleteMovie);

module.exports = router;
