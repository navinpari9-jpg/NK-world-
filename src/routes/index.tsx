import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState, useEffect, useMemo, useRef } from "react";
import { toast } from "sonner";
import {
  RefreshCw,
  Radio,
  Play,
  Eye,
  Video as VideoIcon,
  Users,
  ExternalLink,
  Flame,
  CheckCircle2,
  Camera,
  Upload,
} from "lucide-react";

import { getYouTubeStats, type YouTubeVideo } from "@/lib/youtube.functions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/sonner";

const YOUTUBE_URL = "https://www.youtube.com/@LuffyEditzInsta";
const INSTAGRAM_URL = "https://www.instagram.com/Luffy_editz_26";

const statDelays = [
  "[animation-delay:100ms]",
  "[animation-delay:160ms]",
  "[animation-delay:220ms]",
  "[animation-delay:280ms]",
];

function formatCompact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
}

function formatTimeAgo(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffSeconds = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000));

    if (diffSeconds < 60) return "just now";
    const minutes = Math.floor(diffSeconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;
    const years = Math.floor(months / 12);
    return `${years}y ago`;
  } catch {
    return "";
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luffy Editz — Realtime Creator Portfolio" },
      {
        name: "description",
        content:
          "Video editor and content creator. Real-time synchronized channel metrics, uploads, and short-form cuts from YouTube and Instagram.",
      },
      { property: "og:title", content: "Luffy Editz — Realtime Creator Portfolio" },
      {
        property: "og:description",
        content: "Live real-time YouTube metrics, uploads, and short-form edits.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useYouTubeStats() {
  const fetchStats = useServerFn(getYouTubeStats);
  return useQuery({
    queryKey: ["youtube-stats"],
    queryFn: fetchStats,
    refetchInterval: 30 * 1000, // Sync every 30 seconds in real time
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    staleTime: 10 * 1000,
  });
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <span
      className={`w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-primary-foreground ml-0.5 ${className ?? ""}`}
    />
  );
}

type BackdropStyle = "noir-beams" | "carbon" | "obsidian" | "oled";
type PortraitStyle = "noir-spotlight" | "carbon-crimson" | "monochrome-rim" | "pure-void";

function RealtimeTelemetryBar({
  isFetching,
  refetch,
  dataUpdatedAt,
  bgStyle,
  onChangeBgStyle,
}: {
  isFetching: boolean;
  refetch: () => Promise<unknown>;
  dataUpdatedAt: number;
  bgStyle: BackdropStyle;
  onChangeBgStyle: (style: BackdropStyle) => void;
}) {
  const [secondsAgo, setSecondsAgo] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      if (dataUpdatedAt) {
        setSecondsAgo(Math.max(0, Math.floor((Date.now() - dataUpdatedAt) / 1000)));
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [dataUpdatedAt]);

  const handleManualSync = async () => {
    toast.info("Syncing live channel data from YouTube...");
    await refetch();
    toast.success("Webpage synchronized with real-time data!");
  };

  const styles: Array<{ id: BackdropStyle; label: string }> = [
    { id: "noir-beams", label: "Noir Beams" },
    { id: "carbon", label: "Carbon" },
    { id: "obsidian", label: "Matrix" },
    { id: "oled", label: "OLED Black" },
  ];

  return (
    <div className="w-full border-b border-border/60 bg-black/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-mono text-emerald-400 font-medium">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
            </span>
            REALTIME SYNC ACTIVE
          </span>
          <span className="text-border hidden sm:inline">|</span>
          <span className="font-mono text-muted-foreground hidden sm:inline">
            Source: <span className="text-foreground">@LuffyEditzInsta</span>
          </span>
          <span className="text-border hidden md:inline">|</span>
          <span className="font-mono text-muted-foreground hidden md:inline">
            Updated:{" "}
            <span className="text-accent font-medium">
              {secondsAgo === 0 ? "just now" : `${secondsAgo}s ago`}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <div className="hidden lg:flex items-center gap-1 p-0.5 rounded-md bg-white/5 border border-white/10 mr-2">
            <span className="px-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              Backdrop:
            </span>
            {styles.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onChangeBgStyle(s.id)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                  bgStyle === s.id
                    ? "bg-white/15 text-white font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleManualSync}
            disabled={isFetching}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md glass hover:bg-accent/15 text-foreground hover:text-accent font-mono text-[11px] font-medium transition-colors cursor-pointer disabled:opacity-50"
            title="Fetch latest stats and videos from YouTube"
          >
            <RefreshCw className={`size-3 ${isFetching ? "animate-spin text-accent" : ""}`} />
            <span>{isFetching ? "Syncing..." : "Sync Now"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Nav({ onSync, isFetching }: { onSync: () => void; isFetching: boolean }) {
  return (
    <nav className="glass-strong">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-lg bg-primary grid place-items-center glow-primary">
            <span className="font-display text-lg text-primary-foreground">L</span>
          </div>
          <span className="font-display text-xl tracking-tight">LUFFY EDITZ</span>
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            Live Synced
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#videos" className="hover:text-foreground transition-colors">
            Live Uploads
          </a>
          <Link
            to="/about"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <span>About</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-mono font-medium">
              Page
            </span>
          </Link>
          <a href="#platforms" className="hover:text-foreground transition-colors">
            Platforms
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onSync}
            disabled={isFetching}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg glass text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
          >
            <RefreshCw className={`size-3.5 ${isFetching ? "animate-spin text-primary" : ""}`} />
            Sync
          </button>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero({
  onPlayVideo,
  latestVideo,
  avatarUrl,
}: {
  onPlayVideo: (video: YouTubeVideo) => void;
  latestVideo?: YouTubeVideo | undefined;
  avatarUrl?: string | undefined;
}) {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6 animate-rise">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Luffy Editz"
                className="size-7 rounded-full border border-primary/50 object-cover"
              />
            ) : null}
            <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
              Real-Time Creator Studio
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs text-muted-foreground">@LuffyEditzInsta</span>
          </div>
          <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tight text-balance animate-rise [animation-delay:80ms]">
            LUFFY
            <br />
            <span className="text-primary">EDITZ</span>
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg text-muted-foreground text-pretty animate-rise [animation-delay:160ms]">
            Video editor and content creator. Pacing, rhythm, and frame-by-frame cuts — synced live
            with real-time subscriber and video telemetry.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-rise [animation-delay:240ms]">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <span>Subscribe on YouTube</span>
              <ExternalLink className="size-4" />
            </a>
            <a
              href="#videos"
              className="px-6 py-3 rounded-lg glass text-foreground font-medium hover:bg-foreground/10 transition-colors"
            >
              Browse live uploads
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade [animation-delay:320ms]">
          <div className="glass rounded-2xl p-4 glow-accent">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1.5">
                <Radio className="size-3 text-primary animate-pulse" />
                Latest Synchronized Drop
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                LIVE
              </span>
            </div>

            <div
              onClick={() => {
                if (latestVideo) onPlayVideo(latestVideo);
              }}
              className="relative aspect-video rounded-xl overflow-hidden bg-surface-2 outline-1 -outline-offset-1 outline-foreground/10 group cursor-pointer"
            >
              {latestVideo?.thumbnail ? (
                <img
                  src={latestVideo.thumbnail}
                  alt={latestVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full grid place-items-center relative">
                  <div className="pointer-events-none absolute inset-0 grid-bg" />
                  <div className="relative flex items-end gap-1.5 h-20" aria-hidden="true">
                    {[40, 70, 55, 90, 65, 100, 50, 80, 60, 75].map((h, i) => (
                      <span
                        key={i}
                        className="w-2 rounded-full bg-primary/70 animate-pulse-dot"
                        style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Gradient shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Center Play Button */}
              <div className="absolute inset-0 grid place-items-center">
                <span className="size-12 rounded-full bg-primary text-primary-foreground grid place-items-center glow-primary group-hover:scale-110 transition-transform">
                  <Play className="size-5 fill-current ml-0.5" />
                </span>
              </div>

              {/* Badges on video */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-2 py-0.5 rounded bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-wider font-semibold">
                  {latestVideo?.isShort ? "Shorts" : "New Drop"}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-200">
                <span className="font-mono text-[11px] flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  <Eye className="size-3 text-accent" />
                  {latestVideo ? `${formatCompact(latestVideo.views)} views` : "Live"}
                </span>
                <span className="font-mono text-[11px] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  {latestVideo ? formatTimeAgo(latestVideo.publishedAt) : "Just now"}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">
                  {latestVideo?.title ?? "POV: When I Give Her Advice 😂❤️"}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                  <CheckCircle2 className="size-3 text-emerald-400" />
                  Live synced from YouTube channel
                </p>
              </div>
              <button
                onClick={() => {
                  if (latestVideo) onPlayVideo(latestVideo);
                }}
                aria-label="Play video"
                className="size-10 shrink-0 rounded-full bg-primary grid place-items-center glow-primary hover:bg-primary/90 transition-colors cursor-pointer"
              >
                <PlayIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip({
  subscribers,
  totalViews,
  videoCount,
  isLive,
}: {
  subscribers?: number;
  totalViews?: number;
  videoCount?: number;
  isLive: boolean;
}) {
  const stats = [
    {
      label: "Subscribers",
      value: subscribers !== undefined ? formatCompact(subscribers) : "44",
      rawCount: subscribers !== undefined ? `${subscribers.toLocaleString()} subscribers` : "Live",
      note: "Live channel subscribers",
      icon: Users,
    },
    {
      label: "Total Views",
      value: totalViews !== undefined ? formatCompact(totalViews) : "15.6K",
      rawCount: totalViews !== undefined ? `${totalViews.toLocaleString()} views` : "Live",
      note: "Live aggregate views",
      icon: Eye,
    },
    {
      label: "Videos",
      value: videoCount !== undefined ? String(videoCount) : "22",
      rawCount: videoCount !== undefined ? `${videoCount} total uploads` : "Live",
      note: "Published edits & shorts",
      icon: VideoIcon,
    },
    {
      label: "Instagram",
      value: "@Luffy_editz_26",
      rawCount: "Daily edits & stories",
      note: "Follow along",
      icon: Flame,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="glass rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`p-6 animate-rise ${statDelays[i]}`}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </p>
                <Icon className="size-4 text-muted-foreground/60" />
              </div>
              <p className="font-display text-4xl tracking-tight text-foreground">{stat.value}</p>
              <div className="text-xs text-accent mt-2 flex items-center gap-1.5 font-mono">
                {isLive && (
                  <span className="relative flex size-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full size-1.5 bg-emerald-500" />
                  </span>
                )}
                <span>{stat.note}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedVideos({
  videos,
  onPlayVideo,
  isFetching,
}: {
  videos: YouTubeVideo[];
  onPlayVideo: (video: YouTubeVideo) => void;
  isFetching: boolean;
}) {
  const [filter, setFilter] = useState<"all" | "shorts" | "trending">("all");

  const filteredVideos = useMemo(() => {
    if (filter === "shorts") {
      return videos.filter((v) => v.isShort);
    }
    if (filter === "trending") {
      return [...videos].sort((a, b) => b.views - a.views);
    }
    return videos;
  }, [videos, filter]);

  return (
    <section id="videos" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
              (a) Live Feed
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
              <span className="size-1 rounded-full bg-emerald-400 animate-pulse-dot" />
              Realtime Synced
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-balance">
            Channel Uploads
          </h2>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-2 bg-surface p-1 rounded-xl border border-border">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
              filter === "all"
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All ({videos.length})
          </button>
          <button
            onClick={() => setFilter("shorts")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
              filter === "shorts"
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Shorts
          </button>
          <button
            onClick={() => setFilter("trending")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
              filter === "trending"
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Most Viewed
          </button>
        </div>
      </div>

      {videos.length === 0 ? (
        <div className="glass rounded-2xl p-12 text-center">
          <RefreshCw
            className={`size-8 mx-auto text-muted-foreground ${isFetching ? "animate-spin" : ""}`}
          />
          <p className="mt-4 font-mono text-sm text-muted-foreground">
            Syncing live channel uploads...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVideos.map((video, idx) => (
            <div
              key={video.id || idx}
              onClick={() => onPlayVideo(video)}
              className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 block cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video bg-surface-2 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                  {/* Play icon overlay */}
                  <div className="absolute inset-0 grid place-items-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="size-11 rounded-full bg-primary/90 text-primary-foreground grid place-items-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="size-5 fill-current ml-0.5" />
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5">
                    {video.isShort ? (
                      <span className="px-2 py-0.5 rounded bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-wider font-semibold">
                        Shorts
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-zinc-300 text-[10px] font-mono">
                        Video
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono text-zinc-200">
                    {formatTimeAgo(video.publishedAt)}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>

              <div className="px-4 pb-4 pt-1 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50">
                <span className="font-mono flex items-center gap-1">
                  <Eye className="size-3 text-accent" />
                  {formatCompact(video.views)} views
                </span>
                <span className="text-primary text-xs font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Watch edit →
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function About() {
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
      toast.error("Please drop or select a valid image file");
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
    <section id="about" className="max-w-7xl mx-auto px-6 py-16">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="relative group">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              className={`w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black outline-1 -outline-offset-1 outline-white/15 relative shadow-2xl transition-all ${
                isDragging ? "ring-4 ring-primary ring-offset-4 ring-offset-background" : ""
              }`}
            >
              {/* Dynamic Black Studio Backdrop Layer */}
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

              <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-white/10 rounded-2xl" />

              {/* Hover replace button */}
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-2.5 py-1 rounded-lg bg-black/85 hover:bg-black text-white text-[11px] font-mono border border-white/20 flex items-center gap-1 shadow-md backdrop-blur-md cursor-pointer transition-colors"
                  title="Upload or replace with exact photo"
                >
                  <Camera className="size-3 text-accent" />
                  <span>Upload Photo</span>
                </button>
              </div>

              {/* Drag over overlay */}
              {isDragging && (
                <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-30">
                  <Upload className="size-8 text-primary animate-bounce mb-2" />
                  <p className="font-display text-lg text-white">Drop Photo Here</p>
                  <p className="text-[11px] text-muted-foreground font-mono">
                    Applies dark studio grading
                  </p>
                </div>
              )}

              {/* Bottom floating badge info */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs font-mono">
                <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-zinc-200 flex items-center gap-1.5 shadow-md">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  Navin
                </span>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/15 text-[11px] flex items-center gap-1 cursor-pointer transition-colors backdrop-blur-md"
                >
                  <Camera className="size-3" />
                  <span>Change</span>
                </button>
              </div>
            </div>

            {/* Black Studio Style Controls */}
            <div className="mt-3 p-2.5 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground px-1">
                <span>BLACK STYLE</span>
                <div className="flex items-center gap-1.5">
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
              <div className="grid grid-cols-4 gap-1">
                {[
                  { id: "noir-spotlight" as const, label: "Noir" },
                  { id: "carbon-crimson" as const, label: "Crimson" },
                  { id: "monochrome-rim" as const, label: "Silver" },
                  { id: "pure-void" as const, label: "OLED" },
                ].map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setPortraitStyle(preset.id)}
                    className={`py-1 px-1.5 rounded text-[10px] font-mono transition-all cursor-pointer truncate ${
                      portraitStyle === preset.id
                        ? "bg-primary text-primary-foreground font-semibold"
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
        <div className="lg:col-span-8 flex flex-col justify-center">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-3">(b) About</p>
          <h2 className="font-display text-5xl tracking-tight text-balance mb-6">
            The person behind the cuts
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-[52ch]">
            I'm Navin — an editor obsessed with rhythm, pacing, and the perfect cut. My studio feels
            like a control room: screens, sound, and the occasional 3am render.
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-[52ch]">
            When I'm not editing, I'm hunting for the next track, studying transitions, or arguing
            about color grades with friends.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["AMV", "Montage", "Transitions", "Color Grade", "Sound Design", "VFX"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full glass text-xs font-mono">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/about"
              className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 shadow-md group"
            >
              <span>Explore Full Creator Story</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl glass text-foreground text-sm font-medium hover:bg-foreground/10 transition-colors inline-flex items-center gap-1.5"
            >
              <span>View Channel</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Platforms({ subscribers }: { subscribers?: number }) {
  const platforms = [
    {
      name: "YouTube",
      tag: "YT",
      value: subscribers !== undefined ? `${formatCompact(subscribers)} subs` : "@LuffyEditzInsta",
      detail: "Live channel sync · Shorts & Montages",
      href: YOUTUBE_URL,
    },
    {
      name: "Instagram",
      tag: "IG",
      value: "@Luffy_editz_26",
      detail: "Daily edits & behind the scenes",
      href: INSTAGRAM_URL,
    },
  ];

  return (
    <section id="platforms" className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-8">
        <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2">
          (c) Platforms
        </p>
        <h2 className="font-display text-5xl tracking-tight text-balance">Follow the signal</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noreferrer"
            className="group glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 block"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-2xl">{platform.name}</span>
              <span
                className={`size-8 rounded-lg grid place-items-center font-mono text-xs ${
                  platform.name === "YouTube"
                    ? "bg-primary/15 text-primary"
                    : "bg-accent/15 text-accent"
                }`}
              >
                {platform.tag}
              </span>
            </div>
            <p className="font-display text-3xl tracking-tight break-all">{platform.value}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2 font-mono">
              <span className="size-1.5 rounded-full bg-accent animate-pulse-dot" />
              {platform.detail}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

function SubscribeCta() {
  return (
    <section id="subscribe" className="max-w-7xl mx-auto px-6 py-16">
      <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 size-80 rounded-full bg-primary/20 blur-[100px]" />
        <div className="relative">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-3">Subscribe</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight text-balance max-w-[20ch]">
            New edits <span className="text-primary">dropping soon</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[48ch] text-pretty">
            Short-form cuts, montages, and the occasional behind-the-scenes. Live synced frame by
            frame.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <span>YouTube</span>
              <ExternalLink className="size-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg glass font-medium hover:bg-foreground/10 transition-colors inline-flex items-center gap-2"
            >
              <span>Instagram</span>
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-md bg-primary grid place-items-center">
            <span className="font-display text-sm text-primary-foreground">L</span>
          </div>
          <span className="text-sm text-muted-foreground">© 2026 Luffy Editz — Realtime Sync</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <Link to="/about" className="hover:text-foreground transition-colors font-medium">
            About Navin
          </Link>
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

function VideoModal({ video, onClose }: { video: YouTubeVideo | null; onClose: () => void }) {
  if (!video) return null;

  return (
    <Dialog open={!!video} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl bg-card border-border p-0 overflow-hidden sm:rounded-2xl">
        <div className="aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-left leading-snug">
              {video.title}
            </DialogTitle>
            <DialogDescription className="text-left font-mono text-xs text-muted-foreground flex flex-wrap items-center gap-3 pt-2">
              <span className="flex items-center gap-1">
                <Eye className="size-3 text-accent" />
                {formatCompact(video.views)} views
              </span>
              <span>•</span>
              <span>{formatTimeAgo(video.publishedAt)}</span>
              <span>•</span>
              <span className="text-emerald-400">Live Synced from YouTube</span>
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
            <span className="font-mono text-xs text-muted-foreground">@LuffyEditzInsta</span>
            <a
              href={video.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
            >
              <span>Open on YouTube</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Index() {
  const { data, isFetching, refetch, dataUpdatedAt } = useYouTubeStats();
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [bgStyle, setBgStyle] = useState<BackdropStyle>("noir-beams");

  const isLive = data?.ok ?? false;
  const videos = data?.videos ?? [];
  const latestVideo = data?.latestVideo ?? videos[0];

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
        className="pointer-events-none fixed inset-0 opacity-[0.15] mix-blend-luminosity bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/camera-lens.jpg')`,
          maskImage: "radial-gradient(ellipse 85% 65% at 50% 20%, black 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 20%, black 15%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_15%,#020203_90%)]" />

      <Toaster position="bottom-right" />

      <div className="relative z-10">
        <RealtimeTelemetryBar
          isFetching={isFetching}
          refetch={refetch}
          dataUpdatedAt={dataUpdatedAt}
          bgStyle={bgStyle}
          onChangeBgStyle={setBgStyle}
        />
        <Nav onSync={() => refetch()} isFetching={isFetching} />
        <Hero
          onPlayVideo={(v) => setSelectedVideo(v)}
          latestVideo={latestVideo}
          avatarUrl={data?.thumbnailUrl || "/studio-editor.jpg"}
        />
        <StatsStrip
          subscribers={data?.subscribers}
          totalViews={data?.totalViews}
          videoCount={data?.videoCount}
          isLive={isLive}
        />
        <FeaturedVideos
          videos={videos}
          onPlayVideo={(v) => setSelectedVideo(v)}
          isFetching={isFetching}
        />
        <About />
        <Platforms subscribers={data?.subscribers} />
        <SubscribeCta />
        <Footer />
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
