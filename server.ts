import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  service?: string;
  message: string;
  createdAt: string;
}

const contactStore: ContactMessage[] = [];

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json());

  // API Route: Contact Form Submission
  app.post('/api/contact', (req, res) => {
    const { name, email, service, message } = req.body || {};

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ ok: false, error: 'Name is required' });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ ok: false, error: 'Valid email is required' });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ ok: false, error: 'Message is required' });
    }

    const newMessage: ContactMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim(),
      service: service ? String(service).trim() : 'General Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    contactStore.push(newMessage);
    console.log('[API /api/contact] New contact message received:', newMessage);

    return res.status(200).json({
      ok: true,
      message: 'Thank you for your message! Vaibhav will get back to you shortly.',
      id: newMessage.id,
    });
  });

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Integrate Vite dev server middleware in non-production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
