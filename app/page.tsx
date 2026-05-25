"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  FileText,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  Code2,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function LuxuryPortfolio() {
  const { scrollY } = useScroll();

  const navWidth = useTransform(scrollY, [0, 100], ["92%", "78%"]);
  const navY = useTransform(scrollY, [0, 100], [0, -4]);

  const timelineProgress = useSpring(
    useTransform(scrollY, [500, 2200], [0, 1]),
    {
      stiffness: 120,
      damping: 30,
    }
  );

  const [activeField, setActiveField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const funnyPrompts: Record<string, string> = {
    name: "Naam toh batao bhai 👀",
    email: "Reply bhi karunga 😌",
    message: "Ab asli scene batao 🚀",
    default: "Luxury experiences crafted with detail.",
  };

  const navLinks = [
    { name: "about", id: "#about" },
    { name: "work", id: "#work" },
    { name: "contact", id: "#contact" },
  ];

  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Framer Motion",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ];

  const heroBadges = [
    { label: "Next.js", className: "-left-10 top-12", delay: 0 },
    { label: "React", className: "-right-8 top-16", delay: 0.2 },
    { label: "Tailwind CSS", className: "-left-14 bottom-24", delay: 0.4 },
    { label: "Framer Motion", className: "-right-16 bottom-16", delay: 0.6 },
  ];

  const stats = [
    { value: "3+", label: "Projects Built", icon: BriefcaseBusiness },
    { value: "2+", label: "Years Learning", icon: GraduationCap },
    { value: "Premium", label: "UI/UX Design", icon: Sparkles },
    { value: "Full Stack", label: "Developer", icon: Code2 },
  ];

  const projects = [
    {
      title: "Dawa Dunia",
      image: "/dawadunia.png",
      desc: "Healthcare platform with OTP authentication, premium UI and smooth user experience.",
      meta: "Healthcare • Auth • CRM",
    },
    {
      title: "Luxury Portfolio",
      image: "/portfolio.png",
      desc: "Cinematic personal portfolio built using Next.js, Framer Motion and Lenis.",
      meta: "Portfolio • Motion • UI",
    },
    {
      title: "UPS Performance Tracker",
      image: "/ups-tracker.png",
      desc: "Real-time dashboard for tracking work items, productivity metrics, break sessions and operational workflow.",
      meta: "Dashboard • Ops • Metrics",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Started College",
      desc: "Began Bachelor in Computer Science at GGSIPU.",
    },
    {
      year: "2021",
      title: "Frontend Learning",
      desc: "Started learning React, animations and modern web experiences.",
    },
    {
      year: "2024",
      title: "Airtel Black RM",
      desc: "Managed premium international customer escalations and relationship workflows.",
    },
    {
      year: "2025",
      title: "Operations Executive",
      desc: "Handling international UPS customer operations and logistics support.",
    },
    {
      year: "2026",
      title: "Building Premium Products",
      desc: "Creating cinematic frontend experiences with Next.js and Framer Motion.",
    },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#050505] text-[#f5e9e2] selection:bg-[#7a1f3d]/40">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(192,138,110,0.15),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(157,77,101,0.22),transparent_35%),radial-gradient(circle_at_bottom,rgba(75,16,35,0.35),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

        <motion.div
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute left-[-12%] top-[-10%] h-[560px] w-[560px] rounded-full bg-[#7a1f3d]/20 blur-[130px]"
        />

        <motion.div
          animate={{ x: [0, -50, 30, 0], y: [0, 35, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-12%] right-[-10%] h-[560px] w-[560px] rounded-full bg-[#4b1023]/30 blur-[130px]"
        />

        <div className="absolute inset-0 opacity-[0.035] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </div>

      {/* ================= CURSOR GLOW ================= */}
      <motion.div
        animate={{ x: mousePosition.x - 170, y: mousePosition.y - 170 }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
        className="pointer-events-none fixed left-0 top-0 z-30 h-[340px] w-[340px] rounded-full bg-[#c08a6e]/12 blur-[95px]"
      />

      {/* ================= NAVBAR ================= */}
      <div className="fixed left-0 top-6 z-50 flex w-full justify-center px-4">
        <motion.nav
          style={{ width: navWidth, y: navY }}
          className="flex items-center justify-between rounded-full border border-white/10 bg-[#14070d]/55 px-7 py-4 shadow-[0_0_60px_rgba(122,31,61,0.15)] backdrop-blur-2xl"
        >
          <h1 className="text-lg font-black tracking-tight">
            RIYANSH<span className="text-[#9d4d65]">.DEV</span>
          </h1>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.id}
                className="group relative text-[11px] uppercase tracking-[0.25em] text-[#e8d8d2]/70 transition hover:text-white"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#c08a6e] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-[#c08a6e]/20 bg-[#7a1f3d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] shadow-[0_0_35px_rgba(122,31,61,0.25)] transition hover:bg-[#9d4d65] md:flex"
          >
            <FileText size={14} /> Resume
          </a>
        </motion.nav>
      </div>

      {/* ================= HERO ================= */}
      <section
        id="about"
        className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-36 md:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-xs font-black uppercase tracking-[0.45em] text-[#b36b82]"
          >
            Full Stack Certified • IIT Guwahati
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-black leading-[0.88] tracking-[-0.06em] md:text-[7.8rem]"
          >
            RIYANSH
            <br />
            <span className="bg-gradient-to-r from-[#c08a6e] via-[#c86a8b] to-[#7a1f3d] bg-clip-text text-transparent">
              PANDEY
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-[#d2c1bc]/72"
          >
            Blending frontend engineering, motion design, and luxury aesthetics
            to create immersive digital experiences.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group flex items-center gap-2 rounded-full border border-[#c08a6e]/20 bg-[#7a1f3d] px-8 py-4 text-sm font-black uppercase tracking-[0.22em] shadow-[0_0_45px_rgba(122,31,61,0.30)] transition hover:bg-[#9d4d65]"
            >
              Let's Connect
              <ChevronRight size={16} className="transition group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black uppercase tracking-[0.22em] backdrop-blur-xl transition hover:bg-white/[0.08]"
            >
              View Work
              <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center md:h-[520px] md:w-[520px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 rounded-full border border-[#9d4d65]/45"
          />
          <div className="absolute inset-12 rounded-full bg-[#7a1f3d]/20 blur-[80px]" />
          <div className="absolute left-12 top-16 h-3 w-3 rounded-full bg-[#c08a6e] shadow-[0_0_25px_#c08a6e]" />
          <div className="absolute bottom-14 right-20 h-2 w-2 rounded-full bg-[#c86a8b] shadow-[0_0_25px_#c86a8b]" />

          <img
            src="/PP5.png"
            alt="profile"
            className="relative z-10 h-[88%] w-[88%] rounded-full object-cover grayscale transition duration-700 hover:grayscale-0"
          />

          {heroBadges.map((badge) => (
            <motion.div
              key={badge.label}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5 + badge.delay, repeat: Infinity }}
              className={`absolute z-20 rounded-full border border-[#c08a6e]/25 bg-black/45 px-5 py-3 text-xs font-black uppercase tracking-[0.22em] shadow-[0_0_35px_rgba(122,31,61,0.20)] backdrop-blur-xl ${badge.className}`}
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#c86a8b]" />
              {badge.label}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl md:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-5 border-white/10 p-8 transition hover:bg-white/[0.04] md:border-r md:last:border-r-0"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#9d4d65]/30 bg-[#7a1f3d]/15 text-[#c86a8b] transition group-hover:scale-105 group-hover:bg-[#7a1f3d]/25">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="text-3xl font-black leading-none text-white">
                    {stat.value}
                  </h3>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.25em] text-[#d2c1bc]/60">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= CAREER / TIMELINE ================= */}
      <section id="career" className="relative mx-auto max-w-6xl px-6 py-36">
        <div className="mb-24">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b36b82]">
            My Journey
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
            Career
            <br />
            <span className="text-[#9d4d65]">Timeline</span>
          </h2>
        </div>

        <div className="absolute bottom-[120px] left-[32px] top-[220px] w-[2px] overflow-hidden bg-white/10 md:left-1/2 md:-translate-x-1/2">
          <motion.div
            style={{ scaleY: timelineProgress }}
            className="h-full w-full origin-top bg-gradient-to-b from-[#c08a6e] via-[#9d4d65] to-[#7a1f3d]"
          />
        </div>

        <div className="space-y-24">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`relative flex flex-col gap-8 md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="md:w-1/2">
                <div className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-[#9d4d65]/40 hover:bg-white/[0.045]">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#b36b82]">
                    {item.year}
                  </p>
                  <h3 className="mt-4 text-3xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-[#cdbcb6]/70">{item.desc}</p>
                </div>
              </div>

              <div className="absolute left-[24px] top-10 z-20 h-4 w-4 rounded-full bg-[#9d4d65] shadow-[0_0_25px_rgba(157,77,101,0.9)] md:left-1/2 md:-translate-x-1/2" />
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="mx-auto max-w-6xl overflow-hidden px-6 py-28">
        <h2 className="text-5xl font-black">
          Skills &<span className="text-[#9d4d65]"> Stack</span>
        </h2>

        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-4"
          >
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={`${skill}-${i}`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(122,31,61,0.12)]"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b36b82]">
              Selected Work
            </p>
            <h2 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
              Minimal.
              <br />
              <span className="text-[#9d4d65]">Premium.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#d2c1bc]/60">
            Premium cards with image preview, cinematic hover, and clean project positioning.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/10 p-[1px] transition hover:bg-gradient-to-br hover:from-[#c08a6e] hover:via-[#9d4d65] hover:to-[#7a1f3d]"
            >
              <div className="h-full rounded-[2rem] bg-[#090909]/95 p-5 backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#13070d]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7a1f3d]/30 via-transparent to-[#c08a6e]/20" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative h-48 w-full object-cover opacity-90 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur-xl">
                    {project.meta}
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-between">
                  <h3 className="text-2xl font-black">{project.title}</h3>
                  <ArrowUpRight size={18} className="opacity-50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>

                <p className="mt-5 leading-7 text-[#cdbcb6]/70">{project.desc}</p>
                <div className="mt-10 h-[1px] w-full bg-white/10" />
                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#9d4d65]">
                  Luxury Interface
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-32">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-14">
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[#7a1f3d]/20 blur-[120px]" />
          <div className="absolute -bottom-20 left-10 h-[220px] w-[220px] rounded-full bg-[#c08a6e]/10 blur-[100px]" />

          <div className="relative z-10">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b36b82]">
                Contact
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
                Let's Build
                <br />
                <span className="bg-gradient-to-r from-[#c08a6e] via-[#9d4d65] to-[#7a1f3d] bg-clip-text text-transparent">
                  Something Great
                </span>
              </h2>
            </div>

            <div className="mt-8 flex h-8 justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeField || "default"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-black text-[#c08a6e]"
                >
                  {funnyPrompts[activeField || "default"]}
                </motion.p>
              </AnimatePresence>
            </div>

            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="mt-14 space-y-8"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <input
                  onFocus={() => setActiveField("name")}
                  onBlur={() => setActiveField(null)}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="rounded-2xl border border-white/10 bg-black/20 px-6 py-5 outline-none transition focus:border-[#9d4d65]"
                />

                <input
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="rounded-2xl border border-white/10 bg-black/20 px-6 py-5 outline-none transition focus:border-[#9d4d65]"
                />
              </div>

              <textarea
                onFocus={() => setActiveField("message")}
                onBlur={() => setActiveField(null)}
                rows={6}
                name="message"
                placeholder="Project ka scene batao..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-6 py-5 outline-none transition focus:border-[#9d4d65]"
              />

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#7a1f3d] py-5 text-sm font-black uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(122,31,61,0.20)]"
              >
                Send Message
                <ChevronRight size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#080808] to-[#14070d] py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-20%] h-[400px] w-[400px] rounded-full bg-[#7a1f3d]/10 blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#4b1023]/20 blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b36b82]">
                Designed In Silence
              </p>
              <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
                BUILT TO
                <br />
                <span className="bg-gradient-to-r from-[#c08a6e] via-[#9d4d65] to-[#7a1f3d] bg-clip-text text-transparent">
                  IMPRESS
                </span>
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#d1c1bc]/70">
                Minimal motion. Luxury design language. Premium user experiences.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: FaGithub, href: "#" },
                { Icon: FaLinkedin, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: Mail, href: "mailto:riyanshpandey35@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5 }}
                  href={href}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition hover:border-[#9d4d65]/50 hover:bg-white/[0.06]"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-24 overflow-hidden py-6">
            <motion.h1
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap text-[4rem] font-black tracking-tight text-[#7a1f3d]/20 md:text-[8rem]"
            >
              CRAFTING DIGITAL EXPERIENCES THAT FEEL PREMIUM CRAFTING DIGITAL EXPERIENCES THAT FEEL PREMIUM
            </motion.h1>
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8a7a2]/50">
              © 2026 RIYANSH.DEV
            </p>

            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-xs font-black uppercase tracking-[0.25em]"
            >
              Back To Top ↑
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
}
