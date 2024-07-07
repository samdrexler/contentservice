import * as graphql from "@nestjs/graphql";
import { TrendAnalysisInput } from "../trendAnalysisModule/TrendAnalysisInput";
import { TrendAnalysisModuleService } from "./trendanalysismodule.service";

export class TrendAnalysisModuleResolver {
  constructor(protected readonly service: TrendAnalysisModuleService) {}

  @graphql.Query(() => String)
  async AnalyzeTrends(
    @graphql.Args()
    args: TrendAnalysisInput
  ): Promise<string> {
    return this.service.AnalyzeTrends(args);
  }
}
