import React, { useState } from 'react';
import '../styles/ChatWidget.css'; // Optional styling

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to call the backend and fetch response from Langflow
  const callLangflowAPI = async (msg) => {
    try {
      const response = await fetch('https://sobansuz.onrender.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: msg,
        }),

      });

      const data = await response.json();
      console.log('Frontend received:', data);

      // Extract the bot's message from the deeply nested response
      const botMessage = data.output_value || "Bot did not return a readable message.";

      return botMessage;
    } catch (error) {
      console.error('Proxy API error:', error);
      return "Oops! Something went wrong.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setResponses((prev) => [...prev, { user: userMessage, bot: '...' }]);
    setMessage('');
    setLoading(true);

    const botResponse = await callLangflowAPI(userMessage);

    setResponses((prev) => {
      const updated = [...prev];
      updated[updated.length - 1].bot = botResponse;
      return updated;
    });

    setLoading(false);
  };

  return (
    <>
      <div className="chat-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>Chat with me</span>
            <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {responses.map((res, i) => (
              <div key={i} className="chat-bubble">
                <p><strong>You:</strong> {res.user}</p>
                <p><strong>Bot:</strong> {res.bot}</p>
              </div>
            ))}
            {loading && <p className="loading">Typing...</p>}
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              autoFocus
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;


// import React, { useState, useEffect } from 'react';
// import '../styles/ChatWidget.css';

// const ChatWidget = ({ alwaysOpen = false }) => {
//   const [open, setOpen] = useState(alwaysOpen);
//   const [message, setMessage] = useState('');
//   const [responses, setResponses] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (alwaysOpen) setOpen(true);
//   }, [alwaysOpen]);

//   const callLangflowAPI = async (msg) => {
//     try {
//       const response = await fetch('https://sobansuz.onrender.com/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: msg }),
//       });

//       const data = await response.json();
//       const botMessage = data.output_value || "Bot did not return a readable message.";
//       return botMessage;
//     } catch (error) {
//       console.error('Proxy API error:', error);
//       return "Oops! Something went wrong.";
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     const userMessage = message.trim();
//     setResponses((prev) => [...prev, { user: userMessage, bot: '...' }]);
//     setMessage('');
//     setLoading(true);

//     const botResponse = await callLangflowAPI(userMessage);
//     setResponses((prev) => {
//       const updated = [...prev];
//       updated[updated.length - 1].bot = botResponse;
//       return updated;
//     });

//     setLoading(false);
//   };

//   return (
//     <>
//       {!alwaysOpen && (
//         <div className="chat-button" onClick={() => setOpen(!open)}>
//           💬
//         </div>
//       )}

//       {open && (
//         <div className="chat-popup">
//           <div className="chat-header">
//             <span>Chat with me</span>
//             {!alwaysOpen && (
//               <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
//             )}
//           </div>

//           <div className="chat-body">
//             {responses.map((res, i) => (
//               <div key={i} className="chat-bubble">
//                 <p><strong>You:</strong> {res.user}</p>
//                 <p><strong>Bot:</strong> {res.bot}</p>
//               </div>
//             ))}
//             {loading && <p className="loading">Typing...</p>}
//           </div>

//           <form className="chat-form" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message..."
//               autoFocus
//             />
//             <button type="submit">Send</button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatWidget;
