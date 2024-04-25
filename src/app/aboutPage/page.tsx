import lessons from "../lessons.json";
import AboutDetails from "../aboutDetails/aboutDetails";
import styles from "./aboutPage.module.css";

export default function AboutPage() {
  return (
    <div>
      <h1 className={styles.title}>Our teachers</h1>
    <ul className={styles.lecturersList}>
      {lessons.lectures.map((lecture) => {
        return (
          <li key={lecture.id} className={styles.lecturersItem}>
            <AboutDetails
              about={lecture.about}
              lecturer={lecture.lecturer}
              image={lecture.image}
            />
          </li>
        );
      })}
    </ul>
    </div>
  );
}
