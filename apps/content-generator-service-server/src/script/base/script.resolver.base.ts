/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Script } from "./Script";
import { ScriptCountArgs } from "./ScriptCountArgs";
import { ScriptFindManyArgs } from "./ScriptFindManyArgs";
import { ScriptFindUniqueArgs } from "./ScriptFindUniqueArgs";
import { CreateScriptArgs } from "./CreateScriptArgs";
import { UpdateScriptArgs } from "./UpdateScriptArgs";
import { DeleteScriptArgs } from "./DeleteScriptArgs";
import { ContentIdea } from "../../contentIdea/base/ContentIdea";
import { Hook } from "../../hook/base/Hook";
import { ScriptService } from "../script.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Script)
export class ScriptResolverBase {
  constructor(
    protected readonly service: ScriptService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "read",
    possession: "any",
  })
  async _scriptsMeta(
    @graphql.Args() args: ScriptCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Script])
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "read",
    possession: "any",
  })
  async scripts(@graphql.Args() args: ScriptFindManyArgs): Promise<Script[]> {
    return this.service.scripts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Script, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "read",
    possession: "own",
  })
  async script(
    @graphql.Args() args: ScriptFindUniqueArgs
  ): Promise<Script | null> {
    const result = await this.service.script(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Script)
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "create",
    possession: "any",
  })
  async createScript(@graphql.Args() args: CreateScriptArgs): Promise<Script> {
    return await this.service.createScript({
      ...args,
      data: {
        ...args.data,

        contentIdea: args.data.contentIdea
          ? {
              connect: args.data.contentIdea,
            }
          : undefined,

        hook: args.data.hook
          ? {
              connect: args.data.hook,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Script)
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "update",
    possession: "any",
  })
  async updateScript(
    @graphql.Args() args: UpdateScriptArgs
  ): Promise<Script | null> {
    try {
      return await this.service.updateScript({
        ...args,
        data: {
          ...args.data,

          contentIdea: args.data.contentIdea
            ? {
                connect: args.data.contentIdea,
              }
            : undefined,

          hook: args.data.hook
            ? {
                connect: args.data.hook,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Script)
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "delete",
    possession: "any",
  })
  async deleteScript(
    @graphql.Args() args: DeleteScriptArgs
  ): Promise<Script | null> {
    try {
      return await this.service.deleteScript(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ContentIdea, {
    nullable: true,
    name: "contentIdea",
  })
  @nestAccessControl.UseRoles({
    resource: "ContentIdea",
    action: "read",
    possession: "any",
  })
  async getContentIdea(
    @graphql.Parent() parent: Script
  ): Promise<ContentIdea | null> {
    const result = await this.service.getContentIdea(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Hook, {
    nullable: true,
    name: "hook",
  })
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "read",
    possession: "any",
  })
  async getHook(@graphql.Parent() parent: Script): Promise<Hook | null> {
    const result = await this.service.getHook(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}