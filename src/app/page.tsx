"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CircleDot,
  Cpu,
  Globe,
  LineChart,
  Lock,
  Orbit,
  Sparkle,
  Stars,
} from "lucide-react";

const services = [
  {
    title: "Quantum Cloud Platforms",
    description:
      "Hyper-performante Kubernetes-Cluster, orchestriert mit Predictive AIOps und selbstheilenden Pipelines.",
    icon: Cpu,
  },
  {
    title: "AI Fusion Labs",
    description:
      "Enterprise-KI mit LLM-Fine-Tuning, Retrieval Augmentation und Privacy-first Model Serving.",
    icon: BrainCircuit,
  },
  {
    title: "Zero-Trust Security Mesh",
    description:
      "End-to-end verschlüsselte Architekturen, dynamische Zugriffssteuerung und Post-Quantum-Härtung.",
    icon: Lock,
  },
  {
    title: "Holo Experience Design",
    description:
      "Immersive Interfaces, Spatial Commerce und Multi-Sense Prototyping auf Basis von WebXR.",
    icon: Orbit,
  },
];

const highlights = [
  { label: "Time-to-Innovation", value: "3x schneller" },
  { label: "Net Promoter Score", value: "92" },
  { label: "SLA Reliability", value: "99.99%" },
];

const stack = [
  "Next.js",
  "Edge AI",
  "Kubernetes",
  "Rust Microservices",
  "Web3 Compliance",
  "Spatial UX",
  "Generative Design",
  "Zero Trust",
  "Observability 360°",
];

const caseStudies = [
  {
    client: "NeonGrid Energy",
    result: "dynamische Netzsteuerung mit 44% Effizienzgewinn",
  },
  {
    client: "HelixCare",
    result: "FDA-konforme Klinikplattform mit Echtzeit-Diagnostik",
  },
  {
    client: "Orbital Logistics",
    result: "autonome Lieferketten mit digitaler Doppelgänger-Strategie",
  },
];

const testimonials = [
  {
    name: "Leonie Graf",
    role: "CTO, NeonGrid",
    quote:
      "VENYA QUANTUM hat unsere Roadmap transformiert. KI-gesteuerte Cluster, Self-Healing Pipelines und globale Edge-Knoten – alles aus einer Hand.",
  },
  {
    name: "Kasimir Holm",
    role: "Leiter Digital Health, HelixCare",
    quote:
      "Das Team hat regulierte Prozesse und High-Tech Experience so verschmolzen, dass wir in 6 Wochen live waren. Diese Delivery-Kultur ist einzigartig.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-20 top-16 h-64 rounded-full bg-gradient-to-r from-cyan-500/40 via-violet-500/40 to-fuchsia-500/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12)_0,_transparent_55%)]" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur xl:px-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-500/40 to-indigo-500/20 shadow-lg shadow-cyan-500/20">
              <Stars className="h-5 w-5 text-cyan-200" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/70">
                Venya Quantum
              </p>
              <p className="text-base font-semibold text-slate-100">
                IT Innovation Architects
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-cyan-300">
              Lösungen
            </a>
            <a href="#case-studies" className="transition hover:text-cyan-300">
              Impact
            </a>
            <a href="#partners" className="transition hover:text-cyan-300">
              Ökosystem
            </a>
            <a href="#contact" className="transition hover:text-cyan-300">
              Kontakt
            </a>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-cyan-500/60 bg-cyan-500/10 px-6 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
          >
            <Sparkle className="h-4 w-4 transition group-hover:rotate-12" />
            Zukunft starten
          </a>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-10 xl:px-0">
        <section className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              <CircleDot className="h-3.5 w-3.5 text-cyan-400" />
              Hyper-Tech Collective
            </div>
            <motion.h1
              className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Wir bauen digitale Ökosysteme, die heute schon die Zukunft
              orchestrieren.
            </motion.h1>
            <p className="max-w-xl text-lg text-slate-300">
              Venya Quantum ist das strategische IT-Studio für Unternehmen, die
              exponentiell skalieren möchten. Wir kombinieren Next-Gen
              Cloud-Infrastrukturen, KI-Automation und immersive Experiences zu
              einer messbaren Wertschöpfungskette.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:shadow-fuchsia-500/40"
                href="#contact"
              >
                Mission brief anfragen
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                className="group flex items-center gap-3 rounded-full border border-slate-700/60 bg-slate-900/80 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/80 hover:text-cyan-200"
                href="#case-studies"
              >
                Impact entdecken
                <Globe className="h-4 w-4 transition group-hover:rotate-6" />
              </a>
            </div>
          </div>
          <motion.div
            className="relative rounded-3xl border border-slate-800/80 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80, damping: 15 }}
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-transparent to-fuchsia-600/10 blur-3xl" />
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
                Autonomous Delivery
              </p>
              <Sparkle className="h-5 w-5 text-cyan-200" />
            </div>
            <p className="mt-6 text-3xl font-semibold text-slate-100">
              Adaptive Intelligence Layer
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Unser KI-Copilot orchestriert Releases, Datenströme und
              Cybersecurity in Echtzeit – zertifiziert für regulierte Branchen.
            </p>
            <div className="mt-10 grid gap-4 text-sm text-slate-300">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-3"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </span>
                  <span className="font-semibold text-cyan-200">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="services"
          className="space-y-12 rounded-3xl border border-slate-800/70 bg-slate-950/50 p-10 shadow-[0_40px_120px_-50px_rgba(56,189,248,0.45)]"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-cyan-300/70">
                Solutions Suite
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-100">
                Architektur, die mitdenkt und mitwächst.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400">
              Modular aufgebaut, zertifiziert für kritische Infrastrukturen und
              flexibel durch Multi-Cloud-Adapter. Jede Lösung kommt mit
              Observability, Security und Automatisierung by default.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/15 via-transparent to-fuchsia-500/15 opacity-0 transition group-hover:opacity-100" />
                <service.icon className="h-10 w-10 text-cyan-300" />
                <h3 className="mt-6 text-xl font-semibold text-slate-100">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="case-studies"
          className="grid gap-12 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/70">
              Mission Impact
            </p>
            <h2 className="text-3xl font-semibold text-slate-100">
              Operational Excellence für globale Champions.
            </h2>
            <p className="text-sm text-slate-400">
              Unsere Delivery Cells arbeiten embedded bei Ihnen und liefern in
              iterativen, datengetriebenen Missionen – von Vision bis
              Skalierung.
            </p>
            <div className="space-y-6">
              {caseStudies.map((study) => (
                <div
                  key={study.client}
                  className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                    {study.client}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-slate-100">
                    {study.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-800/70 bg-slate-950/40 p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                Resonanz
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-100">
                Stimmen unserer Visionäre
              </h3>
            </div>
            <div className="space-y-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="space-y-3">
                  <p className="text-sm leading-relaxed text-slate-300">
                    “{testimonial.quote}”
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {testimonial.name} — {testimonial.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="partners"
          className="space-y-10 rounded-3xl border border-slate-800/60 bg-slate-950/40 p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/70">
                Tech Constellation
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-100">
                Kuratierter Stack für High Velocity.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400">
              Wir kombinieren Open-Source-Exzellenz, Enterprise Tools und
              eigene IP, um nachhaltige Plattformen mit minimaler Time-to-Value
              zu schaffen.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stack.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center rounded-2xl border border-slate-800/60 bg-slate-900/50 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/15 via-slate-950 to-fuchsia-500/10 p-10"
        >
          <div className="pointer-events-none absolute -left-40 top-20 h-64 w-64 rounded-full bg-cyan-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-10 h-52 w-52 rounded-full bg-fuchsia-500/25 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">
                Ready For Launch
              </p>
              <h2 className="text-3xl font-semibold text-slate-50">
                Synchronisieren wir Ihre nächste Mission.
              </h2>
              <p className="text-sm text-slate-200/80">
                Buchen Sie ein 30-minütiges Vision Alignment mit unserem Strategy
                Collective. Wir entwickeln in Echtzeit eine Roadmap, die
                marktspezifische Anforderungen und regulatorische Rahmenbedingungen
                berücksichtigt.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-200/80">
                <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/40 bg-slate-950/60 px-5 py-3">
                  <LineChart className="h-5 w-5 text-cyan-200" />
                  KPI Engineering
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/40 bg-slate-950/60 px-5 py-3">
                  <Sparkle className="h-5 w-5 text-cyan-200" />
                  Experience Futures
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/40 bg-slate-950/60 px-5 py-3">
                  <BrainCircuit className="h-5 w-5 text-cyan-200" />
                  AI Co-Creation
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800/40 bg-slate-950/70 p-8">
              <form className="space-y-6 text-sm text-slate-200">
                <div className="space-y-2">
                  <label htmlFor="name" className="uppercase tracking-[0.25em]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Ihr Name"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="uppercase tracking-[0.25em]">
                    Business E-Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@unternehmen.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="initiative"
                    className="uppercase tracking-[0.25em]"
                  >
                    Mission
                  </label>
                  <textarea
                    id="initiative"
                    name="initiative"
                    placeholder="Beschreiben Sie Ihre Vision in 3 Sätzen…"
                    rows={4}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:shadow-fuchsia-500/40"
                >
                  Briefing absenden
                  <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </form>
              <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Reaktionszeit &lt; 12h — Vertraulichkeit garantiert
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-xs uppercase tracking-[0.35em] text-slate-500 sm:flex-row sm:items-center sm:justify-between xl:px-0">
          <div className="flex items-center gap-2 text-slate-400">
            <Stars className="h-4 w-4 text-cyan-300" />
            Venya Quantum — Code. Culture. Cosmos.
          </div>
          <div className="flex gap-4">
            <span>Datatreu x ISO 27001</span>
            <span>Made in Berlin · Remote First</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
