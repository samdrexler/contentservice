import { Injectable } from "@nestjs/common";
import { HookInput } from "../hookModule/HookInput";

@Injectable()
export class HookModuleService {
  constructor() {}
  async CreateHook(args: HookInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
