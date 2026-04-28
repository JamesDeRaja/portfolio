export type VisualState =
  | 'college'
  | 'first-games'
  | 'hyper-casual'
  | 'publisher'
  | 'performance'
  | 'xr'
  | 'current';

export interface JourneyStageData {
  id: string;
  phase: string;
  title: string;
  description: string;
  bubbles: string[];
  metrics?: string[];
  chips?: string[];
  visualState: VisualState;
}
