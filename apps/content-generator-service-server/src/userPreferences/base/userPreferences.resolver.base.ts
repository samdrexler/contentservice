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
import { UserPreferences } from "./UserPreferences";
import { UserPreferencesCountArgs } from "./UserPreferencesCountArgs";
import { UserPreferencesFindManyArgs } from "./UserPreferencesFindManyArgs";
import { UserPreferencesFindUniqueArgs } from "./UserPreferencesFindUniqueArgs";
import { CreateUserPreferencesArgs } from "./CreateUserPreferencesArgs";
import { UpdateUserPreferencesArgs } from "./UpdateUserPreferencesArgs";
import { DeleteUserPreferencesArgs } from "./DeleteUserPreferencesArgs";
import { UserPreferencesService } from "../userPreferences.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserPreferences)
export class UserPreferencesResolverBase {
  constructor(
    protected readonly service: UserPreferencesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserPreferences",
    action: "read",
    possession: "any",
  })
  async _userPreferencesItemsMeta(
    @graphql.Args() args: UserPreferencesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserPreferences])
  @nestAccessControl.UseRoles({
    resource: "UserPreferences",
    action: "read",
    possession: "any",
  })
  async userPreferencesItems(
    @graphql.Args() args: UserPreferencesFindManyArgs
  ): Promise<UserPreferences[]> {
    return this.service.userPreferencesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserPreferences, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserPreferences",
    action: "read",
    possession: "own",
  })
  async userPreferences(
    @graphql.Args() args: UserPreferencesFindUniqueArgs
  ): Promise<UserPreferences | null> {
    const result = await this.service.userPreferences(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserPreferences)
  @nestAccessControl.UseRoles({
    resource: "UserPreferences",
    action: "create",
    possession: "any",
  })
  async createUserPreferences(
    @graphql.Args() args: CreateUserPreferencesArgs
  ): Promise<UserPreferences> {
    return await this.service.createUserPreferences({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserPreferences)
  @nestAccessControl.UseRoles({
    resource: "UserPreferences",
    action: "update",
    possession: "any",
  })
  async updateUserPreferences(
    @graphql.Args() args: UpdateUserPreferencesArgs
  ): Promise<UserPreferences | null> {
    try {
      return await this.service.updateUserPreferences({
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

  @graphql.Mutation(() => UserPreferences)
  @nestAccessControl.UseRoles({
    resource: "UserPreferences",
    action: "delete",
    possession: "any",
  })
  async deleteUserPreferences(
    @graphql.Args() args: DeleteUserPreferencesArgs
  ): Promise<UserPreferences | null> {
    try {
      return await this.service.deleteUserPreferences(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}