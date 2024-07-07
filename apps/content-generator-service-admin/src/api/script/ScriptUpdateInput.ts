import { ContentIdeaWhereUniqueInput } from "../contentIdea/ContentIdeaWhereUniqueInput";
import { HookWhereUniqueInput } from "../hook/HookWhereUniqueInput";

export type ScriptUpdateInput = {
  content?: string | null;
  contentIdea?: ContentIdeaWhereUniqueInput | null;
  hook?: HookWhereUniqueInput | null;
};
