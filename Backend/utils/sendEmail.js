const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendEmail(userEmail,subject) {
 
  const info = await transporter.sendMail({
    from: "user@user.com", 
    to: `basantrai2486@gmail.com`, 
    subject: subject, 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);
  
}

module.exports = sendEmail;