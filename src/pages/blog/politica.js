import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import CategoryPage from "@/components/blog/CategoryPage";

export default function Politica({ blogs }) {
  return <CategoryPage category="politica" blogs={blogs} />;
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["politica"])
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}
