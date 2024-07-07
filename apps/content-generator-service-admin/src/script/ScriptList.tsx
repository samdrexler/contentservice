import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONTENTIDEA_TITLE_FIELD } from "../contentIdea/ContentIdeaTitle";
import { HOOK_TITLE_FIELD } from "../hook/HookTitle";

export const ScriptList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Scripts"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
