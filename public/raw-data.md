# Codex Instruction Pack: james.alphaden.club Site Data Map + Raw Study Dataset

## Crawl status
- Direct crawl attempt to `https://james.alphaden.club/` from this environment returned `HTTP 403 (CONNECT tunnel failed)` on **2026-04-29**.
- This instruction pack is built from the source repo powering the site and is intended to be the reusable, machine-friendly “raw content” source.

## Canonical base URLs
- Primary domain in README: `https://james.alphaden.club`
- Canonical URLs listed in sitemap: `https://james.alphaden.club/...`

## Route inventory (all sub-pages)

### Home
- `/`

### Case studies
- `/case-studies/xr-stress-lab`
- `/case-studies/softmaskpro`
- `/case-studies/profiling-toolkit`
- `/case-studies/update-strategies-scale`
- `/case-studies/update-strategies-scale/variant-a`
- `/case-studies/update-strategies-scale/variant-b`
- `/case-studies/update-strategies-scale/variant-c`
- `/case-studies/update-strategies-scale/variant-d`
- `/case-studies/sneaky-warrior-3d`
- `/case-studies/published-mobile-projects`

### Lab pages
- `/lab/overdraw`
- `/lab/msaa`
- `/lab/msaa-overdraw`
- `/lab/instancing`
- `/lab/frame-pacing`
- `/lab/frame-pacing-vs-fps`
- `/lab/xr-frame-timing`
- `/lab/overdraw-stereo`

---

## Raw study outcomes (facts-first, reusable)

### XR Stress Lab measured results
| Experiment | Baseline CPU/GPU (ms) | Stress CPU/GPU (ms) | Bottleneck | Related lab link |
|---|---:|---:|---|---|
| Baseline Scene | 8.53 / 6.88 | N/A | None (within frame budget) | — |
| Overdraw Stress Toggle | 8.53 / 6.88 | 12.63 / 12.03 | GPU-bound | `/lab/overdraw` |
| MSAA Cost (Edge Density) | 14.23 / 3.50 | 15.26 / 4.36 | CPU/pacing-limited (GPU rises) | `/lab/msaa` |
| MSAA × Overdraw Interaction | 15.26 / 4.36 | 20.04 / 8.75 | GPU-bound (bandwidth + fragment amplification) | `/lab/msaa-overdraw` |
| Instancing vs Non-Instancing (10,000 cubes) | 15.03 / 7.09 | 7.33 / 5.34 | CPU submission bottleneck → near-balanced | `/lab/instancing` |

### Performance findings (narrative facts)
- Overdraw extreme case note: **200 layers** measured around CPU **18.23 ms** / GPU **17.79 ms**.
- Instancing finding note: non-instanced ~**66 FPS** (~15.04 ms frame) vs instanced ~**136 FPS** (~7.34 ms frame).
- MSAA edge-density sequence note: GPU **3.50 → 3.73 → 4.36 ms** at 0x / 2x / 4x.


### Update Strategies raw metrics (A/B/C/D)
| Variant | Frame Time | Script Cost / Key Cost | Key fact |
|---|---:|---:|---|
| A — Lifecycle | ~22–30 ms (comparison row ~25 ms) | ~0.5 ms script | Baseline render-dominated floor |
| B — Per-Object Update | ~40 ms | ~8.6 ms ScriptRunBehaviourUpdate | 10,000+ update calls; worst dispatch overhead |
| C — Central Manager | ~32 ms | ~4.3 ms script (manager ~4.2 ms) | Dispatch reduced but transform iteration remains |
| D — ECS (DOTS) | ~9.4 ms | ~0.01 ms ScriptRunBehaviourUpdate | ~4× improvement vs B under same load |

### Study configuration + experiment definitions
Use these as raw protocol definitions when deriving new writeups:
- `xrLabConfig` (status/target)
- `xrExperiments` (goal, toggles, controls, metrics, hypothesis, notes)
- `xrResultRows` (template rows for pending/new experiments)

---

## Raw links and source references

### Project/case-study links
- XR Performance Stress Lab repo: `https://github.com/JamesDeRaja/XRPerformanceLab`
- SoftMaskPro study repo: `https://github.com/JamesDeRaja/SoftMaskPro-Performance-Study`
- Profiling toolkit repo: `https://github.com/JamesDeRaja/XRPerformanceLab`
- Sneaky Warrior 3D app link: `https://apps.apple.com/us/app/sneaky-warriour-3d/id1626719884`

### Data-source catalog (where to pull reusable content)
- `src/data/projects.ts` → project summaries, impacts, study/repo links.
- `src/data/writing.ts` → writing/publication links.
- `src/data/shippedTitles.ts` → shipped title metadata.
- `src/data/performanceResults.ts` → performance outcomes + explanations.
- `src/data/xrLab.ts` → study protocol and planned experiments.
- `src/data/xrStressLabResults.ts` → measured XR stress-lab numeric results.

### Page implementations (section-level source of truth)
- Homepage sections: `src/sections/*.tsx`
- Case-study pages: `src/caseStudies/pages/*.tsx`
- Lab pages: `src/lab/pages/*.tsx`

---

## Raw media evidence map (image links)

### XR/Overdraw evidence
- `/lab/Overdraw_CPU_RenderThread_Comparison.png`
- `/lab/Overdraw_FrameDebugger_TransparentPass.png`
- `/lab/Overdraw_Experiment_Summary.png`
- `/case-studies/xr-stress-lab/overdraw-normal.png`
- `/case-studies/xr-stress-lab/overdraw-heatmap.png`
- `/case-studies/xr-stress-lab/overdraw-frame-debugger.png`

### SoftMaskPro evidence
- `/lab/SoftMaskPro_ScenarioA_Profiler_WaitForPresent.png`
- `/lab/SoftMaskPro_ScenarioA_StatsOverlay_FixedRes.png`
- `/lab/SoftMaskPro_ScenarioA_FrameDebugger_1DrawMesh.png`
- `/lab/SoftMaskPro_ScenarioB_Profiler.png`
- `/lab/SoftMaskPro_ScenarioB_StatsOverlay.png`
- `/lab/SoftMaskPro_ScenarioB_FrameDebugger_3DrawMesh.png`
- `/lab/SoftMaskPro_ScenarioC_Profiler.png`
- `/lab/SoftMaskPro_ScenarioC_StatsOverlay_13Masks.png`
- `/lab/SoftMaskPro_ScenarioC_FrameDebugger_40DrawMesh.png`
- `/lab/SoftMaskPro_Patch3_GateQueuePlayerLoopUpdate.png`
- `/lab/SoftMaskPro_DirtyLog_DirtyVerticesCallback.png`
- `/lab/SoftMaskPro_AfterPatch_Profiler_GoodCase.png`
- `/lab/SoftMaskPro_AfterPatch_Profiler_WorstCase.png`

### Update-strategies evidence
- `/case-studies/update-strategies/A/A_Lifecycle_10000_HighFire_HUD.png`
- `/case-studies/update-strategies/A/A_Lifecycle_10000_HighFire_ProfilerTimeline.png`
- `/case-studies/update-strategies/A/A_Lifecycle_10000_HighFire_ProfilerHierarchy.png`
- `/case-studies/update-strategies/B/B_PerObjectUpdate_10000_HighFire_HUD.png`
- `/case-studies/update-strategies/B/B_PerObjectUpdate_10000_HighFire_ProfilerTimeline.png`
- `/case-studies/update-strategies/B/B_PerObjectUpdate_10000_HighFire_ProfilerHierarchy.png`
- `/case-studies/update-strategies/C/C_ManagerUpdate_10000_HighFire_HUD.png`
- `/case-studies/update-strategies/C/C_ManagerUpdate_10000_HighFire_ProfilerTimeline.png`
- `/case-studies/update-strategies/C/C_ManagerUpdate_10000_HighFire_ProfilerHierarchy.png`
- `/case-studies/update-strategies/D/D_ECSUpdate_10000_HighFire_HUD.png`
- `/case-studies/update-strategies/D/D_ECSUpdate_10000_HighFire_ProfilerTimeline.png`
- `/case-studies/update-strategies/D/D_ECSUpdate_10000_HighFire_ProfilerHierarchy.png`
- `/case-studies/update-strategies/D/D_ECSUpdate_10000_HighFire_ProfilerHierarchy_ECS.png`

---

## Reusable Codex instruction template
```md
Task: Add/update [SECTION_OR_PAGE].

Source rules:
1) Pull narrative text from [projects/writing/case-study page files].
2) Pull metrics ONLY from `src/data/performanceResults.ts` and `src/data/xrStressLabResults.ts`.
3) Pull protocol definitions from `src/data/xrLab.ts`.
4) Pull links from `src/data/projects.ts`, `src/data/writing.ts`, `public/sitemap.xml`.
5) Pull media from explicit paths listed in the Raw media evidence map.
6) Keep route consistency with `src/App.tsx`.

Output format:
- Added/updated copy
- Link list (internal + external)
- Media list (path + placement)
- Metrics list (value + source file)
```

## Regular update protocol (required whenever site data changes)
1. Update route list if `src/App.tsx` changed.
2. Update canonical links if `public/sitemap.xml` changed.
3. Update raw outcome table if either `src/data/performanceResults.ts` or `src/data/xrStressLabResults.ts` changed.
4. Update protocol/experiment section if `src/data/xrLab.ts` changed.
5. Update raw media evidence paths if any image paths changed in `src/caseStudies/pages/*`, `src/lab/pages/*`, or `src/sections/*`.
6. Keep only factual statements present in source files; do not add unstated claims.

## Validation checklist
- Internal links resolve to real routes in `src/App.tsx`.
- Each raw metric has a direct source in `src/data/*.ts`.
- Each media path exists under `public/**`.
- Indexable pages remain represented in `public/sitemap.xml`.

## Exhaustive verification snapshot (2026-04-29)

### All app routes from src/App.tsx
- `/`
- `/case-studies/xr-stress-lab`
- `/case-studies/softmaskpro`
- `/case-studies/profiling-toolkit`
- `/case-studies/update-strategies-scale`
- `/case-studies/update-strategies-scale/variant-a`
- `/case-studies/update-strategies-scale/variant-b`
- `/case-studies/update-strategies-scale/variant-c`
- `/case-studies/update-strategies-scale/variant-d`
- `/case-studies/sneaky-warrior-3d`
- `/case-studies/published-mobile-projects`
- `/lab/overdraw`
- `/lab/msaa`
- `/lab/msaa-overdraw`
- `/lab/instancing`
- `/lab/frame-pacing`
- `/lab/frame-pacing-vs-fps`
- `/lab/xr-frame-timing`
- `/lab/overdraw-stereo`
- `*`

### Canonical paths found in page components
- `/`
- `https://james.alphaden.club/404`
- `https://james.alphaden.club/case-studies/profiling-toolkit`
- `https://james.alphaden.club/case-studies/published-mobile-projects`
- `https://james.alphaden.club/case-studies/softmaskpro`
- `https://james.alphaden.club/case-studies/update-strategies-scale`
- `https://james.alphaden.club/case-studies/update-strategies-scale/variant-a`
- `https://james.alphaden.club/case-studies/update-strategies-scale/variant-b`
- `https://james.alphaden.club/case-studies/update-strategies-scale/variant-c`
- `https://james.alphaden.club/case-studies/update-strategies-scale/variant-d`
- `https://james.alphaden.club/case-studies/xr-stress-lab`
- `https://james.alphaden.club/lab/frame-pacing`
- `https://james.alphaden.club/lab/frame-pacing-vs-fps`
- `https://james.alphaden.club/lab/instancing`
- `https://james.alphaden.club/lab/msaa`
- `https://james.alphaden.club/lab/msaa-overdraw`
- `https://james.alphaden.club/lab/overdraw`
- `https://james.alphaden.club/lab/overdraw-stereo`
- `https://james.alphaden.club/lab/xr-frame-timing`

### All src/data inputs
- `src/data/performanceResults.ts`
- `src/data/projects.ts`
- `src/data/shippedTitles.ts`
- `src/data/writing.ts`
- `src/data/xrLab.ts`
- `src/data/xrStressLabResults.ts`

### All image/document refs used in source code
- `/case-studies/overdraw-heatmap.png`
- `/images/Icon_3.png`
- `/images/james.jpg`
- `/lab/FramePacing_OnTarget_72FPS.png`
- `/lab/FramePacing_UnderTarget_LowFPS.png`
- `/lab/Overdraw_CPU_RenderThread_Comparison.png`
- `/lab/Overdraw_Experiment_Summary.png`
- `/lab/Overdraw_FrameDebugger_TransparentPass.png`
- `/lab/SoftMaskPro_AfterPatch_Profiler_GoodCase.png`
- `/lab/SoftMaskPro_AfterPatch_Profiler_WorstCase.png`
- `/lab/SoftMaskPro_DirtyLog_DirtyVerticesCallback.png`
- `/lab/SoftMaskPro_Patch3_GateQueuePlayerLoopUpdate.png`
- `/lab/SoftMaskPro_ScenarioA_FrameDebugger_1DrawMesh.png`
- `/lab/SoftMaskPro_ScenarioA_Profiler_WaitForPresent.png`
- `/lab/SoftMaskPro_ScenarioA_StatsOverlay_FixedRes.png`
- `/lab/SoftMaskPro_ScenarioB_FrameDebugger_3DrawMesh.png`
- `/lab/SoftMaskPro_ScenarioB_Profiler.png`
- `/lab/SoftMaskPro_ScenarioB_StatsOverlay.png`
- `/lab/SoftMaskPro_ScenarioC_FrameDebugger_40DrawMesh.png`
- `/lab/SoftMaskPro_ScenarioC_Profiler.png`
- `/lab/SoftMaskPro_ScenarioC_StatsOverlay_13Masks.png`
- `/metrics/best_improvement_acquisitions.png`
- `/metrics/best_improvement_visitors.png`
- `/resume/James%20De%20Raja%20Resume.pdf`
- `/resume/viewer.html?file=James%20De%20Raja%20Resume.pdf`

### All image/document assets present under public/
- `/AquaSpin.png`
- `/Bolt.png`
- `/case-studies/overdraw-frame-debugger.png`
- `/case-studies/overdraw-heatmap.png`
- `/case-studies/overdraw-normal.png`
- `/case-studies/update-strategies/A/A_Lifecycle_10000_HighFire_HUD.png`
- `/case-studies/update-strategies/A/A_Lifecycle_10000_HighFire_ProfilerHierarchy.png`
- `/case-studies/update-strategies/A/A_Lifecycle_10000_HighFire_ProfilerTimeline.png`
- `/case-studies/update-strategies/B/B_PerObjectUpdate_10000_HighFire_HUD.png`
- `/case-studies/update-strategies/B/B_PerObjectUpdate_10000_HighFire_ProfilerHierarchy.png`
- `/case-studies/update-strategies/B/B_PerObjectUpdate_10000_HighFire_ProfilerTimeline.png`
- `/case-studies/update-strategies/C/C_ManagerUpdate_10000_HighFire_HUD.png`
- `/case-studies/update-strategies/C/C_ManagerUpdate_10000_HighFire_ProfilerHierarchy.png`
- `/case-studies/update-strategies/C/C_ManagerUpdate_10000_HighFire_ProfilerTimeline.png`
- `/case-studies/update-strategies/D/D_ECSUpdate_10000_HighFire_HUD.png`
- `/case-studies/update-strategies/D/D_ECSUpdate_10000_HighFire_ProfilerHierarchy.png`
- `/case-studies/update-strategies/D/D_ECSUpdate_10000_HighFire_ProfilerTimeline.png`
- `/case-studies/xr-stress-lab/overdraw-frame-debugger.png`
- `/case-studies/xr-stress-lab/overdraw-heatmap.png`
- `/case-studies/xr-stress-lab/overdraw-normal.png`
- `/favicon.ico`
- `/images/AquaSpin.png`
- `/images/Bolt.png`
- `/images/ChatGPT Image Jul 14, 2025, 11_19_06 AM.png`
- `/images/ChatGPT Image Jun 19, 2025, 09_28_34 PM.jpg`
- `/images/ChatGPT Image May 16, 2025, 09_06_15 PM.png`
- `/images/DP copy.png`
- `/images/DP.png`
- `/images/Flower.png`
- `/images/News.png`
- `/images/favicon.ico`
- `/images/james.jpg`
- `/lab/FramePacing_OnTarget_72FPS.png`
- `/lab/FramePacing_UnderTarget_LowFPS.png`
- `/lab/Overdraw_CPU_RenderThread_Comparison.png`
- `/lab/Overdraw_Experiment_Summary.png`
- `/lab/Overdraw_FrameDebugger_TransparentPass.png`
- `/lab/SoftMaskPro_AfterPatch_Profiler_GoodCase.png`
- `/lab/SoftMaskPro_AfterPatch_Profiler_WorstCase.png`
- `/lab/SoftMaskPro_DirtyLog_DirtyVerticesCallback.png`
- `/lab/SoftMaskPro_Patch3_GateQueuePlayerLoopUpdate.png`
- `/lab/SoftMaskPro_ScenarioA_FrameDebugger_1DrawMesh.png`
- `/lab/SoftMaskPro_ScenarioA_Profiler_WaitForPresent.png`
- `/lab/SoftMaskPro_ScenarioA_StatsOverlay_FixedRes.png`
- `/lab/SoftMaskPro_ScenarioB_FrameDebugger_3DrawMesh.png`
- `/lab/SoftMaskPro_ScenarioB_Profiler.png`
- `/lab/SoftMaskPro_ScenarioB_StatsOverlay.png`
- `/lab/SoftMaskPro_ScenarioC_FrameDebugger_40DrawMesh.png`
- `/lab/SoftMaskPro_ScenarioC_Profiler.png`
- `/lab/SoftMaskPro_ScenarioC_StatsOverlay_13Masks.png`
- `/metrics/best_improvement_acquisitions.png`
- `/metrics/best_improvement_visitors.png`
- `/og-image.png`
- `/resume/James De Raja Resume.pdf`
- `/resume/James DeRaja Resume.pdf`
- `/resume/JamesDeRaja_Resume.pdf`
- `/resume/JamesDeRaja_Resume_Performance-Systems.pdf`
- `/resume/JamesDeRaja_Resume_Unity-Rendering-Performance.pdf`
- `/resume/JamesDeRaja_Resume_XR-Performance-Engineer.pdf`
