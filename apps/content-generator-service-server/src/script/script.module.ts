import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScriptModuleBase } from "./base/script.module.base";
import { ScriptService } from "./script.service";
import { ScriptController } from "./script.controller";
import { ScriptResolver } from "./script.resolver";

@Module({
  imports: [ScriptModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScriptController],
  providers: [ScriptService, ScriptResolver],
  exports: [ScriptService],
})
export class ScriptModule {}
