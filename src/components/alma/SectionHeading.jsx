const SectionHeading = ({ kicker, title, description }) => (
  <div className="mx-4 mb-10 mt-20 text-center md:mx-0">
    {kicker && (
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-alma2">{kicker}</span>
    )}
    <h2 className="alma-glow-text mt-2 text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
    <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-alma2 to-transparent" />
    {description && (
      <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 md:text-base">{description}</p>
    )}
  </div>
);

export default SectionHeading;
