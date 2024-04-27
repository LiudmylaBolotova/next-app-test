import {getArticleById} from '../../(server)/api';


export default async function ArticlePage({params}: Params) {
const {articleName} = params;
const articleId: number = parseInt(articleName, 10);

const article = await getArticleById(articleId);

if (!article) {
    return <p>Errorrrrrrrrrrrrrrrrrrr</p>
  }

    return <>
    <p>{article.name}</p>
    <p>{article.text}</p>
    </>
}
