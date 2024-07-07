import { Module } from "@nestjs/common";
import { ScriptModuleService } from "./scriptmodule.service";
import { ScriptModuleController } from "./scriptmodule.controller";
import { ScriptModuleResolver } from "./scriptmodule.resolver";

@Module({
  controllers: [ScriptModuleController],
  providers: [ScriptModuleService, ScriptModuleResolver],
  exports: [ScriptModuleService],
})
export class ScriptModuleModule {}
