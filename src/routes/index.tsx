import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, Github, Linkedin, Download } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ogres Murathimi — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Ogres Murathimi — Full-Stack Developer building scalable web platforms, CI/CD pipelines, and security-hardened applications.",
      },
      { property: "og:title", content: "Ogres Murathimi — Full-Stack Developer" },
      {
        property: "og:description",
        content: "Selected projects, experience, and contact for Ogres Murathimi.",
      },
    ],
  }),
});

const projects = [
  {
    title: "B&B La Fabbrica Delle Idee",
    role: "Full-Stack Dev · WordPress Security Audit",
    description:
      "Engineered a hospitality platform with automated CI/CD, hardened WordPress configurations, and patched critical plugin vulnerabilities.",
    href: "https://bnblafabbricadelleidee.it/",
  },
  {
    title: "Anaelle Piovesan",
    role: "Full-Stack Dev · Fashion Platform",
    description:
      "Modern fashion industry platform with a dynamic profile display system and a Docker + GitHub CI/CD pipeline that cut deploys by 40%.",
    href: "https://anaellepiovesan.com/",
  },
  {
    title: "Doro David",
    role: "Full-Stack Dev · Canvas Portfolio + CMS",
    description:
      "Canvas-based explorable portfolio with a custom bilingual (EN/IT) CMS dashboard, modular templates, and a phased rollout strategy.",
    href: "https://dorodavid.it/",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-blue-100 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        {/* Hero */}
        <header className="mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
            Full-Stack Developer
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-7xl">
            Ogres Murathimi.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-700 sm:text-xl">
            I build scalable, resilient web platforms — from full SDLC delivery and
            CI/CD pipelines to security-hardened production systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:ogresmurathimi@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/Ogres-Murathimi-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/20 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-900 backdrop-blur transition hover:bg-white"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </header>

        {/* Projects */}
        <section className="mb-20">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold sm:text-3xl">Selected Projects</h2>
            <span className="text-sm text-slate-600">2025 — 2026</span>
          </div>
          <ul className="divide-y divide-slate-900/15 border-y border-slate-900/15">
            {projects.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-1 gap-2 py-6 transition sm:grid-cols-12 sm:items-center sm:gap-6"
                >
                  <div className="sm:col-span-4">
                    <h3 className="text-xl font-semibold transition group-hover:text-blue-700">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600">{p.role}</p>
                  </div>
                  <p className="text-slate-700 sm:col-span-7">{p.description}</p>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-700 sm:col-span-1 sm:justify-self-end" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section className="mb-20 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">About</h2>
            <p className="text-slate-700">
              BSc. in Information Technology at Dedan Kimathi University of Technology
              (graduating 2026). CCNA certified. Active in CTFs including PicoCTF,
              Cyberweek, BSides Nairobi, and East Africa Intervarsity CTF — 3rd place
              at the I&amp;M Bank CTF, September 2025.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "Angular",
                "Python",
                "WordPress",
                "Convex",
                "Clerk",
                "Vercel",
                "GitHub Actions",
                "Burp Suite",
                "Metasploit",
                "Wazuh",
                "Wireshark",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-900/15 bg-white/60 px-3 py-1 text-sm text-slate-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / Contacts */}
        <footer className="border-t border-slate-900/15 pt-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Let's build something.</h2>
              <p className="mt-2 max-w-md text-slate-700">
                Open to full-stack roles, freelance engagements, and security audits.
              </p>
            </div>
            <ul className="space-y-3 text-slate-800 sm:justify-self-end">
              <li>
                <a
                  href="mailto:ogresmurathimi@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-blue-700"
                >
                  <Mail className="h-4 w-4" /> ogresmurathimi@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254768595592"
                  className="inline-flex items-center gap-2 hover:text-blue-700"
                >
                  <Phone className="h-4 w-4" /> +254 768 595 592
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/francis-ogres"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-700"
                >
                  <Linkedin className="h-4 w-4" /> linkedin.com/in/francis-ogres
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ogress-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-700"
                >
                  <Github className="h-4 w-4" /> github.com/ogress-dev
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-10 text-xs text-slate-600">
            © {new Date().getFullYear()} Ogres Murathimi. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
