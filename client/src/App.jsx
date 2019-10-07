import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LandingPage from "./pages/landing/LandingPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NewSurvey from "./pages/newsurvey/NewSurvey";
import { fetchUser } from "./redux/auth/auth.actions";

const App = props => {
  const { fetchUsers } = props;
  console.log("fetch user", fetchUser);
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return (
    <>
      <NavBar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/surveys" component={DashboardPage} />
          <Route path="surveys/new" component={NewSurvey} />
        </Switch>
      </div>
    </>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUser)
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
