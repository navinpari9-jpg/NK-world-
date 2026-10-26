import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/youtube.functions-D0vKUDnK.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var CHANNEL_HANDLE = "LuffyEditzInsta";
var FALLBACK_CHANNEL_ID = "UC-ZyJFA9ZcGtzRg7J0QntDQ";
async function fetchFromOfficialApi(apiKey) {
	try {
		const url = new URL("https://www.googleapis.com/youtube/v3/channels");
		url.searchParams.set("part", "statistics,snippet,contentDetails");
		url.searchParams.set("forHandle", `@${CHANNEL_HANDLE}`);
		url.searchParams.set("key", apiKey);
		const res = await fetch(url.toString());
		if (!res.ok) return null;
		const channel = (await res.json()).items?.[0];
		if (!channel) return null;
		const channelId = channel.id ?? FALLBACK_CHANNEL_ID;
		const uploadsPlaylistId = channel.contentDetails?.relatedPlaylists?.uploads;
		const videos = [];
		if (uploadsPlaylistId) try {
			const playUrl = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
			playUrl.searchParams.set("part", "snippet");
			playUrl.searchParams.set("playlistId", uploadsPlaylistId);
			playUrl.searchParams.set("maxResults", "12");
			playUrl.searchParams.set("key", apiKey);
			const playRes = await fetch(playUrl.toString());
			if (playRes.ok) {
				const playJson = await playRes.json();
				for (const item of playJson.items ?? []) {
					const vidId = item.snippet?.resourceId?.videoId;
					if (vidId) {
						const title = item.snippet?.title ?? "";
						const thumb = item.snippet?.thumbnails?.high?.url ?? item.snippet?.thumbnails?.medium?.url ?? `https://i.ytimg.com/vi/${vidId}/hqdefault.jpg`;
						const isShort = /#shorts/i.test(title);
						videos.push({
							id: vidId,
							title,
							link: isShort ? `https://www.youtube.com/shorts/${vidId}` : `https://www.youtube.com/watch?v=${vidId}`,
							thumbnail: thumb,
							views: 0,
							publishedAt: item.snippet?.publishedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
							isShort
						});
					}
				}
			}
		} catch {}
		return {
			ok: true,
			channelTitle: channel.snippet?.title ?? "Luffy Editz",
			handle: `@${CHANNEL_HANDLE}`,
			channelId,
			subscribers: Number(channel.statistics?.subscriberCount ?? 0),
			totalViews: Number(channel.statistics?.viewCount ?? 0),
			videoCount: Number(channel.statistics?.videoCount ?? 0),
			thumbnailUrl: channel.snippet?.thumbnails?.high?.url ?? channel.snippet?.thumbnails?.medium?.url,
			lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString(),
			syncSource: "official-api",
			videos,
			latestVideo: videos[0]
		};
	} catch {
		return null;
	}
}
async function fetchFromLivePublicFeed() {
	let channelId = FALLBACK_CHANNEL_ID;
	let subscribers = 44;
	let totalViews = 15576;
	let videoCount = 22;
	let channelTitle = "Luffy Editz";
	let thumbnailUrl = "https://yt3.googleusercontent.com/IFg-Sh4O6qbvcu4cpnOB64KZxrj5OeSkG6sU34ufnK7HNvtEBKkG8drYj2QSzsAqt_mCs0-w0w=s176-c-k-c0x00ffffff-no-rj";
	try {
		const pageRes = await fetch(`https://www.youtube.com/@${CHANNEL_HANDLE}`, { headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
			"Accept-Language": "en-US,en;q=0.9"
		} });
		if (pageRes.ok) {
			const html = await pageRes.text();
			const idMatch = html.match(/"channelId":"([a-zA-Z0-9_-]+)"/) ?? html.match(/channel_id=([a-zA-Z0-9_-]+)/);
			if (idMatch?.[1]) channelId = idMatch[1];
			const jsonMatch = html.match(/var ytInitialData = ({[\s\S]*?});<\/script>/);
			if (jsonMatch?.[1]) try {
				const data = JSON.parse(jsonMatch[1]);
				const header = data["header"]?.pageHeaderRenderer?.content?.pageHeaderViewModel;
				if (header?.title?.dynamicTextViewModel?.text?.content) channelTitle = header.title.dynamicTextViewModel.text.content;
				const avatar = header?.image?.decoratedAvatarViewModel?.avatar?.avatarViewModel?.image?.sources?.[0]?.url;
				if (avatar) thumbnailUrl = avatar;
				const rawStr = JSON.stringify(data);
				const subMatch = rawStr.match(/"([0-9.,KMBkmb]+)\s*subscribers"/i);
				if (subMatch?.[1]) {
					const raw = subMatch[1].replace(/,/g, "");
					if (/k/i.test(raw)) subscribers = Math.round(parseFloat(raw) * 1e3);
					else if (/m/i.test(raw)) subscribers = Math.round(parseFloat(raw) * 1e6);
					else subscribers = parseInt(raw, 10) || subscribers;
				}
				const vidMatch = rawStr.match(/"([0-9.,]+)\s*videos"/i);
				if (vidMatch?.[1]) videoCount = parseInt(vidMatch[1].replace(/,/g, ""), 10) || videoCount;
			} catch {}
		}
	} catch {}
	const videos = [];
	try {
		const rssRes = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, { headers: { "User-Agent": "Mozilla/5.0" } });
		if (rssRes.ok) {
			const entries = [...(await rssRes.text()).matchAll(/<entry>[\s\S]*?<\/entry>/g)];
			let computedTotalViews = 0;
			for (const ent of entries) {
				const entStr = ent[0];
				const titleMatch = entStr.match(/<title>([\s\S]*?)<\/title>/);
				const linkMatch = entStr.match(/<link rel="alternate" href="([^"]+)"\/>/);
				const vidIdMatch = entStr.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
				const viewsMatch = entStr.match(/views="([^"]+)"/);
				const pubMatch = entStr.match(/<published>([^<]+)<\/published>/);
				const mediaThumb = entStr.match(/<media:thumbnail url="([^"]+)"/);
				const vViews = viewsMatch?.[1] ? parseInt(viewsMatch[1], 10) : 0;
				computedTotalViews += vViews;
				const vidId = vidIdMatch?.[1] ?? "";
				const title = (titleMatch?.[1] ?? "").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
				const link = linkMatch?.[1] ?? `https://www.youtube.com/watch?v=${vidId}`;
				const thumb = mediaThumb?.[1] ?? `https://i.ytimg.com/vi/${vidId}/hqdefault.jpg`;
				const pub = pubMatch?.[1] ?? (/* @__PURE__ */ new Date()).toISOString();
				const isShort = link.includes("/shorts/") || /#shorts/i.test(title);
				if (vidId) videos.push({
					id: vidId,
					title,
					link,
					thumbnail: thumb,
					views: vViews,
					publishedAt: pub,
					isShort
				});
			}
			if (computedTotalViews > 0) totalViews = computedTotalViews;
		}
	} catch {}
	return {
		ok: true,
		channelTitle,
		handle: `@${CHANNEL_HANDLE}`,
		channelId,
		subscribers,
		totalViews,
		videoCount: Math.max(videoCount, videos.length),
		thumbnailUrl,
		lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString(),
		syncSource: "live-feed",
		videos,
		latestVideo: videos[0]
	};
}
var getYouTubeStats_createServerFn_handler = createServerRpc({
	id: "f1d750150ce89bc0d593aa22c01b98d68b80c07d2cace39b64fe99ebd5b1b07f",
	name: "getYouTubeStats",
	filename: "src/lib/youtube.functions.ts"
}, (opts) => getYouTubeStats.__executeServer(opts));
var getYouTubeStats = createServerFn({ method: "GET" }).handler(getYouTubeStats_createServerFn_handler, async () => {
	const apiKey = process.env["YOUTUBE_API_KEY"];
	if (apiKey) {
		const officialResult = await fetchFromOfficialApi(apiKey);
		if (officialResult && officialResult.ok) return officialResult;
	}
	return await fetchFromLivePublicFeed();
});
//#endregion
export { getYouTubeStats_createServerFn_handler };
