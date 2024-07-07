import { SortOrder } from "../../util/SortOrder";

export type TrendAnalysisOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  keywords?: SortOrder;
  platform?: SortOrder;
};
