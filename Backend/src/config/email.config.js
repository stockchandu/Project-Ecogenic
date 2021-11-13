const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user:"ecogenichelp@gmail.com", 
      pass: "96325836"
    },
  });

module.exports = transporter