import GameCard from "../GameCard/GameCard";
import styles from "./GamesList.module.css";

function GamesList({ games, favorites, onToggleFavorite }) {
  if (!games.length) return <p className={styles.emptyState}>No games matched your search.</p>;
  return <section className={styles.gamesGrid}>{games.map((game) => <GameCard key={game.id} game={game} isFavorite={favorites.includes(game.id)} onToggleFavorite={onToggleFavorite} />)}</section>;
}

export default GamesList;
