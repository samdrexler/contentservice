import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ContentIdeaTitle } from "../contentIdea/ContentIdeaTitle";
import { HookTitle } from "../hook/HookTitle";

export const ScriptEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
