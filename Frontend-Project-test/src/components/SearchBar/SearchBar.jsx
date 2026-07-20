import { useEffect, useRef } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ value, onChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <label className={styles.searchBar}>
      <span>⌕</span>
      <input ref={inputRef} value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search by game title..." />
      {value && <button type="button" onClick={() => { onChange(""); inputRef.current?.focus(); }} aria-label="Clear search">×</button>}
    </label>
  );
}

export default SearchBar;
