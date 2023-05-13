const nodemailer = require("nodemailer");
const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 587;
const SMTP_USER = "aseniysha@gmail.com";
const SMTP_PASSWORD = "dada5940";
const API_URL = "http://localhost:5000";

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USER,
        password: SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Activation of account" + API_URL,
      text: "",
      html: `
      <div>
      <h1>Click link to activate</h1>
      <a href="${link}">${link}</a>
      </div>
      `,
    });
  }
}

module.exports = new MailService();
