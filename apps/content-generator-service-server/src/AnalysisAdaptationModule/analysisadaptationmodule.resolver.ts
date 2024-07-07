import * as graphql from "@nestjs/graphql";
import { AnalysisAdaptationInput } from "../analysisAdaptationModule/AnalysisAdaptationInput";
import { AnalysisAdaptationModuleService } from "./analysisadaptationmodule.service";

export class AnalysisAdaptationModuleResolver {
  constructor(protected readonly service: AnalysisAdaptationModuleService) {}

  @graphql.Mutation(() => String)
  async AdaptScript(
    @graphql.Args()
    args: AnalysisAdaptationInput
  ): Promise<string> {
    return this.service.AdaptScript(args);
  }
}
