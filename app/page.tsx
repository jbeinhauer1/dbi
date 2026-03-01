import Link from "next/link";
import EmailSignup from "./components/EmailSignup";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            The $400 Billion Verification Gap
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            Drug Benefit Integrity is the independent standard for evaluating
            whether pharmacy benefit decisions are made - and verified - in the
            plan&apos;s interest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/framework"
              className="px-8 py-3 bg-accent text-white font-semibold rounded hover:bg-opacity-90 transition-colors no-underline hover:no-underline"
            >
              Explore the Framework
            </Link>
            <Link
              href="/dbi-index"
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-colors no-underline hover:no-underline"
            >
              View the DBI Index
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-light-bg py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-6">The Problem</h2>
          <p className="text-body leading-relaxed mb-6">
            In today&apos;s pharmacy benefit structure, the entities making
            routing decisions often have financial relationships with the
            dispensing channels being evaluated. Manufacturer-funded programs -
            while valuable - frequently operate outside the benefit, creating
            gaps in visibility and coordination.
          </p>
          <p className="text-navy font-bold text-lg">
            Transparency shows what happened. Integrity proves it happened right.
          </p>
        </div>
      </section>

      {/* Transparency vs. Integrity */}
      <section className="bg-white py-16">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">
            Transparency vs. Integrity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#F5F5F5] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Transparency</h3>
              <ul className="space-y-3 text-body">
                <li>Shows what happened after the fact</li>
                <li>Produced by the entity that made the decision</li>
                <li>Structural overlap remains</li>
              </ul>
            </div>
            <div className="bg-light-bg-alt p-8 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Integrity</h3>
              <ul className="space-y-3 text-body">
                <li>Ensures it happened right in the first place</li>
                <li>Produced by an independent party with no channel interest</li>
                <li>Structural independence is built in</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="bg-light-bg py-16">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">
            Who Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-3">
                Plan Fiduciaries
              </h3>
              <p className="text-body">
                Independent documentation meeting ERISA prudent expert standards
                and CAA audit requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-3">
                Benefits Consultants
              </h3>
              <p className="text-body">
                A structural standard that changes the question from &ldquo;Is
                this a good deal?&rdquo; to &ldquo;Does this have
                integrity?&rdquo;
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-3">
                PBMs &amp; Health Plans
              </h3>
              <p className="text-body">
                A competitive differentiator. Independent verification
                demonstrates operational integrity to clients and prospects.
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
