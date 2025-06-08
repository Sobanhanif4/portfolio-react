import React from "react";
import ChatWidget from "../components/ChatWidget";

const ChatOnlyPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      <ChatWidget alwaysOpen={true} />
    </div>
  );
};

export default ChatOnlyPage;
    