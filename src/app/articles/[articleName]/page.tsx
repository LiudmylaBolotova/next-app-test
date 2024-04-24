
import { getAllLecturers } from "@/app/(server)/api";


export default async function ArticlePage() {


 

  const obj = await getAllLecturers();
  

  return (
    <ul>
      {obj.map((item) => {
        return (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.text}</p>
          </li>
        )
      })}
    </ul>
  )
}



