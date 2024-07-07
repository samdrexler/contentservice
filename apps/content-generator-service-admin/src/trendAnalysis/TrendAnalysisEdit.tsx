import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ContentIdeaTitle } from "../contentIdea/ContentIdeaTitle";

export const TrendAnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Keywords" multiline source="keywords" />
        <TextInput label="Platform" source="platform" />
        <ReferenceArrayInput
          source="contentIdeas"
          reference="ContentIdea"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContentIdeaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
