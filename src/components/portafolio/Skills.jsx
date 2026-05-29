import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="bg-secundary/40 border-y border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Stack & habilidades<span className="text-yellow">.</span>
        </h2>
        <p className="mt-3 text-white/50 max-w-2xl">
          Tecnologías y herramientas con las que trabajo todos los días.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-yellow/30 text-white/90 font-semibold px-4 py-2 rounded-full hover:bg-yellow hover:text-primary transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
