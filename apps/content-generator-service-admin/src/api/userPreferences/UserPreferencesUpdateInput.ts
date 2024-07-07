import { InputJsonValue } from "../../types";

export type UserPreferencesUpdateInput = {
  userId?: string | null;
  preferences?: InputJsonValue;
};
