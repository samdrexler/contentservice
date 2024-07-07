import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserPreferencesService } from "./userPreferences.service";
import { UserPreferencesControllerBase } from "./base/userPreferences.controller.base";

@swagger.ApiTags("userPreferences")
@common.Controller("userPreferences")
export class UserPreferencesController extends UserPreferencesControllerBase {
  constructor(
    protected readonly service: UserPreferencesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
