// lib/mail.js
import nodemailer from "nodemailer";

export function getTransport() {
  const port = Number(process.env.SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,          // e.g. smtp.gmail.com OR provider host
    port,                                 // 587 for STARTTLS, 465 for SSL
    secure: port === 465,                 // true if 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 20_000,
    greetingTimeout: 20_000,
    socketTimeout: 30_000,
  });

  return transporter;
}

/**
 * Send mail with graceful fallback:
 * 1) Try with attachments
 * 2) If it fails for auth/connection/size, retry without attachments
 */
export async function sendMailSafe(transport, msg) {
  try {
    return await transport.sendMail(msg);
  } catch (err) {
    const code = err?.code || err?.responseCode || "MAIL_ERR";
    const isAuthOrConn =
      code === "EAUTH" ||
      code === "EDNS" ||
      code === "ECONNECTION" ||
      code === "ETIMEDOUT" ||
      code === "ESOCKET" ||
      code === 421 ||
      code === 450 ||
      code === 451 ||
      code === 452 ||
      code === 454 ||
      code === 535;

    const looksLikeTooLarge =
      String(err?.message || "").toLowerCase().includes("message size") ||
      String(err?.response || "").toLowerCase().includes("message size") ||
      (Array.isArray(msg.attachments) && msg.attachments.length > 0);

    // Retry without attachments if (likely) size issue or server choking on attachments
    if (looksLikeTooLarge || isAuthOrConn) {
      const { attachments, ...rest } = msg;
      return await transport.sendMail({
        ...rest,
        html:
          (rest.html || "") +
          `<hr/><p><i>Note: Attachments could not be sent. We have saved the files in our system.</i></p>`,
      });
    }
    throw err;
  }
}
