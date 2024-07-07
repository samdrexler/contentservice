import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { HookModuleService } from "./hookmodule.service";
import { HookInput } from "../hookModule/HookInput";

@swagger.ApiTags("hookModules")
@common.Controller("hookModules")
export class HookModuleController {
  constructor(protected readonly service: HookModuleService) {}

  @common.Post("/create-hook")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateHook(
    @common.Body()
    body: HookInput
  ): Promise<string> {
        return this.service.CreateHook(body);
      }
}
