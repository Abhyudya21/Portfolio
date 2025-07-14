const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());


// 🚀 Test GET route
app.get('/', (req, res) => {
  res.send('🌐 Mail server is running. Use POST /send to send messages.');
});

// Your existing POST /send route
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  require('dotenv').config(); 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


  const mailOptions = {
    from: email,
    to: 'abhyudya007@gmail.com',
    subject: `Message from ${name}`,
    text: `Email: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send({ success: true });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log('✅ Server started on http://localhost:5000'));

console.log('USER:', process.env.EMAIL_USER);
console.log('PASS:', process.env.EMAIL_PASS ? '✅ Loaded' : '❌ Missing');
