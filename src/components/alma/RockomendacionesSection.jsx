import { useMemo, useState } from "react";
import { BANDS } from "@/data/almaBands";
import Card from "./Card";
import FilterBar from "./FilterBar";
import FilterSummary from "./FilterSummary";
import SectionHeading from "./SectionHeading";

const norm = (v) => (v ?? "").toString().trim();
const eqi = (a, b) => norm(a).toLowerCase() === norm(b).toLowerCase();

const uniqueOptions = (list, field) => {
  const set = new Set(list.map((item) => norm(item[field])).filter(Boolean));
  return ["", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
};

const countsFor = (list, field) => {
  const counts = { "": list.length };
  list.forEach((item) => {
    const key = norm(item[field]);
    if (!key) return;
    counts[key] = (counts[key] ?? 0) + 1;
  });
  return counts;
};

const RockomendacionesSection = () => {
  const [selectedLocal, setSelectedLocal] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedRecomienda, setSelectedRecomienda] = useState("");

  const locals = useMemo(() => uniqueOptions(BANDS, "local"), []);
  const categorias = useMemo(() => uniqueOptions(BANDS, "categoria"), []);
  const recomendaciones = useMemo(() => uniqueOptions(BANDS, "recomienda"), []);

  const localCounts = useMemo(() => countsFor(BANDS, "local"), []);
  const categoriaCounts = useMemo(() => countsFor(BANDS, "categoria"), []);
  const recomiendaCounts = useMemo(() => countsFor(BANDS, "recomienda"), []);

  const filtered = useMemo(() => {
    return BANDS.filter(
      (b) =>
        (!selectedLocal || eqi(b.local, selectedLocal)) &&
        (!selectedCategoria || eqi(b.categoria, selectedCategoria)) &&
        (!selectedRecomienda || eqi(b.recomienda, selectedRecomienda))
    );
  }, [selectedLocal, selectedCategoria, selectedRecomienda]);

  const activeFilters = [
    selectedLocal && { key: "local", value: selectedLocal, onClear: () => setSelectedLocal("") },
    selectedCategoria && {
      key: "categoria",
      value: selectedCategoria,
      onClear: () => setSelectedCategoria(""),
    },
    selectedRecomienda && {
      key: "recomienda",
      value: selectedRecomienda,
      onClear: () => setSelectedRecomienda(""),
    },
  ].filter(Boolean);

  const resetFilters = () => {
    setSelectedLocal("");
    setSelectedCategoria("");
    setSelectedRecomienda("");
  };

  const filterSignature = `${selectedLocal}|${selectedCategoria}|${selectedRecomienda}`;

  return (
    <section id="rockomendadas" className="mx-auto max-w-6xl">
      <SectionHeading
        kicker="Descubrí bandas"
        title="Rockomendaciones"
        description="Bandas under, muy under y no tan under que la comunidad de Alma Rockera fue recomendando."
      />

      <div className="mx-4 mb-6 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 md:mx-0">
        <FilterBar
          label="Localidad"
          options={locals}
          selected={selectedLocal}
          onSelect={setSelectedLocal}
          counts={localCounts}
        />
        <FilterBar
          label="Categoría"
          options={categorias}
          selected={selectedCategoria}
          onSelect={setSelectedCategoria}
          counts={categoriaCounts}
        />
        <FilterBar
          label="Recomendada por"
          options={recomendaciones}
          selected={selectedRecomienda}
          onSelect={setSelectedRecomienda}
          counts={recomiendaCounts}
        />
      </div>

      <div className="mx-4 mb-6 md:mx-0">
        <FilterSummary
          resultCount={filtered.length}
          totalCount={BANDS.length}
          itemLabel="bandas"
          activeFilters={activeFilters}
          onClearAll={resetFilters}
        />
      </div>

      <div className="mx-4 grid gap-6 md:mx-0 md:grid-cols-3">
        {filtered.map((band, i) => (
          <div
            key={`${filterSignature}-${norm(band.name)}`}
            className="alma-card-pop"
            style={{ animationDelay: `${Math.min(i * 0.06, 0.3)}s` }}
          >
            <Card {...band} />
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-white/15 bg-white/5 p-10 text-center">
            <p className="text-lg font-bold text-white">Ninguna banda matchea con esos filtros 🤘</p>
            <button
              onClick={resetFilters}
              className="mt-4 rounded-xl border border-alma2 px-4 py-2 text-sm font-bold text-alma2 transition hover:bg-alma2 hover:text-white"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RockomendacionesSection;
