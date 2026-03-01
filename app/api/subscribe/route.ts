import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { email, role } = await request.json();

    if (!email || !role) {
      return NextResponse.json(
        { error: "Email and role are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "c81b5296-6779-400b-8652-7928255d2e83";

    console.log("[subscribe] email:", email, "role:", role);
    console.log("[subscribe] API key present:", !!apiKey, "key starts with:", apiKey?.substring(0, 6));
    console.log("[subscribe] AUDIENCE_ID:", AUDIENCE_ID);

    // If no API key is configured, log and return success
    if (!apiKey) {
      console.log("[subscribe] NO API KEY - skipping Resend calls");
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);

    // Add contact to Resend Audience
    console.log("[subscribe] Creating contact...");
    const contactResult = await resend.contacts.create({
      email,
      firstName: role,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    });
    console.log("[subscribe] Contact result:", JSON.stringify(contactResult));

    // Send notification email to jerry
    console.log("[subscribe] Sending email...");
    const emailResult = await resend.emails.send({
      from: "DBI Notifications <noreply@drugbenefitintegrity.com>",
      to: "jerry@apalyrx.com",
      subject: "New DBI Subscriber",
      html: `
        <p>New subscriber to Drug Benefit Integrity:</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Role:</strong> ${role}</li>
        </ul>
      `,
    });
    console.log("[subscribe] Email result:", JSON.stringify(emailResult));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
