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
import { ContentIdeaWhereInput } from "./ContentIdeaWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContentIdeaOrderByInput } from "./ContentIdeaOrderByInput";

@ArgsType()
class ContentIdeaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContentIdeaWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContentIdeaWhereInput, { nullable: true })
  @Type(() => ContentIdeaWhereInput)
  where?: ContentIdeaWhereInput;

  @ApiProperty({
    required: false,
    type: [ContentIdeaOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContentIdeaOrderByInput], { nullable: true })
  @Type(() => ContentIdeaOrderByInput)
  orderBy?: Array<ContentIdeaOrderByInput>;

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

export { ContentIdeaFindManyArgs as ContentIdeaFindManyArgs };
