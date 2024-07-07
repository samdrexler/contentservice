import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TrendAnalysisList } from "./trendAnalysis/TrendAnalysisList";
import { TrendAnalysisCreate } from "./trendAnalysis/TrendAnalysisCreate";
import { TrendAnalysisEdit } from "./trendAnalysis/TrendAnalysisEdit";
import { TrendAnalysisShow } from "./trendAnalysis/TrendAnalysisShow";
import { ContentIdeaList } from "./contentIdea/ContentIdeaList";
import { ContentIdeaCreate } from "./contentIdea/ContentIdeaCreate";
import { ContentIdeaEdit } from "./contentIdea/ContentIdeaEdit";
import { ContentIdeaShow } from "./contentIdea/ContentIdeaShow";
import { HookList } from "./hook/HookList";
import { HookCreate } from "./hook/HookCreate";
import { HookEdit } from "./hook/HookEdit";
import { HookShow } from "./hook/HookShow";
import { ScriptList } from "./script/ScriptList";
import { ScriptCreate } from "./script/ScriptCreate";
import { ScriptEdit } from "./script/ScriptEdit";
import { ScriptShow } from "./script/ScriptShow";
import { UserPreferencesList } from "./userPreferences/UserPreferencesList";
import { UserPreferencesCreate } from "./userPreferences/UserPreferencesCreate";
import { UserPreferencesEdit } from "./userPreferences/UserPreferencesEdit";
import { UserPreferencesShow } from "./userPreferences/UserPreferencesShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ContentGeneratorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TrendAnalysis"
          list={TrendAnalysisList}
          edit={TrendAnalysisEdit}
          create={TrendAnalysisCreate}
          show={TrendAnalysisShow}
        />
        <Resource
          name="ContentIdea"
          list={ContentIdeaList}
          edit={ContentIdeaEdit}
          create={ContentIdeaCreate}
          show={ContentIdeaShow}
        />
        <Resource
          name="Hook"
          list={HookList}
          edit={HookEdit}
          create={HookCreate}
          show={HookShow}
        />
        <Resource
          name="Script"
          list={ScriptList}
          edit={ScriptEdit}
          create={ScriptCreate}
          show={ScriptShow}
        />
        <Resource
          name="UserPreferences"
          list={UserPreferencesList}
          edit={UserPreferencesEdit}
          create={UserPreferencesCreate}
          show={UserPreferencesShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
