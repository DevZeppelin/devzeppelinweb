import Prismic from "prismic-javascript";
import { Client } from "@/lib/prismic";
import CategoryPage from "@/components/blog/CategoryPage";
import { AiFillFacebook } from "react-icons/ai";

export default function Rock({ blogs }) {
  return (
    <CategoryPage
      category="rock"
      blogs={blogs}
      extra={
        <a
          href="https://www.facebook.com/almarockera100"
          target="_blank"
          rel="noreferrer"
        >
          <div className="glass group flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-yellow transition hover:-translate-y-0.5">
            <span className="font-heading text-sm uppercase tracking-wide md:text-base">
              Facebook Oficial
            </span>
            <AiFillFacebook className="text-2xl transition group-hover:scale-110" />
          </div>
        </a>
      }
    />
  );
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["rock"])
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}
