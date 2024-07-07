import { TrendAnalysisWhereUniqueInput } from "../trendAnalysis/TrendAnalysisWhereUniqueInput";
import { ScriptUpdateManyWithoutContentIdeasInput } from "./ScriptUpdateManyWithoutContentIdeasInput";

export type ContentIdeaUpdateInput = {
  title?: string | null;
  description?: string | null;
  trendAnalysis?: TrendAnalysisWhereUniqueInput | null;
  scripts?: ScriptUpdateManyWithoutContentIdeasInput;
};
