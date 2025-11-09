import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';
import sgMail from '@sendgrid/mail';


const app = express();
app.use(cors());
app.use(express.json());

const dataPath = path.resolve('./data');

app.get('/api/profile', (req, res) => {
  const profile = JSON.parse(fs.readFileSync(path.join(dataPath, 'profile.json')));
  res.json(profile);
});

app.get('/api/books', (req, res) => {
  const books = JSON.parse(fs.readFileSync(path.join(dataPath, 'books.json')));
  res.json(books);
});

app.get('/api/publications', (req, res) => {
  const pubs = JSON.parse(fs.readFileSync(path.join(dataPath, 'publications.json')));
  res.json(pubs);
});

app.get('/api/awards', (req, res) => {
  const awards = JSON.parse(fs.readFileSync(path.join(dataPath, 'awards.json')));
  res.json(awards);
});


// POST contact -> append to data/messages.json
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/contact', async (req, res) => {
  try {
    // 1) Save to messages.json (existing behavior)
    const filePath = path.join('data', 'messages.json');
    const newMsg = { ...req.body, timestamp: new Date().toISOString() };

    let messages = [];
    if (fs.existsSync(filePath)) {
      messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    messages.push(newMsg);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    // 2) Send email notification via SendGrid (non-blocking error-safe)
    try {
      const msg = {
        to: process.env.RECIPIENT_EMAIL,
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        subject: `Website message from ${newMsg.name || 'Visitor'}`,
        text: [
          `Name: ${newMsg.name || '—'}`,
          `Email: ${newMsg.email || '—'}`,
          `Message:`,
          `${newMsg.message || '—'}`,
          ``,
          `Sent via website on ${newMsg.timestamp}`
        ].join('\n'),
        html: `<p><strong>Name:</strong> ${newMsg.name || '—'}</p>
               <p><strong>Email:</strong> ${newMsg.email || '—'}</p>
               <p><strong>Message:</strong><br/>${(newMsg.message||'—').replace(/\n/g,'<br/>')}</p>
               <p style="font-size:0.85em;color:#666">Sent via website on ${newMsg.timestamp}</p>`
      };
      await sgMail.send(msg);
      console.log('SendGrid email sent.');
    } catch (sendErr) {
      console.error('SendGrid error:', sendErr);
      // don't fail: message is already saved
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Books API
app.get('/api/books', (req, res) => {
  const books = JSON.parse(fs.readFileSync(path.join('data', 'books.json')));
  res.json(books);
});

// Publications API
app.get('/api/publications', (req, res) => {
  const pubs = JSON.parse(fs.readFileSync(path.join('data', 'publications.json')));
  res.json(pubs);
});

// Gallery API
app.get('/api/gallery', (req, res) => {
  const gallery = JSON.parse(fs.readFileSync(path.join('data', 'gallery.json')));
  res.json(gallery);
});


app.listen(5000, () => console.log('Server running on http://localhost:5000'));
