import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // Make sure this is at the top to load the environment variables

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Proxy POST request to Langflow API
app.post('/api/langflow', async (req, res) => {
  try {
    const response = await fetch(
'https://api.langflow.astra.datastax.com/lf/08ffb7ed-0759-4e04-9bec-f3ef306322ed/api/v1/run/152894d0-e9a1-4f12-916c-be0b6f0604c5',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.LANGFLOW_API_KEY}`, // Make sure your API Key is in .env file
        },
        body: JSON.stringify(req.body), // Send the incoming request body to Langflow API
      }
    );

    // Check if the response from Langflow is OK (status 200-299)
    if (!response.ok) {
      const errorText = await response.text(); // Get the detailed error message from Langflow API
      console.error('Langflow API error:', errorText);
      return res.status(response.status).json({
        error: `Langflow API returned an error: ${errorText}`,
      });
    }

    // Parse the response from Langflow API
    const data = await response.json();

    // Return the response from Langflow API to the client
    res.json(data);

  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Proxy running at http://localhost:${PORT}`);
});
