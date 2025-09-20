import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(helmet());
app.use(express.json({ limit: '1mb' }));

// Serve frontend (static files)
app.use(express.static(path.join(__dirname, '../public')));

// API security
app.use('/api/', rateLimit({ windowMs: 60_000, max: 30 }));
app.use(cors());

// Health check
app.get('/api/health', (_, res) => res.json({ ok: true }));

// OpenAI proxy
app.post('/api/openai/chat', async (req, res) => {
  try {
    const { messages, model = 'gpt-5-mini' } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages[] is required' });
    }
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'Missing OPENAI_API_KEY' });

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ model, messages })
    });

    const data = await r.json();
    if (!r.ok) return res.status(r.status).json({ error: data.error || data });

    res.json({ text: data?.choices?.[0]?.message?.content ?? '', raw: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Fallback: serve index.html for everything else
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
