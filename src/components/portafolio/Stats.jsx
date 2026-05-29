import { stats } from "@/data/portfolio";

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-secundary/40">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl md:text-5xl font-extrabold text-yellow">
              {s.valor}
            </p>
            <p className="mt-1 text-xs md:text-sm text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
