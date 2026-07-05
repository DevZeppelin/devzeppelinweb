import { RichText } from "prismic-reactjs";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useInView } from "@/hooks/useInView";
import { formatDate } from "@/lib/seo";
import { blogCategories } from "@/data/blogCategories";

export default function SlugLayout({ article, tag }) {
  const router = useRouter();
  const [headerRef, headerVisible] = useInView(0.05);

  const title = RichText.asText(article.data["blog-title"] || []);
  const date = article.data["blog-date"];
  const image = article.data.image;
  const category = blogCategories[tag];

  return (
    <article className="mx-auto w-full max-w-3xl px-4 pt-10 md:px-0">
      {tag && category && (
        <nav aria-label="breadcrumb" className="mb-8 text-sm text-lightGray/60">
          <Link href="/blog">
            <span className="cursor-pointer transition hover:text-yellow">
              Blog
            </span>
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/blog/${tag}`}>
            <span className="cursor-pointer transition hover:text-yellow">
              {category.label}
            </span>
          </Link>
          <span className="mx-2">/</span>
          <span className="text-lightGray/80">{title}</span>
        </nav>
      )}

      <header
        ref={headerRef}
        className={`reveal from-bottom ${headerVisible ? "visible" : ""} mb-8 text-center`}
      >
        <h1
          className="font-heading text-2xl font-bold leading-snug md:text-4xl"
          style={{
            background: "linear-gradient(90deg, #F5D244, #f0e870, #F5D244)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 14px rgba(245, 210, 68, 0.35))",
          }}
        >
          {title}
        </h1>

        {date && (
          <time
            dateTime={date}
            className="mt-6 inline-block rounded-full border border-yellow/30 px-4 py-1 text-sm text-lightGray/80"
          >
            Publicado el {formatDate(date)}
          </time>
        )}
      </header>

      {image?.url && (
        <figure className="mb-10">
          <Image
            src={image.url}
            alt={image.alt || title || "Imagen del artículo"}
            width={image.dimensions?.width || 1200}
            height={image.dimensions?.height || 675}
            priority
            className="mx-auto rounded-xl border border-yellow/20"
          />
        </figure>
      )}

      <div className="prose-cyber">
        {RichText.render(article.data["blog-rich-text"])}
      </div>

      <div className="cyber-line mx-auto mt-14 max-w-md" />

      <div className="flex justify-center py-10">
        <button className="btn" onClick={() => router.back()}>
          ← Volver
        </button>
      </div>
    </article>
  );
}
