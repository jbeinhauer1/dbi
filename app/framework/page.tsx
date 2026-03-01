import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Framework - Drug Benefit Integrity",
  description:
    "A practical tool for evaluating any pharmacy benefit arrangement against Drug Benefit Integrity standards.",
};

const FRAMEWORK_URL =
  "https://docs.google.com/document/d/1YqkOZD8F9ITLxHHEx7mQkClw0eNMiGTg/edit?usp=sharing&ouid=111756486935508193113&rtpof=true&sd=true";

const howToUse = [
  {
    label: "Evaluate",
    text: 'Score your current PBM arrangement against the five requirements. Any "No" identifies a verification gap.',
  },
  {
    label: "Compare",
    text: 'Use it in your next PBM review or RFP evaluation. Ask every finalist: "Does your drug benefit have integrity?"',
  },
  {
    label: "Document",
    text: "A completed framework provides fiduciary evidence that drug benefit decisions were evaluated against an independent structural standard.",
  },
  {
    label: "Share",
    text: "Forward this framework to plan fiduciaries, benefits consultants, and HR leaders. The more people asking the question, the faster the standard becomes expected.",
  },
];

export default function Framework() {
  return (
    <>
      {/* Header */}
      <section className="bg-light-bg py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-navy mb-4">
            The DBI Framework
          </h1>
          <p className="text-secondary text-lg">
            A practical tool for evaluating any pharmacy benefit arrangement
            against Drug Benefit Integrity standards.
          </p>
        </div>
      </section>

      {/* What It Is */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-6">What It Is</h2>
          <p className="text-body leading-relaxed">
            The DBI Framework is a one-page evaluation tool built on the five
            DBI requirements. Each requirement is binary - yes or no. Use it to
            score any PBM arrangement, compare alternatives, and document
            fiduciary diligence.
          </p>
        </div>
      </section>

      {/* How to Use It */}
      <section className="bg-light-bg py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-8">How to Use It</h2>
          <div className="space-y-6">
            {howToUse.map((item) => (
              <div key={item.label}>
                <p className="text-body leading-relaxed">
                  <strong className="text-navy">{item.label}:</strong>{" "}
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <a
            href={FRAMEWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent text-white text-lg font-semibold rounded hover:bg-opacity-90 transition-colors no-underline hover:no-underline"
          >
            Download the DBI Framework (PDF)
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-light-bg py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-secondary">
            Questions about the framework? Contact{" "}
            <a href="mailto:contact@drugbenefitintegrity.com" className="text-accent">
              contact@drugbenefitintegrity.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
