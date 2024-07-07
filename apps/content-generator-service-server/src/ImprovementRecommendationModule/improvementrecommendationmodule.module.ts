import { Module } from "@nestjs/common";
import { ImprovementRecommendationModuleService } from "./improvementrecommendationmodule.service";
import { ImprovementRecommendationModuleController } from "./improvementrecommendationmodule.controller";
import { ImprovementRecommendationModuleResolver } from "./improvementrecommendationmodule.resolver";

@Module({
  controllers: [ImprovementRecommendationModuleController],
  providers: [
    ImprovementRecommendationModuleService,
    ImprovementRecommendationModuleResolver
  ],
  exports: [ImprovementRecommendationModuleService],
})
export class ImprovementRecommendationModuleModule {}
