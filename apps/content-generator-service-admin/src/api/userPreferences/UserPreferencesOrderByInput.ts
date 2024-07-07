import { SortOrder } from "../../util/SortOrder";

export type UserPreferencesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  preferences?: SortOrder;
};
