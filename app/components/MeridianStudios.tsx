"use client";

import React, { useEffect,  useState } from "react";
import Image from "next/image";
import {
  Camera,
  Film,
  Megaphone,
  PenTool,
  Sparkles,
  ArrowUpRight,
  MapPin,
  Mail,
  AtSign,
  Menu,
  X,
  Building2,
  Coffee,
  Watch,
  Gem,
  Car,
  Clock,
} from "lucide-react";
import heroImage from "../image/meradian_hero.jpg";

/* ---------------------------------------------------------
   MERIDIAN STUDIOS — brand site
   Palette: espresso / ivory / brass gold / brick amber
   Type: Fraunces (display) + Manrope (body) + JetBrains Mono (readouts)
--------------------------------------------------------- */

const COLORS = {
  bg: "#FBF8F1",
  bgAlt: "#F4EDDC",
  bgRaised: "#EDE2C8",
  ivory: "#251F16",
  ivoryDim: "#6E6250",
  gold: "#A9803D",
  goldDim: "#8A6B36",
  amber: "#B15E2A",
  line: "rgba(37,31,22,0.14)",
};

const FONTS = {
  display: "'Fraunces', 'Times New Roman', serif",
  body: "'Manrope', 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'Courier New', monospace",
};

const SERVICES = [
  {
    icon: Film,
    tag: "01",
    title: "Videography",
    body: "Cinematic videos that tell your story and connect.",
  },
  {
    icon: Camera,
    tag: "02",
    title: "Photography",
    body: "High-quality visuals that capture what matters.",
  },
  {
    icon: Megaphone,
    tag: "03",
    title: "Social Media",
    body: "Strategic content and management that grows your brand.",
  },
  {
    icon: PenTool,
    tag: "04",
    title: "Content Creation",
    body: "Creative content tailored to your brand and goals.",
  },
  {
    icon: Sparkles,
    tag: "05",
    title: "Brand Storytelling",
    body: "Authentic stories that build trust and leave a lasting mark.",
  },
];

const TOOLS = [
  "Photoshop",
  "Lightroom Classic",
  "Premiere Pro",
  "DaVinci Resolve",
  "CapCut",
  "Canva",
];

const PROJECTS = [
  {
    index: "01",
    name: "Viento Hotel",
    category: "HOSPITALITY",
    desc: "Luxury hospitality photography and promotional content.",
    icon: Building2,
    grad: "linear-gradient(135deg, #3a2a17 0%, #14100C 70%)",
    reading: "MODE — AMBIENT / EXP — 1/30s",
  },
  {
    index: "02",
    name: "Cove Cafe",
    category: "FOOD & BEVERAGE",
    desc: "Food photography, café branding and social media content.",
    icon: Coffee,
    grad: "linear-gradient(135deg, #3d2417 0%, #14100C 70%)",
    reading: "MODE — MACRO / EXP — 1/125s",
  },
  {
    index: "03",
    name: "Coco Tree",
    category: "LUXURY RETAIL",
    desc: "Premium retailer of authentic luxury watches, designer accessories and imported branded products.",
    icon: Watch,
    grad: "linear-gradient(135deg, #2a2420 0%, #14100C 70%)",
    reading: "MODE — STUDIO / EXP — 1/200s",
  },
  {
    index: "04",
    name: "Fine Gem & Jewellery",
    category: "FINE JEWELLERY",
    desc: "Premium diamond and gold collections, shown through elegant, refined visual storytelling.",
    icon: Gem,
    grad: "linear-gradient(135deg, #331c1c 0%, #14100C 70%)",
    reading: "MODE — MACRO / EXP — 1/250s",
  },
  {
    index: "05",
    name: "Galle Enterprises",
    category: "AUTOMOTIVE",
    desc: "A trusted vehicle importer showcased through premium automotive photography.",
    icon: Car,
    grad: "linear-gradient(135deg, #22201d 0%, #14100C 70%)",
    reading: "MODE — MOTION / EXP — 1/500s",
  },
  {
    index: "06",
    name: "Chrono Ceylon",
    category: "TIMEPIECES",
    desc: "Authentic luxury and designer timepieces, captured with refined product photography.",
    icon: Clock,
    grad: "linear-gradient(135deg, #2c2213 0%, #14100C 70%)",
    reading: "MODE — STUDIO / EXP — 1/320s",
  },
];

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function Corner({ pos = "tl", size = 22, color = COLORS.gold }) {
  const s: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    opacity: 0.85,
  };
  if (pos === "tl") Object.assign(s, { top: 0, left: 0, borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}` });
  if (pos === "tr") Object.assign(s, { top: 0, right: 0, borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}` });
  if (pos === "bl") Object.assign(s, { bottom: 0, left: 0, borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}` });
  if (pos === "br") Object.assign(s, { bottom: 0, right: 0, borderBottom: `1px solid ${color}`, borderRight: `1px solid ${color}` });
  return <div style={s} />;
}

function Frame({ children, style = {}, cornerSize = 20 }: { children?: React.ReactNode; style?: React.CSSProperties; cornerSize?: number }) {
  return (
    <div style={{ position: "relative", ...style }}>
      <Corner pos="tl" size={cornerSize} />
      <Corner pos="tr" size={cornerSize} />
      <Corner pos="bl" size={cornerSize} />
      <Corner pos="br" size={cornerSize} />
      {children}
    </div>
  );
}

function Eyebrow({ children, color = COLORS.gold }: { children?: React.ReactNode; color?: string }) {
  return (
    <div
      style={{
        fontFamily: FONTS.mono,
        fontSize: 12,
        letterSpacing: "0.28em",
        color,
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 18,
      }}
    >
      <span style={{ width: 26, height: 1, background: color, display: "inline-block" }} />
      {children}
    </div>
  );
}

// The work grid stays on dark "negative" plates by design — a deliberate
// contrast pocket inside the cream page, so its text uses light tokens.
const PLATE_TEXT = "#F4EEE1";
const PLATE_TEXT_DIM = "#C9BBA0";

function ProjectCard({ p }: { p: { index: string; name: string; category: string; desc: string; icon: any; grad: string; reading: string } }) {
  const [hover, setHover] = useState(false);
  const Icon = p.icon;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: p.grad,
        border: `1px solid ${hover ? COLORS.gold : "rgba(244,238,225,0.14)"}`,
        transition: "border-color 0.35s ease, transform 0.35s ease",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        padding: "28px 24px",
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Corner pos="tl" size={16} color={hover ? COLORS.gold : "rgba(244,238,225,0.25)"} />
      <Corner pos="br" size={16} color={hover ? COLORS.gold : "rgba(244,238,225,0.25)"} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 12,
            color: PLATE_TEXT_DIM,
            letterSpacing: "0.2em",
          }}
        >
          {p.index}
        </span>
        <Icon
          size={28}
          color={hover ? COLORS.gold : PLATE_TEXT_DIM}
          strokeWidth={1.25}
          style={{ transition: "color 0.3s ease" }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.07,
          pointerEvents: "none",
        }}
      >
        <Icon size={180} color={PLATE_TEXT} strokeWidth={0.5} />
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10.5,
            letterSpacing: "0.18em",
            color: COLORS.gold,
            marginBottom: 8,
          }}
        >
          {p.category}
        </div>
        <h3
          style={{
            fontFamily: FONTS.display,
            fontSize: 26,
            color: PLATE_TEXT,
            margin: "0 0 10px 0",
            fontWeight: 500,
          }}
        >
          {p.name}
        </h3>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 13.5,
            lineHeight: 1.55,
            color: PLATE_TEXT_DIM,
            margin: 0,
            maxWidth: 320,
          }}
        >
          {p.desc}
        </p>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            letterSpacing: "0.14em",
            color: hover ? COLORS.gold : "transparent",
            marginTop: 14,
            transition: "color 0.3s ease",
          }}
        >
          {p.reading}
        </div>
      </div>
    </div>
  );
}

export default function MeridianStudios() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["About", "Services", "Work", "Contact"];

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      style={{
        background: COLORS.bg,
        color: COLORS.ivory,
        fontFamily: FONTS.body,
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ms-marquee-track {
          display: inline-flex;
          animation: marquee 26s linear infinite;
          white-space: nowrap;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ms-fade { animation: fadeUp 0.9s ease both; }
        .ms-fade-d1 { animation-delay: 0.12s; }
        .ms-fade-d2 { animation-delay: 0.24s; }
        .ms-fade-d3 { animation-delay: 0.36s; }

        .ms-nav-link { position: relative; color: #6E6250; text-decoration: none; font-size: 13px; letter-spacing: 0.08em; }
        .ms-nav-link::after {
          content: ''; position: absolute; left: 0; bottom: -4px; width: 0%; height: 1px; background: #A9803D;
          transition: width 0.3s ease;
        }
        .ms-nav-link:hover { color: #251F16; }
        .ms-nav-link:hover::after { width: 100%; }

        .ms-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 14px 26px;
          border: 1px solid #A9803D;
          color: #251F16;
          background: transparent;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .ms-btn:hover { background: #A9803D; color: #FBF8F1; }

        .ms-btn-solid {
          background: #B15E2A;
          border-color: #B15E2A;
          color: #FBF8F1;
        }
        .ms-btn-solid:hover { background: #C16E38; color: #FBF8F1; }

        .ms-service:hover .ms-service-line { width: 100%; }
        .ms-service-line { width: 24px; height: 1px; background: #A9803D; transition: width 0.4s ease; }

        /* ---------- responsive layout ---------- */

        .ms-desktop-nav { display: flex; }
        .ms-menu-btn { display: none; }

        .ms-services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        .ms-service {
          border-right: 1px solid rgba(37,31,22,0.14);
          padding: 0 24px;
        }
        .ms-service:first-child {
          border-left: 1px solid rgba(37,31,22,0.14);
        }

        .ms-work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        .ms-mobile-menu {
          animation: menuDrop 0.28s ease both;
        }
        @keyframes menuDrop {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 980px) {
          .ms-desktop-nav { display: none !important; }
          .ms-menu-btn { display: flex !important; }
        }

        @media (max-width: 900px) {
          .ms-grid-2 { grid-template-columns: 1fr !important; }
          .ms-grid-3 { grid-template-columns: repeat(3, 1fr) !important; gap: 18px !important; }
          .ms-services-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 44px !important; }
          .ms-work-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ms-flex-stack { flex-direction: column !important; align-items: flex-start !important; }
        }

        @media (max-width: 640px) {
          .ms-services-grid { grid-template-columns: 1fr !important; row-gap: 32px !important; }
          .ms-service {
            border-right: none !important;
            border-left: none !important;
            border-top: 1px solid rgba(37,31,22,0.14);
            padding: 24px 0 0 !important;
          }
          .ms-service:first-child { border-left: none !important; border-top: 1px solid rgba(37,31,22,0.14); }
          .ms-work-grid { grid-template-columns: 1fr !important; }
          .ms-grid-3 { grid-template-columns: repeat(3, 1fr) !important; gap: 14px !important; }
          .ms-btn { font-size: 11px !important; padding: 12px 18px !important; }
        }

        @media (max-width: 420px) {
          .ms-grid-3 { grid-template-columns: 1fr 1fr 1fr !important; }
        }

        .ms-hero-section { min-height: 100vh; }
        @media (max-width: 760px) {
          .ms-hero-section {
            min-height: auto;
            padding-top: 104px !important;
            padding-bottom: 0 !important;
            flex-direction: column;
            align-items: stretch;
          }
          .ms-hero-section > div:not(.ms-hero-marquee) { min-width: 0; width: 100%; }
          .ms-hero-media { width: min(100%, 460px); margin: 0 auto; }
          .ms-hero-image-caption { font-size: 9px !important; gap: 12px; }
          .ms-hero-marquee { position: static !important; margin-top: 44px; }
        }

        @media (max-width: 480px) {
          .ms-hero-section { padding-top: 92px !important; }
          .ms-hero-section h1 { font-size: clamp(36px, 12vw, 56px) !important; }
          .ms-hero-section p { font-size: 15px !important; }
          .ms-hero-media { width: 100%; }
          .ms-hero-image-caption { left: 14px !important; right: 14px !important; bottom: 14px !important; }
          .ms-btn { max-width: 100%; }
          .ms-work-grid { gap: 12px !important; }
          .ms-work-grid > * { min-width: 0; }
          footer span { max-width: 100%; }
        }

        @media (max-width: 360px) {
          .ms-hero-image-caption { font-size: 8px !important; letter-spacing: 0.06em !important; }
          .ms-btn { width: 100%; justify-content: center; }
        }

        a:focus-visible, button:focus-visible {
          outline: 2px solid #A9803D;
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ms-marquee-track { animation: none; }
          .ms-fade, .ms-fade-d1, .ms-fade-d2, .ms-fade-d3 { animation: none; opacity: 1; }
        }
      `}</style>

      {/* NAV */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(251,248,241,0.92)" : "transparent",
          borderBottom: scrolled ? `1px solid ${COLORS.line}` : "1px solid transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "18px clamp(18px, 5vw, 28px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
            {/* <div
              style={{
                flexShrink: 0,
                width: 34,
                height: 34,
                border: `1px solid ${COLORS.gold}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONTS.display,
                fontSize: 16,
                color: COLORS.gold,
              }}
            >
              M
            </div> */}
            <span
              style={{
                fontFamily: FONTS.display,
                fontSize: "clamp(13px, 3.4vw, 16px)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Meridian Studios
            </span>
          </div>

          <nav className="ms-desktop-nav" style={{ gap: 36, alignItems: "center" }}>
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="ms-nav-link">
                {l}
              </a>
            ))}
            <a href="#contact" className="ms-btn">
              Start a project
            </a>
          </nav>

          <button
            className="ms-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: `1px solid ${COLORS.gold}`,
              width: 40,
              height: 40,
              color: COLORS.ivory,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="ms-mobile-menu"
            style={{
              display: "flex",
              flexDirection: "column",
              background: COLORS.bg,
              borderTop: `1px solid ${COLORS.line}`,
              padding: "10px clamp(18px, 5vw, 28px) 26px",
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="ms-nav-link"
                style={{ padding: "14px 0", borderBottom: `1px solid ${COLORS.line}`, fontSize: 15 }}
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="ms-btn ms-btn-solid"
              style={{ marginTop: 20, justifyContent: "center" }}
            >
              Start a project
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        className="ms-hero-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "clamp(96px, 18vw, 120px)",
          paddingBottom: "60px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(199,161,90,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 15% 85%, rgba(193,104,47,0.10), transparent 60%)",
          }}
        />
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 clamp(18px, 5vw, 28px)",
            position: "relative",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "clamp(36px, 6vw, 60px)",
            alignItems: "center",
          }}
          className="ms-grid-2"
        >
          <div>
            <div className="ms-fade">
              <Eyebrow>Meridian Studios — Sri Lanka</Eyebrow>
            </div>
            <h1
              className="ms-fade ms-fade-d1"
              style={{
                fontFamily: FONTS.display,
                fontWeight: 500,
                fontSize: "clamp(38px, 7.2vw, 82px)",
                lineHeight: 1.05,
                margin: "0 0 26px 0",
                letterSpacing: "-0.01em",
              }}
            >
              We frame the
              <br />
              details brands
              <br />
              <span style={{ color: COLORS.gold, fontStyle: "italic" }}>forget to show.</span>
            </h1>
            <p
              className="ms-fade ms-fade-d2"
              style={{
                fontFamily: FONTS.body,
                fontSize: 17,
                lineHeight: 1.7,
                color: COLORS.ivoryDim,
                maxWidth: 460,
                margin: "0 0 36px 0",
              }}
            >
              A creative media studio specializing in photography, videography
              and social media management — turning ideas into visual stories
              that connect, inspire and leave a lasting impact.
            </p>
            <div className="ms-fade ms-fade-d3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#work" className="ms-btn ms-btn-solid">
                View the work <ArrowUpRight size={14} />
              </a>
              <a href="#contact" className="ms-btn">
                Book a shoot
              </a>
            </div>
          </div>

          <div className="ms-fade ms-fade-d2 ms-hero-media" style={{ position: "relative" }}>
            <Frame cornerSize={26} style={{ padding: 4 }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={heroImage}
                  alt="Meridian Studios filming a client project"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  className="ms-hero-image-caption"
                  style={{
                    position: "absolute",
                    bottom: 22,
                    left: 22,
                    right: 22,
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: FONTS.mono,
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: COLORS.ivoryDim,
                  }}
                >
                  <span>MOHAMMED KHALID</span>
                  <span style={{ color: COLORS.gold }}>EST. FRAME</span>
                </div>
              </div>
            </Frame>
          </div>
        </div>

        <div
          className="ms-hero-marquee"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: `1px solid ${COLORS.line}`,
            padding: "16px 0",
            overflow: "hidden",
            background: "rgba(251,248,241,0.75)",
          }}
        >
          <div className="ms-marquee-track">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <span key={i} style={{ display: "inline-flex" }}>
                  {[
                    "VIDEOGRAPHY",
                    "PHOTOGRAPHY",
                    "SOCIAL MEDIA",
                    "CONTENT CREATION",
                    "BRAND STORYTELLING",
                  ].map((w) => (
                    <span
                      key={w}
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: 13,
                        letterSpacing: "0.2em",
                        color: COLORS.ivoryDim,
                        padding: "0 28px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 28,
                      }}
                    >
                      {w}
                      <span style={{ color: COLORS.gold }}>✦</span>
                    </span>
                  ))}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "clamp(80px, 14vw, 140px) clamp(18px, 5vw, 28px) clamp(60px, 10vw, 100px)", borderTop: `1px solid ${COLORS.line}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "clamp(36px, 6vw, 70px)" }} className="ms-grid-2">
          <div>
            <Eyebrow>About the studio</Eyebrow>
            <h2
              style={{
                fontFamily: FONTS.display,
                fontSize: "clamp(30px, 4.6vw, 42px)",
                lineHeight: 1.15,
                fontWeight: 500,
                margin: 0,
              }}
            >
              Clean, modern visuals that make a brand impossible to scroll past.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 26, paddingTop: 8 }}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: COLORS.ivoryDim, margin: 0 }}>
              Meridian Studios is a creative media agency specializing in
              photography, videography and social media management. We work
              close to the subject — a jeweller's hands, a chef's plating, the
              stitching on a leather bag — because that is where trust is
              built.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: COLORS.ivoryDim, margin: 0 }}>
              Every project is shaped around one question: what does this
              brand need people to feel in the first three seconds? From
              there we build the shot list, the edit, and the rollout —
              content that helps businesses strengthen their identity,
              connect with their audience, and grow their digital presence
              through purposeful storytelling.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                marginTop: 12,
                paddingTop: 28,
                borderTop: `1px solid ${COLORS.line}`,
              }}
              className="ms-grid-3"
            >
              {[
                ["6+", "Brands framed"],
                ["5", "Core disciplines"],
                ["1", "Founder-led lens"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: FONTS.display, fontSize: "clamp(24px, 4vw, 34px)", color: COLORS.gold }}>{n}</div>
                  <div style={{ fontFamily: FONTS.mono, fontSize: 10.5, letterSpacing: "0.08em", color: COLORS.ivoryDim, marginTop: 4 }}>
                    {l.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "clamp(60px, 10vw, 100px) clamp(18px, 5vw, 28px)", background: COLORS.bgAlt, borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Eyebrow>What we do</Eyebrow>
          <h2
            style={{
              fontFamily: FONTS.display,
              fontSize: "clamp(28px, 4.4vw, 40px)",
              fontWeight: 500,
              margin: "0 0 48px 0",
              maxWidth: 640,
            }}
          >
            Five disciplines, one consistent point of view.
          </h2>

          <div className="ms-services-grid">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="ms-service"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: COLORS.goldDim }}>{s.tag}</span>
                  <Icon size={26} strokeWidth={1.2} color={COLORS.gold} />
                  <h3 style={{ fontFamily: FONTS.display, fontSize: 19, margin: 0, fontWeight: 500 }}>{s.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: COLORS.ivoryDim, margin: 0 }}>{s.body}</p>
                  <div className="ms-service-line" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: "clamp(70px, 12vw, 120px) clamp(18px, 5vw, 28px)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, gap: 20 }} className="ms-flex-stack">
            <div>
              <Eyebrow>Featured work</Eyebrow>
              <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(28px, 4.4vw, 40px)", fontWeight: 500, margin: 0 }}>
                Brands we've put in frame.
              </h2>
            </div>
            <p style={{ fontSize: 14, color: COLORS.ivoryDim, maxWidth: 340, margin: 0 }}>
              Hospitality, food, retail, jewellery, automotive and timepieces —
              six industries, the same discipline of light and detail.
            </p>
          </div>

          <div className="ms-work-grid">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.index} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section style={{ padding: "clamp(50px, 8vw, 80px) clamp(18px, 5vw, 28px)", borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", gap: 30, flexWrap: "wrap" }}>
          <span style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: "0.18em", color: COLORS.goldDim }}>
            THE KIT
          </span>
          <div style={{ display: "flex", gap: "12px 28px", flexWrap: "wrap" }}>
            {TOOLS.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: FONTS.display,
                  fontSize: "clamp(14px, 3vw, 17px)",
                  color: COLORS.ivoryDim,
                  fontStyle: "italic",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "clamp(80px, 14vw, 140px) clamp(18px, 5vw, 28px)", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 70% at 50% 30%, rgba(199,161,90,0.08), transparent 65%)",
          }}
        />
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <Eyebrow color={COLORS.amber}>
            <span style={{ margin: "0 auto" }}>Lets shoot something</span>
          </Eyebrow>
          <h2
            style={{
              fontFamily: FONTS.display,
              fontSize: "clamp(32px, 6.5vw, 54px)",
              lineHeight: 1.1,
              fontWeight: 500,
              margin: "0 0 26px 0",
            }}
          >
            Have a brand worth
            <br />
            framing properly?
          </h2>
          <p style={{ fontSize: 16, color: COLORS.ivoryDim, maxWidth: 480, margin: "0 auto 40px" }}>
            Tell us about the project and we'll get back with a shoot plan,
            timeline and quote within two business days.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:hello@meridianstudios.lk" className="ms-btn ms-btn-solid">
              <Mail size={14} /> hello@meridianstudios.lk
            </a>
            <a href="#" className="ms-btn">
              <AtSign size={14} /> @meridian.studios
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${COLORS.line}`, padding: "32px clamp(18px, 5vw, 28px)" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span style={{ fontFamily: FONTS.display, fontSize: 15, letterSpacing: "0.06em" }}>
            Meridian Studios — Film. Photo. Creative.
          </span>
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              letterSpacing: "0.14em",
              color: COLORS.ivoryDim,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <MapPin size={13} color={COLORS.gold} /> SRI LANKA · © 2019
          </span>
        </div>
      </footer>
    </div>
  );
}