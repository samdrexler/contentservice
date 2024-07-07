import { ScriptCreateNestedManyWithoutHooksInput } from "./ScriptCreateNestedManyWithoutHooksInput";

export type HookCreateInput = {
  text?: string | null;
  scripts?: ScriptCreateNestedManyWithoutHooksInput;
};
