import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TrendAnalysisResolverBase } from "./base/trendAnalysis.resolver.base";
import { TrendAnalysis } from "./base/TrendAnalysis";
import { TrendAnalysisService } from "./trendAnalysis.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TrendAnalysis)
export class TrendAnalysisResolver extends TrendAnalysisResolverBase {
  constructor(
    protected readonly service: TrendAnalysisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
