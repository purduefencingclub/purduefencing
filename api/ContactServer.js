const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const https = require("https");
const dotenv = require("dotenv").config();
const fs = require("fs");

const options = {
	key: fs.readFileSync(process.env.KEY_PATH),
	cert: fs.readFileSync(process.env.CERT_PATH)
}
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const contactEmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
        user: process.env.CONTACT_USER, 
        pass: process.env.CONTACT_PASS, 
    }
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

const port = "5001";
//app.listen(5001, "157.230.80.32", () => console.log("Server Running"));
https.createServer(options, app).listen(port,"157.230.80.32", function() {
    console.log("Express started on port: ", port);
});
