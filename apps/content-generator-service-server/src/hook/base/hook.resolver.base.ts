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
import { Hook } from "./Hook";
import { HookCountArgs } from "./HookCountArgs";
import { HookFindManyArgs } from "./HookFindManyArgs";
import { HookFindUniqueArgs } from "./HookFindUniqueArgs";
import { CreateHookArgs } from "./CreateHookArgs";
import { UpdateHookArgs } from "./UpdateHookArgs";
import { DeleteHookArgs } from "./DeleteHookArgs";
import { ScriptFindManyArgs } from "../../script/base/ScriptFindManyArgs";
import { Script } from "../../script/base/Script";
import { HookService } from "../hook.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Hook)
export class HookResolverBase {
  constructor(
    protected readonly service: HookService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "read",
    possession: "any",
  })
  async _hooksMeta(
    @graphql.Args() args: HookCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Hook])
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "read",
    possession: "any",
  })
  async hooks(@graphql.Args() args: HookFindManyArgs): Promise<Hook[]> {
    return this.service.hooks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Hook, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "read",
    possession: "own",
  })
  async hook(@graphql.Args() args: HookFindUniqueArgs): Promise<Hook | null> {
    const result = await this.service.hook(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Hook)
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "create",
    possession: "any",
  })
  async createHook(@graphql.Args() args: CreateHookArgs): Promise<Hook> {
    return await this.service.createHook({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Hook)
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "update",
    possession: "any",
  })
  async updateHook(@graphql.Args() args: UpdateHookArgs): Promise<Hook | null> {
    try {
      return await this.service.updateHook({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Hook)
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "delete",
    possession: "any",
  })
  async deleteHook(@graphql.Args() args: DeleteHookArgs): Promise<Hook | null> {
    try {
      return await this.service.deleteHook(args);
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
  @graphql.ResolveField(() => [Script], { name: "scripts" })
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "read",
    possession: "any",
  })
  async findScripts(
    @graphql.Parent() parent: Hook,
    @graphql.Args() args: ScriptFindManyArgs
  ): Promise<Script[]> {
    const results = await this.service.findScripts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}