import lecturers from './lecturers.json';
import articles from './lecturers.json';

export function getAllLecturers() {
  return lecturers;
}

export function getArticleById(articleName: number) {
  
  const article = articles.find((x) => x.id === articleName);
  
  if (!article) {
    return;
  }

  return article;

}