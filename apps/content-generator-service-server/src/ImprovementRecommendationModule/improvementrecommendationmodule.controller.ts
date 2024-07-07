import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ImprovementRecommendationModuleService } from "./improvementrecommendationmodule.service";
import { ImprovementRecommendationInput } from "../improvementRecommendationModule/ImprovementRecommendationInput";

@swagger.ApiTags("improvementRecommendationModules")
@common.Controller("improvementRecommendationModules")
export class ImprovementRecommendationModuleController {
  constructor(protected readonly service: ImprovementRecommendationModuleService) {}

  @common.Post("/recommend-improvement")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RecommendImprovement(
    @common.Body()
    body: ImprovementRecommendationInput
  ): Promise<string> {
        return this.service.RecommendImprovement(body);
      }
}
