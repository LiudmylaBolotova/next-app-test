import Image from "next/image";
import styles from "./aboutDetails.module.css";

type DetailsProps = {
  about: string;
  lecturer: string;
  image: string;
};

export default function AboutDetails({ about, lecturer, image }: DetailsProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.lecturerName}>{lecturer}</h2>
      <div className={styles.item}>
        <Image
          src={image}
          alt={`Foto of ${lecturer}`}
          loading="eager"
          width={350}
          height={200}
          className={styles.img}
        />
        <p>{about}</p>
      </div>
    </div>
  );
}
