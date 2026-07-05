import { Poppins } from "next/font/google";
import Seo from "@/components/Seo";
import { profilePageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import Nav from "@/components/portafolio/Nav";
import Hero from "@/components/portafolio/Hero";
import Stats from "@/components/portafolio/Stats";
import Experience from "@/components/portafolio/Experience";
import Skills from "@/components/portafolio/Skills";
import Contact from "@/components/portafolio/Contact";
import Footer from "@/components/portafolio/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export default function Portafolio() {
  return (
    <div
      className={`${poppins.className} bg-primary text-white min-h-screen antialiased`}
    >
      <Seo
        title="Gino Pietrobon · Portfolio | Dev Zeppelin"
        description="Gino Pietrobon — CEO de Dev Zeppelin, CTO de Anexa Links. Desarrollador Python, automatización (RPA), SAP e integraciones con IA."
        path="/portafolio"
        image="/portafolio/me.jpeg"
        jsonLd={[
          profilePageJsonLd(),
          breadcrumbJsonLd([{ name: "Portafolio", path: "/portafolio" }]),
        ]}
      />

      <Nav />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />

      <style global jsx>{`
        html {
          background: #080808;
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          padding: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
