import lecturer from "../../../public/Images/lecturer.jpg";
import Image from "next/image";
import styles from "./footer.module.css";
import { AppLink } from "../app-link/app-link";

export default function Footer() {
  return (
    <div className={styles.sectionFooter}>
      <div>
        <Image
          src={lecturer}
          alt={"Logo"}
          loading="eager"
          width={80}
          height={50}
          className={styles.logo}
        />
      </div>
      <div className={styles.sectionAdress}>
        <h5>Write to us</h5>
        <AppLink href="mailto:email@example.com">email@example.com</AppLink>
        <h5>Call us</h5>
        <AppLink href="tel:+1234567890">+1 (234) 567-890</AppLink>
      </div>

      <div className={styles.sectionIcons}>
        <div className={styles.iconLink}>
          <AppLink href="https://www.linkedin.com">
            <svg width="26" height="26" className={styles.iconLinkedin}>
              <use href="/assets/icons.svg#icon-linkedin"></use>
            </svg>
          </AppLink>
        </div>
        <div className={styles.iconLink}>
          <AppLink href="https://www.instagram.com">
            <svg width="26" height="26" className={styles.iconInstagram}>
              <use href="/assets/icons.svg#icon-instagram"></use>
            </svg>
          </AppLink>
        </div>
        <div className={styles.iconLink}>
          <AppLink href="https://www.facebook.com">
            <svg width="26" height="26" className={styles.iconFacebook}>
              <use href="/assets/icons.svg#icon-facebook2"></use>
            </svg>
          </AppLink>
        </div>
      </div>
    </div>
  );
}
