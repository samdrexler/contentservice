import { ContentIdea } from "../contentIdea/ContentIdea";

export type TrendAnalysis = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  keywords: string | null;
  platform: string | null;
  contentIdeas?: Array<ContentIdea>;
};
