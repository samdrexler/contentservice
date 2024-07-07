import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONTENTIDEA_TITLE_FIELD } from "./ContentIdeaTitle";
import { HOOK_TITLE_FIELD } from "../hook/HookTitle";
import { TRENDANALYSIS_TITLE_FIELD } from "../trendAnalysis/TrendAnalysisTitle";

export const ContentIdeaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Description" source="description" />
        <ReferenceField
          label="TrendAnalysis"
          source="trendanalysis.id"
          reference="TrendAnalysis"
        >
          <TextField source={TRENDANALYSIS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Script"
          target="contentIdeaId"
          label="Scripts"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
