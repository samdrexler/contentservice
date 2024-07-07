import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TrendAnalysisModuleBase } from "./base/trendAnalysis.module.base";
import { TrendAnalysisService } from "./trendAnalysis.service";
import { TrendAnalysisController } from "./trendAnalysis.controller";
import { TrendAnalysisResolver } from "./trendAnalysis.resolver";

@Module({
  imports: [TrendAnalysisModuleBase, forwardRef(() => AuthModule)],
  controllers: [TrendAnalysisController],
  providers: [TrendAnalysisService, TrendAnalysisResolver],
  exports: [TrendAnalysisService],
})
export class TrendAnalysisModule {}
