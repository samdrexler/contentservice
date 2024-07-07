import { UserPreferencesWhereInput } from "./UserPreferencesWhereInput";
import { UserPreferencesOrderByInput } from "./UserPreferencesOrderByInput";

export type UserPreferencesFindManyArgs = {
  where?: UserPreferencesWhereInput;
  orderBy?: Array<UserPreferencesOrderByInput>;
  skip?: number;
  take?: number;
};
