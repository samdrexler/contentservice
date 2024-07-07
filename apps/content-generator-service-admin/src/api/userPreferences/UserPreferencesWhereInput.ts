import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserPreferencesWhereInput = {
  id?: StringFilter;
  userId?: StringNullableFilter;
  preferences?: JsonFilter;
};
