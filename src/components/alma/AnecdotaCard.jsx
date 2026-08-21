import { FaMapMarkerAlt, FaQuoteLeft } from "react-icons/fa";

const CATEGORY_STYLES = {
  tragica: { label: "Trágica", badge: "border-rose-500/40 bg-rose-500/10 text-rose-300" },
  divertida: { label: "Divertida", badge: "border-amber-400/40 bg-amber-400/10 text-amber-300" },
  sorprendente: { label: "Sorprendente", badge: "border-sky-400/40 bg-sky-400/10 text-sky-300" },
};

const AnecdotaCard = ({ autor, titulo, banda, lugar, anio, categoria, texto }) => {
  const style = CATEGORY_STYLES[categoria] ?? CATEGORY_STYLES.sorprendente;

  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-alma2/40 hover:shadow-[0_12px_30px_rgba(255,67,1,0.15)]">
      <div className="flex items-start justify-between gap-3">
        <FaQuoteLeft className="text-2xl text-alma2/60" aria-hidden="true" />
        <span
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${style.badge}`}
        >
          {style.label}
        </span>
      </div>

      {titulo && <h3 className="text-xl font-bold">{titulo}</h3>}

      <p className="text-sm italic leading-relaxed text-zinc-200/90">{texto}</p>

      <footer className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-4 text-xs text-zinc-400">
        <p>
          <span className="font-bold text-zinc-200">{autor}</span>
          {banda ? ` · en un recital de ${banda}` : ""}
        </p>
        {(lugar || anio) && (
          <p className="inline-flex items-center gap-1">
            <FaMapMarkerAlt aria-hidden="true" />
            {[lugar, anio].filter(Boolean).join(" · ")}
          </p>
        )}
      </footer>
    </article>
  );
};

export default AnecdotaCard;
