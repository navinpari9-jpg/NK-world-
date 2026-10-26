import { r as __toESM } from "../_runtime.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Toaster$1 } from "./sonner-DaT0QY8a.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowLeft, a as Upload, f as Film, g as Camera, h as CircleCheck, m as ExternalLink, o as SlidersVertical, t as Zap, u as Music } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-1QneJGRx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/about.tsx?tsr-split=component";
var YOUTUBE_URL = "https://www.youtube.com/@LuffyEditzInsta";
var INSTAGRAM_URL = "https://www.instagram.com/Luffy_editz_26";
function AboutNav({ bgStyle, onChangeBgStyle }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
		className: "sticky top-0 z-50 glass-strong",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/",
							className: "flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors group",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "size-8 rounded-lg glass grid place-items-center group-hover:border-primary/50 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "size-4 group-hover:-translate-x-0.5 transition-transform" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 38,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "hidden sm:inline",
								children: "Back to Studio"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-border hidden sm:inline",
							children: "|"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "size-7 rounded-md bg-primary grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-display text-sm text-primary-foreground",
									children: "L"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-lg tracking-tight",
								children: "LUFFY EDITZ"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "hidden lg:flex items-center gap-1 p-1 rounded-lg bg-black/70 border border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "px-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
						children: "Black Style:"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 11
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
						className: `px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${bgStyle === s.id ? "bg-white/15 text-white font-medium" : "text-muted-foreground hover:text-foreground"}`,
						children: s.label
					}, s.id, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 28
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors",
						children: "Studio Feed"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: YOUTUBE_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Subscribe" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 10
	}, this);
}
function AboutHero() {
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
			toast.error("Please select a valid image file");
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
		className: "relative max-w-7xl mx-auto px-6 pt-12 pb-16",
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
			lineNumber: 128,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative group",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						onDragOver: (e) => {
							e.preventDefault();
							setIsDragging(true);
						},
						onDragLeave: () => setIsDragging(false),
						onDrop,
						className: `w-full aspect-[4/5] rounded-3xl overflow-hidden bg-black outline-1 -outline-offset-1 outline-white/15 relative shadow-2xl transition-all ${isDragging ? "ring-4 ring-primary ring-offset-4 ring-offset-background" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `pointer-events-none absolute inset-0 z-0 ${portraitStyle === "noir-spotlight" ? "bg-[radial-gradient(circle_at_65%_25%,rgba(255,255,255,0.18),rgba(0,0,0,0.98)_70%)]" : portraitStyle === "carbon-crimson" ? "bg-carbon-style" : portraitStyle === "monochrome-rim" ? "bg-noir-beams" : "bg-black"}` }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 141,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: imageSrc,
								alt: "Navin — The Creator",
								className: `relative z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out ${portraitStyle === "noir-spotlight" ? "grayscale contrast-125 brightness-95" : portraitStyle === "carbon-crimson" ? "contrast-125 saturate-75 brightness-90" : portraitStyle === "monochrome-rim" ? "grayscale contrast-150 brightness-90" : "contrast-115 brightness-90"}`,
								referrerPolicy: "no-referrer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 15
							}, this),
							portraitStyle === "noir-spotlight" && /* @__PURE__ */ (void 0)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%),linear-gradient(to_top,#000000_8%,transparent_60%)]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 146,
								columnNumber: 54
							}, this),
							portraitStyle === "carbon-crimson" && /* @__PURE__ */ (void 0)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(225,29,72,0.22),transparent_55%),linear-gradient(to_top,#000000_12%,transparent_65%)]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 54
							}, this),
							portraitStyle === "monochrome-rim" && /* @__PURE__ */ (void 0)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-[conic-gradient(from_200deg_at_50%_0%,transparent_0deg,rgba(255,255,255,0.14)_25deg,transparent_55deg),linear-gradient(to_top,#000000_15%,transparent_65%)]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 54
							}, this),
							portraitStyle === "pure-void" && /* @__PURE__ */ (void 0)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_35%,#000000_95%)]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 49
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-white/10 rounded-3xl" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute top-4 left-4 z-20 flex items-center gap-2 text-xs font-mono text-zinc-300 bg-black/75 px-3 py-1 rounded-md border border-white/10 backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-emerald-400 animate-pulse" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 155,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Creator & Director" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 156,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => fileInputRef.current?.click(),
									className: "px-3 py-1.5 rounded-xl bg-black/85 hover:bg-black text-white text-xs font-mono border border-white/20 flex items-center gap-1.5 shadow-lg backdrop-blur-md cursor-pointer transition-colors",
									title: "Upload or replace with exact photo",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Camera, { className: "size-3.5 text-accent" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 162,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Upload Photo" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 163,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 161,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 15
							}, this),
							isDragging && /* @__PURE__ */ (void 0)("div", {
								className: "absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-30",
								children: [
									/* @__PURE__ */ (void 0)(Upload, { className: "size-10 text-primary animate-bounce mb-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 169,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "font-display text-xl text-white",
										children: "Drop Photo Here"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 170,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-muted-foreground font-mono mt-1",
										children: "Applies dark studio grading automatically"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 168,
								columnNumber: 30
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between text-xs font-mono",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-base font-bold text-white font-body",
									children: "Navin"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 178,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-zinc-400",
									children: "@LuffyEditzInsta"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 177,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => fileInputRef.current?.click(),
									className: "px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 font-semibold shadow-md flex items-center gap-1.5 cursor-pointer transition-colors backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Camera, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 182,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Change Photo" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 183,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 181,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 136,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 p-3 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-md space-y-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between text-[11px] font-mono text-muted-foreground px-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "BLACK STUDIO STYLE" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setImageSrc("/studio-editor.jpg"),
										className: `hover:text-white transition-colors cursor-pointer ${imageSrc === "/studio-editor.jpg" ? "text-primary font-semibold" : ""}`,
										children: "Studio Rig"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 193,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "·" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 196,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setImageSrc("/camera-lens.jpg"),
										className: `hover:text-white transition-colors cursor-pointer ${imageSrc === "/camera-lens.jpg" ? "text-primary font-semibold" : ""}`,
										children: "Dark Lens"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 197,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 192,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 190,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-4 gap-1.5",
							children: [
								{
									id: "noir-spotlight",
									label: "Noir Light"
								},
								{
									id: "carbon-crimson",
									label: "Crimson Dark"
								},
								{
									id: "monochrome-rim",
									label: "Silver Rim"
								},
								{
									id: "pure-void",
									label: "Pure Black"
								}
							].map((preset) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setPortraitStyle(preset.id),
								className: `py-1.5 px-2 rounded-lg text-[11px] font-mono transition-all cursor-pointer truncate ${portraitStyle === preset.id ? "bg-primary text-primary-foreground font-semibold shadow-sm" : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"}`,
								children: preset.label
							}, preset.id, false, {
								fileName: _jsxFileName,
								lineNumber: 215,
								columnNumber: 32
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 135,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 134,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-xs text-accent uppercase tracking-[0.2em]",
								children: "The Story"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 226,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-12 bg-border" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 229,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: "About the Artist"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 230,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 225,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-6",
						children: [
							"BEHIND EVERY CUT ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 234,
								columnNumber: 30
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-primary",
								children: "LIES A RHYTHM."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 235,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 233,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
								"I'm ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-foreground font-medium",
									children: "Navin"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 240,
									columnNumber: 19
								}, this),
								", a video editor, content creator, and visual storyteller obsessed with timing, energy, and cinematic impact."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 239,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "What started as an endless curiosity for anime action scenes and movie trailers turned into a craft. My workspace is built like a studio control room: multiple monitors, waveform scopes, custom color luts, and sound cues timed down to the exact millisecond." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 244,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Whether it's high-speed short-form cuts, emotional character arcs, or complex visual effects montages, my goal is always the same: make the viewer feel the impact in their chest before they even realize a cut just happened." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 250,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 238,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 flex flex-wrap gap-4 pt-4 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: YOUTUBE_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "YouTube Channel" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 259,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 260,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 258,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-foreground/10 transition-colors inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Instagram Profile" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 263,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 264,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 262,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 257,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 224,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 132,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 127,
		columnNumber: 10
	}, this);
}
function PhilosophySection() {
	const principles = [
		{
			num: "01",
			title: "Rhythm Over Spectacle",
			desc: "Flashy effects mean nothing if the pacing feels disjointed. A cut must land exactly where the audio frequency shifts.",
			icon: Music
		},
		{
			num: "02",
			title: "Color as Emotion",
			desc: "Contrast isn't just about dark blacks; it guides the viewer's eye to the key subject without visual clutter.",
			icon: SlidersVertical
		},
		{
			num: "03",
			title: "Sound Sells the Impact",
			desc: "More than half of an edit's power is invisible. Layered bass impacts, swooshes, and atmospheric silence create tension.",
			icon: Film
		},
		{
			num: "04",
			title: "Frame-By-Frame Discipline",
			desc: "Every second contains 60 individual decisions. No lazy fades, no loose transitions, and no compromise on quality.",
			icon: Zap
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "max-w-7xl mx-auto px-6 py-16 border-t border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-12",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2",
				children: "Methodology"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 295,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-4xl sm:text-5xl tracking-tight",
				children: "The 4 Golden Rules"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 296,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 294,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
			children: principles.map((p) => {
				const Icon = p.icon;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "glass rounded-2xl p-6 relative group hover:-translate-y-1 transition-transform duration-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-2xl font-bold text-primary",
								children: p.num
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 304,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "size-9 rounded-lg bg-surface-2 grid place-items-center text-muted-foreground group-hover:text-accent transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 306,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 305,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 303,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "font-display text-xl tracking-tight text-foreground mb-2",
							children: p.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 309,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: p.desc
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 312,
							columnNumber: 15
						}, this)
					]
				}, p.num, true, {
					fileName: _jsxFileName,
					lineNumber: 302,
					columnNumber: 16
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 299,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 293,
		columnNumber: 10
	}, this);
}
function StudioToolkit() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "max-w-7xl mx-auto px-6 py-16 border-t border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2",
						children: "The Arsenal"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 341,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-4xl sm:text-5xl tracking-tight mb-4",
						children: "Production Software & Tools"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 344,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-muted-foreground leading-relaxed",
						children: "High-end editing demands software that never bottlenecks creativity. Every project flows through a multi-stage pipeline from raw timeline cut to sound mixing and final master export."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 347,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 340,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: [
						{
							name: "Adobe Premiere Pro",
							category: "Assembly & Timeline Pacing"
						},
						{
							name: "Adobe After Effects",
							category: "Motion Graphics & VFX"
						},
						{
							name: "DaVinci Resolve",
							category: "Color Science & Grading"
						},
						{
							name: "Topaz Video AI",
							category: "Neural Upscaling & 60FPS Fluidity"
						},
						{
							name: "FL Studio",
							category: "Custom Audio Splicing & Beats"
						},
						{
							name: "Photoshop",
							category: "Keyframe Matte & Poster Design"
						}
					].map((tool) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "glass rounded-xl p-4 flex items-center justify-between border border-border/70 hover:border-primary/40 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-semibold text-sm text-foreground",
							children: tool.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 358,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-mono text-muted-foreground",
							children: tool.category
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 359,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 357,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4 text-emerald-400 shrink-0 ml-3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 361,
							columnNumber: 17
						}, this)]
					}, tool.name, true, {
						fileName: _jsxFileName,
						lineNumber: 356,
						columnNumber: 32
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 355,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 354,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 339,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 338,
		columnNumber: 10
	}, this);
}
function ConnectCta() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "max-w-7xl mx-auto px-6 py-16",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "glass-strong rounded-3xl p-8 sm:p-14 relative overflow-hidden text-center sm:text-left",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-primary/20 blur-[120px]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 371,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex flex-col sm:flex-row items-center justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2",
						children: "Get In Touch"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 374,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-4xl sm:text-5xl tracking-tight max-w-[20ch]",
						children: [
							"Let's create something ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-primary",
								children: "unforgettable"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 378,
								columnNumber: 38
							}, this),
							"."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 377,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-3 text-muted-foreground max-w-[45ch]",
						children: "Open for collaborations, video edits, and creative projects. Follow along on the journey."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 380,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 373,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-4 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "px-6 py-3 rounded-xl glass font-medium text-foreground hover:bg-foreground/10 transition-colors",
						children: "Explore Feed"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 387,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: YOUTUBE_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg",
						children: "Subscribe on YouTube"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 390,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 386,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 372,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 370,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 369,
		columnNumber: 10
	}, this);
}
function AboutFooter() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "text-foreground hover:text-primary transition-colors font-medium",
						children: "← Home Studio"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 402,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 405,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "© 2026 Luffy Editz" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 406,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 401,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: YOUTUBE_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "hover:text-foreground transition-colors",
					children: "YouTube"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 409,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: INSTAGRAM_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "hover:text-foreground transition-colors",
					children: "Instagram"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 412,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 408,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 400,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 399,
		columnNumber: 10
	}, this);
}
function AboutPage() {
	const [bgStyle, setBgStyle] = (0, import_react.useState)("noir-beams");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-[#020203] text-foreground font-body relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `pointer-events-none fixed inset-0 ${bgStyle === "noir-beams" ? "bg-noir-beams" : bgStyle === "carbon" ? "bg-carbon-style" : bgStyle === "obsidian" ? "grid-bg" : "bg-oled-void"} transition-all duration-500` }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 424,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "pointer-events-none fixed inset-0 opacity-[0.16] mix-blend-luminosity bg-cover bg-center bg-no-repeat",
				style: {
					backgroundImage: `url('/camera-lens.jpg')`,
					maskImage: "radial-gradient(ellipse 80% 70% at 50% 25%, black 20%, transparent 80%)",
					WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 25%, black 20%, transparent 80%)"
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 425,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_10%,#020203_90%)]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 430,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster$1, { position: "bottom-right" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 433,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AboutNav, {
						bgStyle,
						onChangeBgStyle: setBgStyle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 434,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AboutHero, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 435,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhilosophySection, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 436,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StudioToolkit, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 437,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConnectCta, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 438,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AboutFooter, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 439,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 432,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 422,
		columnNumber: 10
	}, this);
}
//#endregion
export { AboutPage as component };
