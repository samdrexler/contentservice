import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTENTIDEA_TITLE_FIELD } from "../contentIdea/ContentIdeaTitle";
import { HOOK_TITLE_FIELD } from "./HookTitle";

export const HookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Text" source="text" />
        <ReferenceManyField reference="Script" target="hookId" label="Scripts">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Content" source="content" />
            <ReferenceField
              label="ContentIdea"
              source="contentidea.id"
              reference="ContentIdea"
            >
              <TextField source={CONTENTIDEA_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Hook" source="hook.id" reference="Hook">
              <TextField source={HOOK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
