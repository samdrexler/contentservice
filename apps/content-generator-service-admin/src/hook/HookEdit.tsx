import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScriptTitle } from "../script/ScriptTitle";

export const HookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Text" multiline source="text" />
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
