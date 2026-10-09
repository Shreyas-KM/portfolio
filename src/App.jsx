import React, { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Terminal as TerminalIcon,
  Server,
  Cloud,
  Cpu,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code2,
  Check,
  Copy,
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Menu,
  X,
  Layers,
  Sparkles,
  Bug,
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Interactive Security Sandbox State
  const [testPayload, setTestPayload] = useState(
    "<script>alert('xss')</script>",
  );
  const [scanResult, setScanResult] = useState(null);

  // Terminal Simulator State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState([
    {
      text: "sys_init: Shreyas KM security profile loaded successfully [200 OK]",
      type: "info",
    },
    {
      text: "Hint: Run 'skills', 'experience', 'projects', or 'contact'.",
      type: "system",
    },
  ]);

  const copyEmail = () => {
    navigator.clipboard.writeText("shreyasmulimani43@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const runVulnerabilityScan = () => {
    const input = testPayload.toLowerCase();
    if (
      input.includes("<script") ||
      input.includes("alert(") ||
      input.includes("onerror=")
    ) {
      setScanResult({
        status: "danger",
        title: "High Severity: Stored / Reflected XSS Pattern Detected",
        cwe: "CWE-79: Cross-Site Scripting",
        remediation:
          "Apply strict context-aware output encoding and configure Content-Security-Policy (CSP) headers.",
      });
    } else if (
      input.includes("' or '1'='1") ||
      input.includes("union select") ||
      input.includes("--")
    ) {
      setScanResult({
        status: "danger",
        title: "Critical Severity: SQL Injection Vector Identified",
        cwe: "CWE-89: SQL Injection",
        remediation:
          "Enforce parameterized prepared statements and utilize an ORM/query builder.",
      });
    } else {
      setScanResult({
        status: "safe",
        title: "No Obvious OWASP Top 10 Injection Signatures Found",
        cwe: "Sanitization Audit Passed",
        remediation: "Continue adhering to zero-trust parameter validation.",
      });
    }
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = terminalInput.trim().toLowerCase();
      let res = [];

      switch (cmd) {
        case "help":
          res = [
            {
              text: "Available commands: skills, experience, projects, contact, clear",
              type: "info",
            },
          ];
          break;
        case "skills":
          res = [
            { text: "Languages: Java, C++, Python, SQL", type: "success" },
            {
              text: "AppSec: XSS Detection, Security Headers, Reconnaissance, OWASP Guidelines",
              type: "success",
            },
            {
              text: "Cloud: AWS (VPC, ALB, Lambda, S3, EC2, IAM), Docker",
              type: "success",
            },
            {
              text: "AI Frameworks: LangChain, LangGraph, MCP (Model Context Protocol), RAG",
              type: "success",
            },
          ];
          break;
        case "experience":
          res = [
            {
              text: "Barracuda Networks | AppSec Intern (Sep 2025 – Mar 2026)",
              type: "info",
            },
            {
              text: "Led vulnerability assessments, header audits, and GenAI security research.",
              type: "system",
            },
          ];
          break;
        case "projects":
          res = [
            {
              text: "1. Web Vulnerability Assessment Platform (Python, Django, React, OWASP)",
              type: "success",
            },
            {
              text: "2. AI Log Analysis Chatbot (Python, ClickHouse, MCP, OpenAPI)",
              type: "success",
            },
            {
              text: "3. Multi-AZ Resilient VPC (AWS VPC, NAT Gateway, ALB, Auto-Scaling)",
              type: "success",
            },
          ];
          break;
        case "contact":
          res = [
            {
              text: "Email: shreyasmulimani43@gmail.com | Phone: +91 63631 71766 | Bagalkot, KA",
              type: "info",
            },
          ];
          break;
        case "clear":
          setTerminalLogs([]);
          setTerminalInput("");
          return;
        default:
          res = [
            {
              text: `Unknown command: '${cmd}'. Type 'help' for guidance.`,
              type: "error",
            },
          ];
      }

      setTerminalLogs((prev) => [
        ...prev,
        { text: `$ ${terminalInput}`, type: "command" },
        ...res,
      ]);
      setTerminalInput("");
    }
  };

  const projects = [
    {
      title: "AI-Based Log Analysis Chatbot",
      category: "AI & SecOps",
      firm: "Barracuda Networks",
      year: "2026",
      desc: "Architected an AI-powered system handling large-scale application security log processing. Automated API security discovery by using AI to generate and audit OpenAPI specifications.",
      metrics: "Sub-second analytical queries on ClickHouse log streams",
      tags: [
        "Python",
        "ClickHouse",
        "SQL",
        "Model Context Protocol (MCP)",
        "LangChain",
      ],
    },
    {
      title: "Vulnerability Assessment Platform",
      category: "Application Security",
      firm: "Barracuda Networks",
      year: "2025",
      desc: "Engineered a web application scanning suite executing non-intrusive security evaluations. Flags misconfigurations, missing security headers, exposed services, and OWASP top vulnerabilities with automated remediation guides.",
      metrics: "Assisted in improving customer trust and engagement by 5%",
      tags: ["Python", "Django", "React.js", "OWASP Top 10", "REST APIs"],
    },
    {
      title: "Resilient Multi-AZ VPC Architecture",
      category: "Cloud Infrastructure",
      firm: "Cloud Engineering Project",
      year: "2025",
      desc: "Designed and deployed a fault-tolerant multi-availability zone AWS network. Implemented strict network segregation using private subnets, egress NAT Gateways, and high-availability Auto Scaling via Application Load Balancers.",
      metrics: "Zero single point of network failure architecture",
      tags: ["AWS VPC", "ALB", "NAT Gateway", "EC2", "Auto Scaling"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background Grid Accent */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b14]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition">
              {/* <ShieldCheck size={24} className="text-black" /> */}
            </div>
            <div>
              <span className="font-bold text-white tracking-tight flex items-center gap-1.5 text-base">
                Shreyas K M
              </span>
              {/* <span className="block text-[11px] font-mono text-cyan-400">
                AppSec & Full-Stack
              </span> */}
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#overview" className="hover:text-cyan-400 transition">
              Snapshot
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          {/* Recruiter Quick Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono transition"
            >
              {copiedEmail ? (
                <Check size={14} className="text-emerald-400" />
              ) : (
                <Copy size={14} />
              )}
              {copiedEmail ? "Copied" : "Copy Email"}
            </button>
            <a
              href="mailto:shreyasmulimani43@gmail.com"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/10 transition"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-6 bg-slate-950/95 border-b border-slate-800 space-y-4 text-sm font-medium">
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#overview"
              className="block text-slate-300"
            >
              Overview
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#experience"
              className="block text-slate-300"
            >
              Experience
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#projects"
              className="block text-slate-300"
            >
              Projects
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#interactive"
              className="block text-slate-300"
            >
              Security Sandbox
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#skills"
              className="block text-slate-300"
            >
              Skills
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#contact"
              className="block text-slate-300"
            >
              Contact
            </a>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={copyEmail}
                className="w-full py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-center flex items-center justify-center gap-2"
              >
                {copiedEmail ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Copy size={14} />
                )}
                {copiedEmail
                  ? "Email Copied!"
                  : "Copy: shreyasmulimani43@gmail.com"}
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-12 pb-24 space-y-28 relative">
        {/* Hero Section with Dedicated Photo Frame */}
        <section
          id="overview"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-6"
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 mb-6">
              Open to Software Engineering roles, Cloud/AI
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              Securing Apps. <br className="hidden sm:inline" />
              Building Robust{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Full Stack Engineer for Cloud & AI Systems
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              I am an Application Security Intern at{" "}
              <strong>Barracuda Networks</strong> and an Information Science
              graduate. I blend security assessments (XSS, OWASP, header
              auditing) with modern backend engineering and agentic GenAI
              architectures.
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="mailto:shreyasmulimani43@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-cyan-500/20"
              >
                <Mail size={16} /> Contact Shreyas
              </a>
              <a
                href="https://linkedin.com/in/shreyasmulimani"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-semibold transition"
              >
                <ExternalLink size={16} /> LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/shreyas__k__mulimani/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-semibold transition"
              >
                <Code2 size={16} /> LeetCode (150+ Solved)
              </a>
            </div>
          </div>

          {/* Profile Photo & Status Card */}
          <div className="relative group shrink-0">
            {/* Glow Aura */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-slate-900 border-2 border-slate-700/80 overflow-hidden shadow-2xl flex flex-col justify-end">
              {/* Photo Display with Fallback Initials */}
              <img
                src="/profile.JPG"
                alt="Shreyas K M"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
                className="absolute inset-0 z-10 w-full h-full object-cover"
              />

              {/* Fallback Graphic if profile.jpg is not yet added */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 -z-0">
                <span className="text-6xl font-black text-slate-800 font-mono select-none">
                  SKM
                </span>
                <span className="text-[11px] font-mono text-slate-500 mt-2">
                  Place image in /public/profile.JPG
                </span>
              </div>

              {/* Verified Security Tag Over Photo */}
              {/* <div className="relative z-10 p-3.5 m-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">Shreyas KM</p>
                  <p className="text-[11px] text-cyan-400 font-mono">
                    AppSec @ Barracuda
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>{" "}
                  Verified
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Recruiter 5-Second Stat Cards */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition">
            <span className="text-xs font-mono text-slate-500 block mb-1">
              CURRENT TENURE
            </span>
            <p className="text-xl font-black text-white">Barracuda</p>
            <p className="text-xs text-cyan-400 font-mono mt-1">
              AppSec Engineering Intern
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition">
            <span className="text-xs font-mono text-slate-500 block mb-1">
              DSA COMPETENCE
            </span>
            <p className="text-xl font-black text-white">150+ Solved</p>
            <p className="text-xs text-emerald-400 font-mono mt-1">
              LeetCode Algorithms
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition">
            <span className="text-xs font-mono text-slate-500 block mb-1">
              ACADEMIC EXCELLENCE
            </span>
            <p className="text-xl font-black text-white">8.80 CGPA</p>
            <p className="text-xs text-indigo-400 font-mono mt-1">
              BE Information Science
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition">
            <span className="text-xs font-mono text-slate-500 block mb-1">
              CLOUD PROFICIENCY
            </span>
            <p className="text-xl font-black text-white">AWS Builder</p>
            <p className="text-xs text-sky-400 font-mono mt-1">
              Multi-AZ & Lambda Stack
            </p>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <Briefcase size={16} /> Verified Experience
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white mb-8">
            Where I've Contributed
          </h2>

          <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/60 uppercase">
                  Production Security
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  Application Security Intern
                </h3>
                <p className="text-cyan-400 font-mono text-sm">
                  Barracuda Networks
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 self-start md:self-auto">
                Sep 2025 – Mar 2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="font-semibold text-white block mb-1">
                  Vulnerability Management & Scans
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Conducted systematic vulnerability assessments on web apps,
                  isolating flaws such as Cross-Site Scripting (XSS) and
                  non-compliant security headers.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="font-semibold text-white block mb-1">
                  Reconnaissance & Threat Modeling
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Executed tech-stack fingerprinting to map infrastructure
                  attack surfaces and provided remediation roadmaps to improve
                  software posture.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="font-semibold text-white block mb-1">
                  Cross-Functional Security Strategy
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Collaborated with product managers to implement
                  customer-facing security protections, contributing to a 5%
                  increase in customer trust and engagement.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="font-semibold text-white block mb-1">
                  GenAI & Model Context Security
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pioneered internal evaluations using Model Context Protocol
                  (MCP), LangChain, and LangGraph to automate security logging
                  pipelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section id="projects">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <Layers size={16} /> Engineering Output
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white mb-8">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mb-3">
                    {item.firm}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 mb-4">
                    <span className="text-[11px] font-mono text-slate-500 block">
                      KEY OUTCOME
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      {item.metrics}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/50 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Matrix */}
        <section id="skills">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <Server size={16} /> Skills Inventory
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white mb-8">
            Technical Proficiencies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800">
              <span className="text-xs font-mono text-cyan-400 block mb-3 font-semibold">
                LANGUAGES
              </span>
              <div className="flex flex-wrap gap-2">
                {["Java", "C++", "Python", "SQL"].map((s, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800">
              <span className="text-xs font-mono text-emerald-400 block mb-3 font-semibold">
                APP SECURITY
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "OWASP Top 10",
                  "XSS Auditing",
                  "Security Headers",
                  "Reconnaissance",
                ].map((s, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800">
              <span className="text-xs font-mono text-indigo-400 block mb-3 font-semibold">
                AI & GENAI
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "LangChain",
                  "LangGraph",
                  "MCP (Model Context)",
                  "RAG",
                  "Prompting",
                ].map((s, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800">
              <span className="text-xs font-mono text-sky-400 block mb-3 font-semibold">
                CLOUD & DEVOPS
              </span>
              <div className="flex flex-wrap gap-2">
                {["AWS VPC", "Lambda", "S3", "CloudWatch", "Docker", "ALB"].map(
                  (s, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 text-slate-200"
                    >
                      {s}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Credentials */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
              <GraduationCap size={16} /> Education
            </div>
            <h3 className="text-lg font-bold text-white">
              Basaveshwara Engineering College
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              B.E. Information Science and Engineering
            </p>
            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">Graduation: 2026</span>
              <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-bold">
                CGPA: 8.80
              </span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
              <Award size={16} /> Certifications
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-white">
                  AWS Builder Series
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Aug 2025
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-white">
                  Docker Official Course
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Aug 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Recruiter Direct Contact Box */}
        <section
          id="contact"
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-cyan-950/30 via-slate-900/40 to-slate-950 border border-cyan-800/40 text-center"
        >
          <h2 className="text-3xl font-black tracking-tight text-white mb-3">
            Discuss Opportunities
          </h2>
          {/* <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed mb-8">
            Whether for AppSec engineering, cloud infrastructure, or backend
            development roles, feel free to reach out directly.
          </p> */}

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 mb-8 font-mono">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400" /> Bagalkot, Karnataka
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-cyan-400" /> +91 63631 71766
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-400" />{" "}
              shreyasmulimani43@gmail.com
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shreyasmulimani43@gmail.com"
              className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition text-sm shadow-lg shadow-cyan-500/20"
            >
              Direct Email
            </a>
            <button
              onClick={copyEmail}
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-mono text-sm transition"
            >
              {copiedEmail ? "Email Copied!" : "Copy Email Address"}
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600 font-mono">
        <p>
          &copy; {new Date().getFullYear()} Shreyas KM &bull; Application
          Security & Cloud
        </p>
      </footer>
    </div>
  );
}
