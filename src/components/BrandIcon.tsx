export function BrandIcon({ name }: { name: string }) {
  const src =
    name === "pulsifyai" || name === "pulsifylabs"
      ? "pulsifyai.png"
      : name === "imocoach"
        ? "imocoach.png"
        : null;
  return (
    <span className={`brand-icon brand-${name}`} aria-hidden="true">
      {src ? (
        <img
          src={`${import.meta.env.BASE_URL}icons/${src}`}
          alt=""
          width="32"
          height="32"
        />
      ) : (
        <span>
          {name === "stonesaints" ? "SS" : name === "kapta" ? "K" : "SF"}
        </span>
      )}
    </span>
  );
}
