import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TrendAnalysisTitle } from "../trendAnalysis/TrendAnalysisTitle";
import { ScriptTitle } from "../script/ScriptTitle";

export const ContentIdeaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
