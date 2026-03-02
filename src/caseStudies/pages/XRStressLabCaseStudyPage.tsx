import { Link } from 'react-router-dom';
import SmartLink from '../../components/SmartLink';
import MiniBars from '../../components/charts/MiniBars';
import { getResultDelta, xrStressLabResults } from '../../data/xrStressLabResults';

function formatDelta(value: number | null) {
  if (value === null) {
    return '—';
  }

  return `${value >= 0 ? '+' : ''}${value.toFixed(2)} ms`;
}

export default function XRStressLabCaseStudyPage() {
  return (
    <div className="min-h-screen bg-site-pattern">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/">← Back to Home</Link>
        </div>

      <h1 className="text-3xl font-semibold text-slate-900">XR Performance Stress Lab</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">Profiler-led XR Rendering Analysis</p>
      <p className="mt-4 text-slate-700">
        A controlled XR test harness built to isolate fragment overdraw, MSAA bandwidth amplification, submission
        pressure, and frame pacing variance under repeatable runtime conditions. Each stress path is toggled in
        isolation and measured with profiler captures and pass-level evidence.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Problem / Context</h2>
        <p className="text-slate-700">
          XR rendering budgets are deadline-driven: missed frames trigger reprojection and perceived judder even when
          average FPS looks acceptable. The goal was to build a repeatable harness that produces clear bottleneck
          signatures (GPU fragment, bandwidth, submission, or variance) and generates evidence that can be shared as a
          mitigation playbook.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Engineering Approach</h2>
        <p className="text-slate-700">
          Implemented controlled A/B stress toggles with a locked baseline scene. For each stress path, captures are
          taken in identical conditions (same camera, same scene state) and compared by delta. Profiling focuses on
          frame time stability (variance/spikes), CPU main-thread scheduling, and GPU RenderLoop cost. Pass-level
          validation uses Frame Debugger / capture tools to confirm draw counts, blend modes, and depth behavior.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Results</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
              <tr>
                <th className="px-4 py-3">Experiment</th>
                <th className="px-4 py-3">Baseline CPU/GPU (ms)</th>
                <th className="px-4 py-3">Stress CPU/GPU (ms)</th>
                <th className="px-4 py-3">Δ CPU</th>
                <th className="px-4 py-3">Δ GPU</th>
                <th className="px-4 py-3">Bottleneck</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {xrStressLabResults.map((result) => {
                const { deltaCpu, deltaGpu } = getResultDelta(result);
                const experimentLabel = result.labPath ? (
                  <Link to={result.labPath} className="hover:text-cyan-700 hover:underline">
                    {result.experiment}
                  </Link>
                ) : (
                  result.experiment
                );

                return (
                  <tr key={result.id}>
                    <td className="px-4 py-3 font-medium text-slate-900">{experimentLabel}</td>
                    <td className="px-4 py-3">
                      {result.baselineCpu.toFixed(2)} / {result.baselineGpu.toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      {result.stressCpu === null || result.stressGpu === null
                        ? 'N/A'
                        : `${result.stressCpu.toFixed(2)} / ${result.stressGpu.toFixed(2)}`}
                    </td>
                    <td className="px-4 py-3">{formatDelta(deltaCpu)}</td>
                    <td className="px-4 py-3">{formatDelta(deltaGpu)}</td>
                    <td className="px-4 py-3">{result.bottleneck}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">GPU Delta Visualization</h3>
          <div className="space-y-2">
            <MiniBars title="Overdraw Stress Toggle" baselineMs={6.88} stressMs={12.03} maxMs={12.03} variant="gpu" />
            <MiniBars title="MSAA Cost (Edge Density)" baselineMs={3.5} stressMs={4.36} maxMs={12.03} variant="gpu" />
            <MiniBars title="MSAA × Overdraw Interaction" baselineMs={4.36} stressMs={8.75} maxMs={12.03} variant="gpu" />
            <MiniBars title="Instancing vs Non-Instancing" baselineMs={7.09} stressMs={5.34} maxMs={12.03} variant="gpu" />
          </div>
        </div>

        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Overdraw doubles GPU time under stable CPU behavior, matching a fragment-bound signature.</li>
          <li>MSAA increases GPU cost, while this setup remains CPU/pacing-limited at frame level.</li>
          <li>MSAA plus overdraw compounds bandwidth and fragment work, amplifying GPU delta.</li>
          <li>Instancing reduces submission overhead, with both CPU and GPU moving toward a near-balanced frame.</li>
        </ul>
        <p className="text-slate-700">
          Key measured deltas are tracked per stress path and classified by bottleneck signature: Overdraw Stress —
          RenderLoop (GPU) 6.37 ms to 13.64 ms (Δ +7.27 ms), CPU stable around 0.5 ms, indicating GPU-bound fragment
          cost. MSAA Scaling — measured as a GPU/bandwidth amplification stress path with results tracked per MSAA
          step. Instancing vs Non-Instancing — measured as submission pressure across CPU and render thread
          contribution with draw call deltas. Frame Pacing — measured as variance and spike behavior under controlled
          workload changes.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">
          Evidence is captured via Unity Profiler comparisons (CPU Main Thread + GPU RenderLoop), Frame Debugger
          validation of pass composition and render state (including 201 transparent draws with ZWrite Off and
          SrcAlpha/OneMinusSrcAlpha in overdraw stress), and annotated experiment captures linked per test case.
          Evidence is captured as Unity Profiler comparisons (CPU main thread plus GPU RenderLoop) for baseline versus
          stress deltas, Frame Debugger validation of pass composition and render state (including 201 transparent
          draws with ZWrite Off and SrcAlpha/OneMinusSrcAlpha in overdraw stress), and annotated screenshots stored
          under /public/lab and linked from each experiment page.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Mitigation Strategy</h2>
        <p className="text-slate-700">
          Mitigation is mapped to bottleneck signature: GPU fragment/overdraw — reduce transparent stacking, prefer
          opaque or cutout where possible, limit full-screen transparent layers, and constrain UI layering. Bandwidth
          amplification (MSAA) — step MSAA down, reduce resolution where appropriate, and avoid combining MSAA with
          heavy transparency/post. Submission pressure — reduce unique materials and state changes, improve
          batching/instancing strategy, and reduce per-frame renderer churn. Frame pacing variance — remove spikes
          (GC, sync points, expensive intermittent work) and stabilize scheduling and workload cadence.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Experiments Conducted</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <Link to="/lab/overdraw" className="hover:text-cyan-700 hover:underline">
              Overdraw Stress (GPU-bound fragment)
            </Link>
          </li>
          <li>
            <Link to="/lab/msaa" className="hover:text-cyan-700 hover:underline">
              MSAA Scaling (bandwidth amplification)
            </Link>
          </li>
          <li>
            <Link to="/lab/instancing" className="hover:text-cyan-700 hover:underline">
              Instancing vs Non-Instancing (submission cost)
            </Link>
          </li>
          <li>
            <Link to="/lab/frame-pacing" className="hover:text-cyan-700 hover:underline">
              Frame Pacing Variance Capture
            </Link>
          </li>
        </ul>
      </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Links</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>
              <SmartLink href="https://github.com/JamesDeRaja/XRPerformanceLab" className="hover:text-cyan-700 hover:underline">
                Repository
              </SmartLink>
            </li>
            <li>
              <Link to="/lab/overdraw" className="hover:text-cyan-700 hover:underline">
                Overdraw Lab
              </Link>
            </li>
            <li>
              <Link to="/lab/msaa" className="hover:text-cyan-700 hover:underline">
                MSAA Lab
              </Link>
            </li>
            <li>
              <Link to="/lab/instancing" className="hover:text-cyan-700 hover:underline">
                Instancing Lab
              </Link>
            </li>
            <li>
              <Link to="/lab/frame-pacing" className="hover:text-cyan-700 hover:underline">
                Frame Pacing Lab
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
