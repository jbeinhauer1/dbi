"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Isn't this what transparent PBMs already do?",
    a: "Transparent PBMs have made enormous progress in reporting and pass-through economics. DBI adds a structural requirement: the entity evaluating the decision must be independent of the entity that made it. Both have value. They are not the same thing.",
  },
  {
    q: "Is DBI trying to replace PBMs?",
    a: "No. PBMs continue to manage formularies, negotiate contracts, and administer benefits. DBI adds an independent verification layer.",
  },
  {
    q: "Who developed the DBI standard?",
    a: "The Drug Benefit Integrity framework was developed by pharmacy benefits professionals and is published openly for the industry to evaluate, adopt, and build upon.",
  },
  {
    q: "Can any organization meet DBI requirements?",
    a: "Any entity meeting all five structural requirements qualifies. The critical requirement is independence.",
  },
  {
    q: "Is DBI a certification?",
    a: "Not currently. It is a framework and measurement standard. The DBI Index measures industry alignment over time.",
  },
  {
    q: "How is DBI different from a PBM audit?",
    a: "A PBM audit reviews past decisions, sampling a subset. DBI operates in real time, evaluating every in-scope prescription at the point of decision.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-5 flex justify-between items-center gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-navy">{q}</span>
        <span className="text-accent text-xl flex-shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="pb-5 text-body leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function WhatIsDBI() {
  return (
    <>
      {/* Header */}
      <section className="bg-light-bg py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-navy mb-4">
            What is Drug Benefit Integrity?
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {/* Intro */}
          <div>
            <p className="text-body leading-relaxed">
              DBI is a structural standard for evaluating whether pharmacy
              benefit decisions are independently executed, verified, and
              documented. It moves beyond transparency — which shows what
              happened — to integrity — which ensures it happened right and
              provides independent proof.
            </p>
            <p className="text-body leading-relaxed mt-4">
              DBI is not a product. It is not a company. It is a discipline — a
              set of requirements that any pharmacy benefit arrangement can be
              measured against. It draws from the same principles that govern
              financial services: the entity executing transactions on behalf of
              clients must demonstrate, through independent verification, that it
              acted in the client&apos;s interest.
            </p>
          </div>

          {/* Why Transparency Is Not Enough */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">
              Why Transparency Is Not Enough
            </h2>
            <p className="text-body leading-relaxed mb-4">
              The pharmacy benefits industry has responded to regulatory pressure
              with transparency. Report more. Disclose more. Show employers the
              data.
            </p>
            <p className="text-body leading-relaxed mb-4">
              When the entity that made a routing decision also produces the
              report evaluating that decision, the evaluation — however
              accurate — is not independent. The same organization defined the
              options, selected the channel, and assessed whether the outcome
              was optimal.
            </p>
            <p className="text-body leading-relaxed mb-4">
              Disclosing the details of a decision does not change the
              structure under which the decision was made. Transparency and
              independence serve different functions.
            </p>
            <p className="text-body leading-relaxed">
              Even the most advanced transparent PBM models face this
              structural reality. When the entity reporting on decisions is
              also the entity that made them, the evaluation is not
              independent — regardless of its accuracy. Under increasing
              fiduciary scrutiny, that structural distinction matters.
            </p>
          </div>

          {/* Regulatory Catalyst — callout box */}
          <div className="bg-light-bg border-l-4 border-accent p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-navy mb-6">
              The Regulatory Catalyst
            </h2>
            <ul className="space-y-4 text-body">
              <li>
                <strong className="text-navy">CAA 2026:</strong> 100% rebate
                pass-through, semiannual drug-level reporting, full audit rights,
                PBMs as ERISA covered service providers, $10,000/day
                noncompliance penalties
              </li>
              <li>
                <strong className="text-navy">FTC:</strong> Ongoing
                enforcement activity examining pharmacy benefit practices and
                market structure
              </li>
              <li>
                <strong className="text-navy">DOL:</strong> Proposed rule
                requiring detailed PBM compensation disclosure for self-funded
                ERISA plans
              </li>
            </ul>
            <p className="mt-6 text-navy font-semibold">
              Plan fiduciaries now face personal liability for drug benefit
              decisions they have no independent means to verify.
            </p>
          </div>

          {/* Financial Services Precedent */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">
              The Financial Services Precedent
            </h2>
            <p className="text-body leading-relaxed mb-4">
              Financial services solved this decades ago. Independent clearing
              houses, independent auditors, best-execution standards enforced by
              third parties.
            </p>
            <p className="text-body leading-relaxed mb-4">
              The concept that an entity executing financial transactions on
              behalf of clients must demonstrate — through independent
              verification — that it acted in the client&apos;s interest is
              foundational in finance.
            </p>
            <p className="text-body leading-relaxed">
              Pharmacy benefits, at $400 billion a year, has no equivalent.
            </p>
          </div>

          {/* Not Anti-PBM */}
          <div className="bg-light-bg-alt p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-navy mb-6">
              DBI Is Not Anti-PBM
            </h2>
            <p className="text-body leading-relaxed mb-4">
              Drug Benefit Integrity is designed to strengthen the position of
              every participant in the pharmacy benefit ecosystem.
            </p>
            <p className="text-body leading-relaxed mb-4">
              A PBM that can point to an independent integrity layer
              demonstrating its dispensing channel decisions were optimal is in
              a stronger position — with clients, prospects, and regulators
              alike.
            </p>
            <p className="text-body leading-relaxed mb-4">
              In an environment where consultants put transparent PBM
              alternatives on every finalist slate, independent verification may
              be the strongest competitive response available.
            </p>
            <p className="text-body leading-relaxed">
              DBI does not replace PBMs. It introduces the independent
              verification layer that every other major financial system already
              requires. The PBMs that embrace Drug Benefit Integrity first will
              have a structural advantage.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">
              Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
