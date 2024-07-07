import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ContentIdeaTitle } from "../contentIdea/ContentIdeaTitle";

export const TrendAnalysisCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
