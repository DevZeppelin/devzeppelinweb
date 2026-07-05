import { RichText } from "prismic-reactjs";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { formatDate } from "@/lib/seo";

const delays = ["d1", "d2", "d3", "d4", "d5"];

function IndexLinks({ blogs, tag }) {
  return (
    <ul className="space-y-3">
      {blogs.results.map((article) => (
        <li key={article.uid}>
          <Link href={`/blog/${article.tags?.[0] || tag}/${article.uid}`}>
            <span className="block cursor-pointer border-l-2 border-yellow/20 pl-3 text-sm leading-snug text-lightGray transition hover:border-yellow hover:text-yellow">
              {RichText.asText(article.data["blog-title"] || [])}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function BlogLayout({ tag, title, blogs, extra }) {
  const [listRef, listVisible] = useInView(0.05);

  const hasPosts = blogs?.results?.length > 0;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-10 md:px-8">
      <header className="mb-10 text-center">
        <h1
          className="mx-auto font-heading text-2xl font-bold md:text-4xl"
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
        <div className="cyber-line mx-auto mt-6 max-w-md" />
      </header>

      {/* Índice colapsable en móvil */}
      {hasPosts && (
        <details className="glass-dark mb-8 rounded-xl p-4 md:hidden">
          <summary className="cursor-pointer font-heading text-sm uppercase tracking-widest text-yellow">
            Índice
          </summary>
          <div className="mt-4">
            {extra && <div className="mb-4">{extra}</div>}
            <IndexLinks blogs={blogs} tag={tag} />
          </div>
        </details>
      )}

      <div className="md:grid md:grid-cols-[1fr_280px] md:gap-10">
        {/* Entradas */}
        <div ref={listRef} className="space-y-8">
          {!hasPosts && (
            <p className="glass rounded-xl p-8 text-center text-lightGray">
              Todavía no hay entradas en esta categoría. ¡Volvé pronto! 🚀
            </p>
          )}

          {hasPosts &&
            blogs.results.map((article, index) => {
              const articleTitle = RichText.asText(
                article.data["blog-title"] || []
              );
              const preview = RichText.asText(
                article.data["preview-info"] || []
              );
              const date = article.data["blog-date"];
              const href = `/blog/${tag}/${article.uid}`;

              return (
                <article
                  key={article.uid}
                  className={`reveal from-bottom ${delays[index % 5]} ${
                    listVisible ? "visible" : ""
                  } glass group overflow-hidden rounded-xl transition hover:-translate-y-1`}
                  style={{ transitionProperty: "opacity, transform, box-shadow" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 32px rgba(245, 210, 68, 0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <Link href={href}>
                    <div className="cursor-pointer">
                      {article.data.image?.url && (
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            src={article.data.image.url}
                            alt={articleTitle || "Imagen del artículo"}
                            fill
                            sizes="(max-width: 850px) 100vw, 700px"
                            className="object-cover transition-transform duration-400 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="space-y-3 p-6">
                        <h2 className="font-heading text-lg text-yellow transition group-hover:text-lowContrast md:text-xl">
                          {articleTitle}
                        </h2>
                        {date && (
                          <time
                            dateTime={date}
                            className="inline-block rounded-full border border-yellow/30 px-3 py-1 text-xs uppercase tracking-wide text-lightGray/80"
                          >
                            {formatDate(date)}
                          </time>
                        )}
                        {preview && (
                          <p className="clamp-3 leading-relaxed text-lightGray">
                            {preview}
                          </p>
                        )}
                        <span className="inline-block font-heading text-sm uppercase tracking-widest text-yellow">
                          Leer más →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
        </div>

        {/* Índice lateral (desktop) */}
        {hasPosts && (
          <aside className="hidden md:block">
            <div className="sticky top-36">
              {extra && <div className="mb-6">{extra}</div>}
              <nav
                aria-label="Índice de artículos"
                className="glass-dark rounded-xl p-5"
              >
                <h2 className="mb-4 font-heading text-sm uppercase tracking-widest text-yellow">
                  Índice
                </h2>
                <IndexLinks blogs={blogs} tag={tag} />
              </nav>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}
