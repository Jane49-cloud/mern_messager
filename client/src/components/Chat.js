import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@mui/material";
import { EmojiPicker } from "react-emoji-picker";

import axios from "axios";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@mui/icons-material";
import { Mic } from "@mui/icons-material";
const Chat = ({ messages }) => {
  const [input, setInput] = useState(" ");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const handleEmojiPicker = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  };
  const handleEmojiClick = (emoji) => {
    console.log(emoji);
    setIsEmojiPickerOpen(false);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8002/api/new-message", {
      message: input,
      name: "Jane49-cloud",
      received: false,
    });
  };

  return (
    <div className="chat">
      <div className="chart-header">
        <Avatar />
        <div className="chat-header-info">
          <h3>Jane Doe</h3>
          <p>last seen at ...</p>
        </div>
        <div className="chat-header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((message) => (
          <p
            className={`message ${message.received && "receiver"}`}
            key={message._id}>
            <span className="chat-name">{message.name}</span>
            {message.message}
            <span className="chat-timestamp">
              {new Date(message.createdAt).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </span>
          </p>
        ))}
      </div>
      <div className="chat-footer">
        <IconButton>
          <InsertEmoticon />
          {isEmojiPickerOpen && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        </IconButton>

        <form>
          <input
            placeholder="Type a message"
            type={"text"}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send Message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
