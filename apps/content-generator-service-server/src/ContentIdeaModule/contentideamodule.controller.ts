import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ContentIdeaModuleService } from "./contentideamodule.service";
import { ContentIdeaInput } from "../contentIdeaModule/ContentIdeaInput";

@swagger.ApiTags("contentIdeaModules")
@common.Controller("contentIdeaModules")
export class ContentIdeaModuleController {
  constructor(protected readonly service: ContentIdeaModuleService) {}

  @common.Post("/generate-content-idea")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateContentIdea(
    @common.Body()
    body: ContentIdeaInput
  ): Promise<string> {
        return this.service.GenerateContentIdea(body);
      }
}
