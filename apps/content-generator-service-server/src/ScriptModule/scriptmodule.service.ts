import { Injectable } from "@nestjs/common";
import { ScriptInput } from "../scriptModule/ScriptInput";

@Injectable()
export class ScriptModuleService {
  constructor() {}
  async CreateScript(args: ScriptInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
