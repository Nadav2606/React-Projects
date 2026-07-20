import { games } from "../../data.js";
import GamesList from "../../components/GamesList/GamesList";
import styles from "../Pages.module.css";

function FavoritesPage({ favorites, onToggleFavorite }) {
  const favoriteGames = games.filter((game) => favorites.includes(game.id));
  return (
    <main className={`${styles.page} ${styles.innerPage}`}>
      <p className={styles.eyebrow}>YOUR COLLECTION</p>
      <h1>Favorite games</h1>
      <p className={styles.intro}>Your favorites are saved in this browser.</p>
      <GamesList games={favoriteGames} favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </main>
  );
}

export default FavoritesPage;
