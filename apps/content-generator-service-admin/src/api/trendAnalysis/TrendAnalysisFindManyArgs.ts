import { TrendAnalysisWhereInput } from "./TrendAnalysisWhereInput";
import { TrendAnalysisOrderByInput } from "./TrendAnalysisOrderByInput";

export type TrendAnalysisFindManyArgs = {
  where?: TrendAnalysisWhereInput;
  orderBy?: Array<TrendAnalysisOrderByInput>;
  skip?: number;
  take?: number;
};
