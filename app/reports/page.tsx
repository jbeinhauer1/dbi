import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "../components/EmailSignup";

export const metadata: Metadata = {
  title: "Reports - Drug Benefit Integrity",
  description:
    "Monthly assessment of the pharmacy benefits industry's structural alignment with DBI standards.",
};

export default function Reports() {
  return (
    <>
      {/* Header */}
      <section className="bg-light-bg py-16">
        <div className="max-w-site mx-auto px-6">
          <h1 className="text-4xl font-bold text-navy mb-4">
            State of Drug Benefit Integrity
          </h1>
          <p className="text-secondary text-lg">
            Monthly assessment of the pharmacy benefits industry&apos;s
            structural alignment with DBI standards.
          </p>
        </div>
      </section>

      {/* Reports */}
      <section className="bg-white py-16">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Current report */}
            <div className="border border-gray-200 rounded-lg p-8 flex flex-col">
              <div className="mb-4">
                <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Latest
                </span>
              </div>
              <h2 className="text-lg font-bold text-navy mb-2">
                State of Drug Benefit Integrity - March 2026
              </h2>
              <p className="text-tertiary text-sm mb-4">March 1, 2026</p>
              <p className="text-body text-sm mb-6 flex-1">
                The inaugural DBI assessment establishes a baseline industry
                score of 4/100. No PBM model type currently meets all five
                structural requirements for independent drug benefit integrity.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/dbi-index"
                  className="px-5 py-2 bg-accent text-white text-sm font-semibold rounded text-center no-underline hover:no-underline hover:bg-opacity-90 transition-colors"
                >
                  Read Report
                </Link>
                <button
                  disabled
                  className="px-5 py-2 bg-gray-200 text-tertiary text-sm font-semibold rounded cursor-not-allowed"
                >
                  Download PDF - Coming Soon
                </button>
              </div>
            </div>

            {/* Upcoming report - April */}
            <div className="border border-gray-200 rounded-lg p-8 flex flex-col opacity-60">
              <div className="mb-4">
                <span className="inline-block bg-gray-200 text-tertiary text-xs font-semibold px-3 py-1 rounded-full">
                  Upcoming
                </span>
              </div>
              <h2 className="text-lg font-bold text-navy mb-2">
                State of Drug Benefit Integrity - April 2026
              </h2>
              <p className="text-tertiary text-sm mb-4">April 1, 2026</p>
              <p className="text-secondary text-sm flex-1">
                The second monthly assessment will track structural changes in
                the industry and update the DBI Index.
              </p>
            </div>

            {/* Upcoming report - May */}
            <div className="border border-gray-200 rounded-lg p-8 flex flex-col opacity-60">
              <div className="mb-4">
                <span className="inline-block bg-gray-200 text-tertiary text-xs font-semibold px-3 py-1 rounded-full">
                  Upcoming
                </span>
              </div>
              <h2 className="text-lg font-bold text-navy mb-2">
                State of Drug Benefit Integrity - May 2026
              </h2>
              <p className="text-tertiary text-sm mb-4">May 1, 2026</p>
              <p className="text-secondary text-sm flex-1">
                Continued monthly tracking of industry alignment with DBI
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />
    </>
  );
}
