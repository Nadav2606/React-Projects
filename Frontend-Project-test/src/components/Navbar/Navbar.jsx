import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ favoritesCount }) {
  return (
    <header className={styles.navbar}>
      <NavLink className={styles.brand} to="/">🎮 Game Tracker</NavLink>
      <nav aria-label="Main navigation">
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/">Games</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/favorites">Favorites <span>{favoritesCount}</span></NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
