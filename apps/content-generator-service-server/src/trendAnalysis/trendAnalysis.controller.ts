import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TrendAnalysisService } from "./trendAnalysis.service";
import { TrendAnalysisControllerBase } from "./base/trendAnalysis.controller.base";

@swagger.ApiTags("trendAnalyses")
@common.Controller("trendAnalyses")
export class TrendAnalysisController extends TrendAnalysisControllerBase {
  constructor(
    protected readonly service: TrendAnalysisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
