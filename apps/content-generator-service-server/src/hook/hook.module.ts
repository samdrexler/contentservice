import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HookModuleBase } from "./base/hook.module.base";
import { HookService } from "./hook.service";
import { HookController } from "./hook.controller";
import { HookResolver } from "./hook.resolver";

@Module({
  imports: [HookModuleBase, forwardRef(() => AuthModule)],
  controllers: [HookController],
  providers: [HookService, HookResolver],
  exports: [HookService],
})
export class HookModule {}
