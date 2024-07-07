import { HookWhereInput } from "./HookWhereInput";
import { HookOrderByInput } from "./HookOrderByInput";

export type HookFindManyArgs = {
  where?: HookWhereInput;
  orderBy?: Array<HookOrderByInput>;
  skip?: number;
  take?: number;
};
