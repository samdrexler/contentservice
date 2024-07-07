import { Injectable } from "@nestjs/common";
import { ContentIdeaInput } from "../contentIdeaModule/ContentIdeaInput";

@Injectable()
export class ContentIdeaModuleService {
  constructor() {}
  async GenerateContentIdea(args: ContentIdeaInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
