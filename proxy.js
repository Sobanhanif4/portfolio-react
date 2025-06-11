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
const PORT = process.env.PORT || 3001; // ✅ Add this line

app.use(cors());
app.use(express.json());

// ✅ Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx1HGmnVC6OveS2c4tYOMFhpBoPJ7PNL-DJEJHFIndevIztlMm0VxTaQOSMAqwqO-Aw/exec';

// Keep track of the conversation for each client
const clientConversations = {};

// ✅ Chat API Endpoint
app.post('/api/chat', async (req, res) => {
  const { message, clientId = 'user_1' } = req.body;

  try {
    if (!clientConversations[clientId]) {
      clientConversations[clientId] = {
        userMessages: [],
        botReplies: [],
      };
    }

    clientConversations[clientId].userMessages.push(message);

    const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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
You are "E-Soft Assistant", a smart, friendly, and professional AI chatbot for the website esofhub.com, the official site of E-Soft Hub (Private) Limited — a digital services company.

Your role is to:
- Greet website visitors
- Explain the company’s services
- Help visitors choose the right package or solution
- Answer frequently asked questions
- Collect leads for the sales team

Your tone should be:
- Friendly and welcoming
- Professional and confident
- Clear and to the point
- Casual when appropriate to build trust

Company services include:
1. AI-Generated Ads & Commercials
   - 15–30 second AI video ad for PKR 15,000
   - Packages:
     • Basic: 3 AI videos, 10 AI images, Facebook Ads setup & management  
     • Standard: 5 AI videos, 10 AI images, Facebook Ads creatives + full setup  
     • Premium: 10 AI videos, 20 AI images, complete Ads creatives + setup

2. AI Chatbots & AI Agents for websites and automation
3. Development Services (custom web and app solutions)

Instructions for your behavior:
1. Greet each new visitor and introduce yourself as the E-Soft Assistant.
2. Briefly describe what E-Soft Hub offers.
3. Ask what kind of service the visitor is looking for.
4. Collect lead information:
   - Name
   - Email
   - Their business or service need
5. Respond to queries clearly in under 3 sentences unless more detail is asked.
6. Do not repeat the same questions.
7. If the visitor seems unsure, suggest scheduling a free consultation or leaving their details.
8. Always guide the visitor to the next step (e.g., more info, consultation, or custom quote).

You are not a generic chatbot. You are the 24/7 intelligent AI representative of a real company. Your job is to assist and generate leads — not just chat.
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

    const data = await chatResponse.json();
    const botReply = data.choices?.[0]?.message?.content || 'No response';

    clientConversations[clientId].botReplies.push(botReply);

    if (clientConversations[clientId].userMessages.length > 3) {
      const conversationSummary = await generateConversationSummary(
        clientConversations[clientId].userMessages,
        clientConversations[clientId].botReplies
      );

      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          clientId,
          userMessage: clientConversations[clientId].userMessages.join(" "),
          botReply,
          notes: conversationSummary,
        }),
      });

      delete clientConversations[clientId];
    }

    res.json({ output_value: botReply });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function generateConversationSummary(userMessages, botReplies) {
  try {
    const conversationText = userMessages.map((msg, i) => {
      return `User: ${msg}\nBot: ${botReplies[i] || 'No reply from bot'}\n`;
    }).join("\n");

    const summaryResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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
            content: 'You are an assistant that summarizes business conversations about AI commercials.',
          },
          {
            role: 'user',
            content: `
Summarize the following conversation and generate a description of what the client needs for an AI commercial. Include service type, target audience, budget, deadline, and any specific notes from the client.

Conversation:
${conversationText}

Summary:
            `.trim(),
          },
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    const summaryData = await summaryResponse.json();
    const summary = summaryData.choices?.[0]?.message?.content?.trim();

    if (summary) {
      return summary;
    } else {
      console.error('No summary generated:', summaryData);
      return 'Could not generate summary';
    }

  } catch (error) {
    console.error('Error generating summary:', error);
    return 'Could not generate summary';
  }
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});




