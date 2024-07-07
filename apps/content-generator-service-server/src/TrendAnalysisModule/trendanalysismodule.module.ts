import { Module } from "@nestjs/common";
import { TrendAnalysisModuleService } from "./trendanalysismodule.service";
import { TrendAnalysisModuleController } from "./trendanalysismodule.controller";
import { TrendAnalysisModuleResolver } from "./trendanalysismodule.resolver";

@Module({
  controllers: [TrendAnalysisModuleController],
  providers: [TrendAnalysisModuleService, TrendAnalysisModuleResolver],
  exports: [TrendAnalysisModuleService],
})
export class TrendAnalysisModuleModule {}
