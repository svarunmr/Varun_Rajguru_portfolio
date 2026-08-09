export default function StatNumber({
  value,
  label,
  suffix = "",
  className = "",
  valueClassName = "",
}) {
  const statClassName = ["stat-number", className].filter(Boolean).join(" ");
  const valueClass = ["stat-number__value", valueClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={statClassName}>
      <dt className="stat-number__label">{label}</dt>
      <dd className={valueClass}>
        {Number(value).toLocaleString("en-US")}
        {suffix}
      </dd>
    </div>
  );
}
