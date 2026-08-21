import Seo from "@/components/Seo";
import Header from "@/components/alma/Header";
import RadioSection from "@/components/alma/RadioSection";
import RockomendacionesSection from "@/components/alma/RockomendacionesSection";
import AnecdotasSection from "@/components/alma/AnecdotasSection";
import RenzoFrase from "@/components/alma/RenzoFrase";
import Footer from "@/components/alma/Footer";
import SectionHeading from "@/components/alma/SectionHeading";

export default function AlmaRockera() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 font-body">
      <Seo
        title="Alma Rockera 100% — Radio, Rockomendaciones y Anécdotas de Recitales"
        description="Alma Rockera: radio online de rock, bandas under recomendadas por la comunidad y un blog de anécdotas reales de recitales — divertidas, sorprendentes o trágicas."
        path="/almarockera"
        image="/alma/logo.png"
      />

      <Header />

      <main>
        <RadioSection />
        <RockomendacionesSection />
        <AnecdotasSection />

        <section id="renzo" className="mx-auto max-w-6xl pb-8">
          <SectionHeading kicker="Un clásico" title="Renzo Frases" />
          <RenzoFrase />
        </section>
      </main>

      <Footer />
    </div>
  );
}
