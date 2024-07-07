import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPreferencesServiceBase } from "./base/userPreferences.service.base";

@Injectable()
export class UserPreferencesService extends UserPreferencesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
