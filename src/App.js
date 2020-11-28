import React, { useState } from "react";
import LoginPage from "./LoginPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SuperAdminDashboard from "./DashboardPages/SuperAdminDashboard";
import UserDashboard from "./DashboardPages/UserDashboard";

import "./styles.css";
import { CssBaseline } from "@material-ui/core";

export default function App() {
  // const [isNewUser, setNewUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    firstname: "",
    lastname: "",
    isSuperAdmin: false
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? (
                userInfo.isSuperAdmin ? (
                  <Redirect to="/superadmin/dashboard/events" />
                ) : (
                  <Redirect to="/user/dashboard/events" />
                )
              ) : (
                <LoginPage />
              )}
            </Route>

            <Redirect
              exact
              from="/superadmin/dashboard"
              to="/superadmin/dashboard/events"
            />
            <Redirect
              exact
              from="/user/dashboard"
              to="/user/dashboard/events"
            />

            {/* <Route exact path="/dashboard/:page?">
            {isLoggedIn ? (
              <DashboardPage isSuperAdmin={userInfo.isSuperAdmin} />
            ) : (
              <Redirect to="/" />
            )}
          </Route> */}

            <Route exact path="/user/dashboard/:page?">
              {isLoggedIn ? (
                !userInfo.isSuperAdmin ? (
                  <UserDashboard />
                ) : (
                  <Redirect to="/404" />
                )
              ) : (
                <Redirect to="/" />
              )}
            </Route>

            <Route exact path="/superadmin/dashboard/:page?">
              {isLoggedIn ? (
                userInfo.isSuperAdmin ? (
                  <SuperAdminDashboard />
                ) : (
                  <Redirect to="/404" />
                )
              ) : (
                <Redirect to="/" />
              )}
            </Route>

            <Route path="/">
              <div>404: Page not found</div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}
