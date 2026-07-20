import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import GameDetailsPage from "./pages/GameDetailsPage/GameDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import styles from "./App.module.css";

function App() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favoriteGames")) ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favoriteGames", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(gameId) {
    setFavorites((current) =>
      current.includes(gameId)
        ? current.filter((id) => id !== gameId)
        : [...current, gameId],
    );
  }

  return (
    <div className={styles.appShell}>
      <Navbar favoritesCount={favorites.length} />
      <Routes>
        <Route path="/" element={<HomePage favorites={favorites} onToggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<FavoritesPage favorites={favorites} onToggleFavorite={toggleFavorite} />} />
        <Route path="/games/:gameId" element={<GameDetailsPage favorites={favorites} onToggleFavorite={toggleFavorite} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer className={styles.footer}>Game Tracker · React Frontend Project</footer>
    </div>
  );
}

export default App;
