import { InputJsonValue } from "../../types";

export type UserPreferencesCreateInput = {
  userId?: string | null;
  preferences?: InputJsonValue;
};
