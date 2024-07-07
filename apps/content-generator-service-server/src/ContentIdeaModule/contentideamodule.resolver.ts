import * as graphql from "@nestjs/graphql";
import { ContentIdeaInput } from "../contentIdeaModule/ContentIdeaInput";
import { ContentIdeaModuleService } from "./contentideamodule.service";

export class ContentIdeaModuleResolver {
  constructor(protected readonly service: ContentIdeaModuleService) {}

  @graphql.Mutation(() => String)
  async GenerateContentIdea(
    @graphql.Args()
    args: ContentIdeaInput
  ): Promise<string> {
    return this.service.GenerateContentIdea(args);
  }
}
