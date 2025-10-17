import React, { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [delay, setDelay] = useState(5);
  const [isSending, setIsSending] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [sentMessage, setSendMessage] = useState("");
  console.log(message);
  const handleSend = () => {
    setIsSending(true);
    const id = setTimeout(() => {
      setSendMessage(message);
      setMessage("");
      setIsSending(false);
    }, delay * 1000);
    setTimerId(id);
  };
  const handleCancel = () => {
    if (timerId) clearTimeout(timerId);
    setIsSending(false);
  };

  return (
    <div className="chat">
      <div className="chatApp">
        <textarea
          placeholder="Enter your text..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
          placeholder="Enter your delay time.."
        />
        {!isSending ? (
          <button onClick={handleSend}>Sent with delay</button>
        ) : (
          <button onClick={handleCancel}>Cancel Message</button>
        )}

        {sentMessage && (
          <div>
            <h3>Message received</h3>
            <p>{sentMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
