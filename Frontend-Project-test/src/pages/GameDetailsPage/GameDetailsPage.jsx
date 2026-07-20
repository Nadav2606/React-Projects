import { Link, useParams } from "react-router-dom";
import { games } from "../../data.js";
import styles from "../Pages.module.css";

function GameDetailsPage({ favorites, onToggleFavorite }) {
  const { gameId } = useParams();
  const game = games.find((item) => item.id === Number(gameId));

  if (!game) return <main className={`${styles.page} ${styles.innerPage}`}><h1>Game not found</h1><Link to="/">Back to games</Link></main>;

  const isFavorite = favorites.includes(game.id);
  return (
    <main className={`${styles.page} ${styles.innerPage}`}>
      <Link className={styles.back} to="/">← Back to games</Link>
      <section className={styles.details}>
        <div className={styles.detailArt}>{game.image ? <img src={game.image} alt={`${game.title} cover`} /> : "🎮"}</div>
        <div>
          <p className={styles.eyebrow}>{game.genre}</p><h1>{game.title}</h1><p className={styles.intro}>{game.description}</p>
          <dl className={styles.infoList}>
            <div><dt>Developer</dt><dd>{game.developer}</dd></div><div><dt>Released</dt><dd>{game.releaseYear}</dd></div>
            <div><dt>Platform</dt><dd>{game.platform}</dd></div><div><dt>Rating</dt><dd>★ {game.rating}</dd></div>
          </dl>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={game.trailerUrl} target="_blank" rel="noopener noreferrer">▶ Watch trailer</a>
            <button className={styles.secondaryButton} onClick={() => onToggleFavorite(game.id)}>{isFavorite ? "♥ Remove favorite" : "♡ Add to favorites"}</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GameDetailsPage;
