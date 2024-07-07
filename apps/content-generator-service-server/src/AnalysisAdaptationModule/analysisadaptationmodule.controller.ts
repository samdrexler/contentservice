import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnalysisAdaptationModuleService } from "./analysisadaptationmodule.service";
import { AnalysisAdaptationInput } from "../analysisAdaptationModule/AnalysisAdaptationInput";

@swagger.ApiTags("analysisAdaptationModules")
@common.Controller("analysisAdaptationModules")
export class AnalysisAdaptationModuleController {
  constructor(protected readonly service: AnalysisAdaptationModuleService) {}

  @common.Post("/adapt-script")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdaptScript(
    @common.Body()
    body: AnalysisAdaptationInput
  ): Promise<string> {
        return this.service.AdaptScript(body);
      }
}
