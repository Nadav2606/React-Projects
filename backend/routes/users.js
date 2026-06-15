const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.createUser);

router.get("/:id/watchlist", usersController.getUserWatchlist);
router.post("/:id/watchlist", usersController.addToWatchlist);
router.delete("/:id/watchlist/:movieId", usersController.removeFromWatchlist);

module.exports = router;
