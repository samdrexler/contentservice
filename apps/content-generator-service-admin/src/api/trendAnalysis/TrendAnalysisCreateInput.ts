import { ContentIdeaCreateNestedManyWithoutTrendAnalysesInput } from "./ContentIdeaCreateNestedManyWithoutTrendAnalysesInput";

export type TrendAnalysisCreateInput = {
  keywords?: string | null;
  platform?: string | null;
  contentIdeas?: ContentIdeaCreateNestedManyWithoutTrendAnalysesInput;
};
