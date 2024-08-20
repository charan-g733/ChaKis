const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // You can use other services like 'Yahoo', 'Outlook', etc.
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

app.post('/register', async (req, res) => {
  const { name, email, domain } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Registration Confirmation',
    text: `Hello ${name},\n\nThank you for registering for the ${domain} program.\n\nBest regards,\nDevElet`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Registration successful! A confirmation email has been sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
