import { SortOrder } from "../../util/SortOrder";

export type ScriptOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  contentIdeaId?: SortOrder;
  hookId?: SortOrder;
};
