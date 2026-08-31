"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Code2,
  Database,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";
import { content, profile, type Language } from "@/data/portfolio";

const sectionIds = ["home", "about", "projects", "experience", "contact"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function smoothScroll(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}


function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-8 max-w-3xl text-center sm:mb-12"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)] shadow-sm backdrop-blur">
        <Sparkles size={14} />
        {label}
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}

function FloatingCodeCard({ language }: { language: Language }) {
  const lines = language === "id"
    ? ["const fokus = 'Frontend';", "pipeline.run(data);", "model.evaluate(images);", "deploy.to('Vercel');"]
    : ["const focus = 'Frontend';", "pipeline.run(data);", "model.evaluate(images);", "deploy.to('Vercel');"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="glass-card absolute -bottom-8 left-2 right-2 rounded-3xl p-4 text-left sm:left-8 sm:right-auto sm:w-[330px]"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-auto text-xs text-[var(--muted)]">portfolio.tsx</span>
      </div>
      <div className="space-y-2 font-mono text-xs text-[var(--muted)] sm:text-sm">
        {lines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.6 + index * 0.12 }}
          >
            <span className="mr-3 text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

function ProfileVisual({ language }: { language: Language }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mx-auto mt-10 w-full max-w-[430px] lg:mt-0"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-3 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--accent)_28%,transparent)] via-transparent to-[color-mix(in_srgb,var(--accent-2)_22%,transparent)]" />
        <Image
          src="/profile.png"
          alt="Ikbar Saif Fadilah"
          width={900}
          height={1200}
          priority
          className="relative aspect-[4/5] w-full rounded-[1.7rem] object-cover object-[50%_18%]"
        />
      </motion.div>
      <FloatingCodeCard language={language} />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute -right-5 -top-5 hidden h-24 w-24 rounded-full border border-dashed border-[var(--accent)] opacity-70 sm:block"
      />
    </motion.div>
  );
}

function Header({ language, setLanguage, theme, setTheme }: {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}) {
  const labels = content[language].nav;

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <nav className="container-shell glass-card flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <button onClick={() => smoothScroll("home")} className="flex items-center gap-3" aria-label="Back to home">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-sm font-black text-white shadow-lg">
            IS
          </span>
          <span className="hidden text-sm font-bold sm:block">Ikbar Saif</span>
        </button>
        <div className="hidden items-center gap-2 rounded-full bg-black/5 p-1 text-sm dark:bg-white/5 lg:flex">
          {labels.map((label, index) => (
            <button
              key={label}
              onClick={() => smoothScroll(sectionIds[index])}
              className="rounded-full px-4 py-2 text-[var(--muted)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--border)] px-3 text-sm font-semibold transition hover:border-[var(--accent)]"
            aria-label="Toggle language"
          >
            <Languages size={16} />
            {language.toUpperCase()}
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] transition hover:border-[var(--accent)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero({ language }: { language: Language }) {
  const c = content[language];

  return (
    <section id="home" className="container-shell grid min-h-screen items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)] backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,.9)]" />
          {c.hero.available}
        </div>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)]">{c.hero.eyebrow}</p>
        <h1 className="text-4xl font-black tracking-[-0.05em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
          <span className="block">{c.hero.titleLine1}</span>
          <span className="block mt-2">{c.hero.titleLine2}</span>
          <span className="block mt-2 pb-3 gradient-text">{c.hero.titleLine3}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">{c.hero.subtitle}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            onClick={() => smoothScroll("projects")}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 font-bold text-[var(--background)] transition hover:scale-[1.02]"
          >
            {c.hero.primaryCta}
            <ArrowRight className="transition group-hover:translate-x-1" size={18} />
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-bold text-[var(--foreground)] backdrop-blur transition hover:border-[var(--accent)]"
          >
            <Mail size={18} />
            {c.hero.secondaryCta}
          </a>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-bold text-[var(--foreground)] backdrop-blur transition hover:border-[var(--accent)]"
          >
            <Download size={18} />
            {c.hero.downloadCv}
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {c.stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 backdrop-blur"
            >
              <p className="text-2xl font-black text-[var(--foreground)]">{stat.value}</p>
              <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <ProfileVisual language={language} />
    </section>
  );
}

function About({ language }: { language: Language }) {
  const c = content[language].about;

  return (
    <section id="about" className="container-shell py-20 sm:py-28">
      <SectionHeading label={c.label} title={c.title} />
      <div className="bento-grid">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="glass-card col-span-12 rounded-[2rem] p-6 sm:p-8 lg:col-span-7"
        >
          <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] text-[var(--accent)]">
            <Code2 />
          </div>
          <p className="text-xl  leading-9 text-[var(--muted)]">{c.body}</p>
        </motion.article>
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ delay: 0.08 }}
          className="glass-card col-span-12 rounded-[2rem] p-6 sm:p-8 lg:col-span-5"
        >
          <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--accent-2)_18%,transparent)] text-[var(--accent-2)]">
            <BriefcaseBusiness />
          </div>
          <ul className="space-y-4">
            {c.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                {highlight}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}

function Skills({ language }: { language: Language }) {
  const c = content[language].skills;
  const icons = [Code2, Database, Sparkles, GithubIcon];

  return (
    <section className="container-shell py-20 sm:py-28">
      <SectionHeading label={c.label} title={c.title} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {c.groups.map((group, index) => {
          const Icon = icons[index];
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-[1.7rem] p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--accent)]">
                  <Icon size={21} />
                </span>
                <h3 className="text-xl font-black">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-sm text-[var(--muted)]">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Projects({ language }: { language: Language }) {
  const c = content[language].projects;

  return (
    <section id="projects" className="container-shell py-20 sm:py-28">
      <SectionHeading label={c.label} title={c.title} />
      <div className="grid gap-5 lg:grid-cols-2">
        {c.items.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -8 }}
            className="group glass-card relative overflow-hidden rounded-[2rem] p-4 sm:p-5"
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] blur-2xl transition group-hover:scale-125" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)]">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={1200}
                height={760}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative p-2 pt-6 sm:p-3 sm:pt-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold text-[var(--accent)]">{project.category}</span>
                  <h3 className="mt-4 text-2xl font-black tracking-tight">{project.title}</h3>
                </div>
                <span className="rounded-full bg-[var(--foreground)] px-3 py-1 text-xs font-black text-[var(--background)]">{project.year}</span>
              </div>
              <p className="text-[var(--muted)] leading-7">{project.description}</p>
              <p className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4 text-sm leading-6 text-[var(--muted)]">
                {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-bold text-[var(--muted)] transition hover:scale-[1.02]"
                  >
                    <ExternalLink size={16} /> {c.visitDemo}
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-bold text-[var(--muted)] transition hover:scale-[1.02]"
                  >
                    <GithubIcon size={16} /> {c.visitCode}
                  </a>
                )}

                {!project.demoUrl && !project.githubUrl && (
                  <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-bold text-[var(--muted)]">
                    <ExternalLink size={16} /> {c.comingSoon}
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Experience({ language }: { language: Language }) {
  const c = content[language].experience;
  const edu = content[language].education;

  return (
    <section id="experience" className="container-shell py-20 sm:py-28">
      <SectionHeading label={c.label} title={c.title} />
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          {c.items.map((item, index) => (
            <motion.article
              key={`${item.org}-${item.role}`}
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass-card rounded-[1.7rem] p-6"
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-xl font-black">{item.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--accent)]">{item.org}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-[var(--muted)]"><MapPin size={15} /> {item.location}</p>
                </div>
                <span className="h-fit rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]">{item.period}</span>
              </div>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-3)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        <motion.aside
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
          className="glass-card h-fit rounded-[2rem] p-6 sm:p-7"
        >
          <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--accent-3)_17%,transparent)] text-[var(--accent-3)]">
            <GraduationCap />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--accent)]">{edu.label}</p>
          <h3 className="mt-3 text-2xl font-black">{edu.title}</h3>
          <div className="mt-6 space-y-5">
            {edu.items.map((item) => (
              <div key={item.school} className="border-l border-[var(--border)] pl-4">
                <p className="font-black">{item.school}</p>
                <p className="mt-1 text-sm font-semibold text-[var(--accent)]">{item.degree}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.period}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function Contact({ language }: { language: Language }) {
  const c = content[language].contact;

  return (
    <section id="contact" className="container-shell pb-10 pt-20 sm:pb-14 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.55 }}
        className="glass-card overflow-hidden rounded-[2.2rem] p-7 text-center sm:p-10"
      >
        <span className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--accent)]">{c.label}</span>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">{c.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--muted)]">{c.body}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 font-bold transition hover:border-[var(--accent)]">
            <Mail size={18} /> {c.emailCta}
          </a>
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 font-bold transition hover:border-[var(--accent)]">
            <InstagramIcon size={18} /> {c.instagramCta}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 font-bold transition hover:border-[var(--accent)]">
            <GithubIcon size={18} /> {c.githubCta}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 font-bold transition hover:border-[var(--accent)]">
            <LinkedinIcon size={18} /> {c.linkedinCta}
          </a>
        </div>
      </motion.div>
      <footer className="flex flex-col items-center justify-between gap-3 py-8 text-sm text-[var(--muted)] sm:flex-row">
        <p>© 2026 Ikbar Saif Fadilah. Built with Next.js.</p>
        <p>{profile.location} · {profile.email}</p>
      </footer>
    </section>
  );
}

export function Portfolio() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setThemeState] = useState<"dark" | "light">(() => {
    if (typeof document === "undefined") {
      return "dark";
    }

    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = (nextTheme: "dark" | "light") => setThemeState(nextTheme);

  return (
    <main className="noise min-h-screen">
      <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Experience language={language} />
      <Contact language={language} />
    </main>
  );
}
