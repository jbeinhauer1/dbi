import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Five Requirements — Drug Benefit Integrity",
  description:
    "Each requirement is binary. Yes or no. If any answer is 'No,' the drug benefit lacks independent integrity verification.",
};

const requirements = [
  {
    num: "01",
    title: "Real-time routing to lowest net cost across all channels",
    explanation:
      "Every in-scope prescription is evaluated against PBM specialty, PBM mail, retail, manufacturer-direct, and independent pharmacy channels simultaneously. Not retrospectively sampled. Every script, every channel, in real time.",
    rationale:
      'If you claim a prescription was filled at the best available price, you must have evaluated all options. Today, most pharmacy benefit routing occurs within the PBM\'s contracted network — mail, specialty, and preferred retail channels. Channels outside the network, including manufacturer-direct pricing, are typically not evaluated as part of the benefit decision. This is a structural limitation, not a criticism — it reflects how the system was built. The financial services equivalent would be a broker evaluating only proprietary funds and calling it best execution. Real-time matters because a retrospective audit sampling 2% of claims six months later is not verification — it is spot-checking after the fact.',
    verification:
      "Is every in-scope prescription evaluated across all available fulfillment channels in real time?",
  },
  {
    num: "02",
    title: "Operated by a licensed pharmacy with no channel ownership",
    explanation:
      "The entity executing routing decisions holds a pharmacy license and has no financial interest in which channel fills the prescription. Independence is structural, not contractual.",
    rationale:
      "A pharmacy license is not just a credential — it creates a legal and regulatory framework nothing else provides. A licensed pharmacy operates under state board of pharmacy oversight, is subject to HIPAA as a covered entity, has a legal duty of care to patients, and can receive and act on electronic prescriptions. That last point is critical: to intercept a prescription at the point of decision — before it routes to a specific channel — you must be a licensed entity in the e-prescribing workflow. A consulting firm cannot do this. A TPA cannot do this. A software company cannot do this. Only a licensed pharmacy can sit in the prescription pathway, receive a script, evaluate all options, and route it. Without the license, you are limited to retrospective analysis. The license enables real-time execution, not just evaluation. A licensed pharmacy also carries professional liability for its decisions — accountability that a software vendor or analytics company does not have.\n\nWhen an entity that owns a dispensing channel also evaluates whether that channel offered the best option, the evaluation is structurally self-referential. It may be accurate. But it lacks the independence that fiduciary standards increasingly require. This is why financial services requires independent auditors — not because the system assumes bad faith, but because structural independence is what makes the system trustworthy.",
    verification:
      "Does the evaluating entity have any ownership, affiliate, or financial relationship with a dispensing channel?",
  },
  {
    num: "03",
    title: "Manufacturer-direct programs built into the benefit",
    explanation:
      "Copay programs, patient assistance, and direct pricing are evaluated as benefit options — not carved out as separate cash-pay transactions invisible to the plan.",
    rationale:
      "When a manufacturer offers a copay card, patient assistance, or direct pricing program, those options typically exist outside the benefit structure. Similarly, direct-to-consumer pharmacy platforms and discount programs operate independently of the plan. These may offer lower costs for certain prescriptions, but because they sit outside the benefit, the plan has no visibility into them and cannot evaluate them alongside traditional channels. DBI requires all available options — including manufacturer-direct and alternative pricing programs — be evaluated as part of the benefit decision. If a lower-cost option exists outside the benefit structure, the system should be able to identify and evaluate it.",
    verification:
      "Are manufacturer-direct programs evaluated alongside traditional channels as part of the benefit, or carved out?",
  },
  {
    num: "04",
    title: "Fulfilled through independent community pharmacies",
    explanation:
      "Dispensing is performed by independent pharmacies with no vertical ownership by PBMs, insurers, or GPOs.",
    rationale:
      "Requirements 1-3 ensure the decision is made independently. But if the prescription is then fulfilled by a pharmacy with ownership ties to the entity that made the routing decision, the independence of the decision chain is incomplete. Independent community pharmacies have no upstream ownership by PBMs, insurers, or GPOs. They fill what they are sent. They have no upstream financial relationships that could influence the routing decision. The dispensing channel must be independent of the decision-making channel.",
    verification:
      "Is the dispensing pharmacy independent of the entity that made the routing decision?",
  },
  {
    num: "05",
    title: "Decision-level records for every script",
    explanation:
      "Each routing decision generates an auditable record: channels compared, rules applied, routing rationale, net cost components, and closed-loop financial reconciliation.",
    rationale:
      'Today, most pharmacy benefit reporting is aggregate — total spend, generic fill rates, rebate summaries. What is typically unavailable is a record for each prescription showing what channels were evaluated, what rules applied, why the winning channel was selected, and the net cost components. Without decision-level records, a plan fiduciary cannot independently verify any individual routing decision. DBI requires every in-scope prescription to generate its own auditable record automatically — produced at the point of decision, not assembled from claims data after the fact. This is the difference between a bank statement (what happened) and a trade execution record (why it happened and what alternatives were considered).',
    verification:
      "Does every prescription produce an auditable record of the decision process, including all channels evaluated?",
  },
];

const FRAMEWORK_URL =
  "https://docs.google.com/document/d/1YqkOZD8F9ITLxHHEx7mQkClw0eNMiGTg/edit?usp=sharing&ouid=111756486935508193113&rtpof=true&sd=true";

export default function FiveRequirements() {
  return (
    <>
      {/* Header */}
      <section className="bg-light-bg py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-navy mb-4">
            The Five Requirements
          </h1>
          <p className="text-secondary text-lg">
            Each requirement is binary. Yes or no. If any answer is
            &ldquo;No,&rdquo; the drug benefit lacks independent integrity
            verification.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {requirements.map((req) => (
            <div
              key={req.num}
              className="border border-gray-200 rounded-lg p-8"
            >
              <div className="flex items-start gap-5 mb-6">
                <span className="text-4xl font-bold text-accent leading-none">
                  {req.num}
                </span>
                <h2 className="text-xl font-bold text-navy">{req.title}</h2>
              </div>
              <p className="text-body leading-relaxed mb-6">
                {req.explanation}
              </p>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-tertiary uppercase tracking-wider mb-3">
                  Structural Rationale
                </h3>
                {req.rationale.split("\n\n").map((para, i) => (
                  <p key={i} className="text-body leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
              <p className="italic text-accent border-t border-gray-100 pt-4">
                {req.verification}
              </p>
            </div>
          ))}

          {/* Bottom callout */}
          <div className="border-l-4 border-accent bg-light-bg p-8 rounded-r-lg">
            <p className="text-body leading-relaxed">
              The five requirements work as a system. Remove any one and the
              model has a structural gap. Independence without a position in the
              prescription workflow limits you to retrospective review.
              Workflow access without independence is not verification.
              Comprehensive routing without documentation cannot be audited.
            </p>
          </div>

          {/* Download */}
          <div className="text-center pt-4">
            <a
              href={FRAMEWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded hover:bg-opacity-90 transition-colors no-underline hover:no-underline"
            >
              Download the DBI Framework (PDF)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
