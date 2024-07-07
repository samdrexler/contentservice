import { ContentIdea } from "../contentIdea/ContentIdea";
import { Hook } from "../hook/Hook";

export type Script = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  contentIdea?: ContentIdea | null;
  hook?: Hook | null;
};
