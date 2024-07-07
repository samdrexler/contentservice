import { JsonValue } from "type-fest";

export type UserPreferences = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
  preferences: JsonValue;
};
