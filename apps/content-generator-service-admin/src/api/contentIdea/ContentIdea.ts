import { TrendAnalysis } from "../trendAnalysis/TrendAnalysis";
import { Script } from "../script/Script";

export type ContentIdea = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  trendAnalysis?: TrendAnalysis | null;
  scripts?: Array<Script>;
};
