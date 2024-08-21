// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Configure Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "artistjha509@gmail.com",
      pass: "ksavznxnhdxmfiwq",
    },
  });

  // Set up email options
  let mailOptions = {
    from: email,
    to: "jhagovind348@gmail.com", // Recipient email
    subject: `Message from ${name}`,
    text: message,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, error: error.toString() });
    }
    res
      .status(200)
      .send({ success: true, message: "Email sent: " + info.response });
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
