import { ContentIdeaWhereUniqueInput } from "../contentIdea/ContentIdeaWhereUniqueInput";
import { HookWhereUniqueInput } from "../hook/HookWhereUniqueInput";

export type ScriptCreateInput = {
  content?: string | null;
  contentIdea?: ContentIdeaWhereUniqueInput | null;
  hook?: HookWhereUniqueInput | null;
};
