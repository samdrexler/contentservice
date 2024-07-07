import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContentIdeaModuleBase } from "./base/contentIdea.module.base";
import { ContentIdeaService } from "./contentIdea.service";
import { ContentIdeaController } from "./contentIdea.controller";
import { ContentIdeaResolver } from "./contentIdea.resolver";

@Module({
  imports: [ContentIdeaModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContentIdeaController],
  providers: [ContentIdeaService, ContentIdeaResolver],
  exports: [ContentIdeaService],
})
export class ContentIdeaModule {}
