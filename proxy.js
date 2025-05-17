// import express from 'express';
// import fetch from 'node-fetch';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/api/chat', async (req, res) => {
//   const { message } = req.body;

//   try {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [
//           {
//             role: 'system',
//             content:
//               "You are a professional and helpful customer support assistant for E-SoftHub, a company offering services like AI-generated videos and AI commercials. Greet the customer once at the beginning of the conversation, then keep responses clear, specific, and solution-focused. Avoid repeating greetings or overly polite phrases. Ask relevant questions to understand the customer’s needs and provide concise, accurate information about E-SoftHub’s services. Always maintain a friendly and respectful tone, but keep the chat simple and efficient.",
//           },
//           {
//             role: 'user',
//             content: message,
//           },
//         ],
//         temperature: 0.7,
//       }),
//     });

//     const data = await response.json();
//     const reply = data.choices?.[0]?.message?.content || 'No response';
//     res.json({ output_value: reply });
//   } catch (error) {
//     console.error('Chat API error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(3001, () => {
//   console.log(`Server listening on http://localhost:3001`);
// });

import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx1HGmnVC6OveS2c4tYOMFhpBoPJ7PNL-DJEJHFIndevIztlMm0VxTaQOSMAqwqO-Aw/exec';

// ✅ Chat API Endpoint
app.post('/api/chat', async (req, res) => {
  const { message, clientId = 'user_1' } = req.body;

  try {
    // ✅ Chat request to OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `
You are a professional and helpful customer support assistant for E-SoftHub.

Your goal is to:
- Understand the customer's needs (ask clarifying questions).
- Match them to our services: AI-generated videos, commercials, spokespersons, etc.
- Lead the conversation smoothly toward closing the deal.
- Collect all necessary client info like name, business type, budget, goals, etc.
- If they seem ready, encourage booking a meeting or confirming service interest.
- If they ask about something outside your scope, politely let them know the support team will follow up.

Guidelines:
- Greet only once at the start.
- Keep your tone friendly but efficient.
- Keep answers clear, direct, and free of fluff or repetitive politeness.
- If a user asks something technical or project-specific, say: "Let me connect you with our support team for that," and mark it for follow-up.
            `.trim(),
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'No response';

    // ✅ Save conversation to Google Sheets
    await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        clientId,
        userMessage: message,
        botReply: reply,
      }),
    });

    res.json({ output_value: reply });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3001, () => {
  console.log(`Server listening on http://localhost:3001`);
});
