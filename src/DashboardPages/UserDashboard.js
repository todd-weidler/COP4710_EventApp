import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import UserEventsPage from "./UserPages/UserEventsPage";
import UserCalendarPage from "./UserPages/UserCalendarPage";
import UserProfilePage from "./UserPages/UserProfilePage";
import UserTabs from "./UserTabs";
import Header from "./Header";

function showCurrentTab(tabIndex) {
  switch (tabIndex) {
    case 0:
      return <UserEventsPage />;
    case 1:
      return <UserCalendarPage />;
    case 2:
      return <UserProfilePage />;
    default:
      return null;
  }
}

export default function UserDashboard() {
  const { page } = useParams();
  const history = useHistory();

  const tabNames = ["events", "calendar", "profile"];

  // const indexToTabName = {
  //   events: 0,
  //   calendar: 1,
  //   profile: 2
  // }

  // const tabNameToIndex = {
  //   0: "events",
  //   1: "profile",
  //   2: "calendar"
  // }

  const [currentTab, setCurrentTab] = useState(tabNames.indexOf(page));

  const handleTabChange = (event, newTabIndex) => {
    history.push(`/user/dashboard/${tabNames[newTabIndex]}`);
    setCurrentTab(newTabIndex);
  };

  return (
    <>
      <Header
        tabs={
          <UserTabs currentTab={currentTab} handleTabChange={handleTabChange} />
        }
      />
      {showCurrentTab(currentTab)}
    </>
  );
}
