import { Client } from "@/lib/prismic";
import ArticlePage from "@/components/blog/ArticlePage";

export default function DevSlug({ article }) {
  return <ArticlePage tag="dev" article={article} />;
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.dev);

  return {
    props: {
      article: article,
    },
  };
}
