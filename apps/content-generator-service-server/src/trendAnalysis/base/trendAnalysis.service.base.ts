/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  TrendAnalysis as PrismaTrendAnalysis,
  ContentIdea as PrismaContentIdea,
} from "@prisma/client";

export class TrendAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TrendAnalysisCountArgs, "select">
  ): Promise<number> {
    return this.prisma.trendAnalysis.count(args);
  }

  async trendAnalyses(
    args: Prisma.TrendAnalysisFindManyArgs
  ): Promise<PrismaTrendAnalysis[]> {
    return this.prisma.trendAnalysis.findMany(args);
  }
  async trendAnalysis(
    args: Prisma.TrendAnalysisFindUniqueArgs
  ): Promise<PrismaTrendAnalysis | null> {
    return this.prisma.trendAnalysis.findUnique(args);
  }
  async createTrendAnalysis(
    args: Prisma.TrendAnalysisCreateArgs
  ): Promise<PrismaTrendAnalysis> {
    return this.prisma.trendAnalysis.create(args);
  }
  async updateTrendAnalysis(
    args: Prisma.TrendAnalysisUpdateArgs
  ): Promise<PrismaTrendAnalysis> {
    return this.prisma.trendAnalysis.update(args);
  }
  async deleteTrendAnalysis(
    args: Prisma.TrendAnalysisDeleteArgs
  ): Promise<PrismaTrendAnalysis> {
    return this.prisma.trendAnalysis.delete(args);
  }

  async findContentIdeas(
    parentId: string,
    args: Prisma.ContentIdeaFindManyArgs
  ): Promise<PrismaContentIdea[]> {
    return this.prisma.trendAnalysis
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .contentIdeas(args);
  }
}