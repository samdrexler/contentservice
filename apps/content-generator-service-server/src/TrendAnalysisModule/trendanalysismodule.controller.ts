import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TrendAnalysisModuleService } from "./trendanalysismodule.service";
import { TrendAnalysisInput } from "../trendAnalysisModule/TrendAnalysisInput";

@swagger.ApiTags("trendAnalysisModules")
@common.Controller("trendAnalysisModules")
export class TrendAnalysisModuleController {
  constructor(protected readonly service: TrendAnalysisModuleService) {}

  @common.Post("/analyze-trends")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AnalyzeTrends(
    @common.Body()
    body: TrendAnalysisInput
  ): Promise<string> {
        return this.service.AnalyzeTrends(body);
      }
}
