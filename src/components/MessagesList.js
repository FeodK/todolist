import React from "react";

function Message({ id, text }) {
  return (
    <div className="message">
      <p>{text}</p>
    </div>
  );
}

export default function MessagesList({ messages }) {
  return (
    <div>
      {messages.map((message) => (
        <Message key={message.id} id={message.id} text={message.text} />
      ))}
    </div>
  );
}
