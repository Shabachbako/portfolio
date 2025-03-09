import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Check for required environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ Missing EMAIL_USER or EMAIL_PASS in .env file");
  process.exit(1); // Stop server if .env is not properly configured
}

// ✅ Middleware
app.use(express.json()); // Parse JSON request bodies

// ✅ Updated CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "https://kcezeportfolio.netlify.app"],
    methods: ["GET", "POST", "OPTIONS"], // Explicitly allow methods
    allowedHeaders: ["Content-Type"],
    optionsSuccessStatus: 200, // Handle preflight requests properly
  })
);

// ✅ Handle preflight requests manually
app.options("/send", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(200);
});

// ✅ Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Contact Form Endpoint
app.post("/send", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // ✅ Validate Required Fields
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // ✅ Email to Admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: `${process.env.EMAIL_USER}, kelechieze2000@gmail.com`,
    subject: "New Contact Request - Website",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
      <br/>
      <p>Sent from your Portfolio Website</p>
    `,
  };

  // ✅ Auto-Response to User
  const userMailOptions = {
    from: `"Kelechi Eze" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank You for Reaching Out!",
    html: `
      <h2>Hello ${firstName},</h2>
      <p>Thank you for reaching out! I've received your message and will get back to you soon.</p>
      <blockquote style="background: #f9f9f9; padding: 10px;">"${message}"</blockquote>
      <p>Best regards, <br/><strong>Kelechi Eze</strong></p>
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    console.log("✅ Emails sent successfully");
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("🚨 Email sending failed:", error);
    res.status(500).json({ message: "Failed to send message", error: error.message });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
