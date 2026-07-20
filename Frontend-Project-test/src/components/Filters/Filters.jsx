import { genres } from "../../data.js";
import "./Filters.css";

function Filters({ genre, sortBy, onGenreChange, onSortChange }) {
  return (
    <div className="filters">
      <select
        value={genre}
        onChange={(event) => onGenreChange(event.target.value)}
        aria-label="Filter by genre"
      >
        {genres.map((item) => (
          <option key={item} value={item}>
            {item === "All" ? "All genres" : item}
          </option>
        ))}
      </select>
      <select
        value={sortBy}
        onChange={(event) => onSortChange(event.target.value)}
        aria-label="Sort games"
      >
        <option value="rating">Highest rating</option>
        <option value="newest">Newest first</option>
        <option value="title">Title A–Z</option>
      </select>
    </div>
  );
}

export default Filters;
