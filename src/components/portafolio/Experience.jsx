import { experiencia } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Experiencia<span className="text-yellow">.</span>
      </h2>
      <div className="mt-10 space-y-4">
        {experiencia.map((e) => (
          <div
            key={e.empresa}
            className="group relative rounded-2xl border border-white/10 bg-secundary/40 p-6 md:p-8 hover:border-yellow/50 transition-colors"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl md:text-2xl font-bold">
                {e.rol} <span className="text-yellow">· {e.empresa}</span>
              </h3>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {e.periodo}
              </span>
            </div>
            <p className="mt-3 text-white/60 leading-relaxed max-w-3xl">
              {e.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
