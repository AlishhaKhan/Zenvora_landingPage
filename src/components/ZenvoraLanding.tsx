"use client";
import React, { useState } from "react";

export default function ZenvoraLanding() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"loading" | "success" | "error" | null>(null);

  // 🔁 Formspree/Mailchimp action URL
  const FORM_ACTION = "https://formspree.io/f/mrbaqeeq";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORM_ACTION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {/* Logo placeholder (replace later with your SVG) */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-teal-400 to-purple-500 flex items-center justify-center text-slate-900 font-bold text-xl">
              Z
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Zenvora</h1>
              <p className="text-sm text-slate-300">Smarter Career Decisions with AI</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-slate-300">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#signup">Get Early Access</a>
          </nav>
        </header>

        {/* Hero */}
        <main className="grid md:grid-cols-2 gap-8 items-center">
          <section>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Find the career that&apos;s made for you.
            </h2>
            <p className="text-slate-300 mb-6">
              Zenvora uses AI-driven profiling and skill-gap analysis to match students &amp; young professionals
              with high-potential career paths, learning roadmaps, and mentorship routes—so they can make
              confident action-ready choices.
            </p>

            <ul id="features" className="grid gap-3 mb-6">
              <li className="text-slate-200">• Personalized career recommendations</li>
              <li className="text-slate-200">• Skill-gap analysis &amp; learning roadmap</li>
              <li className="text-slate-200">• Resume tips &amp; interview prep (coming soon)</li>
            </ul>

            <form id="signup" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-lg px-4 py-3 bg-white/5 placeholder:text-slate-400 outline-none border border-transparent focus:border-teal-400"
              />
              <button
                type="submit"
                className="rounded-lg px-5 py-3 bg-teal-400 text-slate-900 font-semibold hover:scale-[1.01] transition"
              >
                {status === "loading" ? "Sending..." : "Get Early Access"}
              </button>
            </form>
            {status === "success" && (
              <p className="mt-3 text-sm text-green-300">Thank you — we&apos;ll email you when we launch!</p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-amber-300">Something went wrong. Please try again later.</p>
            )}

            <p className="mt-6 text-sm text-slate-400">
              Want to collaborate or test the prototype? Reply to the confirmation email and we&apos;ll connect.
            </p>
          </section>

          {/* Right column - mockup / image */}
          <aside className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-tr from-slate-800/40 to-black/40 border border-white/5">
              <div className="h-64 bg-gradient-to-b from-indigo-700 via-teal-500 to-purple-500 rounded-lg shadow-lg flex items-center justify-center text-white font-semibold">
                <div className="text-center px-4">
                  <p className="text-lg">Demo Preview</p>
                  <p className="text-sm mt-2">User → AI Profile → Career Match</p>
                </div>
              </div>
              <div className="mt-4 text-slate-300 text-sm">
                Sign up for early access to test the Career Match AI prototype.
              </div>
            </div>
          </aside>
        </main>

        {/* About anchor (so the nav link works) */}
        <section id="about" className="mt-12 text-slate-300">
          <h3 className="text-xl font-semibold mb-2">About Zenvora</h3>
          <p className="text-sm">
            We&apos;re building an AI-powered career platform that turns self-assessment into action—matching you
            to roles, skills and learning paths aligned with your strengths.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            <p className="text-sm">© {new Date().getFullYear()} Zenvora — AI Career Match</p>
            <p className="text-xs text-slate-500">Built by Alisha • Prototype stage</p>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#" className="text-slate-300 hover:text-white text-sm">Privacy</a>
            <a href="#" className="text-slate-300 hover:text-white text-sm">Terms</a>
            <div className="flex gap-2 ml-2">
              <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center" href="#">LI</a>
              <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center" href="#">IG</a>
              <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center" href="#">X</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
