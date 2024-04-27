import { getArticleById } from "../../(server)/api";
import { AppLink } from '../../app-link/app-link';

export default async function ArticlePage({ params }: Params) {
  const { articleName } = params;
  const articleId: number = parseInt(articleName, 10);

  const article = await getArticleById(articleId);

  if (article) {
    return (
      <>
        <p>{article.name}</p>
        <p>{article.text}</p>
      </>
    );
  } else {
    return (
      <div>
        <h1>There is no such lecturer on our list yet</h1>
        <AppLink href="/">Go Home</AppLink>
      </div>
    );
  }
}
