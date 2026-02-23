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

const columnTitleClass = 'text-base font-semibold text-slate-700';
const subLabelClass = 'text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500';

function SectionList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className={subLabelClass}>{label}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item} className="break-words">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperimentSpec({ spec }: ExperimentSpecProps) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="min-w-0 space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className={columnTitleClass}>Setup</p>
        <SectionList label="Goal" items={[spec.goal]} />
        <SectionList label="Toggles" items={spec.toggles} />
        {spec.controls?.length ? <SectionList label="Controlled variables" items={spec.controls} /> : null}
      </div>

      <div className="min-w-0 space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className={columnTitleClass}>Analysis</p>
        <SectionList label="Metrics" items={spec.metrics} />
        <SectionList label="Hypothesis" items={[spec.hypothesis]} />
        <SectionList label="Notes" items={spec.notes} />
      </div>
    </div>
  );
}
