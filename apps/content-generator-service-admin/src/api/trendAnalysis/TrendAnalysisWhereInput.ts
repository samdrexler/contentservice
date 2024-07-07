import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContentIdeaListRelationFilter } from "../contentIdea/ContentIdeaListRelationFilter";

export type TrendAnalysisWhereInput = {
  id?: StringFilter;
  keywords?: StringNullableFilter;
  platform?: StringNullableFilter;
  contentIdeas?: ContentIdeaListRelationFilter;
};
