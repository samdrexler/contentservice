import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrendAnalysisServiceBase } from "./base/trendAnalysis.service.base";

@Injectable()
export class TrendAnalysisService extends TrendAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
