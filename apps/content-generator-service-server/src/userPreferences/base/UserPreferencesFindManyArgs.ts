/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserPreferencesWhereInput } from "./UserPreferencesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserPreferencesOrderByInput } from "./UserPreferencesOrderByInput";

@ArgsType()
class UserPreferencesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserPreferencesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserPreferencesWhereInput, { nullable: true })
  @Type(() => UserPreferencesWhereInput)
  where?: UserPreferencesWhereInput;

  @ApiProperty({
    required: false,
    type: [UserPreferencesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserPreferencesOrderByInput], { nullable: true })
  @Type(() => UserPreferencesOrderByInput)
  orderBy?: Array<UserPreferencesOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserPreferencesFindManyArgs as UserPreferencesFindManyArgs };