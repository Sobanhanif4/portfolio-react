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

// Keep track of the conversation for each client
const clientConversations = {};

// ✅ Chat API Endpoint
app.post('/api/chat', async (req, res) => {
  const { message, clientId = 'user_1' } = req.body;

  try {
    // Initialize conversation if it doesn't exist
    if (!clientConversations[clientId]) {
      clientConversations[clientId] = {
        userMessages: [],
        botReplies: [],
      };
    }

    // Store the conversation message from the user
    clientConversations[clientId].userMessages.push(message);
    
    // ✅ Chat request to OpenAI to get the bot's response
    const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // or 'gpt-4'
        messages: [
          {
            role: 'system',
            content: `
You are a professional customer support assistant for E-SoftHub. Your goal is to collect information about the client's needs for an AI commercial, including service type, target audience, budget, and any other specific requirements. Use this information to generate a summary of the client's needs once enough information is provided.
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

    // Store the bot's reply
    clientConversations[clientId].botReplies.push(botReply);

    // Check if the conversation is complete enough to generate a summary
    // (e.g., If we have collected service type, target audience, budget, and deadline)
    if (clientConversations[clientId].userMessages.length > 3) { // Arbitrary threshold (3 messages here)
      const conversationSummary = await generateConversationSummary(clientConversations[clientId].userMessages, clientConversations[clientId].botReplies);

      // Send the conversation data to Google Sheets along with the AI-generated summary
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          clientId,
          userMessage: clientConversations[clientId].userMessages.join(" "),
          botReply: botReply,
          notes: conversationSummary, // AI-generated summary
        }),
      });

      // Reset conversation for this client after processing
      delete clientConversations[clientId];
    }

    res.json({ output_value: botReply });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Generate a summary of the conversation using OpenAI GPT
async function generateConversationSummary(userMessages, botReplies) {
  try {
    // Build the conversation text in the proper format.
    const conversationText = userMessages.map((msg, i) => {
      return `User: ${msg}\nBot: ${botReplies[i] || 'No reply from bot'}\n`;
    }).join("\n");

    console.log('Conversation Text:', conversationText);
    // Add clear instructions to the prompt.
    const prompt = `
Summarize the following conversation and generate a description of what the client needs for an AI commercial. Include service type, target audience, budget, deadline, and any specific notes from the client.

Conversation:
${conversationText}

Summary:
    `.trim();

    // Request summary from OpenAI with improved prompt.
    const summaryResponse = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // You can try 'gpt-4' as well
        prompt: prompt,
        max_tokens: 150,  // Adjust tokens if necessary
        temperature: 0.7,  // Keeps responses coherent but creative
      }),
    });

    // Check if the response is successful
    const summaryData = await summaryResponse.json();
    const summary = summaryData.choices[0]?.text?.trim();

    // Check if we got a valid summary
    if (summary) {
      return summary;
    } else {
      console.error('No summary generated');
      return 'Could not generate summary';
    }

  } catch (error) {
    console.error('Error generating summary:', error);
    return 'Could not generate summary';
  }
}



