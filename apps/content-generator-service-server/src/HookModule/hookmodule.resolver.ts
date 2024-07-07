import * as graphql from "@nestjs/graphql";
import { HookInput } from "../hookModule/HookInput";
import { HookModuleService } from "./hookmodule.service";

export class HookModuleResolver {
  constructor(protected readonly service: HookModuleService) {}

  @graphql.Mutation(() => String)
  async CreateHook(
    @graphql.Args()
    args: HookInput
  ): Promise<string> {
    return this.service.CreateHook(args);
  }
}
