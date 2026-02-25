type TechnicalTakeawaysProps = {
  takeaways: string[];
};

export default function TechnicalTakeaways({ takeaways }: TechnicalTakeawaysProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-slate-900">Technical Takeaways</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700 marker:text-slate-500">
        {takeaways.slice(0, 5).map((takeaway) => (
          <li key={takeaway}>{takeaway}</li>
        ))}
      </ul>
    </section>
  );
}
