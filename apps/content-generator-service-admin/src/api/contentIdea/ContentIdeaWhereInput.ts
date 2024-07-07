import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TrendAnalysisWhereUniqueInput } from "../trendAnalysis/TrendAnalysisWhereUniqueInput";
import { ScriptListRelationFilter } from "../script/ScriptListRelationFilter";

export type ContentIdeaWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  trendAnalysis?: TrendAnalysisWhereUniqueInput;
  scripts?: ScriptListRelationFilter;
};
