import { Client } from "@/lib/prismic";
import ArticlePage from "@/components/blog/ArticlePage";

export default function NewsSlug({ article }) {
  return <ArticlePage tag="news" article={article} />;
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.news);

  return {
    props: {
      article: article,
    },
  };
}
