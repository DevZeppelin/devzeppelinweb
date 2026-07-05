import { Fragment, useState } from "react";
import Router from "next/router";
import Layout from "@/components/blog/Layout";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";
import { breadcrumbJsonLd } from "@/lib/seo";

export default function News({ news }) {
  const router = useRouter();

  const [value, setValue] = useState({
    text: "bitcoin",
    coolMsg: "",
  });

  const { text, coolMsg } = value;

  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push(`/blog/tecnoticiero/?searchTerm=${text}/#notice-position`);
  };

  const searchFormNews = () => (
    <Fragment>
      <div>
        <div className="my-10 text-center">
          <h1
            className="text-center font-heading text-2xl font-bold uppercase md:text-3xl"
            style={{
              background: "linear-gradient(90deg, #F5D244, #f0e870, #F5D244)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 14px rgba(245, 210, 68, 0.35))",
            }}
          >
            Buscador de noticias 🔎
          </h1>
          <p className="mt-2 text-lightGray/60">
            (Temporalmente en inglés)
            <br />
            Podés usar el traductor de tu navegador para traducirlas
            automáticamente
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 pb-6 text-center">
          <div className="flex flex-col">
            <div className="text-center">
              <p className="text-xl text-lightGray">
                ¿De qué tema querés tener <b className="text-yellow">noticias</b>?
              </p>
              <input
                className="m-6 w-44 rounded-md border border-yellow/40 bg-secundary p-2 text-white outline-none transition focus:border-yellow"
                type="text"
                value={text}
                onChange={handleChange("text")}
                aria-label="Tema a buscar"
              />
              <button className="btn">Buscar</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
  const searchFormCoolMsg = () => (
    <Fragment>
      <div className="text-center">
        <form onSubmit={handleSubmit} className="mx-6 space-y-4 pt-16">
          <p className="text-lightGray">
            &#9889; <b className="text-yellow">¡Esta página es súper rápida!</b>{" "}
            ¡Mirá este pequeño truco! Cuando escribís algo en este cuadro de
            texto se ve reflejado inmediatamente en el documento &#9889;
          </p>
          <div className="glow-text text-4xl text-yellow">{coolMsg}</div>
          <input
            type="text"
            placeholder="Escribí y mirá"
            onChange={handleChange("coolMsg")}
            aria-label="Texto de prueba"
            className="m-6 mx-auto w-full rounded-md border border-yellow/40 bg-secundary p-2 text-white outline-none transition focus:border-yellow md:w-60"
          />
        </form>
      </div>
    </Fragment>
  );

  return (
    <div>
      <Seo
        title="Tecnoticiero: buscador de noticias | Moonwatcher Blog"
        description="Buscador de noticias tech en tiempo real: escribí un tema y encontrá las últimas noticias al instante. Rápido, simple y gratis, por DevZeppelin."
        path="/blog/tecnoticiero"
        image="/blog/logo.png"
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: "Tecnoticiero", path: "/blog/tecnoticiero" },
          ]),
        ]}
      />
      <Layout>
        <div className="mx-auto w-5/6 md:w-2/3">
          {searchFormNews()}
          <div className="cyber-line" />

          <div className="glass mt-8 rounded-xl p-4 md:p-6">
            {(news || []).map((n, i) => (
              <p key={i} className="p-2 leading-relaxed">
                <a
                  href={n.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-bold text-yellow"
                >
                  {i + 1 + ". "}
                </a>
                <a
                  href={n.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lightGray transition hover:text-yellow"
                >
                  {n.title}
                </a>{" "}
                <span className="text-lightGray/50">
                  ({n.created_at.substring(8, 10)}/
                  {n.created_at.substring(5, 7)}/{n.created_at.substring(0, 4)})
                </span>
              </p>
            ))}
          </div>
          {searchFormCoolMsg()}

          <div className="flex justify-center py-8">
            <button className="btn" onClick={() => router.back()}>
              ← Volver
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

News.getInitialProps = async ({ query }) => {
  let news;
  try {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query.searchTerm || "bitcoin"
      }`
    );
    news = await res.json();
  } catch (err) {
    console.log("ERROR", err);
    news = [];
  }
  return {
    news: news.hits,
  };
};
