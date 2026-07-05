import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import CategoryPage from "@/components/blog/CategoryPage";

export default function Blog({ blogs }) {
  return <CategoryPage category="blog" blogs={blogs} />;
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["blog"])
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}
