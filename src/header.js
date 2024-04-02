import React from "react";
import "./header.css";
import fblogo from "./fb-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Avatar, IconButton } from "@material-ui/core";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img src={fblogo} alt="" />
        <div className="header__input">
          <SearchIcon style={{ color: "#fff" }} />
          <input type="text" placeholder="Search Facebook"></input>
        </div>
      </div>
      <div className="header__middle">
        <div
          className="header__option 
        header__option--active"
        >
          <HomeTwoToneIcon fontSize="large" />
        </div>
        <div className="header__option">
          <OndemandVideoIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <GroupsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SportsEsportsIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <IconButton style={{ color: "#fff", background: "gray" }}>
          <AppsIcon />
        </IconButton>
        <IconButton style={{ color: "#fff", background: "gray" }}>
          <EmailIcon />
        </IconButton>
        <IconButton style={{ color: "#fff", background: "gray" }}>
          <NotificationsIcon />
        </IconButton>
        <div className="header__info">
          <Avatar src={user.photoURL} />
        </div>
      </div>
    </div>
  );
}

export default Header;
