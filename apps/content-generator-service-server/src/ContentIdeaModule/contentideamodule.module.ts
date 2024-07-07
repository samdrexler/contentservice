import { Module } from "@nestjs/common";
import { ContentIdeaModuleService } from "./contentideamodule.service";
import { ContentIdeaModuleController } from "./contentideamodule.controller";
import { ContentIdeaModuleResolver } from "./contentideamodule.resolver";

@Module({
  controllers: [ContentIdeaModuleController],
  providers: [ContentIdeaModuleService, ContentIdeaModuleResolver],
  exports: [ContentIdeaModuleService],
})
export class ContentIdeaModuleModule {}
