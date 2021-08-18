const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
require("dotenv").config();

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.CONTACT_USER,
    pass: process.env.CONTACT_PASS,
  },
});

router.post("/contact", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: firstName,
    to: "purdue.fencing.club@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.listen(5000, () => console.log("Server Running"));
