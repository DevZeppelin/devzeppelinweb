const RadioCard = ({ nombre, descripcion, embedId, embedSrc, height, fullWidth, principal }) => (
  <div
    className={`flex flex-col items-center gap-4 rounded-2xl border bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 ${
      principal ? "border-alma2/60 hover:shadow-[0_12px_30px_rgba(255,67,1,0.2)]" : "border-zinc-800 hover:border-alma2/40"
    }`}
  >
    <div className="flex items-center gap-2">
      {principal && (
        <span className="rounded-full bg-alma2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          En vivo
        </span>
      )}
      <h3 className="text-xl font-bold">{nombre}</h3>
    </div>
    {descripcion && <p className="max-w-sm text-sm text-zinc-400">{descripcion}</p>}
    <iframe
      className={`rounded-2xl border-none ${fullWidth ? "w-full" : "mx-auto w-full max-w-xs md:max-w-sm"}`}
      id={embedId}
      src={embedSrc}
      height={height}
      width={fullWidth ? "100%" : undefined}
      title={`Reproductor en vivo de ${nombre}`}
    />
  </div>
);

export default RadioCard;
