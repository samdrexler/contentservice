import { Module } from "@nestjs/common";
import { HookModuleService } from "./hookmodule.service";
import { HookModuleController } from "./hookmodule.controller";
import { HookModuleResolver } from "./hookmodule.resolver";

@Module({
  controllers: [HookModuleController],
  providers: [HookModuleService, HookModuleResolver],
  exports: [HookModuleService],
})
export class HookModuleModule {}
