import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ScriptModuleService } from "./scriptmodule.service";
import { ScriptInput } from "../scriptModule/ScriptInput";

@swagger.ApiTags("scriptModules")
@common.Controller("scriptModules")
export class ScriptModuleController {
  constructor(protected readonly service: ScriptModuleService) {}

  @common.Post("/create-script")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateScript(
    @common.Body()
    body: ScriptInput
  ): Promise<string> {
        return this.service.CreateScript(body);
      }
}
