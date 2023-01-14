import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar
          src={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF1dHVmdWwlMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
        <div className="sidebar-header-right">
          <IconButton
            style={{
              borderRadius: "0.25rem",
            }}>
            <DonutLargeIcon />
          </IconButton>
          <IconButton
            style={{
              borderRadius: "0.25rem",
            }}>
            <ChatIcon />
          </IconButton>
          <IconButton
            style={{
              borderRadius: "0.25rem",
            }}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="search-container">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search or start new chat" />
        </div>
      </div>
      <div className="sidebar-chats">
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
      </div>
    </div>
  );
};

export default Sidebar;
