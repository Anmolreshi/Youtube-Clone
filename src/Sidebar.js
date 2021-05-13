import React from "react";
import Siderow from "./Siderow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMore";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Siderow selected Icon={HomeIcon} title="Home" />
      <Siderow Icon={WhatshotIcon} title="Trending" />
      <Siderow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <Siderow Icon={VideoLibraryIcon} title="Library" />
      <Siderow Icon={HistoryIcon} title="History" />
      <Siderow Icon={OndemandVideoIcon} title="Your Videos" />
      <Siderow Icon={WatchLaterIcon} title="Watch Later" />
      <Siderow Icon={ThumbUpAltOutlinedIcon} title="Liked Video" />
      <Siderow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  );
}
