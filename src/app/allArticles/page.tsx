import { getAllLecturers } from "@/app/(server)/api";
import { AppLink } from "../app-link/app-link";

const ARTICLES_PER_PAGE = 3;

export default function ArticlesPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {

  const page = Number.parseInt(searchParams['page'] ?? 1);
  const allArticles = getAllLecturers();

  const articles = allArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  const nextPageUrl = {
    search: new URLSearchParams({
      page: (page + 1).toString(),
    }).toString(),
  };

  return (
<>
<h1>All articles, page: {page}</h1>
    <ul>
      {articles.map((item) => {
        return (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.text}</p>
          </li>
        );
      })}
    </ul>
    <AppLink href={nextPageUrl}>Next</AppLink>
</>
  );
}
