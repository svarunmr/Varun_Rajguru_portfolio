const SIGNALS = [
  { label: "ALGORITHMS", status: "ACTIVE" },
  { label: "BACKEND", status: "BUILDING" },
  { label: "SYSTEMS", status: "EXPLORING" },
  { label: "AI / ML", status: "APPLIED" },
];

export default function EngineeringSignal() {
  return (
    <aside className="engineering-signal" aria-hidden="true">
      <div className="engineering-signal__topline">
        <span>ENGINEERING SIGNAL</span>
        <span>01 / 04</span>
      </div>

      <div className="engineering-signal__focus-label">CURRENT FOCUS</div>

      <div className="engineering-signal__grid">
        {SIGNALS.map(({ label, status }) => (
          <div className="engineering-signal__row" key={label}>
            <span className="engineering-signal__label">{label}</span>
            <span className="engineering-signal__focus-status">
              <span className="engineering-signal__marker" />
              {status}
            </span>
          </div>
        ))}
      </div>

      <div className="engineering-signal__status">
        <span>STATUS</span>
        <strong>BUILDING <span aria-hidden="true">→</span></strong>
      </div>
    </aside>
  );
}
