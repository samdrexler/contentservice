import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserPreferencesResolverBase } from "./base/userPreferences.resolver.base";
import { UserPreferences } from "./base/UserPreferences";
import { UserPreferencesService } from "./userPreferences.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserPreferences)
export class UserPreferencesResolver extends UserPreferencesResolverBase {
  constructor(
    protected readonly service: UserPreferencesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
