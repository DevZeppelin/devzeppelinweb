import { Client } from "@/lib/prismic";
import ArticlePage from "@/components/blog/ArticlePage";

export default function RockSlug({ article }) {
  return <ArticlePage tag="rock" article={article} />;
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.rock);

  return {
    props: {
      article: article,
    },
  };
}
