import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserPreferencesModuleBase } from "./base/userPreferences.module.base";
import { UserPreferencesService } from "./userPreferences.service";
import { UserPreferencesController } from "./userPreferences.controller";
import { UserPreferencesResolver } from "./userPreferences.resolver";

@Module({
  imports: [UserPreferencesModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserPreferencesController],
  providers: [UserPreferencesService, UserPreferencesResolver],
  exports: [UserPreferencesService],
})
export class UserPreferencesModule {}
