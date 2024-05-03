import styles from "./lesson.module.css";

type LessonProps = {
  title: string;
  lecturer: string;
  description: string;
};

export function Lesson({ title, lecturer, description }: LessonProps) {
  return (
    <div>
      <h3 className={styles.headerMiddle}>{title}</h3>
      <h4 className={styles.headerSmall}>{lecturer}</h4>
      <p>{description}</p>
    </div>
  );
}
