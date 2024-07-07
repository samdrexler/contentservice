import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContentIdeaWhereUniqueInput } from "../contentIdea/ContentIdeaWhereUniqueInput";
import { HookWhereUniqueInput } from "../hook/HookWhereUniqueInput";

export type ScriptWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  contentIdea?: ContentIdeaWhereUniqueInput;
  hook?: HookWhereUniqueInput;
};
