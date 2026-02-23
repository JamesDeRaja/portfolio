# Real-Time Performance Engineering Portfolio

Systems-focused performance engineering case studies in Unity (URP / OpenXR), emphasizing deterministic frame budgets, rendering cost control, and XR constraints.

This repository powers a systems-focused site presenting structured, profiler-backed experiments rather than creative portfolio work.

---

## Focus Areas

- Frame timing discipline (11ms / 16ms budgets)
- CPU vs GPU bottleneck isolation
- Rendering cost control (overdraw, MSAA, transparency)
- Submission overhead (instancing vs batching)
- Frame pacing stability under stress
- Reproducible measurement workflows

---

## XR Performance Stress Lab

A controlled benchmarking lab built in Unity to quantify rendering and frame stability under deterministic workloads.

### Goals

- Measure baseline vs stress deltas
- Classify bottlenecks (CPU-bound vs GPU-bound)
- Document mitigation strategies
- Produce reproducible profiling artifacts

### Experiments

- Baseline deterministic scene
- Overdraw stress (stacked transparency)
- MSAA bandwidth impact (0x / 2x / 4x)
- Instancing vs non-instancing (submission overhead)
- CPU stress simulation
- Frame pacing variance under load

Each experiment includes:

- Measurement plan (CPU ms, GPU ms, draw calls, variance)
- Hypothesis
- Bottleneck classification
- Mitigation notes
- Profiler / Frame Debugger evidence

---

## Tooling

- Unity Profiler
- Frame Debugger
- URP
- OpenXR
- RenderDoc (optional capture)
- Custom runtime overlay (frame metrics HUD)

---

## Philosophy

Performance engineering is not about maximizing FPS.

It is about:

- Protecting frame budgets
- Reducing variance
- Ensuring stability under load
- Building repeatable diagnostics

This repository reflects that mindset.

---

## Deployment

Built with:

- Vite
- React
- TypeScript
- TailwindCSS
- Deployed via Vercel

---

## Contact

Email: jamesderaja@gmail.com  
LinkedIn: https://www.linkedin.com/in/james-de-raja  
Portfolio: https://james.alphaden.club

Open to senior-level real-time systems and rendering roles focused on measurable performance outcomes.
