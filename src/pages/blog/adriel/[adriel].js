import { Client } from "@/lib/prismic";
import ArticlePage from "@/components/blog/ArticlePage";

export default function AdrielSlug({ article }) {
  return <ArticlePage tag="adriel" article={article} />;
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.adriel);

  return {
    props: {
      article: article,
    },
  };
}
