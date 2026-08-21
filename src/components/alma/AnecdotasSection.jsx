import { useMemo, useState } from "react";
import { ANECDOTAS } from "@/data/almaAnecdotas";
import { contact } from "@/lib/site";
import AnecdotaCard from "./AnecdotaCard";
import FilterBar from "./FilterBar";
import FilterSummary from "./FilterSummary";
import SectionHeading from "./SectionHeading";

const CATEGORIA_OPTIONS = ["", "tragica", "divertida", "sorprendente"];

const shareUrl = `${contact.whatsapp}&text=${encodeURIComponent(
  "Hola! Quiero compartir mi anécdota de recital para Alma Rockera:"
)}`;

const AnecdotasSection = () => {
  const [selectedCategoria, setSelectedCategoria] = useState("");

  const categoriaCounts = useMemo(() => {
    const counts = { "": ANECDOTAS.length };
    ANECDOTAS.forEach((a) => {
      counts[a.categoria] = (counts[a.categoria] ?? 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    if (!selectedCategoria) return ANECDOTAS;
    return ANECDOTAS.filter((a) => a.categoria === selectedCategoria);
  }, [selectedCategoria]);

  const activeFilters = selectedCategoria
    ? [{ key: "categoria", value: selectedCategoria, onClear: () => setSelectedCategoria("") }]
    : [];

  return (
    <section id="anecdotas" className="mx-auto max-w-6xl">
      <SectionHeading
        kicker="Blog de la comunidad"
        title="Anécdotas de Recitales"
        description="Historias trágicas, sorprendentes o divertidas que fuimos viviendo en los recitales, contadas por quienes estuvieron ahí."
      />

      <div className="mx-4 mb-4 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 md:mx-0 md:flex-row md:items-center md:justify-between">
        <FilterBar
          label="Categoría"
          options={CATEGORIA_OPTIONS}
          selected={selectedCategoria}
          onSelect={setSelectedCategoria}
          counts={categoriaCounts}
        />
        <a
          href={shareUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-xl border-2 border-alma2 px-4 py-2 text-sm font-bold text-alma2 transition hover:-translate-y-0.5 hover:bg-alma2 hover:text-white"
        >
          Compartí tu anécdota ✍️
        </a>
      </div>

      <div className="mx-4 mb-6 md:mx-0">
        <FilterSummary
          resultCount={filtered.length}
          totalCount={ANECDOTAS.length}
          itemLabel="anécdotas"
          activeFilters={activeFilters}
          onClearAll={() => setSelectedCategoria("")}
        />
      </div>

      <div className="mx-4 grid gap-6 md:mx-0 md:grid-cols-3">
        {filtered.map((anecdota, i) => (
          <div
            key={`${selectedCategoria}-${anecdota.id}`}
            className="alma-card-pop h-full"
            style={{ animationDelay: `${Math.min(i * 0.06, 0.3)}s` }}
          >
            <AnecdotaCard {...anecdota} />
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-white/15 bg-white/5 p-10 text-center">
            <p className="text-lg font-bold text-white">Todavía no hay anécdotas en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnecdotasSection;
