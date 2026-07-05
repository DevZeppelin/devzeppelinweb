import { Client } from "@/lib/prismic";
import ArticlePage from "@/components/blog/ArticlePage";

export default function RiverSlug({ article }) {
  return <ArticlePage tag="river" article={article} />;
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.river);

  return {
    props: {
      article: article,
    },
  };
}
