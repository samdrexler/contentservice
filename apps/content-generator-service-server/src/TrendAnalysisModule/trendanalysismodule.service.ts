import { Injectable } from "@nestjs/common";
import { TrendAnalysisInput } from "../trendAnalysisModule/TrendAnalysisInput";

@Injectable()
export class TrendAnalysisModuleService {
  constructor() {}
  async AnalyzeTrends(args: TrendAnalysisInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
