// import React, { useState } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import makeStyles from "@material-ui/core/styles/makeStyles";
// import Button from "@material-ui/core/Button";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import { Link, Route, Redirect } from "react-router-dom";
// import { CssBaseline } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minWidth: "300px"
//   },
//   appBar: {},
//   toolBar: {},
//   title: {
//     flexGrow: 1,
//     marginLeft: theme.spacing(3)
//   },
//   logoutButton: {
//     // "&:hover": {
//     //   backgroundColor: theme.palette.primary
//     // }
//   },
//   leftMenu: {}
// }));

// export default function SuperAdminDashboard({ isLoggedIn }) {
//   const classes = useStyles();

//   const [pageIndex, setPageIndex] = React.useState(0);

//   const handleChange = (event, newPageIndex) => {
//     setPageIndex(newPageIndex);
//   };

//   return (
//     <>
//       <CssBaseline />
//       <div className={classes.root}>
//         <AppBar position="static" color="default" className={classes.appBar}>
//           <Toolbar className={classes.toolBar}>
//             <Typography
//               className={classes.title}
//               variant="h5"
//               color="inherit"
//               noWrap
//             >
//               Event App
//             </Typography>

//             <Button
//               className={classes.logoutButton}
//               variant="outlined"
//               color="primary"
//             >
//               Log out
//             </Button>
//           </Toolbar>
//           <Tabs variant="fullWidth" value={pageIndex} onChange={handleChange}>
//             {/* <Tab
//               component="a"
//               onClick={(event) => {
//                 event.preventDefault();
//               }}
//             /> */}
//             <Tab component={Link} label="Page One" to="/dashboard" />
//             <Tab component={Link} label="Page Two" to="/dashboard/calendar" />
//           </Tabs>

//           <Route exact path="/dashboard/calendar">
//             {isLoggedIn ? <div>Calendar</div> : <Redirect to="/dashboard" />}
//           </Route>
//         </AppBar>
//       </div>
//     </>

//   );
// }

import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import SuperAdminTabs from "./SuperAdminTabs";
import Header from "./Header";
import SuperAdminEventsPage from "./SuperAdminPages/SuperAdminEventsPage";
import SuperAdminLocationsPage from "./SuperAdminPages/SuperAdminLocationsPage";
import SuperAdminUsersPage from "./SuperAdminPages/SuperAdminUsersPage";
import SuperAdminCalendarPage from "./SuperAdminPages/SuperAdminCalendarPage";

function showCurrentTab(tabIndex) {
  switch (tabIndex) {
    case 0:
      return <SuperAdminEventsPage />;
    case 1:
      return <SuperAdminLocationsPage />;
    case 2:
      return <SuperAdminUsersPage />;
    case 3:
      return <SuperAdminCalendarPage />;
    default:
      return null;
  }
}

export default function SuperAdminDashboard() {
  const { page } = useParams();
  const history = useHistory();

  const tabNames = ["events", "locations", "users", "calendar"];

  // const pageToTabIndex = {
  //   events: 0,
  //   locations: 1,
  //   users: 2,
  //   calendar: 3
  // };

  const [currentTab, setCurrentTab] = useState(tabNames.indexOf(page));

  const handleTabChange = (event, newTabIndex) => {
    history.push(`/superadmin/dashboard/${tabNames[newTabIndex]}`);
    setCurrentTab(newTabIndex);
  };

  return (
    <>
      {/* <Header>
        <SuperAdminTabs
          currentTab={currentTab}
          handleTabChange={handleTabChange}
        />
      </Header> */}
      <Header
        tabs={
          <SuperAdminTabs
            currentTab={currentTab}
            handleTabChange={handleTabChange}
          />
        }
      />
      {showCurrentTab(currentTab)}
    </>
  );
}
