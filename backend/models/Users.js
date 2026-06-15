const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^\S+@\S+\.\S+$/,
    },
    fullName: { type: String, required: true, trim: true },
    avatar: { type: String, default: "" },
    favoriteGenres: { type: [String], default: [] },
    watchList: { type: [String], default: [] },
    birthDate: { type: Date, default: null },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
