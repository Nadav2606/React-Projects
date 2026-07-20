import { Link } from "react-router-dom";
import styles from "./GameCard.module.css";

function GameCard({ game, isFavorite, onToggleFavorite }) {
  return (
    <article className={styles.gameCard}>
      <a className={styles.coverLink} href={game.trailerUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${game.title} trailer on YouTube`}>
        {game.image ? <img src={game.image} alt={`${game.title} cover`} /> : <div className={styles.coverPlaceholder}><span>▶</span><small>Watch trailer</small></div>}
      </a>
      <div className={styles.cardBody}>
        <div className={styles.cardHeading}>
          <div><p>{game.genre}</p><h2>{game.title}</h2></div>
          <button className={`${styles.favorite} ${isFavorite ? styles.active : ""}`} onClick={() => onToggleFavorite(game.id)} aria-label={`${isFavorite ? "Remove" : "Add"} ${game.title} ${isFavorite ? "from" : "to"} favorites`}>♥</button>
        </div>
        <div className={styles.meta}><span>{game.releaseYear}</span><span>{game.platform}</span><strong>★ {game.rating}</strong></div>
        <Link className={styles.detailsLink} to={`/games/${game.id}`}>View details →</Link>
      </div>
    </article>
  );
}

export default GameCard;
