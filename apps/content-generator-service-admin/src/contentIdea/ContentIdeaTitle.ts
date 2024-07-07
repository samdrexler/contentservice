import { ContentIdea as TContentIdea } from "../api/contentIdea/ContentIdea";

export const CONTENTIDEA_TITLE_FIELD = "title";

export const ContentIdeaTitle = (record: TContentIdea): string => {
  return record.title?.toString() || String(record.id);
};
