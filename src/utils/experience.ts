export const UNITY_GAME_DEV_START_YEAR = 2013;

export function getYearsSince(startYear: number, now = new Date()) {
  return Math.max(0, now.getFullYear() - startYear);
}

export const unityGameDevYears = getYearsSince(UNITY_GAME_DEV_START_YEAR);
export const unityGameDevYearsLabel = `${unityGameDevYears}+`;
