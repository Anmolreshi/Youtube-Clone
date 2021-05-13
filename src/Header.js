import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [inputsearch, setinputsearch] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtube_logo"
          />
        </Link>
      </div>
      <div className="header_input">
        <input
          onChange={(e) => setinputsearch(e.target.value)}
          value={inputsearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputsearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          alt="Anmol Reshi"
          src="https://avatars.githubusercontent.com/u/55075362?v=4"
        />
      </div>
    </div>
  );
}
