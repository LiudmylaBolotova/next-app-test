import lessons from "./lessons.json";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
       {lessons.lectures.map((lecture)=> {
        return <li key={lecture.id}>
          <h2>{lecture.title}</h2>
          <h3>{lecture.lecturer}</h3>
          <p>{lecture.description}</p>
        </li>
       })}
      </ul>
    </main>
  );
}
