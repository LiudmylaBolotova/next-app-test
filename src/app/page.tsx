import { Lesson } from "./lesson";
import lessons from "./lessons.json";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
       {lessons.lectures.map((lecture)=> {
        return <li key={lecture.id}>
          <Lesson title={lecture.title} lecturer={lecture.lecturer} description={lecture.description}/>
        </li>
       })}
      </ul>
    </main>
  );
}
