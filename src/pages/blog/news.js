import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import CategoryPage from "@/components/blog/CategoryPage";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";

export default function News({ blogs }) {
  return (
    <CategoryPage
      category="news"
      blogs={blogs}
      extra={
        <Link href="/blog/tecnoticiero">
          <div className="glass group flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-yellow transition hover:-translate-y-0.5">
            <span className="font-heading text-sm uppercase tracking-wide md:text-base">
              Buscador de Noticias
            </span>
            <BiSearchAlt className="text-2xl transition group-hover:scale-110" />
          </div>
        </Link>
      }
    />
  );
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["news"])
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}
