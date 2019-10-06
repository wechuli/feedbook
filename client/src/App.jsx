import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LandingPage from "./pages/landing/LandingPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NewSurvey from "./pages/newsurvey/NewSurvey";

const App = () => {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/surveys" component={DashboardPage} />
        <Route path="surveys/new" component={NewSurvey} />
      </Switch>
    </>
  );
};

export default App;
