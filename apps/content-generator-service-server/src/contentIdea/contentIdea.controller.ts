import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContentIdeaService } from "./contentIdea.service";
import { ContentIdeaControllerBase } from "./base/contentIdea.controller.base";

@swagger.ApiTags("contentIdeas")
@common.Controller("contentIdeas")
export class ContentIdeaController extends ContentIdeaControllerBase {
  constructor(
    protected readonly service: ContentIdeaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
