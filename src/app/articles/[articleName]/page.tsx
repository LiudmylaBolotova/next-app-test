import lessons from "../../lessons.json";
import { getArticleByName } from "@/app/(server)/api";


export default function ArticlePage({params}: Params) {

  const {articleName} = params;

 

  const obj = getArticleByName(articleName);
  

  console.log(obj)
}



