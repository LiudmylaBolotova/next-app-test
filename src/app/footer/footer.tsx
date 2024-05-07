import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.sectionFooter}>
      <address className={styles.sectionAdress}>
        <Link href="mailto:email@example.com">email@example.com</Link>
        <Link href="tel:+1234567890">+1 (234) 567-890</Link>
      </address>

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
