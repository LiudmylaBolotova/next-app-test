// import { getArticleById } from '@/app/(server)/api';

import lessons from "../../lessons.json";

export function getArticleById(id: number) {
  const article = lessons.lectures.find(
    (lecture) => lecture.id === id
  );

  if (!article) {
    throw new Error("Error ONE");
  }

 return article;
}

export default async function ArticlePage({ params }: Params) {
    const { id } = params;
    const article = await getArticleById(id);

    if (!article) {
        throw new Error("Error!!!!");
      }
  
    console.log(article)
  }