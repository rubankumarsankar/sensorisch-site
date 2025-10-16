// app/api/contact/route.js
export const runtime = "nodejs";

import { z } from "zod";
import { getPool } from "../../lib/db";
import { getTransport, sendMailSafe } from "../../lib/mail";

const MAX_FILES = 8;
const MAX_TOTAL_BYTES = 10 * 1024 * 1024; // 10MB

// ---------- hard-coded brand (no env) ----------
const COMPANY_NAME = "Sensorisch";
const BRAND_COLOR = "#D22422";
const LOGO_URL = "https://sensorisch.com/sensorisch-logo.png"; // change if needed

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  company: z.string().optional().nullable(),
  roleTitle: z.string().optional().nullable(),
  inquiryType: z.string().optional().nullable(),
  application: z.string().optional().nullable(),
  projectDetails: z.string().optional().nullable(),
  additionalInfo: z.string().optional().nullable(),
});

const esc = (s) =>
  (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");

// Parse comma-separated env lists safely
const parseList = (s) =>
  (s || "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

// ---------- modern email template ----------
function renderEmailTemplate(values, filesMeta, insertId) {
  const metaFiles = filesMeta?.length
    ? filesMeta
        .map((f) => `${esc(f.name)} (${Math.round(f.size / 1024)} KB)`)
        .join(", ")
    : "None";

  const replyHref = `mailto:${encodeURIComponent(
    values.email || ""
  )}?subject=${encodeURIComponent(
    `Re: ${COMPANY_NAME} inquiry from ${values.firstName} ${values.lastName}`
  )}`;

  return `
<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>${esc(COMPANY_NAME)} — New Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0b1220;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0f172a;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:720px;background:#0b1220;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.06);box-shadow:0 12px 40px rgba(0,0,0,0.35);">

          <!-- Header -->
          <tr>
            <td style="background:${BRAND_COLOR};padding:22px 24px;">
              <table role="presentation" width="100%">
                <tr>
                  <td align="left">
                    <img src="${LOGO_URL}" alt="${esc(
    COMPANY_NAME
  )}" width="128" height="auto" style="display:block;border:0;outline:none;text-decoration:none;height:auto;" />
                  </td>
                  <td align="right" style="color:#fff;font-size:12px;opacity:0.9;">
                    <span style="padding:6px 10px;border-radius:999px;background:rgba(255,255,255,0.18);display:inline-block;font-weight:600;letter-spacing:0.2px;">New Inquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Title & subtitle -->
          <tr>
            <td style="padding:24px 28px 0 28px;">
              <h1 style="margin:0;font-size:22px;line-height:1.35;color:#e5e7eb;">Website form submission</h1>
              <p style="margin:6px 0 0 0;font-size:14px;color:#94a3b8;">Someone reached out via your contact form on ${esc(
                COMPANY_NAME
              )}.</p>
            </td>
          </tr>

          <!-- Summary pills -->
          <tr>
            <td style="padding:16px 28px 0 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                <tr>
                  <td style="padding:0 0 8px 0;">
                    <span style="display:inline-block;margin-right:8px;margin-bottom:8px;padding:8px 10px;border-radius:999px;border:1px solid rgba(148,163,184,0.25);color:#cbd5e1;font-size:12px;">
                      ${esc(values.inquiryType || "General")}
                    </span>
                    <span style="display:inline-block;margin-right:8px;margin-bottom:8px;padding:8px 10px;border-radius:999px;border:1px solid rgba(148,163,184,0.25);color:#cbd5e1;font-size:12px;">
                      ${esc(values.application || "N/A")}
                    </span>
                    <span style="display:inline-block;margin-right:8px;margin-bottom:8px;padding:8px 10px;border-radius:999px;border:1px solid rgba(148,163,184,0.25);color:#cbd5e1;font-size:12px;">
                      ID #${insertId ?? "-"}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Details card -->
          <tr>
            <td style="padding:18px 28px 8px 28px;">
              <table role="presentation" width="100%" style="border:1px solid rgba(148,163,184,0.18);border-radius:14px;background:linear-gradient(180deg, rgba(2,6,23,0.65), rgba(2,6,23,0.4));">
                <tr>
                  <td style="padding:18px 18px 6px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:top;width:160px;color:#94a3b8;font-size:12px;">Name</td>
                        <td style="font-size:14px;color:#e5e7eb;">${esc(
                          values.firstName
                        )} ${esc(values.lastName)}</td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;width:160px;color:#94a3b8;font-size:12px;padding-top:8px;">Email</td>
                        <td style="font-size:14px;color:#e5e7eb;padding-top:8px;">${esc(
                          values.email
                        )}</td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;width:160px;color:#94a3b8;font-size:12px;padding-top:8px;">Phone</td>
                        <td style="font-size:14px;color:#e5e7eb;padding-top:8px;">${
                          esc(values.phone) || "-"
                        }</td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;width:160px;color:#94a3b8;font-size:12px;padding-top:8px;">Company</td>
                        <td style="font-size:14px;color:#e5e7eb;padding-top:8px;">${
                          esc(values.company) || "-"
                        }</td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;width:160px;color:#94a3b8;font-size:12px;padding-top:8px;">Role / Title</td>
                        <td style="font-size:14px;color:#e5e7eb;padding-top:8px;">${
                          esc(values.roleTitle) || "-"
                        }</td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;width:160px;color:#94a3b8;font-size:12px;padding-top:8px;">Inquiry Type</td>
                        <td style="font-size:14px;color:#e5e7eb;padding-top:8px;">${
                          esc(values.inquiryType) || "-"
                        }</td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;width:160px;color:#94a3b8;font-size:12px;padding-top:8px;">Application</td>
                        <td style="font-size:14px;color:#e5e7eb;padding-top:8px;">${
                          esc(values.application) || "-"
                        }</td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;width:160px;color:#94a3b8;font-size:12px;padding-top:8px;">Project Details</td>
                        <td style="font-size:14px;color:#e5e7eb;padding-top:8px;">${esc(
                          values.projectDetails
                        )}</td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;width:160px;color:#94a3b8;font-size:12px;padding-top:8px;">Additional Info</td>
                        <td style="font-size:14px;color:#e5e7eb;padding-top:8px;">${esc(
                          values.additionalInfo
                        )}</td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;width:160px;color:#94a3b8;font-size:12px;padding-top:8px;">Files</td>
                        <td style="font-size:14px;color:#e5e7eb;padding-top:8px;">${metaFiles}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:10px 28px 22px 28px;">
              <a href="${replyHref}" style="display:inline-block;padding:12px 18px;border-radius:10px;background:${BRAND_COLOR};color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;">
                Reply to ${esc(values.firstName)}
              </a>
              <div style="font-size:11px;color:#94a3b8;margin-top:10px;">
                Row ID: ${insertId ?? "-"}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:14px 28px 24px 28px;border-top:1px solid rgba(148,163,184,0.12);">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                © ${new Date().getFullYear()} ${esc(
    COMPANY_NAME
  )}. This email was generated by your website contact form.
              </p>
            </td>
          </tr>

        </table>
        <p style="margin:12px 0 0 0;color:#64748b;font-size:11px;">
          You’re receiving this because this address is configured for form alerts.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(req) {
  try {
    const form = await req.formData();

    // ----- fields -----
    const values = {
      firstName: form.get("firstName")?.toString() || "",
      lastName: form.get("lastName")?.toString() || "",
      email: form.get("email")?.toString() || "",
      phone: form.get("phone")?.toString() || "",
      company: form.get("company")?.toString() || "",
      roleTitle: form.get("roleTitle")?.toString() || "",
      inquiryType: form.get("inquiryType")?.toString() || "",
      application: form.get("application")?.toString() || "",
      projectDetails: form.get("projectDetails")?.toString() || "",
      additionalInfo: form.get("additionalInfo")?.toString() || "",
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      return Response.json(
        {
          ok: false,
          error: "Validation failed",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    // ----- files -----
    const files = [];
    for (const [k, v] of form.entries()) {
      if (k === "files" && v instanceof File) files.push(v);
    }
    if (files.length > MAX_FILES) {
      return Response.json(
        { ok: false, error: "Too many files (max 8)" },
        { status: 400 }
      );
    }
    const totalBytes = files.reduce((a, f) => a + (f.size || 0), 0);
    if (totalBytes > MAX_TOTAL_BYTES) {
      return Response.json(
        { ok: false, error: "Total file size exceeds 10MB" },
        { status: 400 }
      );
    }

    const filesMeta = await Promise.all(
      files.map(async (f) => ({ name: f.name, type: f.type, size: f.size }))
    );
    const attachmentsFromUser = await Promise.all(
      files.map(async (f) => ({
        filename: f.name,
        content: Buffer.from(await f.arrayBuffer()),
        contentType: f.type || "application/octet-stream",
      }))
    );

    // ----- DB insert -----
    let insertId = null;
    try {
      const pool = getPool();
      const [res] = await pool.execute(
        `INSERT INTO contact_messages
         (first_name, last_name, email, phone, company, role_title, inquiry_type, application, project_details, additional_info, files_meta)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          values.firstName,
          values.lastName,
          values.email,
          values.phone,
          values.company,
          values.roleTitle,
          values.inquiryType,
          values.application,
          values.projectDetails,
          values.additionalInfo,
          JSON.stringify(filesMeta),
        ]
      );
      insertId = res?.insertId ?? null;
    } catch (dbErr) {
      console.error("DB insert failed:", dbErr);
      return Response.json(
        { ok: false, error: "Database error. Please try again later." },
        { status: 500 }
      );
    }

    // ----- email -----
    const transport = getTransport();
    const html = renderEmailTemplate(values, filesMeta, insertId);

    // Support multiple TO/CC/BCC via comma-separated env vars
    const toList = parseList(process.env.MAIL_TO);
    const ccList = parseList(process.env.MAIL_CC);
    const bccList = parseList(process.env.MAIL_BCC);

    try {
      await sendMailSafe(transport, {
        from: process.env.MAIL_FROM, // align with SMTP user/domain
        to: toList.length ? toList : undefined,
        cc: ccList.length ? ccList : undefined,
        bcc: bccList.length ? bccList : undefined,
        replyTo: values.email || toList[0] || process.env.MAIL_FROM,
        subject: `New Inquiry: ${values.firstName} ${values.lastName} (${
          values.inquiryType || "General"
        })`,
        html,
        text: `
${COMPANY_NAME} — New Website Inquiry

Name: ${values.firstName} ${values.lastName}
Email: ${values.email}
Phone: ${values.phone || "-"}

Company: ${values.company || "-"}
Role/Title: ${values.roleTitle || "-"}

Inquiry Type: ${values.inquiryType || "-"}
Application: ${values.application || "-"}

Project Details:
${values.projectDetails || ""}

Additional Info:
${values.additionalInfo || ""}

Files: ${
          filesMeta.length
            ? filesMeta
                .map((f) => `${f.name} (${Math.round(f.size / 1024)} KB)`)
                .join(", ")
            : "None"
        }

DB Row ID: ${insertId ?? "-"}
        `.trim(),
        attachments: attachmentsFromUser,
      });

      return Response.json({ ok: true, id: insertId });
    } catch (mailErr) {
      console.error("Mail send failed (final):", mailErr);
      const devHint =
        process.env.NODE_ENV !== "production"
          ? ` (${mailErr?.code || mailErr?.responseCode || ""} ${
              mailErr?.message || ""
            })`
          : "";
      return Response.json(
        {
          ok: false,
          id: insertId,
          error:
            "Email service unavailable. Your request was saved; we’ll reach out shortly." +
            devHint,
        },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Contact route fatal:", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
