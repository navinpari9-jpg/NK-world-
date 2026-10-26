import { r as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Toaster$1 } from "./sonner-DaT0QY8a.mjs";
import { H as isRedirect, b as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Upload, c as Radio, d as Flame, g as Camera, h as CircleCheck, i as Users, l as Play, m as ExternalLink, n as X, p as Eye, r as Video, s as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-DoFy3-u7.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DU2zTVf-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getYouTubeStats = createServerFn({ method: "GET" }).handler(createSsrRpc("f1d750150ce89bc0d593aa22c01b98d68b80c07d2cace39b64fe99ebd5b1b07f"));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName$1 = "/app/applet/src/components/ui/dialog.tsx";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 21,
	columnNumber: 3
}, void 0));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 37,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 48,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 49,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 47,
		columnNumber: 7
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 38,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 36,
	columnNumber: 3
}, void 0));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 57,
	columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 62,
	columnNumber: 3
}, void 0);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 73,
	columnNumber: 3
}, void 0));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 85,
	columnNumber: 3
}, void 0));
DialogDescription.displayName = DialogDescription$1.displayName;
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
var YOUTUBE_URL = "https://www.youtube.com/@LuffyEditzInsta";
var INSTAGRAM_URL = "https://www.instagram.com/Luffy_editz_26";
var statDelays = [
	"[animation-delay:100ms]",
	"[animation-delay:160ms]",
	"[animation-delay:220ms]",
	"[animation-delay:280ms]"
];
function formatCompact(n) {
	if (n >= 1e6) return `${(n / 1e6).toFixed(1).replace(/\.0$/, "")}M`;
	if (n >= 1e3) return `${(n / 1e3).toFixed(1).replace(/\.0$/, "")}K`;
	return String(n);
}
function formatTimeAgo(dateString) {
	try {
		const date = new Date(dateString);
		const diffSeconds = Math.max(0, Math.floor(((/* @__PURE__ */ new Date()).getTime() - date.getTime()) / 1e3));
		if (diffSeconds < 60) return "just now";
		const minutes = Math.floor(diffSeconds / 60);
		if (minutes < 60) return `${minutes}m ago`;
		const hours = Math.floor(minutes / 60);
		if (hours < 24) return `${hours}h ago`;
		const days = Math.floor(hours / 24);
		if (days < 30) return `${days}d ago`;
		const months = Math.floor(days / 30);
		if (months < 12) return `${months}mo ago`;
		return `${Math.floor(months / 12)}y ago`;
	} catch {
		return "";
	}
}
function useYouTubeStats() {
	const fetchStats = useServerFn(getYouTubeStats);
	return useQuery({
		queryKey: ["youtube-stats"],
		queryFn: fetchStats,
		refetchInterval: 3e4,
		refetchOnWindowFocus: true,
		refetchOnReconnect: true,
		staleTime: 1e4
	});
}
function PlayIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-primary-foreground ml-0.5 ${className ?? ""}` }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 55,
		columnNumber: 10
	}, this);
}
function RealtimeTelemetryBar({ isFetching, refetch, dataUpdatedAt, bgStyle, onChangeBgStyle }) {
	const [secondsAgo, setSecondsAgo] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const updateTime = () => {
			if (dataUpdatedAt) setSecondsAgo(Math.max(0, Math.floor((Date.now() - dataUpdatedAt) / 1e3)));
		};
		updateTime();
		const interval = setInterval(updateTime, 1e3);
		return () => clearInterval(interval);
	}, [dataUpdatedAt]);
	const handleManualSync = async () => {
		toast.info("Syncing live channel data from YouTube...");
		await refetch();
		toast.success("Webpage synchronized with real-time data!");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "w-full border-b border-border/60 bg-black/80 backdrop-blur-md sticky top-0 z-40",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-3 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "flex items-center gap-1.5 font-mono text-emerald-400 font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "relative flex size-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "relative inline-flex rounded-full size-2 bg-emerald-500" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 13
						}, this), "REALTIME SYNC ACTIVE"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-border hidden sm:inline",
						children: "|"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-mono text-muted-foreground hidden sm:inline",
						children: ["Source: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-foreground",
							children: "@LuffyEditzInsta"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 21
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-border hidden md:inline",
						children: "|"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-mono text-muted-foreground hidden md:inline",
						children: [
							"Updated:",
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-accent font-medium",
								children: secondsAgo === 0 ? "just now" : `${secondsAgo}s ago`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 106,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2 ml-auto",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "hidden lg:flex items-center gap-1 p-0.5 rounded-md bg-white/5 border border-white/10 mr-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "px-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
						children: "Backdrop:"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 13
					}, this), [
						{
							id: "noir-beams",
							label: "Noir Beams"
						},
						{
							id: "carbon",
							label: "Carbon"
						},
						{
							id: "obsidian",
							label: "Matrix"
						},
						{
							id: "oled",
							label: "OLED Black"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => onChangeBgStyle(s.id),
						className: `px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${bgStyle === s.id ? "bg-white/15 text-white font-medium" : "text-muted-foreground hover:text-foreground"}`,
						children: s.label
					}, s.id, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 30
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 128,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: handleManualSync,
					disabled: isFetching,
					className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-md glass hover:bg-accent/15 text-foreground hover:text-accent font-mono text-[11px] font-medium transition-colors cursor-pointer disabled:opacity-50",
					title: "Fetch latest stats and videos from YouTube",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `size-3 ${isFetching ? "animate-spin text-accent" : ""}` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: isFetching ? "Syncing..." : "Sync Now" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 139,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 137,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 105,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 104,
		columnNumber: 10
	}, this);
}
function Nav({ onSync, isFetching }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
		className: "glass-strong",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-9 rounded-lg bg-primary grid place-items-center glow-primary",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-lg text-primary-foreground",
								children: "L"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 155,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-display text-xl tracking-tight",
							children: "LUFFY EDITZ"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 158,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-emerald-400 animate-pulse-dot" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 13
							}, this), "Live Synced"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 154,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "#videos",
							className: "hover:text-foreground transition-colors",
							children: "Live Uploads"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/about",
							className: "hover:text-foreground transition-colors flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "About" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 169,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-mono font-medium",
								children: "Page"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 170,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "#platforms",
							className: "hover:text-foreground transition-colors",
							children: "Platforms"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 174,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: onSync,
						disabled: isFetching,
						className: "hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg glass text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `size-3.5 ${isFetching ? "animate-spin text-primary" : ""}` }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 180,
							columnNumber: 13
						}, this), "Sync"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: YOUTUBE_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm",
						children: "Subscribe"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 183,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 153,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 152,
		columnNumber: 10
	}, this);
}
function Hero({ onPlayVideo, latestVideo, avatarUrl }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative max-w-7xl mx-auto px-6 pt-12 pb-12",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 mb-6 animate-rise",
						children: [
							avatarUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: avatarUrl,
								alt: "Luffy Editz",
								className: "size-7 rounded-full border border-primary/50 object-cover"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 203,
								columnNumber: 26
							}, this) : null,
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-xs text-accent uppercase tracking-[0.2em]",
								children: "Real-Time Creator Studio"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 204,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 207,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: "@LuffyEditzInsta"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 208,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 202,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tight text-balance animate-rise [animation-delay:80ms]",
						children: [
							"LUFFY",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 212,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-primary",
								children: "EDITZ"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 213,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 210,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-6 max-w-[48ch] text-lg text-muted-foreground text-pretty animate-rise [animation-delay:160ms]",
						children: "Video editor and content creator. Pacing, rhythm, and frame-by-frame cuts — synced live with real-time subscriber and video telemetry."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 flex flex-wrap gap-3 animate-rise [animation-delay:240ms]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: YOUTUBE_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Subscribe on YouTube" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 221,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 222,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 220,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "#videos",
							className: "px-6 py-3 rounded-lg glass text-foreground font-medium hover:bg-foreground/10 transition-colors",
							children: "Browse live uploads"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 224,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 219,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 201,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "lg:col-span-5 animate-fade [animation-delay:320ms]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "glass rounded-2xl p-4 glow-accent",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, { className: "size-3 text-primary animate-pulse" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 234,
									columnNumber: 17
								}, this), "Latest Synchronized Drop"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 233,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-emerald-400 animate-pulse-dot" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 238,
									columnNumber: 17
								}, this), "LIVE"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 237,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 232,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							onClick: () => {
								if (latestVideo) onPlayVideo(latestVideo);
							},
							className: "relative aspect-video rounded-xl overflow-hidden bg-surface-2 outline-1 -outline-offset-1 outline-foreground/10 group cursor-pointer",
							children: [
								latestVideo?.thumbnail ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: latestVideo.thumbnail,
									alt: latestVideo.title,
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 246,
									columnNumber: 41
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "w-full h-full grid place-items-center relative",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 grid-bg" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 247,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative flex items-end gap-1.5 h-20",
										"aria-hidden": "true",
										children: [
											40,
											70,
											55,
											90,
											65,
											100,
											50,
											80,
											60,
											75
										].map((h, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "w-2 rounded-full bg-primary/70 animate-pulse-dot",
											style: {
												height: `${h}%`,
												animationDelay: `${i * 120}ms`
											}
										}, i, false, {
											fileName: _jsxFileName,
											lineNumber: 249,
											columnNumber: 78
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 248,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 246,
									columnNumber: 198
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 257,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute inset-0 grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "size-12 rounded-full bg-primary text-primary-foreground grid place-items-center glow-primary group-hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-5 fill-current ml-0.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 262,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 261,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 260,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute top-3 left-3 flex gap-2",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "px-2 py-0.5 rounded bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-wider font-semibold",
										children: latestVideo?.isShort ? "Shorts" : "New Drop"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 268,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 267,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-200",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-[11px] flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-3 text-accent" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 275,
											columnNumber: 19
										}, this), latestVideo ? `${formatCompact(latestVideo.views)} views` : "Live"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 274,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono text-[11px] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm",
										children: latestVideo ? formatTimeAgo(latestVideo.publishedAt) : "Just now"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 278,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 273,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 243,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-semibold truncate",
									children: latestVideo?.title ?? "POV: When I Give Her Advice 😂❤️"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 286,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-3 text-emerald-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 290,
										columnNumber: 19
									}, this), "Live synced from YouTube channel"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 289,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 285,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => {
									if (latestVideo) onPlayVideo(latestVideo);
								},
								"aria-label": "Play video",
								className: "size-10 shrink-0 rounded-full bg-primary grid place-items-center glow-primary hover:bg-primary/90 transition-colors cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlayIcon, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 297,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 294,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 284,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 231,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 230,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 200,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 199,
		columnNumber: 10
	}, this);
}
function StatsStrip({ subscribers, totalViews, videoCount, isLive }) {
	const stats = [
		{
			label: "Subscribers",
			value: subscribers !== void 0 ? formatCompact(subscribers) : "44",
			rawCount: subscribers !== void 0 ? `${subscribers.toLocaleString()} subscribers` : "Live",
			note: "Live channel subscribers",
			icon: Users
		},
		{
			label: "Total Views",
			value: totalViews !== void 0 ? formatCompact(totalViews) : "15.6K",
			rawCount: totalViews !== void 0 ? `${totalViews.toLocaleString()} views` : "Live",
			note: "Live aggregate views",
			icon: Eye
		},
		{
			label: "Videos",
			value: videoCount !== void 0 ? String(videoCount) : "22",
			rawCount: videoCount !== void 0 ? `${videoCount} total uploads` : "Live",
			note: "Published edits & shorts",
			icon: Video
		},
		{
			label: "Instagram",
			value: "@Luffy_editz_26",
			rawCount: "Daily edits & stories",
			note: "Follow along",
			icon: Flame
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "max-w-7xl mx-auto px-6 py-6",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "glass rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border",
			children: stats.map((stat, i) => {
				const Icon = stat.icon;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: `p-6 animate-rise ${statDelays[i]}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
								children: stat.label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 347,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-4 text-muted-foreground/60" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 350,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 346,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-display text-4xl tracking-tight text-foreground",
							children: stat.value
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 352,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs text-accent mt-2 flex items-center gap-1.5 font-mono",
							children: [isLive && /* @__PURE__ */ (void 0)("span", {
								className: "relative flex size-1.5",
								children: [/* @__PURE__ */ (void 0)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 355,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("span", { className: "relative inline-flex rounded-full size-1.5 bg-emerald-500" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 356,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 354,
								columnNumber: 28
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: stat.note }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 358,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 353,
							columnNumber: 15
						}, this)
					]
				}, stat.label, true, {
					fileName: _jsxFileName,
					lineNumber: 345,
					columnNumber: 16
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 342,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 341,
		columnNumber: 10
	}, this);
}
function FeaturedVideos({ videos, onPlayVideo, isFetching }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const filteredVideos = (0, import_react.useMemo)(() => {
		if (filter === "shorts") return videos.filter((v) => v.isShort);
		if (filter === "trending") return [...videos].sort((a, b) => b.views - a.views);
		return videos;
	}, [videos, filter]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "videos",
		className: "max-w-7xl mx-auto px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2 mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "font-mono text-xs text-accent uppercase tracking-[0.2em]",
					children: "(a) Live Feed"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 388,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1 rounded-full bg-emerald-400 animate-pulse-dot" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 392,
						columnNumber: 15
					}, this), "Realtime Synced"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 391,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 387,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-4xl sm:text-5xl tracking-tight text-balance",
				children: "Channel Uploads"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 396,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 386,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2 bg-surface p-1 rounded-xl border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setFilter("all"),
						className: `px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${filter === "all" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
						children: [
							"All (",
							videos.length,
							")"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 403,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setFilter("shorts"),
						className: `px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${filter === "shorts" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
						children: "Shorts"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 406,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setFilter("trending"),
						className: `px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${filter === "trending" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
						children: "Most Viewed"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 409,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 402,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 385,
			columnNumber: 7
		}, this), videos.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "glass rounded-2xl p-12 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `size-8 mx-auto text-muted-foreground ${isFetching ? "animate-spin" : ""}` }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 416,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-4 font-mono text-sm text-muted-foreground",
				children: "Syncing live channel uploads..."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 417,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 415,
			columnNumber: 30
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
			children: filteredVideos.map((video, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				onClick: () => onPlayVideo(video),
				className: "group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 block cursor-pointer flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative aspect-video bg-surface-2 overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: video.thumbnail,
							alt: video.title,
							className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
							loading: "lazy"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 424,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 425,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "absolute inset-0 grid place-items-center opacity-80 group-hover:opacity-100 transition-opacity",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "size-11 rounded-full bg-primary/90 text-primary-foreground grid place-items-center group-hover:scale-110 transition-transform shadow-lg",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-5 fill-current ml-0.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 430,
									columnNumber: 23
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 429,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 428,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "absolute top-2.5 left-2.5",
							children: video.isShort ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "px-2 py-0.5 rounded bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-wider font-semibold",
								children: "Shorts"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 436,
								columnNumber: 38
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-zinc-300 text-[10px] font-mono",
								children: "Video"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 438,
								columnNumber: 33
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 435,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono text-zinc-200",
							children: formatTimeAgo(video.publishedAt)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 443,
							columnNumber: 19
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 423,
					columnNumber: 17
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-4",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors",
						children: video.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 449,
						columnNumber: 19
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 448,
					columnNumber: 17
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 422,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "px-4 pb-4 pt-1 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-mono flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-3 text-accent" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 457,
								columnNumber: 19
							}, this),
							formatCompact(video.views),
							" views"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 456,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-primary text-xs font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1",
						children: "Watch edit →"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 460,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 455,
					columnNumber: 15
				}, this)]
			}, video.id || idx, true, {
				fileName: _jsxFileName,
				lineNumber: 421,
				columnNumber: 47
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 420,
			columnNumber: 18
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 384,
		columnNumber: 10
	}, this);
}
function About() {
	const [imageSrc, setImageSrc] = (0, import_react.useState)("/studio-editor.jpg");
	const [portraitStyle, setPortraitStyle] = (0, import_react.useState)("noir-spotlight");
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const cached = localStorage.getItem("luffy_creator_portrait");
		if (cached) setImageSrc(cached);
	}, []);
	const handleProcessFile = (file) => {
		if (!file.type.startsWith("image/")) {
			toast.error("Please drop or select a valid image file");
			return;
		}
		const reader = new FileReader();
		reader.onload = async (e) => {
			const base64 = e.target?.result;
			if (base64) {
				setImageSrc(base64);
				try {
					localStorage.setItem("luffy_creator_portrait", base64);
				} catch (storageErr) {
					console.warn("Could not save to localStorage", storageErr);
				}
				toast.info("Applying exact image...");
				try {
					if ((await fetch("/api/save-portrait", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ base64 })
					})).ok) toast.success("Exact image replaced and saved!");
					else toast.success("Exact portrait applied!");
				} catch {
					toast.success("Exact portrait applied!");
				}
			}
		};
		reader.readAsDataURL(file);
	};
	const onDrop = (e) => {
		e.preventDefault();
		setIsDragging(false);
		const file = e.dataTransfer.files?.[0];
		if (file) handleProcessFile(file);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "about",
		className: "max-w-7xl mx-auto px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			ref: fileInputRef,
			type: "file",
			accept: "image/*",
			className: "hidden",
			onChange: (e) => {
				const file = e.target.files?.[0];
				if (file) handleProcessFile(file);
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 524,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "lg:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative group",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						onDragOver: (e) => {
							e.preventDefault();
							setIsDragging(true);
						},
						onDragLeave: () => setIsDragging(false),
						onDrop,
						className: `w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black outline-1 -outline-offset-1 outline-white/15 relative shadow-2xl transition-all ${isDragging ? "ring-4 ring-primary ring-offset-4 ring-offset-background" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `pointer-events-none absolute inset-0 z-0 ${portraitStyle === "noir-spotlight" ? "bg-[radial-gradient(circle_at_65%_25%,rgba(255,255,255,0.18),rgba(0,0,0,0.98)_70%)]" : portraitStyle === "carbon-crimson" ? "bg-carbon-style" : portraitStyle === "monochrome-rim" ? "bg-noir-beams" : "bg-black"}` }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 536,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: imageSrc,
								alt: "Navin — The Creator",
								className: `relative z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out ${portraitStyle === "noir-spotlight" ? "grayscale contrast-125 brightness-95" : portraitStyle === "carbon-crimson" ? "contrast-125 saturate-75 brightness-90" : portraitStyle === "monochrome-rim" ? "grayscale contrast-150 brightness-90" : "contrast-115 brightness-90"}`,
								referrerPolicy: "no-referrer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 538,
								columnNumber: 15
							}, this),
							portraitStyle === "noir-spotlight" && /* @__PURE__ */ (void 0)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%),linear-gradient(to_top,#000000_8%,transparent_60%)]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 541,
								columnNumber: 54
							}, this),
							portraitStyle === "carbon-crimson" && /* @__PURE__ */ (void 0)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(225,29,72,0.22),transparent_55%),linear-gradient(to_top,#000000_12%,transparent_65%)]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 542,
								columnNumber: 54
							}, this),
							portraitStyle === "monochrome-rim" && /* @__PURE__ */ (void 0)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-[conic-gradient(from_200deg_at_50%_0%,transparent_0deg,rgba(255,255,255,0.14)_25deg,transparent_55deg),linear-gradient(to_top,#000000_15%,transparent_65%)]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 543,
								columnNumber: 54
							}, this),
							portraitStyle === "pure-void" && /* @__PURE__ */ (void 0)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_35%,#000000_95%)]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 544,
								columnNumber: 49
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-white/10 rounded-2xl" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 546,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => fileInputRef.current?.click(),
									className: "px-2.5 py-1 rounded-lg bg-black/85 hover:bg-black text-white text-[11px] font-mono border border-white/20 flex items-center gap-1 shadow-md backdrop-blur-md cursor-pointer transition-colors",
									title: "Upload or replace with exact photo",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Camera, { className: "size-3 text-accent" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 551,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Upload Photo" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 552,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 550,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 549,
								columnNumber: 15
							}, this),
							isDragging && /* @__PURE__ */ (void 0)("div", {
								className: "absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-30",
								children: [
									/* @__PURE__ */ (void 0)(Upload, { className: "size-8 text-primary animate-bounce mb-2" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 558,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "font-display text-lg text-white",
										children: "Drop Photo Here"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 559,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-[11px] text-muted-foreground font-mono",
										children: "Applies dark studio grading"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 560,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 557,
								columnNumber: 30
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs font-mono",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-zinc-200 flex items-center gap-1.5 shadow-md",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-primary animate-pulse" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 568,
										columnNumber: 19
									}, this), "Navin"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 567,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => fileInputRef.current?.click(),
									className: "px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/15 text-[11px] flex items-center gap-1 cursor-pointer transition-colors backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Camera, { className: "size-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 572,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Change" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 573,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 571,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 566,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 531,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 p-2.5 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-[10px] font-mono text-muted-foreground px-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "BLACK STYLE" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 581,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setImageSrc("/studio-editor.jpg"),
										className: `hover:text-white transition-colors cursor-pointer ${imageSrc === "/studio-editor.jpg" ? "text-primary font-semibold" : ""}`,
										children: "Studio Rig"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 583,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "·" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 586,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setImageSrc("/camera-lens.jpg"),
										className: `hover:text-white transition-colors cursor-pointer ${imageSrc === "/camera-lens.jpg" ? "text-primary font-semibold" : ""}`,
										children: "Dark Lens"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 587,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 582,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 580,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-4 gap-1",
							children: [
								{
									id: "noir-spotlight",
									label: "Noir"
								},
								{
									id: "carbon-crimson",
									label: "Crimson"
								},
								{
									id: "monochrome-rim",
									label: "Silver"
								},
								{
									id: "pure-void",
									label: "OLED"
								}
							].map((preset) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setPortraitStyle(preset.id),
								className: `py-1 px-1.5 rounded text-[10px] font-mono transition-all cursor-pointer truncate ${portraitStyle === preset.id ? "bg-primary text-primary-foreground font-semibold" : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"}`,
								children: preset.label
							}, preset.id, false, {
								fileName: _jsxFileName,
								lineNumber: 605,
								columnNumber: 32
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 592,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 579,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 530,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 529,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "lg:col-span-8 flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-mono text-xs text-accent uppercase tracking-[0.2em] mb-3",
						children: "(b) About"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 613,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-5xl tracking-tight text-balance mb-6",
						children: "The person behind the cuts"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 614,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-lg text-muted-foreground text-pretty max-w-[52ch]",
						children: "I'm Navin — an editor obsessed with rhythm, pacing, and the perfect cut. My studio feels like a control room: screens, sound, and the occasional 3am render."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 617,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-lg text-muted-foreground text-pretty max-w-[52ch]",
						children: "When I'm not editing, I'm hunting for the next track, studying transitions, or arguing about color grades with friends."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 621,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: [
							"AMV",
							"Montage",
							"Transitions",
							"Color Grade",
							"Sound Design",
							"VFX"
						].map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "px-3 py-1.5 rounded-full glass text-xs font-mono",
							children: tag
						}, tag, false, {
							fileName: _jsxFileName,
							lineNumber: 626,
							columnNumber: 97
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 625,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/about",
							className: "px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 shadow-md group",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Explore Full Creator Story" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 633,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "group-hover:translate-x-1 transition-transform",
								children: "→"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 634,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 632,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: YOUTUBE_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "px-5 py-2.5 rounded-xl glass text-foreground text-sm font-medium hover:bg-foreground/10 transition-colors inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Channel" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 637,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 638,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 636,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 631,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 612,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 528,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 523,
		columnNumber: 10
	}, this);
}
function Platforms({ subscribers }) {
	const platforms = [{
		name: "YouTube",
		tag: "YT",
		value: subscribers !== void 0 ? `${formatCompact(subscribers)} subs` : "@LuffyEditzInsta",
		detail: "Live channel sync · Shorts & Montages",
		href: YOUTUBE_URL
	}, {
		name: "Instagram",
		tag: "IG",
		value: "@Luffy_editz_26",
		detail: "Daily edits & behind the scenes",
		href: INSTAGRAM_URL
	}];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "platforms",
		className: "max-w-7xl mx-auto px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2",
				children: "(c) Platforms"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 665,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-5xl tracking-tight text-balance",
				children: "Follow the signal"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 668,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 664,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-4",
			children: platforms.map((platform) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: platform.href,
				target: "_blank",
				rel: "noreferrer",
				className: "group glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 block",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-display text-2xl",
							children: platform.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 673,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: `size-8 rounded-lg grid place-items-center font-mono text-xs ${platform.name === "YouTube" ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent"}`,
							children: platform.tag
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 674,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 672,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-display text-3xl tracking-tight break-all",
						children: platform.value
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 678,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground flex items-center gap-1.5 mt-2 font-mono",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-accent animate-pulse-dot" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 680,
							columnNumber: 15
						}, this), platform.detail]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 679,
						columnNumber: 13
					}, this)
				]
			}, platform.name, true, {
				fileName: _jsxFileName,
				lineNumber: 671,
				columnNumber: 36
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 670,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 663,
		columnNumber: 10
	}, this);
}
function SubscribeCta() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "subscribe",
		className: "max-w-7xl mx-auto px-6 py-16",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -top-20 -right-20 size-80 rounded-full bg-primary/20 blur-[100px]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 690,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-mono text-xs text-accent uppercase tracking-[0.2em] mb-3",
						children: "Subscribe"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 692,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-5xl md:text-6xl tracking-tight text-balance max-w-[20ch]",
						children: [
							"New edits ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-primary",
								children: "dropping soon"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 694,
								columnNumber: 23
							}, this),
							"."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 693,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-muted-foreground max-w-[48ch] text-pretty",
						children: "Short-form cuts, montages, and the occasional behind-the-scenes. Live synced frame by frame."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 696,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: YOUTUBE_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "YouTube" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 702,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 703,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 701,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "px-6 py-3 rounded-lg glass font-medium hover:bg-foreground/10 transition-colors inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Instagram" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 706,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 707,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 705,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 700,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 691,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 689,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 688,
		columnNumber: 10
	}, this);
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "size-7 rounded-md bg-primary grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display text-sm text-primary-foreground",
						children: "L"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 719,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 718,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-sm text-muted-foreground",
					children: "© 2026 Luffy Editz — Realtime Sync"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 721,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 717,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-6 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/about",
						className: "hover:text-foreground transition-colors font-medium",
						children: "About Navin"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 724,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: YOUTUBE_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "hover:text-foreground transition-colors",
						children: "YouTube"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 727,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: INSTAGRAM_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "hover:text-foreground transition-colors",
						children: "Instagram"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 730,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 723,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 716,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 715,
		columnNumber: 10
	}, this);
}
function VideoModal({ video, onClose }) {
	if (!video) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open: !!video,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "max-w-3xl bg-card border-border p-0 overflow-hidden sm:rounded-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "aspect-video w-full bg-black",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
					src: `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`,
					title: video.title,
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
					allowFullScreen: true,
					className: "w-full h-full border-0"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 748,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 747,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
					className: "text-xl font-bold text-left leading-snug",
					children: video.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 752,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, {
					className: "text-left font-mono text-xs text-muted-foreground flex flex-wrap items-center gap-3 pt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-3 text-accent" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 757,
									columnNumber: 17
								}, this),
								formatCompact(video.views),
								" views"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 756,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 760,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: formatTimeAgo(video.publishedAt) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 761,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 762,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-emerald-400",
							children: "Live Synced from YouTube"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 763,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 755,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 751,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-mono text-xs text-muted-foreground",
						children: "@LuffyEditzInsta"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 768,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: video.link,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Open on YouTube" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 770,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 771,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 769,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 767,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 750,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 746,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 745,
		columnNumber: 10
	}, this);
}
function Index() {
	const { data, isFetching, refetch, dataUpdatedAt } = useYouTubeStats();
	const [selectedVideo, setSelectedVideo] = (0, import_react.useState)(null);
	const [bgStyle, setBgStyle] = (0, import_react.useState)("noir-beams");
	const isLive = data?.ok ?? false;
	const videos = data?.videos ?? [];
	const latestVideo = data?.latestVideo ?? videos[0];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-[#020203] text-foreground font-body relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `pointer-events-none fixed inset-0 ${bgStyle === "noir-beams" ? "bg-noir-beams" : bgStyle === "carbon" ? "bg-carbon-style" : bgStyle === "obsidian" ? "grid-bg" : "bg-oled-void"} transition-all duration-500` }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 793,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "pointer-events-none fixed inset-0 opacity-[0.15] mix-blend-luminosity bg-cover bg-center bg-no-repeat",
				style: {
					backgroundImage: `url('/camera-lens.jpg')`,
					maskImage: "radial-gradient(ellipse 85% 65% at 50% 20%, black 15%, transparent 75%)",
					WebkitMaskImage: "radial-gradient(ellipse 85% 65% at 50% 20%, black 15%, transparent 75%)"
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 794,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_15%,#020203_90%)]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 799,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster$1, { position: "bottom-right" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 801,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RealtimeTelemetryBar, {
						isFetching,
						refetch,
						dataUpdatedAt,
						bgStyle,
						onChangeBgStyle: setBgStyle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 804,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {
						onSync: () => refetch(),
						isFetching
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 805,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, {
						onPlayVideo: (v) => setSelectedVideo(v),
						latestVideo,
						avatarUrl: data?.thumbnailUrl || "/studio-editor.jpg"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 806,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatsStrip, {
						subscribers: data?.subscribers,
						totalViews: data?.totalViews,
						videoCount: data?.videoCount,
						isLive
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 807,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeaturedVideos, {
						videos,
						onPlayVideo: (v) => setSelectedVideo(v),
						isFetching
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 808,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(About, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 809,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Platforms, { subscribers: data?.subscribers }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 810,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubscribeCta, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 811,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 812,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 803,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VideoModal, {
				video: selectedVideo,
				onClose: () => setSelectedVideo(null)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 815,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 791,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
