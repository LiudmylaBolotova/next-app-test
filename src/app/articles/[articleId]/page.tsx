import lessons from "../../lessons.json";

// interface Lecture {
//   id: number;
//   description: string;
//   text: string;
// }

export default async function ArticlePage({ params }: Params) {
  const { articleId } = params;
  // const lecturerId = await getArticleById(articleId);
console.log(articleId)
  // return lecturerId;

  
}

export function getArticleById(lecturerId: number) {
  const lecturerObj = lessons.lectures.find((lecture) => lecture.id === lecturerId);
  console.log(lecturerObj)
  // return lecturerObj;
}

