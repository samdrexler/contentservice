import { Module } from "@nestjs/common";
import { AnalysisAdaptationModuleService } from "./analysisadaptationmodule.service";
import { AnalysisAdaptationModuleController } from "./analysisadaptationmodule.controller";
import { AnalysisAdaptationModuleResolver } from "./analysisadaptationmodule.resolver";

@Module({
  controllers: [AnalysisAdaptationModuleController],
  providers: [AnalysisAdaptationModuleService, AnalysisAdaptationModuleResolver],
  exports: [AnalysisAdaptationModuleService],
})
export class AnalysisAdaptationModuleModule {}
