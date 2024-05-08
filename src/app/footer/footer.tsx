import styles from "./footer.module.css";
import {AppLink} from "../app-link/app-link";

export default function Footer() {
  return (
    <div className={styles.sectionFooter}>
      <div className={styles.sectionAdress}>
        <h5>Write to us</h5>
        <AppLink href="mailto:email@example.com">email@example.com</AppLink>
        <h5>Call us</h5>
        <AppLink href="tel:+1234567890">+1 (234) 567-890</AppLink>
      </div>

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
