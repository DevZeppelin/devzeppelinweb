import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import CategoryPage from "@/components/blog/CategoryPage";
import Link from "next/link";
import { FiUserPlus } from "react-icons/fi";

export default function Escritos({ blogs }) {
  return (
    <CategoryPage
      category="escritos"
      blogs={blogs}
      extra={
        <Link href="/blog/adriel" passHref>
          <div className="glass group flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-yellow transition hover:-translate-y-0.5">
            <FiUserPlus className="text-xl transition group-hover:scale-110" />
            <span className="font-heading text-sm uppercase tracking-wide md:text-base">
              Escritos de Adriel
            </span>
          </div>
        </Link>
      }
    />
  );
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["escritos"])
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}
