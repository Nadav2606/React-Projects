import { useMemo, useState } from "react";
import { games, genres } from "../../data.js";
import SearchBar from "../../components/SearchBar/SearchBar";
import GamesList from "../../components/GamesList/GamesList";
import styles from "./HomePage.module.css";

function HomePage({ favorites, onToggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const visibleGames = useMemo(() => {
    return games
      .filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedGenre === "All" || game.genre === selectedGenre),
      )
      .sort((a, b) => {
        if (sortBy === "title") return a.title.localeCompare(b.title);
        if (sortBy === "newest") return b.releaseYear - a.releaseYear;
        return b.rating - a.rating;
      });
  }, [searchTerm, selectedGenre, sortBy]);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p>BUILD YOUR COLLECTION</p>
        <h1>Find your next great game.</h1>
        <span>Explore 20 popular PC games, save favorites and watch trailers.</span>
      </section>

      <section className={styles.toolbar}>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <div className={styles.filters}>
          <select value={selectedGenre} onChange={(event) => setSelectedGenre(event.target.value)} aria-label="Filter by genre">
            {genres.map((item) => <option key={item} value={item}>{item === "All" ? "All genres" : item}</option>)}
          </select>
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort games">
            <option value="rating">Highest rating</option>
            <option value="newest">Newest first</option>
            <option value="title">Title A–Z</option>
          </select>
        </div>
      </section>

      <div className={styles.resultsTitle}><h2>All games</h2><span>{visibleGames.length} results</span></div>
      <GamesList games={visibleGames} favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </main>
  );
}

export default HomePage;
