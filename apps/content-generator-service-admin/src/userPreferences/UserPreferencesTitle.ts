import { UserPreferences as TUserPreferences } from "../api/userPreferences/UserPreferences";

export const USERPREFERENCES_TITLE_FIELD = "userId";

export const UserPreferencesTitle = (record: TUserPreferences): string => {
  return record.userId?.toString() || String(record.id);
};
