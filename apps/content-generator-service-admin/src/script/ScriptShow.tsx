import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CONTENTIDEA_TITLE_FIELD } from "../contentIdea/ContentIdeaTitle";
import { HOOK_TITLE_FIELD } from "../hook/HookTitle";

export const ScriptShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};