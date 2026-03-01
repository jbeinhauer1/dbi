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

    // If no API key is configured, log and return success
    if (!apiKey) {
      console.log("New subscriber (Resend not configured):", email, role);
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);
    const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "c81b5296-6779-400b-8652-7928255d2e83";

    // Add contact to Resend Audience
    await resend.contacts.create({
      email,
      firstName: role,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    });

    // Send notification email to jerry
    await resend.emails.send({
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
