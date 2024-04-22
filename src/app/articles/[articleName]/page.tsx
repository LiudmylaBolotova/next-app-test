import lessons from "../../lessons.json";
import { getArticleByName } from "@/app/(server)/api";


export default async function ArticlePage({params}: Params) {

  const {articleName} = params;

 

  const obj = await getArticleByName(articleName);

  return obj;
}



