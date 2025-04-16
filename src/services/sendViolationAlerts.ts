// src/lib/sendViolationAlerts.ts

import nodemailer from 'nodemailer';

export const sendViolationAlert = async (recipientEmail: string, subject: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or any other email service
    auth: {
      user: process.env.ALERT_EMAIL_USER,
      pass: process.env.ALERT_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.ALERT_EMAIL_USER,
    to: recipientEmail,
    subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Violation alert sent:', info.response);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending alert:', error);
    return { success: false, message: 'Email sending failed' };
  }
};
