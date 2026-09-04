import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/seo";

import { AiOutlineBuild } from "react-icons/ai";
import { FiRefreshCw, FiCpu } from "react-icons/fi";
import { BsCameraVideo } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { IoMdAppstore } from "react-icons/io";

/**
 * /servicios — Qué hace Dev Zeppelin y qué no.
 * Basado en la guía comercial interna (/vendedor): seis frentes de trabajo,
 * cada uno con lo que incluye y lo que queda afuera para no generar
 * expectativas equivocadas.
 */

const servicios = [
  {
    icon: <AiOutlineBuild />,
    tag: "Presencia digital",
    title: "Páginas web",
    para: "Para presentar tu negocio, mostrar servicios o productos, generar confianza y facilitar consultas.",
    incluye: [
      "Webs adaptadas al celular, con foco en claridad y velocidad",
      "Optimización básica para buscadores y recorrido hacia el contacto",
      "Según el proyecto: catálogos y funciones a medida",
    ],
    afuera: [
      "Tiendas con pagos, paneles editables, correos corporativos o áreas de usuarios se cotizan aparte",
      "No garantizamos posiciones en Google",
    ],
  },
  {
    icon: <FiRefreshCw />,
    tag: "Continuidad",
    title: "Redes Activas",
    para: "Para mantener Instagram y Facebook presentes y prolijos sin encargarte de todo el contenido.",
    incluye: [
      "Inicio: refresh de logo, grid y destacadas, historias y publicaciones iniciales",
      "Continuidad: historias con contenido rotativo y una renovación mensual definida",
    ],
    afuera: [
      "Diseños nuevos todos los días: la presencia diaria funciona con rotación",
      "Responder mensajes, atender ventas, campañas pagas o filmación en el local no van incluidos por defecto",
    ],
  },
  {
    icon: <BsCameraVideo />,
    tag: "Contenido",
    title: "Reels personalizados",
    para: "Para mostrar un producto, explicar un servicio o comunicar una idea de forma breve y atractiva.",
    incluye: [
      "Edición de tus fotos y videos, o escenas con IA / animación",
      "Adaptados a tu marca y a un objetivo concreto",
      "Guion, duración, formato y revisiones acordadas de antemano",
    ],
    afuera: ["No prometemos viralidad ni una cantidad de ventas"],
  },
  {
    icon: <FiCpu />,
    tag: "Eficiencia",
    title: "Sistemas y automatizaciones",
    para: "Para ordenar información, reducir tareas repetitivas y gestionar mejor el trabajo.",
    incluye: [
      "Turnos y reservas, seguimiento de pedidos, registros, reportes",
      "Procesamiento de planillas y automatización de tareas administrativas",
      "Evaluación previa de funciones, integraciones, costos de terceros y mantenimiento",
    ],
    afuera: [
      "No comprometemos una solución antes de ver un ejemplo real del proceso y el resultado esperado",
    ],
  },
  {
    icon: <MdSchool />,
    tag: "Aprendizaje",
    title: "Capacitaciones tecnológicas",
    para: "Para que tu equipo aprenda a usar mejor sus herramientas y las aplique al trabajo cotidiano.",
    incluye: [
      "Temario a medida: IA, planillas y reportes, productividad y herramientas colaborativas",
      "Objetivo práctico, ejercicios y materiales acordados",
    ],
    afuera: [
      "No ofrecemos certificaciones ni acompañamiento posterior salvo que se pacte",
    ],
  },
  {
    icon: <IoMdAppstore />,
    tag: "Productos digitales",
    title: "Apps y ebook",
    para: "Apps propias que sirven de muestra de lo que podemos desarrollar, y el ebook «Tecnología para no técnicos».",
    incluye: [
      "Ejemplos reales de apps construidas para inspirar tu proyecto",
      "Ebook para acercar conceptos digitales a personas sin formación técnica",
    ],
    afuera: [
      "Una app de muestra no implica que todas sus adaptaciones estén incluidas",
      "El ebook no equivale a una capacitación personalizada",
    ],
  },
];

const Servicios = () => {
  return (
    <div>
      <Seo
        title="Servicios | Dev Zeppelin"
        description="Páginas web, Redes Activas, reels, sistemas y automatizaciones, capacitaciones y productos digitales. Qué incluye cada servicio y qué queda afuera."
        path="/servicios"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
          ]),
        ]}
      />
      <Layout classServicios={"bg-secundary text-yellow"}>
        <div className="bg-hero-pages bg-cover text-center py-20 md:py-40 px-4">
          <h1 className="text-4xl font-bold text-yellow uppercase textDark">
            Servicios
          </h1>
          <p className="text-lightGray max-w-2xl mx-auto mt-5 leading-relaxed">
            Vendemos una solución a una necesidad concreta: mostrar mejor tu
            negocio, mantener tus redes, ordenar un proceso o enseñarle a tu
            equipo a usar una herramienta. Esto es lo que hacemos y lo que no.
          </p>
          <div className="mt-8">
            <Link href="/diagnostico">
              <button className="btn">Hacé tu diagnóstico</button>
            </Link>
          </div>
        </div>

        <section className="max-w-5xl mx-auto px-4 md:px-6 py-14 md:py-20 space-y-6">
          {servicios.map((s) => (
            <article
              key={s.title}
              className="glass rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6"
            >
              <div
                className="text-5xl text-yellow"
                style={{ filter: "drop-shadow(0 0 8px rgba(245,210,68,0.4))" }}
              >
                {s.icon}
              </div>
              <div>
                <p
                  className="text-xs tracking-widest text-yellow uppercase mb-1"
                  style={{ fontFamily: "Orbitron, sans-serif", opacity: 0.7 }}
                >
                  {s.tag}
                </p>
                <h2 className="text-2xl font-bold text-yellow mb-2">{s.title}</h2>
                <p className="text-lightGray leading-relaxed mb-5">{s.para}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <p className="text-yellow font-bold text-sm uppercase tracking-wide mb-2">
                      Qué incluye
                    </p>
                    <ul className="space-y-1.5 text-lightGray text-sm leading-relaxed list-disc pl-5">
                      {s.incluye.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray font-bold text-sm uppercase tracking-wide mb-2">
                      Qué queda afuera
                    </p>
                    <ul className="space-y-1.5 text-gray text-sm leading-relaxed list-disc pl-5">
                      {s.afuera.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div
            className="rounded-2xl p-6 md:p-10 border border-yellow/30"
            style={{ background: "rgba(245,210,68,0.06)" }}
          >
            <h2 className="text-xl font-bold text-yellow mb-3">
              Lo que no hacemos
            </h2>
            <ul className="space-y-2 text-lightGray leading-relaxed list-disc pl-5">
              <li>No garantizamos ventas ni posiciones en buscadores.</li>
              <li>
                No prometemos plazos ni funciones sin evaluar antes la viabilidad
                del proyecto.
              </li>
              <li>
                No trabajamos con mensajes genéricos: cada propuesta responde a
                algo puntual de tu negocio.
              </li>
            </ul>
            <p className="text-lightGray mt-5">
              ¿No sabés por dónde empezar?{" "}
              <Link href="/diagnostico">
                <span className="text-yellow underline underline-offset-4 cursor-pointer">
                  Completá el diagnóstico
                </span>
              </Link>{" "}
              y te sugerimos una propuesta.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Servicios;
