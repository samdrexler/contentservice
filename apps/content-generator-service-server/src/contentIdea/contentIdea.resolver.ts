import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContentIdeaResolverBase } from "./base/contentIdea.resolver.base";
import { ContentIdea } from "./base/ContentIdea";
import { ContentIdeaService } from "./contentIdea.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContentIdea)
export class ContentIdeaResolver extends ContentIdeaResolverBase {
  constructor(
    protected readonly service: ContentIdeaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
