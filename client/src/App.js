import "./App.css";
import Sidebar from "./components/sidebar";
import Chat from "./components/Chat";
import axios from "axios";
import Pusher from "pusher-js";
import { useState, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8002/api/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("61dc26dd1d38482d0bcd", {
      cluster: "ap2",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  console.log(messages);

  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
