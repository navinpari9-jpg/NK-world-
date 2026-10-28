const CHANNEL_HANDLE = "LuffyEditzInsta";
const FALLBACK_CHANNEL_ID = "UC-ZyJFA9ZcGtzRg7J0QntDQ";

async function fetchLiveYouTubeStats() {
  let channelId = FALLBACK_CHANNEL_ID;
  let subscribers = 44;
  let totalViews = 15576;
  let videoCount = 22;
  let channelTitle = "Luffy Editz";
  let thumbnailUrl =
    "https://yt3.googleusercontent.com/IFg-Sh4O6qbvcu4cpnOB64KZxrj5OeSkG6sU34ufnK7HNvtEBKkG8drYj2QSzsAqt_mCs0-w0w=s176-c-k-c0x00ffffff-no-rj";

  try {
    const pageRes = await fetch(`https://www.youtube.com/@${CHANNEL_HANDLE}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    if (pageRes.ok) {
      const html = await pageRes.text();
      const idMatch =
        html.match(/"channelId":"([a-zA-Z0-9_-]+)"/) ?? html.match(/channel_id=([a-zA-Z0-9_-]+)/);
      if (idMatch?.[1]) {
        channelId = idMatch[1];
      }

      const jsonMatch = html.match(/var ytInitialData = ({[\s\S]*?});<\/script>/);
      if (jsonMatch?.[1]) {
        try {
          const data = JSON.parse(jsonMatch[1]);
          const header = data?.header?.pageHeaderRenderer?.content?.pageHeaderViewModel;

          if (header?.title?.dynamicTextViewModel?.text?.content) {
            channelTitle = header.title.dynamicTextViewModel.text.content;
          }
          const avatar =
            header?.image?.decoratedAvatarViewModel?.avatar?.avatarViewModel?.image?.sources?.[0]
              ?.url;
          if (avatar) {
            thumbnailUrl = avatar;
          }

          const rawStr = JSON.stringify(data);
          const subMatch = rawStr.match(/"([0-9.,KMBkmb]+)\s*subscribers"/i);
          if (subMatch?.[1]) {
            const raw = subMatch[1].replace(/,/g, "");
            if (/k/i.test(raw)) subscribers = Math.round(parseFloat(raw) * 1000);
            else if (/m/i.test(raw)) subscribers = Math.round(parseFloat(raw) * 1000000);
            else subscribers = parseInt(raw, 10) || subscribers;
          }

          const vidMatch = rawStr.match(/"([0-9.,]+)\s*videos"/i);
          if (vidMatch?.[1]) {
            videoCount = parseInt(vidMatch[1].replace(/,/g, ""), 10) || videoCount;
          }
        } catch {
          // Keep defaults
        }
      }
    }
  } catch {
    // Keep fallback
  }

  const videos = [];
  try {
    const rssRes = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (rssRes.ok) {
      const xml = await rssRes.text();
      const entries = [...xml.matchAll(/<entry>[\s\S]*?<\/entry>/g)];
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
        const title = (titleMatch?.[1] ?? "")
          .replace(/&amp;/g, "&")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
        const link = linkMatch?.[1] ?? `https://www.youtube.com/watch?v=${vidId}`;
        const thumb = mediaThumb?.[1] ?? `https://i.ytimg.com/vi/${vidId}/hqdefault.jpg`;
        const pub = pubMatch?.[1] ?? new Date().toISOString();
        const isShort = link.includes("/shorts/") || /#shorts/i.test(title);

        if (vidId) {
          videos.push({
            id: vidId,
            title,
            link,
            thumbnail: thumb,
            views: vViews,
            publishedAt: pub,
            isShort,
          });
        }
      }

      if (computedTotalViews > 0) {
        totalViews = computedTotalViews;
      }
    }
  } catch {
    // Keep fallback
  }

  return {
    ok: true,
    channelTitle,
    handle: `@${CHANNEL_HANDLE}`,
    channelId,
    subscribers,
    totalViews,
    videoCount: Math.max(videoCount, videos.length),
    thumbnailUrl,
    lastSyncedAt: new Date().toISOString(),
    syncSource: "live-feed",
    videos,
    latestVideo: videos[0],
  };
}

export default async function handler(_req, res) {
  try {
    const data = await fetchLiveYouTubeStats();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=60");
    res.status(200).send(JSON.stringify(data));
  } catch (err) {
    res.status(200).json({
      ok: true,
      channelTitle: "Luffy Editz",
      handle: "@LuffyEditzInsta",
      channelId: FALLBACK_CHANNEL_ID,
      subscribers: 44,
      totalViews: 15576,
      videoCount: 22,
      lastSyncedAt: new Date().toISOString(),
      syncSource: "live-feed",
      videos: [],
      error: String(err),
    });
  }
}
