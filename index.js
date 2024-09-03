const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter object using your email service details
let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider (e.g., Gmail, Outlook, etc.)
    auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.PASSWORD,  // Your email password (or App Password if 2FA is enabled)
    },
});

console.log(process.env.EMAIL);
console.log(process.env.PASSWORD)


// Set up email data
let mailOptions = {
    from: process.env.EMAIL,  // Sender's name and email address
    to: 'sukruthia132@gmail.com',           // List of recipients
    subject: 'Hello from Nodemailer',            // Subject line
    text: 'Hello world!',                        // Plain text body
    html: '<b>Hello world!</b>'                  // HTML body (optional)
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error:', error);
    }
    console.log('Email sent:', info.response);
});
