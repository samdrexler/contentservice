import { Injectable } from "@nestjs/common";
import { ImprovementRecommendationInput } from "../improvementRecommendationModule/ImprovementRecommendationInput";

@Injectable()
export class ImprovementRecommendationModuleService {
  constructor() {}
  async RecommendImprovement(args: ImprovementRecommendationInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
