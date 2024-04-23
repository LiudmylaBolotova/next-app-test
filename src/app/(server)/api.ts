import lecturers from '../lecturers.json';
import Error from '../error';

export function getArticleByName(articleName: string) {
  const article = lecturers.find((x) => x.name === articleName);

  if (!article) {
    return "I am bad";
  }

  return article;


  }