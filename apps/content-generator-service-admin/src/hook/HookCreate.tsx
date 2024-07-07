import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScriptTitle } from "../script/ScriptTitle";

export const HookCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
