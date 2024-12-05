const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Simple validation function
const validateContactInput = ({ firstName, lastName, email, message }) => {
    if (!firstName || !lastName || !email || !message) return false;
    // Simple regex for email validation
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
};

router.post('/', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!validateContactInput({ firstName, lastName, email, message })) {
        return res.status(400).send('Invalid input');
    }

    const mailOptions = {
        from: process.env.EMAIL_USER, // Recommended: use your own email here
        to: process.env.EMAIL_USER, // Your email where you'll receive messages
        subject: `New Contact from ${firstName} ${lastName}`,
        text: `
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${phone || 'Not provided'}
            Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).send('Failed to send email');
    }
});

module.exports = router;
