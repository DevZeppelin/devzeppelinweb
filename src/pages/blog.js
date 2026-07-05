import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";
import Layout from "@/components/blog/Layout";
import { useInView } from "@/hooks/useInView";
import { blogJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { ImPencil2, ImBook } from "react-icons/im";
import { GoRadioTower } from "react-icons/go";
import { FaBtc } from "react-icons/fa";

const featured = [
  {
    href: "/blog/dev",
    Icon: ImPencil2,
    text: "Blog de programación donde comparto mi aprendizaje y contenido relevante",
    button: "Blog Dev",
    delay: "d1",
  },
  {
    href: "/blog/news",
    Icon: GoRadioTower,
    text: "Selección de noticias tech, y además un simple y potente buscador de noticias",
    button: "Tecnoticiero",
    delay: "d2",
  },
  {
    href: "/blog/cripto",
    Icon: FaBtc,
    text: "Blog acerca de economía, Bitcoin y Criptomonedas",
    button: "Criptomonedas",
    delay: "d3",
  },
  {
    href: "/blog/escritos",
    Icon: ImBook,
    text: "Blog de escritos divertidos (o no) escritos por mí y por mi hermano Adriel",
    button: "Escritos",
    delay: "d4",
  },
];

export default function Home() {
  const [heroRef, heroVisible] = useInView(0.1);
  const [cardsRef, cardsVisible] = useInView(0.1);

  return (
    <div>
      <Seo
        title="Moonwatcher Blog | Programación, Cripto, Noticias y Escritos"
        description="El blog de Gino Pietrobon (DevZeppelin): programación, criptomonedas, noticias tech, escritos, rock y más. Contenido en español desde Mendoza, Argentina."
        path="/blog"
        image="/blog/logo.png"
        jsonLd={[
          blogJsonLd(),
          breadcrumbJsonLd([{ name: "Blog", path: "/blog" }]),
        ]}
      />
      <Layout>
        <section className="hero-gradient relative overflow-hidden">
          <div className="scan-sweep" />
          <div className="cyber-grid-bg mx-auto flex max-w-6xl flex-wrap-reverse items-center justify-center gap-8 px-4 py-14 md:flex-nowrap md:px-8 md:py-20">
            <div
              ref={heroRef}
              className={`reveal from-left ${heroVisible ? "visible" : ""} max-w-xl text-center`}
            >
              <h1 className="font-heading text-3xl font-bold uppercase md:text-4xl">
                ¡Bienvenido a{" "}
                <span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(90deg, #F5D244, #f0e870, #F5D244)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 14px rgba(245, 210, 68, 0.4))",
                  }}
                >
                  moonblog
                </span>
                !
              </h1>
              <h2 className="mt-6 font-body text-lg font-normal normal-case text-lightGray md:text-xl">
                Soy <b className="text-yellow">Gino</b> de DevZeppelin.com.ar y
                éste es mi Blog, donde encontrarás cosas como:
              </h2>
            </div>

            <div
              className={`reveal from-right ${heroVisible ? "visible" : ""} flex items-center justify-center`}
            >
              <Image
                src="/blog/logo.png"
                alt="Logo del mono de moonblog, el blog de moonwatcher"
                width={220}
                height={220}
                priority
                className="logo-spin"
              />
            </div>
          </div>
        </section>

        <section
          ref={cardsRef}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-2 md:px-8"
        >
          {featured.map(({ href, Icon, text, button, delay }) => (
            <Link key={href} href={href}>
              <div
                className={`reveal from-bottom ${delay} ${
                  cardsVisible ? "visible" : ""
                } glass group flex h-full cursor-pointer flex-col items-center space-y-4 rounded-xl p-8 text-center transition hover:-translate-y-1.5`}
                style={{ transitionProperty: "opacity, transform, box-shadow" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 32px rgba(245, 210, 68, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Icon
                  className="h-12 w-12 text-yellow transition group-hover:scale-110"
                  aria-hidden="true"
                />
                <p className="flex-1 leading-relaxed text-lightGray">{text}</p>
                <span className="btn">{button}</span>
              </div>
            </Link>
          ))}
        </section>
      </Layout>
    </div>
  );
}
