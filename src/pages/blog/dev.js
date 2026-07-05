import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import CategoryPage from "@/components/blog/CategoryPage";

export default function Dev({ blogs }) {
  return <CategoryPage category="dev" blogs={blogs} />;
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["dev"])
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}
