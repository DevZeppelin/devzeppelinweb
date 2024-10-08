/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Layout from "../components/blog/Layout";
import Link from "next/link";
import { ImPencil2, ImBook } from "react-icons/im";
import { GoRadioTower } from "react-icons/go";
import { FaBtc } from "react-icons/fa";

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher baby!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Moonblog, Dev Zeppelin Blog, Moonwatcher Blog, Tecnoticiero, Criptomonedas, Bitcoin, Escritos, Blog de programación (dev), blog de política, rock argentino, Club Atlético River Plate"
        />
        <meta
          name="keywords"
          content="moonblog, dev zeppelin blog, moonwatcher, blog, next.js, react.js, javascript, jam stack, prismic, dev, programación, criptomonedas, tech news, noticias, articles, articulos, escritos"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout>
        <div className="flex mb-12 flex-wrap-reverse md:flex-wrap mx-auto my-auto mt-12 md:mt-0">
          <div className="flex flex-col w-4/5 md:w-1/2 mt-6 ml-8 md:ml-16 md:mt-4">
            <div className="space-y-4 text-center">
              <div className=" pt-8 space-y-5">
                <h1 className=" w-full md:w-2/3 text-center text-2xl uppercase font-bold opacity-80 ml-2 md:ml-24">
                  ¡ Bienvenido a{" "}
                  <span className="text-lowContrastBlog border-black">
                    moonblog
                  </span>{" "}
                  !
                </h1>
                <h2 className="text-xl pb-6">
                  Soy <b>Gino</b> de DevZeppelin.com.ar y éste es mi Blog, donde
                  encontrarás cosas como:
                </h2>
                <div className="md:grid grid-cols-2 gap-2">
                  <Link href="/blog/dev" passHref>
                    <div className="indexItem1 space-y-3 p-3 pb-4 mb-4 md:pb-4 rounded-lg cursor-pointer text-primaryBlog">
                      <ImPencil2 className="mx-auto w-12 md:w-8  h-12 md:h-8  " />
                      <p>
                        Blog de <i>programación</i> donde comparto mi
                        aprendizaje y contenido relevante
                      </p>
                      <button className="border-2 border-primaryBlog text-primaryBlog py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:bg-indigo-400">
                        Blog Dev
                      </button>
                    </div>
                  </Link>

                  <Link href="/blog/news" passHref>
                    <div className="indexItem2 space-y-3 p-3 pb-4 mb-4 md:pb-4 rounded-lg cursor-pointer text-primaryBlog">
                      <GoRadioTower className="mx-auto w-12 md:w-8  h-12 md:h-8 " />
                      <p>
                        Selección de noticias <i>tech</i>, y además un simple y{" "}
                        <i>potente buscador</i> de noticias
                      </p>
                      <button className="border-2 border-primaryBlog text-primaryBlog py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:bg-red-400">
                        Tecnoticiero
                      </button>
                    </div>
                  </Link>

                  <Link href="/blog/cripto" passHref>
                    <div className="indexItem3 space-y-3 p-3 pb-4 mb-4 md:pb-4 rounded-lg cursor-pointer text-primaryBlog">
                      <FaBtc className="mx-auto w-12 md:w-8  h-12 md:h-8 " />
                      <p>
                        Blog acerca de economía, <i>Bitcoin</i> y{" "}
                        <i>Criptomonedas</i>:
                      </p>
                      <button className="border-2 border-primaryBlog text-primaryBlog py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:bg-green-400">
                        Criptomonedas
                      </button>
                    </div>
                  </Link>
                  <Link href="/blog/escritos" passHref>
                    <div className="indexItem4 space-y-3 p-3 pb-4 mb-4 md:pb-4 rounded-lg cursor-pointer text-primaryBlog">
                      <ImBook className="mx-auto w-12 md:w-8  h-12 md:h-8 " />
                      <p>
                        Blog de escritos divertidos (o no) escritos por mi y por
                        mi hermano Adriel.
                      </p>
                      <button className="border-2 border-primaryBlog text-primaryBlog py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:bg-blue-400">
                        Escritos
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 flex flex-auto items-center justify-center align-middle mr-6">
            <img
              src="/blog/logo.png"
              alt="monkey icon logo moonblog of moonwatcher"
              width="240"
              height="240"
            />
          </div>
        </div>
        <style jsx>{`
          .indexItem1:hover {
            border: solid 1px #c01cda;
            box-shadow: 0px 0px 10px #78088a;
            background-color: #f0cef9;
            color: #78088a;
          }
          .indexItem2:hover {
            border: solid 1px #ff6609;
            box-shadow: 0px 0px 10px #b84906;
            background-color: #ffdeb2;
            color: #b84906;
          }
          .indexItem3:hover {
            border: solid 1px #0e5203;
            box-shadow: 0px 0px 10px #2edc12;
            background-color: #a6ffb6;
            color: #0e5203;
          }
          .indexItem4:hover {
            border: solid 1px #13a89e;
            box-shadow: 0px 0px 10px #0063bf;
            background-color: #a0eeff;
            color: #0063bf;
          }

          img:hover {
            transform: rotate(-360deg);
            transition: 1s;
          }
        `}</style>
      </Layout>
    </div>
  );
}
