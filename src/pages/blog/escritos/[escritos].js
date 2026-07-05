import { Client } from "@/lib/prismic";
import ArticlePage from "@/components/blog/ArticlePage";

export default function EscritosSlug({ article }) {
  return <ArticlePage tag="escritos" article={article} />;
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.escritos);

  return {
    props: {
      article: article,
    },
  };
}
