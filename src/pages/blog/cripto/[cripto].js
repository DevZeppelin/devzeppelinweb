import { Client } from "@/lib/prismic";
import ArticlePage from "@/components/blog/ArticlePage";

export default function CriptoSlug({ article }) {
  return <ArticlePage tag="cripto" article={article} />;
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.cripto);

  return {
    props: {
      article: article,
    },
  };
}
