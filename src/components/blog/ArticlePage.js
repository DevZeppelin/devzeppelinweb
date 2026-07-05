import { RichText } from "prismic-reactjs";
import Seo from "@/components/Seo";
import Layout from "@/components/blog/Layout";
import SlugLayout from "@/components/blog/SlugLayout";
import { blogCategories } from "@/data/blogCategories";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo";

/**
 * Página de artículo individual del blog (datos de Prismic).
 * @param {string} tag - Categoría de la ruta, ej. "dev".
 */
export default function ArticlePage({ tag, article }) {
  if (!article?.data) {
    return (
      <Layout>
        <p className="glass mx-auto my-24 max-w-md rounded-xl p-8 text-center text-lightGray">
          No encontramos este artículo. 🛸
        </p>
      </Layout>
    );
  }

  const title = RichText.asText(article.data["blog-title"] || []);
  const description = RichText.asText(article.data["preview-info"] || []).slice(0, 160);
  const path = `/blog/${tag}/${article.uid}`;
  const category = blogCategories[tag];

  return (
    <div>
      <Seo
        title={`${title} | Moonwatcher Blog`}
        description={description}
        path={path}
        image={article.data.image?.url || "/blog/logo.png"}
        type="article"
        publishedTime={article.data["blog-date"] || undefined}
        modifiedTime={article.last_publication_date || undefined}
        jsonLd={[
          blogPostingJsonLd(article, tag),
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: category?.label || tag, path: `/blog/${tag}` },
            { name: title, path },
          ]),
        ]}
      />
      <Layout>
        <SlugLayout article={article} tag={tag} />
      </Layout>
    </div>
  );
}
