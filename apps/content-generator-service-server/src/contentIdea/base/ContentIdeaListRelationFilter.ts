/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContentIdeaWhereInput } from "./ContentIdeaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContentIdeaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContentIdeaWhereInput,
  })
  @ValidateNested()
  @Type(() => ContentIdeaWhereInput)
  @IsOptional()
  @Field(() => ContentIdeaWhereInput, {
    nullable: true,
  })
  every?: ContentIdeaWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContentIdeaWhereInput,
  })
  @ValidateNested()
  @Type(() => ContentIdeaWhereInput)
  @IsOptional()
  @Field(() => ContentIdeaWhereInput, {
    nullable: true,
  })
  some?: ContentIdeaWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContentIdeaWhereInput,
  })
  @ValidateNested()
  @Type(() => ContentIdeaWhereInput)
  @IsOptional()
  @Field(() => ContentIdeaWhereInput, {
    nullable: true,
  })
  none?: ContentIdeaWhereInput;
}
export { ContentIdeaListRelationFilter as ContentIdeaListRelationFilter };
