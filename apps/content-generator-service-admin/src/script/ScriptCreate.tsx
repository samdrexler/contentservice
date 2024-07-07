import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ContentIdeaTitle } from "../contentIdea/ContentIdeaTitle";
import { HookTitle } from "../hook/HookTitle";

export const ScriptCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <ReferenceInput
          source="contentIdea.id"
          reference="ContentIdea"
          label="ContentIdea"
        >
          <SelectInput optionText={ContentIdeaTitle} />
        </ReferenceInput>
        <ReferenceInput source="hook.id" reference="Hook" label="Hook">
          <SelectInput optionText={HookTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
