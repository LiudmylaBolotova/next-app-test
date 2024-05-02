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
<main>
<h2>All articles, page: {page}</h2>
    <ul>
      {articles.map((item) => {
        return (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </li>
        );
      })}
    </ul>
    <AppLink href={nextPageUrl}>Next</AppLink>
</main>
  );
}
