import * as graphql from "@nestjs/graphql";
import { ImprovementRecommendationInput } from "../improvementRecommendationModule/ImprovementRecommendationInput";
import { ImprovementRecommendationModuleService } from "./improvementrecommendationmodule.service";

export class ImprovementRecommendationModuleResolver {
  constructor(protected readonly service: ImprovementRecommendationModuleService) {}

  @graphql.Mutation(() => String)
  async RecommendImprovement(
    @graphql.Args()
    args: ImprovementRecommendationInput
  ): Promise<string> {
    return this.service.RecommendImprovement(args);
  }
}
