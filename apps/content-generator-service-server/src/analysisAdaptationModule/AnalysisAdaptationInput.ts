import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class AnalysisAdaptationInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    scriptId!: string;

    @Field(() => GraphQLJSON)
    preferences!: InputJsonValue;
}

export { AnalysisAdaptationInput as AnalysisAdaptationInput };