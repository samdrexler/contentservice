import { SortOrder } from "../../util/SortOrder";

export type HookOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  text?: SortOrder;
};
