import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg mb-2">
              DRUG BENEFIT INTEGRITY<sup className="text-xs ml-0.5">&#8482;</sup>
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              The independent standard for evaluating whether pharmacy benefit
              decisions are made — and verified — in the plan&apos;s interest.
            </p>
          </div>

          {/* Site links */}
          <div>
            <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Site
            </p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/what-is-dbi", label: "What is DBI?" },
                { href: "/five-requirements", label: "Five Requirements" },
                { href: "/dbi-index", label: "DBI Index" },
                { href: "/reports", label: "Reports" },
                { href: "/framework", label: "Framework" },
                { href: "/subscribe", label: "Subscribe" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white no-underline hover:no-underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:contact@drugbenefitintegrity.com"
                  className="text-gray-300 hover:text-white no-underline hover:no-underline"
                >
                  contact@drugbenefitintegrity.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 Drug Benefit Integrity</p>
        </div>
      </div>
    </footer>
  );
}
