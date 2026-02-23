type ExperimentSpecProps = {
  spec: {
    goal: string;
    toggles: string[];
    controls?: string[];
    metrics: string[];
    hypothesis: string;
    notes: string[];
  };
};

function SpecBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperimentSpec({ spec }: ExperimentSpecProps) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <SpecBlock label="Setup · Goal" items={[spec.goal]} />
        <SpecBlock label="Setup · Toggles" items={spec.toggles} />
        {spec.controls?.length ? <SpecBlock label="Setup · Controlled variables" items={spec.controls} /> : null}
      </div>

      <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <SpecBlock label="Analysis · Metrics" items={spec.metrics} />
        <SpecBlock label="Analysis · Hypothesis" items={[spec.hypothesis]} />
        <SpecBlock label="Analysis · Notes" items={spec.notes} />
      </div>
    </div>
  );
}
