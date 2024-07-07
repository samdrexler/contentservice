import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TrendAnalysisTitle } from "../trendAnalysis/TrendAnalysisTitle";
import { ScriptTitle } from "../script/ScriptTitle";

export const ContentIdeaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="trendAnalysis.id"
          reference="TrendAnalysis"
          label="TrendAnalysis"
        >
          <SelectInput optionText={TrendAnalysisTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="scripts"
          reference="Script"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScriptTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
