import { TrendAnalysis as TTrendAnalysis } from "../api/trendAnalysis/TrendAnalysis";

export const TRENDANALYSIS_TITLE_FIELD = "platform";

export const TrendAnalysisTitle = (record: TTrendAnalysis): string => {
  return record.platform?.toString() || String(record.id);
};
