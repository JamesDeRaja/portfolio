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

function SectionList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-neon/50">{label}</p>
      <ul className="mt-1.5 space-y-1 text-xs text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 break-words">
            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-neon/30" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperimentSpec({ spec }: ExperimentSpecProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="min-w-0 space-y-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
        <p className="text-sm font-semibold text-white/80">Setup</p>
        <SectionList label="Goal" items={[spec.goal]} />
        <SectionList label="Toggles" items={spec.toggles} />
        {spec.controls?.length ? <SectionList label="Controlled variables" items={spec.controls} /> : null}
      </div>

      <div className="min-w-0 space-y-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
        <p className="text-sm font-semibold text-white/80">Analysis</p>
        <SectionList label="Metrics" items={spec.metrics} />
        <SectionList label="Hypothesis" items={[spec.hypothesis]} />
        <SectionList label="Notes" items={spec.notes} />
      </div>
    </div>
  );
}
