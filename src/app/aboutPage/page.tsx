import lessons from "../lessons.json";
import AboutDetails from "../aboutDetails/aboutDetails";


export default function AboutPage() {
    return <ul>
    {lessons.lectures.map((lecture)=> {
      console.log(lecture.image)
     return <li key={lecture.id}>
       <AboutDetails title={lecture.title} lecturer={lecture.lecturer} image={lecture.image}/>
     </li>
    })}
   </ul>
}