import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";

const SidebarChat = () => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
        <div className="sidebar-chat-info">
          <h2>Jane doe</h2>
          <p>Last message ...</p>
        </div>
      </div>
    </>
  );
};

export default SidebarChat;
