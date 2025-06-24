import React from "react";

function MessageList({ messages, endRef }) {
  return (
    <div className="vv-chat-app-header__message-list">
      {messages.map((msg, idx) => (
        <div key={idx} className={`message ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
}

export default MessageList;
