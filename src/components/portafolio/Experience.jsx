import { experiencia } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";

const delays = ["d1", "d2", "d3", "d4", "d5"];

export default function Experience() {
  const [titleRef, titleVisible] = useInView(0.2);
  const [listRef, listVisible] = useInView(0.1);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2
        ref={titleRef}
        className={`reveal from-left ${titleVisible ? "visible" : ""} font-heading text-3xl md:text-4xl font-extrabold tracking-tight`}
      >
        Experiencia<span className="text-yellow glow-text">.</span>
      </h2>
      <div ref={listRef} className="mt-10 space-y-4">
        {experiencia.map((e, i) => (
          <div
            key={e.empresa}
            className={`reveal from-bottom ${delays[i % 5]} ${listVisible ? "visible" : ""} group relative rounded-2xl border border-white/10 bg-secundary/40 p-6 md:p-8 hover:border-yellow/50 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(245,210,68,0.12)] transition`}
            style={{ transitionProperty: "opacity, transform, border-color, box-shadow" }}
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
