import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  ArrowLeft,
  Sparkles,
  Film,
  Sliders,
  Music,
  Monitor,
  Flame,
  Award,
  ExternalLink,
  CheckCircle2,
  Clock,
  Layers,
  Zap,
  Camera,
  Upload,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

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
      { property: "og:image", content: "/about-portrait.jpg" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

type BackdropStyle = "noir-beams" | "carbon" | "obsidian" | "oled";
type PortraitStyle = "noir-spotlight" | "carbon-crimson" | "monochrome-rim" | "pure-void";

function AboutNav({
  bgStyle,
  onChangeBgStyle,
}: {
  bgStyle: BackdropStyle;
  onChangeBgStyle: (style: BackdropStyle) => void;
}) {
  const styles: Array<{ id: BackdropStyle; label: string }> = [
    { id: "noir-beams", label: "Noir Beams" },
    { id: "carbon", label: "Carbon" },
    { id: "obsidian", label: "Matrix" },
    { id: "oled", label: "OLED Black" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="size-8 rounded-lg glass grid place-items-center group-hover:border-primary/50 transition-colors">
              <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
            </span>
            <span className="hidden sm:inline">Back to Studio</span>
          </Link>
          <span className="text-border hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-md bg-primary grid place-items-center">
              <span className="font-display text-sm text-primary-foreground">L</span>
            </div>
            <span className="font-display text-lg tracking-tight">LUFFY EDITZ</span>
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

        <div className="flex items-center gap-3">
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
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <span>Subscribe</span>
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}

function AboutHero() {
  const [imageSrc, setImageSrc] = useState<string>("/studio-editor.jpg");
  const [portraitStyle, setPortraitStyle] = useState<PortraitStyle>("noir-spotlight");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const cached = localStorage.getItem("luffy_creator_portrait");
    if (cached) {
      setImageSrc(cached);
    }
  }, []);

  const handleProcessFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = e.target?.result as string;
      if (base64) {
        setImageSrc(base64);
        try {
          localStorage.setItem("luffy_creator_portrait", base64);
        } catch (storageErr) {
          console.warn("Could not save to localStorage", storageErr);
        }
        toast.info("Applying exact image...");

        try {
          const res = await fetch("/api/save-portrait", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ base64 }),
          });
          if (res.ok) {
            toast.success("Exact image replaced and saved!");
          } else {
            toast.success("Exact portrait applied!");
          }
        } catch {
          toast.success("Exact portrait applied!");
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleProcessFile(file);
  };

  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-16">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleProcessFile(file);
        }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Creator Portrait */}
        <div className="lg:col-span-5">
          <div className="relative group">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              className={`w-full aspect-[4/5] rounded-3xl overflow-hidden bg-black outline-1 -outline-offset-1 outline-white/15 relative shadow-2xl transition-all ${
                isDragging ? "ring-4 ring-primary ring-offset-4 ring-offset-background" : ""
              }`}
            >
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
                src={imageSrc}
                alt="Navin — The Creator"
                className={`relative z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out ${
                  portraitStyle === "noir-spotlight"
                    ? "grayscale contrast-125 brightness-95"
                    : portraitStyle === "carbon-crimson"
                      ? "contrast-125 saturate-75 brightness-90"
                      : portraitStyle === "monochrome-rim"
                        ? "grayscale contrast-150 brightness-90"
                        : "contrast-115 brightness-90"
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

              <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-white/10 rounded-3xl" />

              {/* Top studio status text */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-xs font-mono text-zinc-300 bg-black/75 px-3 py-1 rounded-md border border-white/10 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Creator & Director</span>
              </div>

              {/* Replace image quick action on hover */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-xl bg-black/85 hover:bg-black text-white text-xs font-mono border border-white/20 flex items-center gap-1.5 shadow-lg backdrop-blur-md cursor-pointer transition-colors"
                  title="Upload or replace with exact photo"
                >
                  <Camera className="size-3.5 text-accent" />
                  <span>Upload Photo</span>
                </button>
              </div>

              {/* Drag over overlay */}
              {isDragging && (
                <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-30">
                  <Upload className="size-10 text-primary animate-bounce mb-3" />
                  <p className="font-display text-xl text-white">Drop Photo Here</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    Applies dark studio grading automatically
                  </p>
                </div>
              )}

              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between text-xs font-mono">
                <div>
                  <p className="text-base font-bold text-white font-body">Navin</p>
                  <p className="text-xs text-zinc-400">@LuffyEditzInsta</p>
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 font-semibold shadow-md flex items-center gap-1.5 cursor-pointer transition-colors backdrop-blur-md"
                >
                  <Camera className="size-3.5" />
                  <span>Change Photo</span>
                </button>
              </div>
            </div>

            {/* Interactive Black Backdrop & Visual Style Selector */}
            <div className="mt-4 p-3 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-md space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground px-1">
                <span>BLACK STUDIO STYLE</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setImageSrc("/studio-editor.jpg")}
                    className={`hover:text-white transition-colors cursor-pointer ${
                      imageSrc === "/studio-editor.jpg" ? "text-primary font-semibold" : ""
                    }`}
                  >
                    Studio Rig
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => setImageSrc("/camera-lens.jpg")}
                    className={`hover:text-white transition-colors cursor-pointer ${
                      imageSrc === "/camera-lens.jpg" ? "text-primary font-semibold" : ""
                    }`}
                  >
                    Dark Lens
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
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
            <span className="h-px w-12 bg-border" />
            <span className="font-mono text-xs text-muted-foreground">About the Artist</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-6">
            BEHIND EVERY CUT <br />
            <span className="text-primary">LIES A RHYTHM.</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
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

          <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-border">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 shadow-md"
            >
              <span>YouTube Channel</span>
              <ExternalLink className="size-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-foreground/10 transition-colors inline-flex items-center gap-2"
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
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border/60">
      <div className="mb-12">
        <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2">Methodology</p>
        <h2 className="font-display text-4xl sm:text-5xl tracking-tight">The 4 Golden Rules</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.num}
              className="glass rounded-2xl p-6 relative group hover:-translate-y-1 transition-transform duration-300"
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
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2">
            The Arsenal
          </p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight mb-4">
            Production Software & Tools
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            High-end editing demands software that never bottlenecks creativity. Every project flows
            through a multi-stage pipeline from raw timeline cut to sound mixing and final master
            export.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="glass-strong rounded-3xl p-8 sm:p-14 relative overflow-hidden text-center sm:text-left">
        <div className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight max-w-[20ch]">
              Let's create something <span className="text-primary">unforgettable</span>.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-[45ch]">
              Open for collaborations, video edits, and creative projects. Follow along on the
              journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/"
              className="px-6 py-3 rounded-xl glass font-medium text-foreground hover:bg-foreground/10 transition-colors"
            >
              Explore Feed
            </Link>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg"
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
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
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
    <div className="min-h-screen bg-[#020203] text-foreground font-body relative overflow-hidden">
      {/* Dark Studio Architectural Background Image + Selected Black Style */}
      <div className={`pointer-events-none fixed inset-0 ${bgClass} transition-all duration-500`} />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16] mix-blend-luminosity bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/camera-lens.jpg')`,
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 25%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 25%, black 20%, transparent 80%)",
        }}
      />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_10%,#020203_90%)]" />

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
