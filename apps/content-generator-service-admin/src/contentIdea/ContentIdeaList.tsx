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
import { TRENDANALYSIS_TITLE_FIELD } from "../trendAnalysis/TrendAnalysisTitle";

export const ContentIdeaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ContentIdeas"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
