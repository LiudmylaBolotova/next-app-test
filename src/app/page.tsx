import { Lesson } from "./lesson";
import lessons from "./lessons.json";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.headerMain}>Available lectures</h1>
      <ol>
       {lessons.lectures.map((lecture)=> {
        return <li className={styles.item}key={lecture.id}>
          <Lesson title={lecture.title} lecturer={lecture.lecturer} description={lecture.description}/>
        </li>
       })}
      </ol>
    </main>
  );
}
