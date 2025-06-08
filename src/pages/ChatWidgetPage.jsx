import React from "react";
import ChatWidget from "../components/ChatWidget"; // your working chatbot

const ChatWidgetPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#0f172a",
          color: "#fff",
          fontSize: "1.2rem",
          fontWeight: "bold",
          textAlign: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        AI Assistant
      </header>

      {/* Chat Area */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f8fafc",
        }}
      >
        <ChatWidget />
      </div>
    </div>
  );
};

export default ChatWidgetPage;
