const FilterSummary = ({ resultCount, totalCount, itemLabel, activeFilters, onClearAll }) => {
  if (activeFilters.length === 0) {
    return (
      <p className="text-xs text-zinc-500">
        Mostrando {totalCount} {itemLabel}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <p className="text-xs text-zinc-500">
        {resultCount} de {totalCount} {itemLabel}
      </p>
      {activeFilters.map(({ key, value, onClear }) => (
        <button
          key={key}
          type="button"
          onClick={onClear}
          className="group inline-flex items-center gap-1.5 rounded-full border border-alma2/50 bg-alma2/10 px-3 py-1 text-xs capitalize text-alma1 transition hover:bg-alma2/20"
        >
          {value}
          <span className="text-alma1/70 transition group-hover:text-white" aria-hidden="true">
            ✕
          </span>
        </button>
      ))}
      <button
        type="button"
        onClick={onClearAll}
        className="text-xs font-bold text-zinc-400 underline-offset-2 transition hover:text-white hover:underline"
      >
        Limpiar todo
      </button>
    </div>
  );
};

export default FilterSummary;
