import styles from './lesson.module.css';

type LessonProps = {
  title: string;
  lecturer: string;
  description: string;
};

export function Lesson({title, lecturer, description}: LessonProps) {
  

  return (
    <div>
      
        <h2 className={styles.headerMiddle}>{title}</h2>  
    

      <h3 className={styles.headerSmall}>{lecturer}</h3>
      <p>{description}</p>
      
    </div>
  );
}
