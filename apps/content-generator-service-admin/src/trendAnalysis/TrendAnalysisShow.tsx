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

import { TRENDANALYSIS_TITLE_FIELD } from "./TrendAnalysisTitle";

export const TrendAnalysisShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Keywords" source="keywords" />
        <TextField label="Platform" source="platform" />
        <ReferenceManyField
          reference="ContentIdea"
          target="trendAnalysisId"
          label="ContentIdeas"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
