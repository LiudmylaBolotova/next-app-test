import lecturers from './lecturers.json';
import articles from './lecturers.json';

export function getAllLecturers() {
  return lecturers;
}

export function getArticleById(articleName: string) {
  const article = articles.find((x) => x.name === articleName);
  
  if (!article) {
    return;
  }

  return article;

}