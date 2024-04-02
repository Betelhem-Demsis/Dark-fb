import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow.js";
import PeopleIcon from "@mui/icons-material/People";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import RestoreIcon from "@mui/icons-material/Restore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import FeedIcon from "@mui/icons-material/Feed";
import EventIcon from "@mui/icons-material/Event";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useStateValue } from "./StateProvider.js";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={OndemandVideoIcon} title="Videos" />
      <SidebarRow Icon={RestoreIcon} title="Memories" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" />
      <SidebarRow Icon={GroupsIcon} title="Group" />
      <SidebarRow Icon={StoreIcon} title="MarketPlace" />
      <SidebarRow Icon={FeedIcon} title="Feeds" />
      <SidebarRow Icon={EventIcon} title="Events" />
      <SidebarRow Icon={BarChartIcon} title="Ads Manager" />
      <SidebarRow Icon={FavoriteIcon} title="Fundraisers" />
      <SidebarRow Icon={ArrowDropDownIcon} title="See more" />
    </div>
  );
}

export default Sidebar;
