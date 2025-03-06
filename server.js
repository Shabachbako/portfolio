import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Configure CORS to allow requests from frontend (localhost:5173)
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this if the frontend is deployed elsewhere
    methods: "GET, POST",
    allowedHeaders: "Content-Type",
  })
);

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail", // You can change this to another email provider
  auth: {
    user: process.env.EMAIL_USER, // Your email (stored in .env)
    pass: process.env.EMAIL_PASS, // Your email password or app password (stored in .env)
  },
});

// Contact Form Endpoint
app.post("/send", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Email to Admin (You and Kelechi)
  const adminMailOptions = {
    from: process.env.EMAIL_USER, // Your email
    to: `${process.env.EMAIL_USER}, kelechieze2000@gmail.com`, // Both admin emails
    subject: "Someone Wants A Website Done!",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #7b28dd;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f5efff; padding: 10px; border-left: 4px solid #7b28dd;">${message}</p>
        <p>Best regards,<br/>Your Website</p>
      </div>
    `,
  };

  // Auto-Response Email to User
  const userMailOptions = {
    from: `"Kelechi Eze" <${process.env.EMAIL_USER}>`, // Your email
    to: email, // User's email
    subject: "Thank You for Contacting Me!",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center; color: #333;">
        <h2 style="color: #7b28dd;">Hello ${firstName},</h2>
        <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
        <div style="margin: 20px auto; padding: 10px; background: #f5efff; border-left: 4px solid #7b28dd; text-align: left;">
          <p><strong>Your Message:</strong></p>
          <p>${message}</p>
        </div>
        <p>In the meantime, feel free to connect with me:</p>
        <div style="display: flex; justify-content: center; gap: 10px;">
          <a href="https://facebook.com" style="color: #7b28dd; text-decoration: none;">Facebook</a> |
          <a href="https://twitter.com" style="color: #7b28dd; text-decoration: none;">Twitter</a> |
          <a href="https://linkedin.com" style="color: #7b28dd; text-decoration: none;">LinkedIn</a>
        </div>
        <p style="margin-top: 20px;">Best regards,<br/><strong>Kelechi Eze</strong></p>
      </div>
    `,
  };

  try {
    // Send email to Admin
    await transporter.sendMail(adminMailOptions);

    // Send auto-response to User
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
