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
  Menu,
} from "lucide-react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function LuxuryPortfolio() {
  const { scrollY } = useScroll();

  const navWidth = useTransform(scrollY, [0, 120], ["94%", "82%"]);
  const navY = useTransform(scrollY, [0, 120], [0, -4]);

  const timelineProgress = useSpring(
    useTransform(scrollY, [550, 2300], [0, 1]),
    {
      stiffness: 120,
      damping: 30,
    }
  );

  const [activeField, setActiveField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeedrdqv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setActiveField(null);
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };


  useEffect(() => {
    const lenis = new Lenis({
      duration: window.innerWidth < 768 ? 0.65 : 1.1,
      smoothWheel: window.innerWidth >= 768,
      lerp: window.innerWidth < 768 ? 0.12 : 0.08,
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
    { label: "Next.js", className: "left-0 top-6 md:-left-10 md:top-12", delay: 0 },
    { label: "React", className: "right-0 top-10 md:-right-8 md:top-16", delay: 0.2 },
    { label: "Tailwind CSS", className: "left-0 bottom-8 md:-left-14 md:bottom-24", delay: 0.4 },
    { label: "Framer Motion", className: "right-0 bottom-2 md:-right-16 md:bottom-16", delay: 0.6 },
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
      image: "/DAWADUNIYA.png",
      desc: "Healthcare platform with OTP authentication, premium UI and smooth user experience.",
      meta: "Healthcare • Auth • CRM",
    },
    {
      title: "Luxury Portfolio",
      image: "/profilephoto.png",
      desc: "Cinematic personal portfolio built using Next.js, Framer Motion and Lenis.",
      meta: "Portfolio • Motion • UI",
    },
    {
      title: "UPS Performance Tracker",
      image: "/upstracker.png",
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
    <div className="relative min-h-screen overflow-hidden overflow-x-hidden bg-[#050505] text-[#f5e9e2] selection:bg-[#7a1f3d]/40">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(192,138,110,0.14),transparent_26%),radial-gradient(circle_at_80%_25%,rgba(157,77,101,0.18),transparent_32%),radial-gradient(circle_at_bottom,rgba(75,16,35,0.32),transparent_42%)]" />

        <div className="absolute inset-0 hidden bg-[linear-gradient(rgba(255,255,255,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.024)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] sm:block" />

        <motion.div
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute left-[-22%] top-[-12%] h-[320px] w-[320px] rounded-full bg-[#7a1f3d]/20 blur-[70px] md:left-[-12%] md:h-[560px] md:w-[560px] md:blur-[90px]"
        />

        <motion.div
          animate={{ x: [0, -50, 30, 0], y: [0, 35, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-12%] right-[-28%] h-[320px] w-[320px] rounded-full bg-[#4b1023]/30 blur-[70px] md:right-[-10%] md:h-[560px] md:w-[560px] md:blur-[90px]"
        />

        <div className="absolute inset-0 opacity-[0.035] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </div>

      {/* ================= CURSOR GLOW ================= */}
      <motion.div
        animate={{ x: mousePosition.x - 170, y: mousePosition.y - 170 }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
        className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[340px] w-[340px] rounded-full bg-[#c08a6e]/12 blur-[95px] lg:block"
      />

      {/* ================= NAVBAR ================= */}
      <div className="fixed left-0 top-4 z-50 flex w-full justify-center px-3 sm:top-6 sm:px-4">
        <motion.nav
          style={{ width: navWidth, y: navY }}
          className="relative flex min-h-[64px] items-center justify-between rounded-full border border-white/10 bg-[#14070d]/70 px-4 py-3 shadow-[0_0_60px_rgba(122,31,61,0.15)] backdrop-blur-2xl sm:px-6 lg:px-7"
        >
          <a href="#about" className="shrink-0 text-base font-black tracking-tight sm:text-lg">
            RIYANSH<span className="text-[#9d4d65]">.DEV</span>
          </a>

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

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-[#c08a6e]/20 bg-[#7a1f3d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] shadow-[0_0_35px_rgba(122,31,61,0.25)] transition hover:bg-[#9d4d65] sm:flex"
            >
              <FileText size={14} /> Resume
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
              aria-label="Toggle menu"
            >
              <Menu size={18} />
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                className="absolute left-3 right-3 top-[76px] rounded-3xl border border-white/10 bg-[#10070b]/95 p-3 shadow-[0_0_50px_rgba(122,31,61,0.25)] backdrop-blur-2xl md:hidden"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-[0.25em] text-[#e8d8d2]/75 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#7a1f3d] px-5 py-4 text-xs font-black uppercase tracking-[0.25em] sm:hidden"
                >
                  <FileText size={14} /> Resume
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* ================= HERO ================= */}
      <section
        id="about"
        className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-32 sm:px-6 sm:pt-36 md:grid-cols-[1.05fr_0.95fr] md:gap-14 lg:gap-16"
      >
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-[10px] font-black uppercase tracking-[0.28em] text-[#b36b82] sm:text-xs sm:tracking-[0.45em]"
          >
            Full Stack Certified • IIT Guwahati
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[4.4rem] font-black leading-[0.84] tracking-[-0.08em] min-[380px]:text-[5rem] sm:text-[6.2rem] md:text-[6rem] lg:text-[7.8rem]"
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
            className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#d2c1bc]/72 sm:text-lg sm:leading-8 md:mx-0 md:max-w-2xl"
          >
            Blending frontend engineering, motion design, and luxury aesthetics
            to create immersive digital experiences.
          </motion.p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center md:justify-start">
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group flex items-center justify-center gap-2 rounded-full border border-[#c08a6e]/20 bg-[#7a1f3d] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_45px_rgba(122,31,61,0.30)] transition hover:bg-[#9d4d65] sm:text-sm"
            >
              Let's Connect
              <ChevronRight size={16} className="transition group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] backdrop-blur-xl transition hover:bg-white/[0.08] sm:text-sm"
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
          className="order-1 mx-auto flex h-[270px] w-[270px] items-center justify-center sm:h-[330px] sm:w-[330px] md:order-2 md:h-[430px] md:w-[430px] lg:h-[520px] lg:w-[520px]"
        >
          <div className="relative flex h-full w-full items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-[#9d4d65]/45"
            />
            <div className="absolute inset-12 rounded-full bg-[#7a1f3d]/20 blur-[45px] md:blur-[70px]" />
            <div className="absolute left-10 top-12 hidden h-3 w-3 rounded-full bg-[#c08a6e] shadow-[0_0_25px_#c08a6e] sm:block" />
            <div className="absolute bottom-12 right-16 hidden h-2 w-2 rounded-full bg-[#c86a8b] shadow-[0_0_25px_#c86a8b] sm:block" />

            <img
              src="/websiteprofile.png"
              alt="profile"
              className="relative z-10 h-[86%] w-[86%] rounded-full object-cover grayscale transition duration-700 hover:grayscale-0"
            />

            {heroBadges.map((badge) => (
              <motion.div
                key={badge.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5 + badge.delay, repeat: Infinity }}
                className={`absolute z-20 hidden rounded-full border border-[#c08a6e]/25 bg-black/45 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] shadow-[0_0_35px_rgba(122,31,61,0.20)] backdrop-blur-xl sm:block md:px-5 md:py-3 md:text-xs md:tracking-[0.22em] ${badge.className}`}
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#c86a8b]" />
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-20">
        <div className="grid overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center gap-4 border-b border-white/10 p-6 transition hover:bg-white/[0.04] sm:border-r sm:p-7 sm:nth-[2n]:border-r-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#9d4d65]/30 bg-[#7a1f3d]/15 text-[#c86a8b] transition group-hover:scale-105 group-hover:bg-[#7a1f3d]/25 sm:h-16 sm:w-16">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-2xl font-black leading-none text-white sm:text-3xl">
                    {stat.value}
                  </h3>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#d2c1bc]/60 sm:mt-3 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= CAREER / TIMELINE ================= */}
      <section id="career" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32 lg:py-36">
        <div className="mb-16 sm:mb-24">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b36b82] sm:text-xs sm:tracking-[0.35em]">
            My Journey
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            Career
            <br />
            <span className="text-[#9d4d65]">Timeline</span>
          </h2>
        </div>

        <div className="absolute bottom-[90px] left-[24px] top-[205px] w-[2px] overflow-hidden bg-white/10 sm:left-[32px] sm:top-[220px] md:left-1/2 md:-translate-x-1/2">
          <motion.div
            style={{ scaleY: timelineProgress }}
            className="h-full w-full origin-top bg-gradient-to-b from-[#c08a6e] via-[#9d4d65] to-[#7a1f3d]"
          />
        </div>

        <div className="space-y-14 sm:space-y-20 md:space-y-24">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className={`relative flex flex-col gap-8 pl-9 sm:pl-12 md:pl-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="md:w-1/2">
                <div className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-[#9d4d65]/40 hover:bg-white/[0.045] sm:rounded-[2rem] sm:p-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#b36b82] sm:text-xs sm:tracking-[0.3em]">
                    {item.year}
                  </p>
                  <h3 className="mt-4 text-2xl font-black sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#cdbcb6]/70 sm:text-base">{item.desc}</p>
                </div>
              </div>

              <div className="absolute left-[17px] top-8 z-20 h-4 w-4 rounded-full bg-[#9d4d65] shadow-[0_0_25px_rgba(157,77,101,0.9)] sm:left-[25px] md:left-1/2 md:-translate-x-1/2" />
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="mx-auto max-w-6xl overflow-hidden px-5 py-20 sm:px-6 sm:py-28">
        <h2 className="text-4xl font-black sm:text-5xl">
          Skills &<span className="text-[#9d4d65]"> Stack</span>
        </h2>

        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:mt-14">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-3 sm:gap-4"
          >
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={`${skill}-${i}`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-black uppercase tracking-[0.18em] shadow-[0_0_30px_rgba(122,31,61,0.12)] sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.2em]"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32">
        <div className="mb-14 flex flex-col justify-between gap-5 sm:mb-20 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b36b82] sm:text-xs sm:tracking-[0.35em]">
              Selected Work
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
              Minimal.
              <br />
              <span className="text-[#9d4d65]">Premium.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#d2c1bc]/60">
            Premium cards with image preview, cinematic hover, and clean project positioning.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[1.6rem] bg-white/10 p-[1px] transition hover:bg-gradient-to-br hover:from-[#c08a6e] hover:via-[#9d4d65] hover:to-[#7a1f3d] sm:rounded-[2rem]"
            >
              <div className="h-full rounded-[1.6rem] bg-[#090909]/95 p-4 backdrop-blur-xl sm:rounded-[2rem] sm:p-5">
                <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#13070d] sm:rounded-[1.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7a1f3d]/30 via-transparent to-[#c08a6e]/20" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative h-44 w-full object-cover opacity-90 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 sm:h-48"
                  />
                  <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-white/80 backdrop-blur-xl sm:left-4 sm:top-4 sm:px-4 sm:text-[10px]">
                    {project.meta}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 sm:mt-7">
                  <h3 className="text-xl font-black sm:text-2xl">{project.title}</h3>
                  <ArrowUpRight size={18} className="shrink-0 opacity-50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>

                <p className="mt-4 text-sm leading-7 text-[#cdbcb6]/70 sm:mt-5 sm:text-base">{project.desc}</p>
                <div className="mt-8 h-[1px] w-full bg-white/10 sm:mt-10" />
                <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-[#9d4d65] sm:text-xs">
                  Luxury Interface
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="mx-auto max-w-5xl px-5 py-24 sm:px-6 sm:py-32">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl sm:rounded-[3rem] sm:p-8 md:p-14">
          <div className="absolute right-0 top-0 h-[220px] w-[220px] rounded-full bg-[#7a1f3d]/20 blur-[80px] sm:h-[300px] sm:w-[300px] sm:blur-[110px]" />
          <div className="absolute -bottom-20 left-10 h-[180px] w-[180px] rounded-full bg-[#c08a6e]/10 blur-[80px] sm:h-[220px] sm:w-[220px] sm:blur-[100px]" />

          <div className="relative z-10">
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b36b82] sm:text-xs sm:tracking-[0.35em]">
                Contact
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Let's Build
                <br />
                <span className="bg-gradient-to-r from-[#c08a6e] via-[#9d4d65] to-[#7a1f3d] bg-clip-text text-transparent">
                  Something Great
                </span>
              </h2>
            </div>

            <div className="mt-7 flex h-8 justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeField || "default"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm font-black text-[#c08a6e] sm:text-base"
                >
                  {funnyPrompts[activeField || "default"]}
                </motion.p>
              </AnimatePresence>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-14 space-y-8"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Form Submission"
              />
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-8">
                <input
                  onFocus={() => setActiveField("name")}
                  onBlur={() => setActiveField(null)}
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-[#9d4d65] sm:px-6 sm:py-5"
                />

                <input
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-[#9d4d65] sm:px-6 sm:py-5"
                />
              </div>

              <textarea
                onFocus={() => setActiveField("message")}
                onBlur={() => setActiveField(null)}
                rows={6}
                name="message"
                required
                placeholder="Pls share about the Project..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-[#9d4d65] sm:px-6 sm:py-5"
              />

              <motion.button
                type="submit"
                disabled={formStatus === "sending"}
                whileHover={{ y: formStatus === "sending" ? 0 : -2 }}
                whileTap={{ scale: formStatus === "sending" ? 1 : 0.98 }}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#7a1f3d] py-4 text-xs font-black uppercase tracking-[0.25em] shadow-[0_0_40px_rgba(122,31,61,0.20)] transition disabled:cursor-not-allowed disabled:opacity-60 sm:py-5 sm:text-sm sm:tracking-[0.3em]"
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}
                <ChevronRight size={18} />
              </motion.button>

              <AnimatePresence>
                {formStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-4 text-center text-sm font-semibold text-emerald-300"
                  >
                    Message sent successfully. I&apos;ll get back to you soon 🚀
                  </motion.p>
                )}

                {formStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-2xl border border-red-400/20 bg-red-400/10 px-5 py-4 text-center text-sm font-semibold text-red-300"
                  >
                    Something went wrong. Please try again or email me directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#080808] to-[#14070d] py-16 sm:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-25%] top-[-20%] h-[280px] w-[280px] rounded-full bg-[#7a1f3d]/10 blur-[100px] sm:left-[-10%] sm:h-[400px] sm:w-[400px] sm:blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-25%] h-[280px] w-[280px] rounded-full bg-[#4b1023]/20 blur-[110px] sm:right-[-10%] sm:h-[400px] sm:w-[400px] sm:blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b36b82] sm:text-xs sm:tracking-[0.35em]">
                Designed In Silence
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                BUILT TO
                <br />
                <span className="bg-gradient-to-r from-[#c08a6e] via-[#9d4d65] to-[#7a1f3d] bg-clip-text text-transparent">
                  IMPRESS
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#d1c1bc]/70 sm:mt-8 sm:text-lg">
                Minimal motion. Luxury design language. Premium user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                { Icon: FaGithub, href: "https://github.com/CodeWithRiyansh" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/ravi-pandey-87a89a187" },
                { Icon: FaInstagram, href: "#" },
                { Icon: Mail, href: "mailto:riyanshpandey35@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5 }}
                  href={href}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition hover:border-[#9d4d65]/50 hover:bg-white/[0.06] sm:h-16 sm:w-16"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-16 overflow-hidden py-5 sm:mt-24 sm:py-6">
            <motion.h1
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap text-[2.8rem] font-black tracking-tight text-[#7a1f3d]/20 sm:text-[4rem] md:text-[8rem]"
            >
              CRAFTING DIGITAL EXPERIENCES THAT FEEL PREMIUM CRAFTING DIGITAL EXPERIENCES THAT FEEL PREMIUM
            </motion.h1>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-8 sm:mt-10 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8a7a2]/50 sm:text-xs sm:tracking-[0.3em]">
              © 2026 RIYANSH.DEV
            </p>

            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-[10px] font-black uppercase tracking-[0.25em] sm:text-xs"
            >
              Back To Top ↑
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
}
