import { RADIOS } from "@/data/almaRadios";
import RadioCard from "./RadioCard";
import SectionHeading from "./SectionHeading";

const RadioSection = () => {
  const principal = RADIOS.filter((radio) => radio.principal);
  const alternativas = RADIOS.filter((radio) => !radio.principal);

  return (
    <section id="radio" className="mx-auto max-w-6xl pb-8">
      <SectionHeading
        kicker="En vivo"
        title="Radio"
        description="Escuchá Alma Rockera en vivo, o sintonizá alguna de las emisoras amigas que retransmitimos."
      />

      {principal.length > 0 && (
        <div className="mx-4 mb-6 md:mx-0">
          {principal.map((radio) => (
            <RadioCard key={radio.id} {...radio} />
          ))}
        </div>
      )}

      {alternativas.length > 0 && (
        <div className="mx-4 md:mx-0">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-zinc-500">
            Emisoras alternativas
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {alternativas.map((radio) => (
              <RadioCard key={radio.id} {...radio} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default RadioSection;
