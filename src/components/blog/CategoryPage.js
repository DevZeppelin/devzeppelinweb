import Seo from "@/components/Seo";
import Layout from "@/components/blog/Layout";
import BlogLayout from "@/components/blog/BlogLayout";
import { blogCategories } from "@/data/blogCategories";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";

/**
 * Página de categoría del blog.
 * @param {string} category - Key de blogCategories (define ruta y metadatos).
 * @param {string} [tag] - Tag usado para armar los links de artículos
 *                         (default: category).
 */
export default function CategoryPage({ category, tag, blogs, extra, children }) {
  const linkTag = tag || category;
  const meta = blogCategories[category] || {};
  const path = `/blog/${category}`;

  return (
    <div>
      <Seo
        title={`${meta.title || "Blog"} | Moonwatcher Blog`}
        description={meta.description}
        path={path}
        image="/blog/logo.png"
        jsonLd={[
          collectionPageJsonLd(linkTag, meta.title, blogs),
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: meta.label || category, path },
          ]),
        ]}
      />
      <Layout>
        <BlogLayout tag={linkTag} title={meta.title} blogs={blogs} extra={extra} />
        {children}
      </Layout>
    </div>
  );
}
