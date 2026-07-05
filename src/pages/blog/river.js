import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import CategoryPage from "@/components/blog/CategoryPage";

export default function River({ blogs }) {
  return <CategoryPage category="river" blogs={blogs} />;
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["river"])
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}
