import { SortOrder } from "../../util/SortOrder";

export type ContentIdeaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  trendAnalysisId?: SortOrder;
};
