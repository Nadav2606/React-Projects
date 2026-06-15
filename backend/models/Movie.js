const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    director: { type: String, default: "unknown", trim: true },
    rating: { type: Number, default: null, min: 0, max: 10 },
    leadActor: [{ type: String, default: null, trim: true }],
    duration: { type: Number, default: null },
    poster: { type: String, default: "" },
    genre: { type: [String], default: [] },
    description: { type: String, default: "" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Movie", movieSchema);
