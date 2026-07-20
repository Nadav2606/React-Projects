import { Link } from "react-router-dom";
import styles from "../Pages.module.css";

function NotFoundPage() {
  return <main className={`${styles.page} ${styles.innerPage}`}><h1>404</h1><p className={styles.intro}>This page does not exist.</p><Link className={styles.primaryButton} to="/">Back home</Link></main>;
}

export default NotFoundPage;
