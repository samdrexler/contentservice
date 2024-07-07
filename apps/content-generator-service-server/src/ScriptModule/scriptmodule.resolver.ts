import * as graphql from "@nestjs/graphql";
import { ScriptInput } from "../scriptModule/ScriptInput";
import { ScriptModuleService } from "./scriptmodule.service";

export class ScriptModuleResolver {
  constructor(protected readonly service: ScriptModuleService) {}

  @graphql.Mutation(() => String)
  async CreateScript(
    @graphql.Args()
    args: ScriptInput
  ): Promise<string> {
    return this.service.CreateScript(args);
  }
}
