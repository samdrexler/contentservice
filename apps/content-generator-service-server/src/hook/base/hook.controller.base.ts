/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HookService } from "../hook.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HookCreateInput } from "./HookCreateInput";
import { Hook } from "./Hook";
import { HookFindManyArgs } from "./HookFindManyArgs";
import { HookWhereUniqueInput } from "./HookWhereUniqueInput";
import { HookUpdateInput } from "./HookUpdateInput";
import { ScriptFindManyArgs } from "../../script/base/ScriptFindManyArgs";
import { Script } from "../../script/base/Script";
import { ScriptWhereUniqueInput } from "../../script/base/ScriptWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HookControllerBase {
  constructor(
    protected readonly service: HookService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hook })
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHook(@common.Body() data: HookCreateInput): Promise<Hook> {
    return await this.service.createHook({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        text: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Hook] })
  @ApiNestedQuery(HookFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hooks(@common.Req() request: Request): Promise<Hook[]> {
    const args = plainToClass(HookFindManyArgs, request.query);
    return this.service.hooks({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        text: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hook(
    @common.Param() params: HookWhereUniqueInput
  ): Promise<Hook | null> {
    const result = await this.service.hook({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        text: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Hook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHook(
    @common.Param() params: HookWhereUniqueInput,
    @common.Body() data: HookUpdateInput
  ): Promise<Hook | null> {
    try {
      return await this.service.updateHook({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          text: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Hook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHook(
    @common.Param() params: HookWhereUniqueInput
  ): Promise<Hook | null> {
    try {
      return await this.service.deleteHook({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          text: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/scripts")
  @ApiNestedQuery(ScriptFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "read",
    possession: "any",
  })
  async findScripts(
    @common.Req() request: Request,
    @common.Param() params: HookWhereUniqueInput
  ): Promise<Script[]> {
    const query = plainToClass(ScriptFindManyArgs, request.query);
    const results = await this.service.findScripts(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        contentIdea: {
          select: {
            id: true,
          },
        },

        hook: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/scripts")
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "update",
    possession: "any",
  })
  async connectScripts(
    @common.Param() params: HookWhereUniqueInput,
    @common.Body() body: ScriptWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scripts: {
        connect: body,
      },
    };
    await this.service.updateHook({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/scripts")
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "update",
    possession: "any",
  })
  async updateScripts(
    @common.Param() params: HookWhereUniqueInput,
    @common.Body() body: ScriptWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scripts: {
        set: body,
      },
    };
    await this.service.updateHook({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/scripts")
  @nestAccessControl.UseRoles({
    resource: "Hook",
    action: "update",
    possession: "any",
  })
  async disconnectScripts(
    @common.Param() params: HookWhereUniqueInput,
    @common.Body() body: ScriptWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scripts: {
        disconnect: body,
      },
    };
    await this.service.updateHook({
      where: params,
      data,
      select: { id: true },
    });
  }
}