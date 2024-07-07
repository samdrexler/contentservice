import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContentIdeaServiceBase } from "./base/contentIdea.service.base";

@Injectable()
export class ContentIdeaService extends ContentIdeaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
