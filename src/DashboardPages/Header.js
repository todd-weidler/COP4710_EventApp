import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {},
  toolBar: {},
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    fontFamily: "Roboto"
  },
  logoutButton: {
    // boxShadow: "none"
    // "&:hover": {
    //   backgroundColor: theme.palette.primary
    // }
  }
}));

export default function Header({ tabs }) {
  const classes = useStyles();

  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography
            className={classes.title}
            variant="h5"
            color="inherit"
            noWrap
          >
            Event App
          </Typography>

          <Button
            className={classes.logoutButton}
            variant="contained"
            color="secondary"
            disableElevation
          >
            Log out
          </Button>
        </Toolbar>

        {tabs}
        {/* {props.children} */}
        {/* {isSuperAdmin ? (
          <SuperAdminTabs {...handleChange} {...currentTab} />
        ) : (
          <UserTabs {...handleChange} {...currentTab} />
        )} */}

        {/* {() => showCurrentTab(isSuperAdmin, currentTab)} */}

        {/* <Route exact path="/dashboard/calendar">
          // {isLoggedIn ? <div>Calendar</div> : <Redirect to="/dashboard" />}
          //{" "}
        </Route> */}
      </AppBar>
    </>
  );
}
