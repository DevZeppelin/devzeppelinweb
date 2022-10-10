import Link from "next/link";
import Head from "next/head";
import Networks from "../components/alma/Networks";
import RenzoFrase from "../components/alma/RenzoFrase";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alma Rockera 100%</title>
        <meta
          name="description"
          content="Almarockera 100, radio, rock, renzo frases, radio rockera, led zeppelin, creedence, la renga, diversion, juegos, programacion"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <span>
          <Networks />
          <Link href="/" passHref>
            <div className="text-center font-bold orange cursor-pointer">
              {" "}
              Volver a DevZeppelin.ar
            </div>
          </Link>
        </span>
        <div className="text-center m-6 mt-24">
          <h1 className="text-6xl font-extrabold pb-12">AlmaRockera 100%</h1>
        </div>

        <div className="p-12 text-center mt-32  text-white bg-black to-dark">
          <h3 className="text-2xl font-bold">
            ¿Estás listo para andar el sendero del rock?
          </h3>
        </div>
        <div className="flex justify-center mx-16 space-x-3 font-bold orange">
          <a href="#radio">Radio</a>   <a href="#articulos">Artículos</a>  <a href="#renzo">RenzoFrases</a>
        </div>
      </main>

      <section id="radio">
        <h3 className="text-3xl m-8 text-center font-extrabold text-black pb-12">
          Radio
        </h3>
        <div className="text-center p-16 m-16 bg-white border-2 rounded-3xl">
          <p className="text-2xl font-bold">
            🔧🔨🛠⚙ Estamos trabajando en ello 🔧🔨🛠⚙
          </p>
        </div>
      </section>

      <section id="articulos" className="mx-10">
        <h3 className="text-3xl m-8 text-center font-extrabold text-black pb-12">
          Enlaces a nuestra Facebook Page
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falmarockera100%2Fposts%2Fpfbid02ji8d1dsR7ArhWQjzobEbpWtkApmFava3ZNLh7QV5WP8eNiYtMvEkdodpceDnCNppl&show_text=true&width=500"
            width="500"
            height="507"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falmarockera100%2Fposts%2Fpfbid02YdkuvJsxbfSdpgD37YrvXq1rmEjJFji4raVWPd5KKkLH67kpJDM7kjd1gDNJAfLWl&show_text=true&width=500"
            width="500"
            height="507"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falmarockera100%2Fposts%2Fpfbid04B3mjSbjZUrxHwm4Sp7JpJTCmRbsqTPaJdWKRviurAd6nuL54vChogVVBt3dBv6ol&show_text=true&width=500"
            width="500"
            height="507"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falmarockera100%2Fposts%2Fpfbid02azvgA6TzUAeg1UHmk1UQgVKur9bHsfAHeJbLAdCmp4385EKLEXGB3r3Vysgtwd51l&show_text=true&width=500"
            width="500"
            height="507"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>

      <section id="renzo">
        <h3 className="text-3xl m-8 text-center font-extrabold text-black">
          Renzo Frases
        </h3>
        <RenzoFrase />
      </section>

      <div className="m-12 text-center mt-16 bg-black p-4 rounded-3xl">
        <h3 className="text-2xl font-bold ">¡Contactanos! 🤘🤘🤘</h3>
        <Networks />
      </div>

      <footer className="text-center bg-black text-orange-500 mt-12">
        <a
          href="https://devzeppelin.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Moonwatcher 🐵
        </a>
      </footer>

      <style global jsx>{`
        html {
          background-image: -webkit-linear-gradient(
            top,
            #000 0%,
            #ff4301 50%,
            #e45826 100%
          );
          scroll-behavior: smooth;
        }
        .orange,
        h1,
        h2,
        h3 {
          color: #ff4301;
        }

        body {
          padding: 0;
          margin: 0;
          font-family: Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        h2 {
          font-family: "Staatliches", cursive;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
