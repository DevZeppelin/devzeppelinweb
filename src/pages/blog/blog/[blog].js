import { Client } from "@/lib/prismic";
import ArticlePage from "@/components/blog/ArticlePage";

export default function ArticleSlug({ article }) {
  return <ArticlePage tag="blog" article={article} />;
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.blog);

  return {
    props: {
      article: article,
    },
  };
}
