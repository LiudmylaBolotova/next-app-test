import {getArticleById} from '../../(server)/api';

interface ArticleName {
    id: number;
    name: string;
    text: string;
    
}


export default async function ArticlePage({params}: Params) {
const {articleName} = params;
const article = await getArticleById(articleName);

if (!article) {
    return <p>Errorrrrrrrrrrrrrrrrrrr</p>
  }

    return <>
    <p>{article.name}</p>
    <p>{article.text}</p>
    </>
}
