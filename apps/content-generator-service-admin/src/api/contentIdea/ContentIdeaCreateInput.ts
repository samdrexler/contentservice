import { TrendAnalysisWhereUniqueInput } from "../trendAnalysis/TrendAnalysisWhereUniqueInput";
import { ScriptCreateNestedManyWithoutContentIdeasInput } from "./ScriptCreateNestedManyWithoutContentIdeasInput";

export type ContentIdeaCreateInput = {
  title?: string | null;
  description?: string | null;
  trendAnalysis?: TrendAnalysisWhereUniqueInput | null;
  scripts?: ScriptCreateNestedManyWithoutContentIdeasInput;
};
