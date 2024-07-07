import { ContentIdeaWhereInput } from "./ContentIdeaWhereInput";
import { ContentIdeaOrderByInput } from "./ContentIdeaOrderByInput";

export type ContentIdeaFindManyArgs = {
  where?: ContentIdeaWhereInput;
  orderBy?: Array<ContentIdeaOrderByInput>;
  skip?: number;
  take?: number;
};
