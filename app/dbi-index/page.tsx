import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The DBI Index - Drug Benefit Integrity",
  description:
    "Measuring the pharmacy benefits industry's alignment with Drug Benefit Integrity standards.",
};

type Rating = "met" | "partial" | "not-met";

const modelTypes = [
  "Traditional Vertically-Integrated",
  "Transparent / Pass-Through",
  "Health Plan-Owned",
  "GPO-Backed",
  "Independent Verification",
];

const modelExamples = [
  "CVS/Caremark, Express Scripts, OptumRx",
  "Capital Rx, RxBenefits, SmithRx",
  "Elevance/IngenioRx, Centene",
  "Ascent, EmsanaRx",
  "",
];

const requirements = [
  "Real-time all-channel routing",
  "Licensed pharmacy, no channel ownership",
  "Manufacturer-direct in benefit",
  "Independent pharmacy fulfillment",
  "Decision-level records",
];

const matrix: Rating[][] = [
  ["not-met", "partial", "not-met", "partial", "met"],
  ["not-met", "partial", "not-met", "partial", "met"],
  ["not-met", "not-met", "not-met", "not-met", "met"],
  ["not-met", "partial", "not-met", "partial", "met"],
  ["not-met", "not-met", "not-met", "not-met", "met"],
];

const rationales = [
  "In vertically integrated models, the entity managing the benefit also owns dispensing channels - specialty, mail-order, and retail. Routing decisions and fulfillment share common ownership, creating structural overlap.",
  "Pass-through PBMs have made significant progress in eliminating spread pricing and improving reporting transparency. However, most do not hold pharmacy licenses, do not evaluate manufacturer-direct channels, and assess their own network decisions internally.",
  "The health plan's relationship with its PBM and affiliated pharmacy operations creates structural overlap similar to vertically integrated models.",
  "Group purchasing models improve pricing leverage but typically do not operate as licensed pharmacies, do not evaluate manufacturer-direct options, and lack decision-level documentation.",
  "Licensed pharmacy with no channel ownership, real-time routing across all channels including manufacturer-direct, fulfilled through independent pharmacies, with automatic decision-level records.",
];

function RatingCell({ rating }: { rating: Rating }) {
  if (rating === "met") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 text-sm font-bold">
        &#10003;
      </span>
    );
  }
  if (rating === "partial") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600 text-sm font-bold">
        &#8211;
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-500 text-sm font-bold">
      &#10005;
    </span>
  );
}

function RatingLabel({ rating }: { rating: Rating }) {
  const labels = { met: "Met", partial: "Partially Met", "not-met": "Not Met" };
  const colors = {
    met: "text-green-600",
    partial: "text-yellow-600",
    "not-met": "text-red-500",
  };
  return (
    <span className={`text-xs font-medium ${colors[rating]}`}>
      {labels[rating]}
    </span>
  );
}

export default function DBIIndex() {
  return (
    <>
      {/* Header */}
      <section className="bg-light-bg py-16">
        <div className="max-w-site mx-auto px-6">
          <h1 className="text-4xl font-bold text-navy mb-4">The DBI Index</h1>
          <p className="text-secondary text-lg mb-2">
            Measuring the pharmacy benefits industry&apos;s alignment with Drug
            Benefit Integrity standards.
          </p>
          <p className="text-tertiary text-sm">March 2026 Assessment</p>
        </div>
      </section>

      {/* Overall Score */}
      <section className="bg-white py-16">
        <div className="max-w-site mx-auto px-6 text-center">
          <div className="inline-block">
            <p className="text-8xl font-bold text-navy">
              4<span className="text-3xl text-tertiary">/100</span>
            </p>
            <p className="text-accent font-semibold mt-2 text-lg">
              Industry DBI Score
            </p>
          </div>
          <p className="text-secondary mt-6 max-w-2xl mx-auto">
            The pharmacy benefits industry meets virtually none of the five
            structural requirements for independent drug benefit integrity. This
            is not an indictment - it is a baseline.
          </p>
        </div>
      </section>

      {/* Scoring Matrix */}
      <section className="bg-light-bg py-16">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-8">Scoring Matrix</h2>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-navy text-white text-sm">
                  <th className="text-left p-4 font-semibold">Requirement</th>
                  {modelTypes.map((type, i) => (
                    <th key={type} className="p-4 font-semibold text-center">
                      <div>{type}</div>
                      <div className="font-normal text-gray-300 text-xs mt-1">
                        {modelExamples[i]}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {requirements.map((req, ri) => (
                  <tr key={req} className="border-b border-gray-100">
                    <td className="p-4 text-sm font-medium text-navy">
                      {req}
                    </td>
                    {matrix[ri].map((rating, ci) => (
                      <td key={ci} className="p-4 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <RatingCell rating={rating} />
                          <RatingLabel rating={rating} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-8">
            {modelTypes.map((type, ci) => (
              <div key={type} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-navy mb-1">{type}</h3>
                <p className="text-xs text-tertiary mb-4">
                  {modelExamples[ci]}
                </p>
                <div className="space-y-3">
                  {requirements.map((req, ri) => (
                    <div key={req} className="flex items-center justify-between">
                      <span className="text-sm text-body">{req}</span>
                      <div className="flex items-center gap-2">
                        <RatingCell rating={matrix[ri][ci]} />
                        <RatingLabel rating={matrix[ri][ci]} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-secondary">
            <div className="flex items-center gap-2">
              <RatingCell rating="met" />
              <span>Met</span>
            </div>
            <div className="flex items-center gap-2">
              <RatingCell rating="partial" />
              <span>Partially Met</span>
            </div>
            <div className="flex items-center gap-2">
              <RatingCell rating="not-met" />
              <span>Not Met</span>
            </div>
          </div>
        </div>
      </section>

      {/* Model Rationales */}
      <section className="bg-white py-16">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-8">
            Assessment by Model Type
          </h2>
          <div className="space-y-8">
            {modelTypes.map((type, i) => (
              <div key={type}>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {type}{" "}
                  <span className="text-tertiary font-normal text-sm">
                    - {modelExamples[i]}
                  </span>
                </h3>
                <p className="text-body leading-relaxed">{rationales[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-light-bg py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy mb-6">Methodology</h2>
          <p className="text-body leading-relaxed">
            The DBI Index evaluates structural conditions, not individual company
            performance. Each requirement is assessed against publicly available
            evidence - SEC filings, FTC enforcement actions, CMS data, published
            contract structures, and corporate disclosures. Ratings are: Met
            (structural conditions fully exist), Partially Met (some elements
            present but structural gaps remain), Not Met (structural conditions
            do not exist). The Index is updated monthly.
          </p>
        </div>
      </section>
    </>
  );
}
