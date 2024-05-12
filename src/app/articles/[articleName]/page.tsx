import { getArticleById } from "../../(server)/api";
import { AppLink } from '../../app-link/app-link';
import styles from './articleName.module.css';
import Image from "next/image";


export default async function ArticlePage({ params }: Params) {
  const { articleName } = params;
  const articleId: number = parseInt(articleName, 10);

  const article = await getArticleById(articleId);

  if (article) {
    return (
      <main className={styles.sectionLecturer}>
      <h2>{article.name}</h2>
      <div>
      <Image
          src={article.image}
          alt={`Foto of ${article.name}`}
          loading="eager"
          width={350}
          height={250}
         className={styles.articleImg}
        />
      </div>
        <p>{article.text}</p>
      </main>
    );
  } else {
    return (
      <div>
        <h2>There is no such lecturer on our list yet</h2>
        <div>
        <AppLink href="/">Go Home</AppLink>
        </div>
      </div>
    );
  }
}
