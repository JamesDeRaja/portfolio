# James De Raja

Senior Real-Time Performance Engineer | Unity | XR Rendering

Email: jamesderaja@gmail.com | Location: Open to Remote/Hybrid
**Portfolio:** https://james.alphaden.club | **GitHub:** https://github.com/JamesDeRaja | **XR Lab Repo:** https://github.com/JamesDeRaja/XRPerformanceLab | **LinkedIn:** https://www.linkedin.com/in/james-de-raja

## Summary

Senior Real-Time Performance Engineer with 10+ years in Unity, specializing in GPU/CPU bottleneck analysis, frame pacing, and XR frame timing under 72/90Hz deadlines.
Built deterministic profiling frameworks (Unity 6 URP + OpenXR) to isolate overdraw, MSAA bandwidth, submission overhead, and variance — backed by profiler/Frame Debugger evidence.
Shipped mobile titles and performance-critical systems; strong instrumentation mindset (metrics, diagnostics, reproducible experiments).

## Core Skills (ATS Keywords)

- Real-Time Performance Optimization
- GPU / CPU Bottleneck Analysis
- XR Frame Timing & Frame Pacing (72/90Hz)
- Unity Rendering Pipelines (URP, Built-in)
- Profiling & Diagnostics (Unity Profiler, Frame Debugger)
- Memory & GC Optimization (C#, Unity)

Tools / Technical: Unity 6, OpenXR, RenderDoc, Android Profiling, Xcode Instruments, Git

**Keywords:** XR performance, frame pacing, frame timing, rendering optimization, overdraw, MSAA, draw calls, batching/instancing, CPU main thread, render thread, GPU RenderLoop, profiling, performance instrumentation.

## Selected Performance Engineering Projects

**XR Performance Stress Lab (Unity 6 URP + OpenXR)**
- Built a deterministic XR benchmarking harness to isolate GPU fragment cost, MSAA bandwidth amplification, submission overhead, and frame pacing variance.
- Measured **+7.27ms** GPU RenderLoop amplification under layered transparency (overdraw stress), validated via Unity Profiler comparisons and Frame Debugger evidence.
- Produced a mitigation playbook mapped to bottleneck signatures (fragment-bound, bandwidth-bound, submission-bound, variance).
  Tech: Unity 6, URP, OpenXR, Unity Profiler, Frame Debugger

**SoftMaskPro Performance Study (Unity UI Rendering)**
- Diagnosed masking-induced draw-call scaling with CPU/GPU profiling and Frame Debugger pass inspection across controlled scenarios.
- Reduced rendering overhead by replacing expensive update paths and validating lower UI rebuild pressure with evidence-based profiling.
- Standardized repeatable scenario captures to validate rendering optimization changes before and after patches.
  Tech: Unity, URP, Unity Profiler, Frame Debugger, C#

## Experience

**Independent Real-Time Performance Engineer (Unity/XR)** | 2024–Present
- Optimized XR performance workloads through GPU/CPU bottleneck analysis and evidence-based profiling, improving frame pacing stability under stress.
- Instrumented deterministic experiments for overdraw, MSAA, instancing / batching, and draw calls to classify frame timing regressions before release.
- Validated mitigation strategies with Unity Profiler and Frame Debugger captures, then documented repeatable workflows for engineering handoff.

**Senior Unity Engineer (Mobile Performance Focus)** | 2014–2024
- Profiled and improved frame-time hotspots in production mobile gameplay loops, reducing CPU main thread spikes and improving stability.
- Designed rendering optimization changes for submission-heavy scenes, improving render thread behavior through batching/instancing decisions.
- Shipped mobile titles with performance guardrails and reproducible profiling baselines to prevent regressions during content scaling.

## Education

Formal education details available upon request.
