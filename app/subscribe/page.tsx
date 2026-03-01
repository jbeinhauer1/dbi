import type { Metadata } from "next";
import EmailSignup from "../components/EmailSignup";

export const metadata: Metadata = {
  title: "Subscribe — Drug Benefit Integrity",
  description:
    "Receive the monthly State of Drug Benefit Integrity report and framework updates.",
};

export default function Subscribe() {
  return (
    <>
      {/* Header */}
      <section className="bg-light-bg py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">
            Subscribe to Drug Benefit Integrity
          </h1>
          <p className="text-secondary text-lg">
            Receive the monthly State of Drug Benefit Integrity report and
            framework updates.
          </p>
        </div>
      </section>

      {/* Signup */}
      <EmailSignup />

      {/* Note */}
      <section className="bg-white py-8">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-tertiary text-sm">
            We will never share your email. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
