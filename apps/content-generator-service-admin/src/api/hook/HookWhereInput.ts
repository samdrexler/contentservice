import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScriptListRelationFilter } from "../script/ScriptListRelationFilter";

export type HookWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  scripts?: ScriptListRelationFilter;
};
