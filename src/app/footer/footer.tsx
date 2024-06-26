import lecturer from "../../../public/Images/lecturer.jpg";
import Image from "next/image";
import styles from "./footer.module.css";

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
        <a href="mailto:email@example.com" target="_blank" rel="noopener noreferrer">email@example.com</a>
        <h5>Call us</h5>
        <a href="tel:+1234567890">+1 (234) 567-890</a>
      </div>

      <div className={styles.sectionIcons}>
        <div className={styles.iconLink}>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <svg width="26" height="26" className={styles.iconLinkedin}>
              <use href="/assets/icons.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
        <div className={styles.iconLink}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <svg width="26" height="26" className={styles.iconInstagram}>
              <use href="/assets/icons.svg#icon-instagram"></use>
            </svg>
          </a>
        </div>
        <div className={styles.iconLink}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <svg width="26" height="26" className={styles.iconFacebook}>
              <use href="/assets/icons.svg#icon-facebook2"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
