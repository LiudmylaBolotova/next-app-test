import { getArticleById } from "../../(server)/api";
import { AppLink } from '../../app-link/app-link';
import Image from "next/image";

export default async function ArticlePage({ params }: Params) {
  const { articleName } = params;
  const articleId: number = parseInt(articleName, 10);

  const article = await getArticleById(articleId);

  if (article) {
    return (
      <div>
      <div>
      <Image
          src={article.image}
          alt={`Foto of ${article.name}`}
          loading="eager"
          width={350}
          height={200}
         
        />
      </div>
        <p>{article.name}</p>
        <p>{article.text}</p>
      </div>
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
