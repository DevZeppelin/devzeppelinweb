import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import CategoryPage from "@/components/blog/CategoryPage";

export default function Cripto({ blogs }) {
  return <CategoryPage category="cripto" blogs={blogs} />;
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["cripto"])
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}
