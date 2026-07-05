import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import CategoryPage from "@/components/blog/CategoryPage";
import Link from "next/link";

export default function Adriel({ blogs }) {
  return (
    <CategoryPage category="adriel" blogs={blogs}>
      <Link href={"/blog/escritos"} passHref>
        <div className="flex justify-center pb-10">
          <button className="btn">← Volver a Escritos</button>
        </div>
      </Link>
    </CategoryPage>
  );
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["adriel"])
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}
