import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Film, Sliders, Music, ExternalLink, CheckCircle2, Zap } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import luffyWallpaper from "@/assets/luffy-wallpaper.jpg";
import navinPortrait from "@/assets/navin-portrait.png";

const YOUTUBE_URL = "https://www.youtube.com/@LuffyEditzInsta";
const INSTAGRAM_URL = "https://www.instagram.com/Luffy_editz_26";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Navin — The Creator & Editor" },
      {
        name: "description",
        content:
          "Meet Navin — the video editor, creator, and motion designer behind @LuffyEditzInsta. Explore his background, editing philosophy, and studio setup.",
      },
      { property: "og:title", content: "About Navin — The Creator & Editor" },
      {
        property: "og:description",
        content:
          "Meet Navin — the video editor, creator, and motion designer behind @LuffyEditzInsta.",
      },
      {
        property: "og:image",
        content: "/navin-portrait.png",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

type BackdropStyle = "noir-beams" | "carbon" | "obsidian" | "oled";
type PortraitStyle = "noir-spotlight" | "carbon-crimson" | "monochrome-rim" | "pure-void";

const DEFAULT_CREATOR_IMAGE = navinPortrait;

function AboutNav({
  bgStyle,
  onChangeBgStyle,
}: {
  bgStyle: BackdropStyle;
  onChangeBgStyle: (style: BackdropStyle) => void;
}) {
  const styles: Array<{ id: BackdropStyle; label: string }> = [
    { id: "noir-beams", label: "Lite Black 4K" },
    { id: "carbon", label: "4K Vivid" },
    { id: "obsidian", label: "Lite Black Mono" },
    { id: "oled", label: "Soft Charcoal" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs sm:text-sm font-mono text-muted-foreground hover:text-foreground transition-colors group shrink-0"
          >
            <span className="size-8 rounded-lg glass grid place-items-center group-hover:border-primary/50 transition-colors">
              <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
            </span>
            <span className="hidden sm:inline">Back to Studio</span>
          </Link>
          <span className="text-border hidden sm:inline">|</span>
          <div className="flex items-center gap-2 truncate">
            <div className="size-7 rounded-md bg-primary grid place-items-center shrink-0">
              <span className="font-display text-sm text-primary-foreground">L</span>
            </div>
            <span className="font-display text-base sm:text-lg tracking-tight truncate">
              LUFFY EDITZ
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-1 p-1 rounded-lg bg-black/70 border border-white/10">
          <span className="px-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
            Black Style:
          </span>
          {styles.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onChangeBgStyle(s.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                bgStyle === s.id
                  ? "bg-white/15 text-white font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            to="/"
            className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Studio Feed
          </Link>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <span>Subscribe</span>
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>

      {/* Mobile Backdrop Switcher */}
      <div className="lg:hidden border-t border-white/10 bg-black/60 px-4 py-2 flex items-center gap-1.5 overflow-x-auto">
        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground shrink-0 mr-1">
          Style:
        </span>
        {styles.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onChangeBgStyle(s.id)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer shrink-0 ${
              bgStyle === s.id
                ? "bg-white/15 text-white font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function AboutHero() {
  const [portraitStyle, setPortraitStyle] = useState<PortraitStyle>("noir-spotlight");

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Creator Portrait */}
        <div className="lg:col-span-5 max-w-sm mx-auto lg:max-w-none w-full">
          <div className="relative group">
            <div className="w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-black outline-1 -outline-offset-1 outline-white/15 relative shadow-2xl transition-all">
              {/* Dynamic Black Studio Backdrop Layer behind image */}
              <div
                className={`pointer-events-none absolute inset-0 z-0 ${
                  portraitStyle === "noir-spotlight"
                    ? "bg-[radial-gradient(circle_at_65%_25%,rgba(255,255,255,0.18),rgba(0,0,0,0.98)_70%)]"
                    : portraitStyle === "carbon-crimson"
                      ? "bg-carbon-style"
                      : portraitStyle === "monochrome-rim"
                        ? "bg-noir-beams"
                        : "bg-black"
                }`}
              />

              <img
                src={DEFAULT_CREATOR_IMAGE}
                alt="Navin — Video Editor & Creator (Luffy Editz)"
                className={`relative z-10 w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-all duration-700 ease-out ${
                  portraitStyle === "noir-spotlight"
                    ? "contrast-110 brightness-100"
                    : portraitStyle === "carbon-crimson"
                      ? "contrast-120 saturate-110 brightness-95"
                      : portraitStyle === "monochrome-rim"
                        ? "grayscale contrast-125 brightness-100"
                        : "contrast-105 brightness-100"
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Style-specific lighting & vignette overlays */}
              {portraitStyle === "noir-spotlight" && (
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%),linear-gradient(to_top,#000000_8%,transparent_60%)]" />
              )}
              {portraitStyle === "carbon-crimson" && (
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(225,29,72,0.22),transparent_55%),linear-gradient(to_top,#000000_12%,transparent_65%)]" />
              )}
              {portraitStyle === "monochrome-rim" && (
                <div className="pointer-events-none absolute inset-0 z-10 bg-[conic-gradient(from_200deg_at_50%_0%,transparent_0deg,rgba(255,255,255,0.14)_25deg,transparent_55deg),linear-gradient(to_top,#000000_15%,transparent_65%)]" />
              )}
              {portraitStyle === "pure-void" && (
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_35%,#000000_95%)]" />
              )}

              <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-white/10 rounded-2xl sm:rounded-3xl" />

              {/* Top studio status text */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 text-[11px] sm:text-xs font-mono text-zinc-300 bg-black/75 px-3 py-1 rounded-md border border-white/10 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Creator & Director</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20 flex items-center justify-between text-xs font-mono">
                <div>
                  <p className="text-base font-bold text-white font-body">Navin</p>
                  <p className="text-xs text-zinc-400">@LuffyEditzInsta</p>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-black/75 border border-white/15 text-zinc-300 text-[11px] backdrop-blur-md">
                  Studio Cut
                </span>
              </div>
            </div>

            {/* Interactive Black Backdrop & Visual Style Selector */}
            <div className="mt-3 sm:mt-4 p-3 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-md space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground px-1">
                <span>STUDIO LIGHTING</span>
                <span className="text-zinc-400">Navin • Portrait</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {[
                  { id: "noir-spotlight" as const, label: "Noir Light" },
                  { id: "carbon-crimson" as const, label: "Crimson Dark" },
                  { id: "monochrome-rim" as const, label: "Silver Rim" },
                  { id: "pure-void" as const, label: "Pure Black" },
                ].map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setPortraitStyle(preset.id)}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-mono transition-all cursor-pointer truncate ${
                      portraitStyle === preset.id
                        ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                        : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Biography & Story */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
              The Story
            </span>
            <span className="h-px w-8 sm:w-12 bg-border" />
            <span className="font-mono text-xs text-muted-foreground">About the Artist</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-6">
            BEHIND EVERY CUT <br />
            <span className="text-primary">LIES A RHYTHM.</span>
          </h1>

          <div className="space-y-4 text-sm sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="text-foreground font-medium">Navin</span>, a video editor,
              content creator, and visual storyteller obsessed with timing, energy, and cinematic
              impact.
            </p>
            <p>
              What started as an endless curiosity for anime action scenes and movie trailers turned
              into a craft. My workspace is built like a studio control room: multiple monitors,
              waveform scopes, custom color luts, and sound cues timed down to the exact
              millisecond.
            </p>
            <p>
              Whether it's high-speed short-form cuts, emotional character arcs, or complex visual
              effects montages, my goal is always the same: make the viewer feel the impact in their
              chest before they even realize a cut just happened.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 border-t border-border">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 shadow-md"
            >
              <span>YouTube Channel</span>
              <ExternalLink className="size-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto justify-center px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-foreground/10 transition-colors inline-flex items-center gap-2"
            >
              <span>Instagram Profile</span>
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const principles = [
    {
      num: "01",
      title: "Rhythm Over Spectacle",
      desc: "Flashy effects mean nothing if the pacing feels disjointed. A cut must land exactly where the audio frequency shifts.",
      icon: Music,
    },
    {
      num: "02",
      title: "Color as Emotion",
      desc: "Contrast isn't just about dark blacks; it guides the viewer's eye to the key subject without visual clutter.",
      icon: Sliders,
    },
    {
      num: "03",
      title: "Sound Sells the Impact",
      desc: "More than half of an edit's power is invisible. Layered bass impacts, swooshes, and atmospheric silence create tension.",
      icon: Film,
    },
    {
      num: "04",
      title: "Frame-By-Frame Discipline",
      desc: "Every second contains 60 individual decisions. No lazy fades, no loose transitions, and no compromise on quality.",
      icon: Zap,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-border/60">
      <div className="mb-8 sm:mb-12">
        <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2">Methodology</p>
        <h2 className="font-display text-3xl sm:text-5xl tracking-tight">The 4 Golden Rules</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {principles.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.num}
              className="glass rounded-2xl p-5 sm:p-6 relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-primary">{p.num}</span>
                <span className="size-9 rounded-lg bg-surface-2 grid place-items-center text-muted-foreground group-hover:text-accent transition-colors">
                  <Icon className="size-4" />
                </span>
              </div>
              <h3 className="font-display text-xl tracking-tight text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function StudioToolkit() {
  const tools = [
    { name: "Adobe Premiere Pro", category: "Assembly & Timeline Pacing" },
    { name: "Adobe After Effects", category: "Motion Graphics & VFX" },
    { name: "DaVinci Resolve", category: "Color Science & Grading" },
    { name: "Topaz Video AI", category: "Neural Upscaling & 60FPS Fluidity" },
    { name: "FL Studio", category: "Custom Audio Splicing & Beats" },
    { name: "Photoshop", category: "Keyframe Matte & Poster Design" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2">
            The Arsenal
          </p>
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight mb-4">
            Production Software & Tools
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            High-end editing demands software that never bottlenecks creativity. Every project flows
            through a multi-stage pipeline from raw timeline cut to sound mixing and final master
            export.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="glass rounded-xl p-4 flex items-center justify-between border border-border/70 hover:border-primary/40 transition-colors"
              >
                <div>
                  <p className="font-semibold text-sm text-foreground">{tool.name}</p>
                  <p className="text-xs font-mono text-muted-foreground">{tool.category}</p>
                </div>
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0 ml-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectCta() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-14 relative overflow-hidden text-center sm:text-left">
        <div className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight max-w-[20ch] mx-auto sm:mx-0">
              Let's create something <span className="text-primary">unforgettable</span>.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-[45ch] mx-auto sm:mx-0">
              Open for collaborations, video edits, and creative projects. Follow along on the
              journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto shrink-0">
            <Link
              to="/"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl glass font-medium text-foreground hover:bg-foreground/10 transition-colors"
            >
              Explore Feed
            </Link>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutFooter() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
            ← Home Studio
          </Link>
          <span>•</span>
          <span>© 2026 Luffy Editz</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            YouTube
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

function AboutPage() {
  const [bgStyle, setBgStyle] = useState<BackdropStyle>("noir-beams");

  const bgClass =
    bgStyle === "noir-beams"
      ? "bg-noir-beams"
      : bgStyle === "carbon"
        ? "bg-carbon-style"
        : bgStyle === "obsidian"
          ? "grid-bg"
          : "bg-oled-void";

  return (
    <div className="min-h-screen bg-[#16181e] text-foreground font-body relative overflow-x-hidden">
      {/* 4K UHD Hardware Unsharp & Micro-Contrast Filter */}
      <svg className="sr-only" aria-hidden="true">
        <defs>
          <filter id="uhd-4k-crisp" colorInterpolationFilters="sRGB">
            <feConvolveMatrix
              order="3 3"
              kernelMatrix="0 -0.28 0 -0.28 2.12 -0.28 0 -0.28 0"
              preserveAlpha="true"
            />
          </filter>
        </defs>
      </svg>

      {/* Full-Viewport 4K UHD Luffy Background Image + Lite Black Theme Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#16181e]">
        <div className={`absolute inset-0 ${bgClass} transition-all duration-500`} />
        <img
          src={luffyWallpaper}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="sync"
          style={{ filter: "url(#uhd-4k-crisp)" }}
          className={`w-full h-full object-cover object-[center_42%] transition-all duration-700 ${
            bgStyle === "noir-beams"
              ? "opacity-65 contrast-108 saturate-95"
              : bgStyle === "carbon"
                ? "opacity-85 contrast-105 saturate-115"
                : bgStyle === "obsidian"
                  ? "opacity-55 grayscale contrast-115"
                  : "opacity-35 grayscale contrast-120"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181a20]/60 via-[#16181e]/45 to-[#14161c]/88" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(24,26,32,0.15)_25%,rgba(20,22,28,0.8)_100%)]" />
      </div>

      <div className="relative z-10">
        <Toaster position="bottom-right" />
        <AboutNav bgStyle={bgStyle} onChangeBgStyle={setBgStyle} />
        <AboutHero />
        <PhilosophySection />
        <StudioToolkit />
        <ConnectCta />
        <AboutFooter />
      </div>
    </div>
  );
}
