import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.sectionFooter}>
      <p>Write to us!</p>
      <div className={styles.sectionIcons}>
        <svg width="26" height="26">
          <use href="/assets/icons.svg#icon-linkedin"></use>
        </svg>

        <svg width="26" height="26">
          <use href="/assets/icons.svg#icon-instagram"></use>
        </svg>

        <svg width="26" height="26">
          <use href="/assets/icons.svg#icon-facebook2"></use>
        </svg>
      </div>
    </div>
  );
}
