import { skills } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";

const delays = ["d1", "d2", "d3", "d4", "d5"];

export default function Skills() {
  const [ref, visible] = useInView(0.15);

  return (
    <section className="relative overflow-hidden bg-secundary/40 border-y border-white/10">
      <div
        className="cyber-orb cyber-orb-a -top-16 right-0 w-64 h-64"
        style={{ background: "rgba(245, 210, 68, 0.08)" }}
      />
      <div ref={ref} className="max-w-5xl mx-auto px-6 py-20 relative">
        <h2
          className={`reveal from-left ${visible ? "visible" : ""} font-heading text-3xl md:text-4xl font-extrabold tracking-tight`}
        >
          Stack &amp; habilidades<span className="text-yellow glow-text">.</span>
        </h2>
        <p
          className={`reveal from-left d1 ${visible ? "visible" : ""} mt-3 text-white/50 max-w-2xl`}
        >
          Tecnologías y herramientas con las que trabajo todos los días.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className={`reveal from-scale ${delays[i % 5]} ${visible ? "visible" : ""} border border-yellow/30 text-white/90 font-semibold px-4 py-2 rounded-full hover:bg-yellow hover:text-primary hover:shadow-[0_0_18px_rgba(245,210,68,0.4)] transition cursor-default`}
              style={{ transitionProperty: "opacity, transform, background-color, color, box-shadow" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
