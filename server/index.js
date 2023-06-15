require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const { OAuth2 } = google.auth;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'https://developers.google.com/oauthplayground',
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

const accessToken = new Promise((resolve, reject) => {
  oauth2Client.getAccessToken((err, token) => {
    if (err) {
      reject(err);
    }
    resolve(token);
  });
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    accessToken,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

const app = express();

// MIDDLE WARE
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist'))); // SERVE CLIENT FILES

app.post('/email', (req, res) => {
  transporter.sendMail({
    subject: `[ PORTFOLIO CONTACT ] - ${req.body.subject}`,
    text: `${req.body.email} Reached out from your portfolio site with the following message\n\n${req.body.text}`,
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
  }, (err) => {
    if (err) res.sendStatus(500);
    else res.sendStatus(201);
  });
});

app.listen(3000);
console.log('LISTENING AT PORT: 3000');
