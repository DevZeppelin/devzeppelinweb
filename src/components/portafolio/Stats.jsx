import { stats } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";

const delays = ["d1", "d2", "d3", "d4", "d5"];

export default function Stats() {
  const [ref, visible] = useInView(0.2);

  return (
    <section className="border-y border-white/10 bg-secundary/40">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-center"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`reveal from-bottom ${delays[i % 5]} ${visible ? "visible" : ""}`}
          >
            <p className="text-4xl md:text-5xl font-extrabold text-yellow glow-text">
              {s.valor}
            </p>
            <p className="mt-1 text-xs md:text-sm text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
