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

// import express from 'express';
// import fetch from 'node-fetch';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 3001; // ✅ Add this line

// app.use(cors());
// app.use(express.json());

// // ✅ Replace this with your actual Google Apps Script Web App URL
// const GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx1HGmnVC6OveS2c4tYOMFhpBoPJ7PNL-DJEJHFIndevIztlMm0VxTaQOSMAqwqO-Aw/exec';

// // Keep track of the conversation for each client
// const clientConversations = {};

// // ✅ Chat API Endpoint
// app.post('/api/chat', async (req, res) => {
//   const { message, clientId = 'user_1' } = req.body;

//   try {
//     if (!clientConversations[clientId]) {
//       clientConversations[clientId] = {
//         userMessages: [],
//         botReplies: [],
//       };
//     }

//     clientConversations[clientId].userMessages.push(message);

//     const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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
//             content: `
// You are "E-Soft Assistant", a smart, friendly, and professional AI chatbot for the website esofhub.com, the official site of E-Soft Hub (Private) Limited — a digital services company.

// Your role is to:
// - Greet website visitors
// - Explain the company’s services
// - Help visitors choose the right package or solution
// - Answer frequently asked questions
// - Collect leads for the sales team

// Your tone should be:
// - Friendly and welcoming
// - Professional and confident
// - Clear and to the point
// - Casual when appropriate to build trust

// Company services include:
// 1. AI-Generated Ads & Commercials
//    - 15–30 second AI video ad for PKR 15,000
//    - Packages:
//      • Basic: 3 AI videos, 10 AI images, Facebook Ads setup & management  
//      • Standard: 5 AI videos, 10 AI images, Facebook Ads creatives + full setup  
//      • Premium: 10 AI videos, 20 AI images, complete Ads creatives + setup

// 2. AI Chatbots & AI Agents for websites and automation
// 3. Development Services (custom web and app solutions)

// Instructions for your behavior:
// 1. Greet each new visitor and introduce yourself as the E-Soft Assistant.
// 2. Briefly describe what E-Soft Hub offers.
// 3. Ask what kind of service the visitor is looking for.
// 4. Collect lead information:
//    - Name
//    - Email
//    - Their business or service need
// 5. Respond to queries clearly in under 3 sentences unless more detail is asked.
// 6. Do not repeat the same questions.
// 7. If the visitor seems unsure, suggest scheduling a free consultation or leaving their details.
// 8. Always guide the visitor to the next step (e.g., more info, consultation, or custom quote).

// You are not a generic chatbot. You are the 24/7 intelligent AI representative of a real company. Your job is to assist and generate leads — not just chat.
// `.trim(),

//           },
//           {
//             role: 'user',
//             content: message,
//           },
//         ],
//         temperature: 0.7,
//       }),
//     });

//     const data = await chatResponse.json();
//     const botReply = data.choices?.[0]?.message?.content || 'No response';

//     clientConversations[clientId].botReplies.push(botReply);

//     if (clientConversations[clientId].userMessages.length > 3) {
//       const conversationSummary = await generateConversationSummary(
//         clientConversations[clientId].userMessages,
//         clientConversations[clientId].botReplies
//       );

//       await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           timestamp: new Date().toISOString(),
//           clientId,
//           userMessage: clientConversations[clientId].userMessages.join(" "),
//           botReply,
//           notes: conversationSummary,
//         }),
//       });

//       delete clientConversations[clientId];
//     }

//     res.json({ output_value: botReply });
//   } catch (error) {
//     console.error('Chat API error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// async function generateConversationSummary(userMessages, botReplies) {
//   try {
//     const conversationText = userMessages.map((msg, i) => {
//       return `User: ${msg}\nBot: ${botReplies[i] || 'No reply from bot'}\n`;
//     }).join("\n");

//     const summaryResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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
//             content: 'You are an assistant that summarizes business conversations about AI commercials.',
//           },
//           {
//             role: 'user',
//             content: `
// Summarize the following conversation and generate a description of what the client needs for an AI commercial. Include service type, target audience, budget, deadline, and any specific notes from the client.

// Conversation:
// ${conversationText}

// Summary:
//             `.trim(),
//           },
//         ],
//         max_tokens: 200,
//         temperature: 0.7,
//       }),
//     });

//     const summaryData = await summaryResponse.json();
//     const summary = summaryData.choices?.[0]?.message?.content?.trim();

//     if (summary) {
//       return summary;
//     } else {
//       console.error('No summary generated:', summaryData);
//       return 'Could not generate summary';
//     }

//   } catch (error) {
//     console.error('Error generating summary:', error);
//     return 'Could not generate summary';
//   }
// }

// app.listen(PORT, () => {
//   console.log(`Server listening on http://localhost:${PORT}`);
// });








// import express from 'express';
// import fetch from 'node-fetch';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());

// const GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx1HGmnVC6OveS2c4tYOMFhpBoPJ7PNL-DJEJHFIndevIztlMm0VxTaQOSMAqwqO-Aw/exec';

// // This will store conversation history for each client
// const clientConversations = {};

// app.post('/api/chat', async (req, res) => {
//   const { message, clientId = 'user_1' } = req.body;

//   try {
//     // Initialize conversation history for a new client or if it's been cleared
//     if (!clientConversations[clientId]) {
//       clientConversations[clientId] = []; // Store messages in a single array
//     }

//     // Add the user's current message to the conversation history
//     clientConversations[clientId].push({ role: 'user', content: message });

//     // Construct the messages array for the OpenAI API call
//     // This will include the system prompt AND the entire conversation history for the client
//     const messagesToSend = [
//       {
//         role: 'system',
//         content: `
// You are "E-Soft Assistant", the professional AI chatbot of E-Soft Hub (Private) Limited, a digital services company.

// **Introduction & Memory:**
// - Only introduce yourself at the very beginning of the conversation. Once introduced, do NOT repeat greetings or introductions.
// - Crucially, remember the entire context of the conversation and refer to previous turns.

// **Your Primary Goals (Lead Generation & Sales Agent):**
// 1.  **Qualify Leads**: Understand the client's specific needs, potential budget, and urgency.
// 2.  **Educate & Propose**: Clearly explain E-Soft Hub's services and suggest the most relevant packages or solutions.
// 3.  **Secure Next Steps (The "Deal")**: Guide the client towards a tangible commitment by:
//     * **Booking a Consultation**: Offer a free 15-minute call with an expert for detailed discussions or tailored solutions. This is your preferred "close."
//     * **Requesting a Custom Quote/Proposal**: If their needs are unique or complex.
//     * **Sending Detailed Information**: Offer to email comprehensive details or a portfolio.

// **Operational Guidelines:**
// - Answer clearly, concisely, and directly.
// - **When presenting service packages or lists of information, use clear formatting:**
//     - **Utilize Markdown bolding (\`**text**\`) for emphasis (e.g., package names).**
//     - **Use numbered lists (\`1. Item\`) or bullet points (\`- Item\`) for clarity.**
//     - **Ensure there are extra line breaks (\`\\n\\n\`) between distinct sections, paragraphs, or between each item in a list for better visual separation.**
//     - **You may use relevant, simple emojis (e.g., ✨🚀💎) to enhance readability and appeal when listing packages.**
// - Share service and pricing info directly when asked, referring to the packages provided below.
// - Actively listen for buying signals or clear interest in a service/package.
// - Once clear interest is shown (e.g., asking about a specific package, asking for next steps, expressing a need for a service), proactively pivot to securing contact details for the next step.
// - When suggesting a consultation, explicitly ask for Name, Email, and Phone Number.
// - When offering to send a custom quote/proposal, explicitly ask for Project Description, Name, and Email.
// - When offering to send detailed info, explicitly ask for Email.
// - Help the visitor decide the best package or offer based on their stated needs.
// - If a client expresses hesitation or objections, politely address them by reiterating benefits, offering alternative solutions, or gently re-proposing a consultation to clarify concerns.
// - Always guide the user to the next logical step.

// **Company Services:**
// 1.  **AI-Generated Ads & Commercials:**
//     * PKR 15,000 for one 15–30 second AI video.
//     * **Packages for AI-Generated Ads & Commercials (present clearly):**
//         * **Basic Package** ✨: Includes 3 AI videos, 10 AI images, and Facebook Ads setup & management.
//         * **Standard Package** 🚀: Offers 5 AI videos, 10 AI images, and Facebook Ads creatives + setup.
//         * **Premium Package** 💎: Provides 10 AI videos, 20 AI images, and complete Ads creatives + setup.
//     * Explain pricing when asked. For example, the Basic Package for AI-Generated Ads & Commercials is PKR 15,000.
// 2.  **AI Chatbots & AI Agents** for automation (e.g., customer service, sales, lead gen bots)
// 3.  **Development Services** for custom web & app solutions (e.g., e-commerce, portfolios, business apps)

// **Tone:**
// - Friendly, helpful, and professional, yet approachable and casual.
// - Proactive in guiding the conversation towards lead qualification and securing the next step.

// **Avoid:**
// - Repeating intros or asking the same question more than once.
// - Being a generic chatbot; you are a specialist agent for E-Soft Hub.
// - Giving vague answers when precise information (like pricing or packages) is available.
// - Cluttering responses. Prioritize readability.
// `.trim(),
//       },
//       ...clientConversations[clientId], // Spread the existing conversation history here
//     ];

//     const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: messagesToSend, // Use the full conversation history
//         temperature: 0.7,
//         max_tokens: 300, // Increased max_tokens to allow for more elaborate closing statements
//       }),
//     });

//     const data = await chatResponse.json();
//     const botReply = data.choices?.[0]?.message?.content || 'No response';

//     // Add the bot's reply to the conversation history
//     clientConversations[clientId].push({ role: 'assistant', content: botReply });

//     // --- Lead Qualification and Google Sheet Logic ---
//     const CONVERSATION_SAVE_THRESHOLD = 8; // Adjust as needed
//     const lastBotReply = clientConversations[clientId].slice(-1)[0]?.content;   // Get last bot reply

//     // Simple heuristic for triggering a summary save (can be made more sophisticated on frontend)
//     const hasAskedForContactInfo = (lastBotReply && (
//         lastBotReply.toLowerCase().includes('email address') ||
//         lastBotReply.toLowerCase().includes('phone number') ||
//         lastBotReply.toLowerCase().includes('name') ||
//         lastBotReply.toLowerCase().includes('consultation') ||
//         lastBotReply.toLowerCase().includes('proposal')
//     ));

//     if (clientConversations[clientId].length >= CONVERSATION_SAVE_THRESHOLD || hasAskedForContactInfo) {
//         const conversationSummary = await generateConversationSummary(clientConversations[clientId]);

//         await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 timestamp: new Date().toISOString(),
//                 clientId: clientId,
//                 fullConversation: clientConversations[clientId].map(msg => `${msg.role}: ${msg.content}`).join("\n"),
//                 summaryNotes: conversationSummary,
//             }),
//         });
//         // You might consider a more sophisticated session management here if you don't want to clear history
//         // delete clientConversations[clientId]; // Uncomment if you want to clear history after saving
//     }

//     res.json({ output_value: botReply });
//   } catch (error) {
//     console.error('Chat API error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// async function generateConversationSummary(conversationHistory) {
//   try {
//     const conversationText = conversationHistory.map(msg => `${msg.role === 'user' ? 'User' : 'Bot'}: ${msg.content}`).join("\n");

//     const summaryResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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
//             content: `You are an assistant that summarizes business conversations, specifically focusing on lead qualification for digital services (AI commercials, chatbots, web/app development). Your goal is to extract key information for sales follow-up.`,
//           },
//           {
//             role: 'user',
//             content: `
// Based on the following conversation, summarize the client's interest and qualification. Focus on:
// -   **Client's Primary Interest/Service Needed**: (e.g., AI Videos, Chatbot, Web Dev, specific package)
// -   **Expressed Needs/Pain Points**: What problem are they trying to solve?
// -   **Buying Signals/Intent**: Did they ask about pricing, next steps, or a consultation?
// -   **Contact Information Collected (if any)**: Name, Email, Phone Number.
// -   **Proposed Next Step**: What did the chatbot offer or secure (e.g., Consultation, Custom Quote, Info via Email)?
// -   **Urgency/Timeline (if mentioned)**:
// -   **Any other relevant notes for a sales agent.**

// Conversation:
// ${conversationText}

// Summary:
//             `.trim(),
//           },
//         ],
//         max_tokens: 300,
//         temperature: 0.7,
//       }),
//     });

//     const summaryData = await summaryResponse.json();
//     const summary = summaryData.choices?.[0]?.message?.content?.trim();

//     return summary || 'Could not generate summary';
//   } catch (error) {
//     console.error('Error generating summary:', error);
//     return 'Could not generate summary';
//   }
// }

// app.listen(PORT, () => {
//   console.log(`Server listening on http://localhost:${PORT}`);
// });


import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx1HGmnVC6OveS2c4tYOMFhpBoPJ7PNL-DJEJHFIndevIztlMm0VxTaQOSMAqwqO-Aw/exec';

// This will store conversation history for each client
const clientConversations = {};

app.post('/api/chat', async (req, res) => {
  const { message, clientId = 'user_1' } = req.body;

  try {
    // Initialize conversation history for a new client or if it's been cleared
    if (!clientConversations[clientId]) {
      clientConversations[clientId] = [];
    }

    // Add the user's current message to the conversation history
    clientConversations[clientId].push({ role: 'user', content: message });

    // Construct the messages array for the OpenAI API call
    const messagesToSend = [
      {
        role: 'system',
        content: `
You are "E-Soft Assistant", the professional AI chatbot of E-Soft Hub (Private) Limited, a digital services company.

**Introduction & Memory:**
- Only introduce yourself at the very beginning of the conversation. Once introduced, do NOT repeat greetings or introductions.
- Crucially, remember the entire context of the conversation and refer to previous turns.

**Language Handling:**
- **Detect the user's language (English, Urdu, or Roman Urdu) and respond fluently in that same language.**
- If the user asks in English, respond in English. If they ask in Urdu script or Roman Urdu (e.g., "mujhe ad banwana hai"), respond in Urdu script.

**Your Primary Goals (Lead Generation & Sales Agent):**
1.  **Qualify Leads**: Understand the client's specific needs, potential budget, and urgency.
2.  **Educate & Propose**: Clearly explain E-Soft Hub's services and suggest the most relevant packages or solutions.
3.  **Secure Next Steps (The "Deal")**: Guide the client towards a tangible commitment by:
    * **Booking a Consultation**: Offer a free 15-minute call with an expert for detailed discussions or tailored solutions. This is your preferred "close."
    * **Requesting a Custom Quote/Proposal**: If their needs are unique or complex.
    * **Sending Detailed Information**: Offer to email comprehensive details or a portfolio.

**Operational Guidelines:**
- **Be direct and concise. Avoid excessive wording, lengthy introductions, or redundant phrases.** Get straight to the client's query.
- Answer clearly, concisely, and directly.
- When presenting service packages or lists of information, use clear formatting:
    - Utilize Markdown bolding (\`**text**\`) for emphasis (e.g., package names).
    - Use numbered lists (\`1. Item\`) or bullet points (\`- Item\`) for clarity.
    - Ensure there are extra line breaks (\`\\n\\n\`) between distinct sections, paragraphs, or between each item in a list for better visual separation.
    - You may use relevant, simple emojis (e.g., ✨🚀💎) to enhance readability and appeal when listing packages.
- Share service and pricing info directly when asked, referring to the packages provided below.
- Actively listen for buying signals or clear interest in a service/package.
- Once clear interest is shown (e.g., asking about a specific package, asking for next steps, expressing a need for a service), proactively pivot to securing contact details for the next step.
- When suggesting a consultation, explicitly ask for Name, Email, and Phone Number.
- When offering to send a custom quote/proposal, explicitly ask for Project Description, Name, and Email.
- When offering to send detailed info, explicitly ask for Email.
- Help the visitor decide the best package or offer based on their stated needs.
- If a client expresses hesitation or objections, politely address them by reiterating benefits, offering alternative solutions, or gently re-proposing a consultation to clarify concerns.
- Always guide the user to the next logical step.

**Company Services:**
1.  **AI-Generated Ads & Commercials:**
    * Price for one 15–30 second AI video is PKR 15,000.
    * **Packages for AI-Generated Ads & Commercials (present clearly):**
        * **Basic Package** ✨: Includes 3 AI videos, 10 AI images, and Facebook Ads setup & management **for PKR 15,000**.
        * **Standard Package** 🚀: Offers 5 AI videos, 10 AI images, and Facebook Ads creatives + setup.
        * **Premium Package** 💎: Provides 10 AI videos, 20 AI images, and complete Ads creatives + setup.
2.  **AI Chatbots & AI Agents** for automation (e.g., customer service, sales, lead gen bots) – we can build intelligent agents to automate your processes.
3.  **Development Services** for custom web & app solutions (e.g., e-commerce, portfolios, business apps) – if you need a bespoke digital presence.

**Tone:**
- Friendly, helpful, and professional, yet approachable and casual.
- Proactive in guiding the conversation towards lead qualification and securing the next step.

**Avoid:**
- Repeating intros or asking the same question more than once.
- Being a generic chatbot; you are a specialist agent for E-Soft Hub.
- Giving vague answers when precise information (like pricing or packages) is available.
- Cluttering responses. Prioritize readability.
- **Unnecessary small talk or excessive introductory/concluding remarks.**
`.trim(),
      },
      ...clientConversations[clientId], // Spread the existing conversation history here
    ];

    const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messagesToSend,
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    const data = await chatResponse.json();
    const botReply = data.choices?.[0]?.message?.content || 'No response';

    clientConversations[clientId].push({ role: 'assistant', content: botReply });

    const CONVERSATION_SAVE_THRESHOLD = 8;
    const lastBotReply = clientConversations[clientId].slice(-1)[0]?.content;

    const hasAskedForContactInfo = (lastBotReply && (
        lastBotReply.toLowerCase().includes('email address') ||
        lastBotReply.toLowerCase().includes('phone number') ||
        lastBotReply.toLowerCase().includes('name') ||
        lastBotReply.toLowerCase().includes('consultation') ||
        lastBotReply.toLowerCase().includes('proposal')
    ));

    if (clientConversations[clientId].length >= CONVERSATION_SAVE_THRESHOLD || hasAskedForContactInfo) {
        const conversationSummary = await generateConversationSummary(clientConversations[clientId]);

        await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                timestamp: new Date().toISOString(),
                clientId: clientId,
                fullConversation: clientConversations[clientId].map(msg => `${msg.role}: ${msg.content}`).join("\n"),
                summaryNotes: conversationSummary,
            }),
        });
    }

    res.json({ output_value: botReply });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Modified generateConversationSummary to accept the full conversation array
async function generateConversationSummary(conversationHistory) {
  try {
    const conversationText = conversationHistory.map(msg => `${msg.role === 'user' ? 'User' : 'Bot'}: ${msg.content}`).join("\n");

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
            content: `You are an assistant that summarizes business conversations, specifically focusing on lead qualification for digital services (AI commercials, chatbots, web/app development). Your goal is to extract key information for sales follow-up.`,
          },
          {
            role: 'user',
            content: `
Based on the following conversation, summarize the client's interest and qualification. Focus on:
-   **Client's Primary Interest/Service Needed**: (e.g., AI Videos, Chatbot, Web Dev, specific package)
-   **Expressed Needs/Pain Points**: What problem are they trying to solve?
-   **Buying Signals/Intent**: Did they ask about pricing, next steps, or a consultation?
-   **Contact Information Collected (if any)**: Name, Email, Phone Number.
-   **Proposed Next Step**: What did the chatbot offer or secure (e.g., Consultation, Custom Quote, Info via Email)?
-   **Urgency/Timeline (if mentioned)**:
-   **Any other relevant notes for a sales agent.**

Conversation:
${conversationText}

Summary:
            `.trim(),
          },
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    const summaryData = await summaryResponse.json();
    const summary = summaryData.choices?.[0]?.message?.content?.trim();

    return summary || 'Could not generate summary';
  } catch (error) {
    console.error('Error generating summary:', error);
    return 'Could not generate summary';
  }
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});