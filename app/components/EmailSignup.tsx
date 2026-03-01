"use client";

import { useState, FormEvent } from "react";

const roles = [
  "Consultant",
  "Employer",
  "PBM",
  "Health Plan",
  "Pharmacy",
  "Attorney",
  "Other",
];

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !role) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're subscribed. Watch for the next report in your inbox.");
        setEmail("");
        setRole("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-light-bg py-16">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-navy mb-3">
          Stay informed. Get the monthly State of Drug Benefit Integrity report.
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded text-body text-sm focus:outline-none focus:border-accent"
          />
          <select
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded text-sm text-body bg-white focus:outline-none focus:border-accent"
          >
            <option value="" disabled>
              Select your role
            </option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-opacity-90 transition-colors text-sm disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-700 text-sm">{message}</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 text-sm">{message}</p>
        )}
      </div>
    </section>
  );
}
