const FilterBar = ({ label, options, selected, onSelect, counts, allLabel = "Todas" }) => (
  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
    <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-alma1/80">
      {label}
    </span>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = selected === option;
        const count = counts?.[option];
        return (
          <button
            key={option || "__all"}
            type="button"
            onClick={() => onSelect(active ? "" : option)}
            aria-pressed={active}
            className={`rounded-full border px-3.5 py-1.5 text-sm capitalize transition-all active:scale-95 ${
              active
                ? "border-alma2 bg-alma2 text-white shadow-[0_0_14px_rgba(255,67,1,0.45)]"
                : "border-white/15 bg-transparent text-zinc-300 hover:-translate-y-0.5 hover:border-alma2/60 hover:text-white"
            }`}
          >
            {option || allLabel}
            {typeof count === "number" && (
              <span className={`ml-1.5 text-xs ${active ? "text-white/80" : "text-zinc-500"}`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  </div>
);

export default FilterBar;
