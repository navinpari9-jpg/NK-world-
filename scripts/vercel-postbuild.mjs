import { cp, mkdir, writeFile, access, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const root = process.cwd();
  const vercelStaticDir = resolve(root, ".vercel/output/static");
  const distClientDir = resolve(root, "dist/client");
  const distDir = resolve(root, "dist");

  const candidateServerEntries = [
    resolve(root, ".vercel/output/functions/__server.func/index.mjs"),
    resolve(root, "dist/server/index.mjs"),
    resolve(root, ".output/server/index.mjs"),
  ];

  // Ensure dist directory exists and copy static assets to dist/ root
  await mkdir(distDir, { recursive: true });
  if (await exists(vercelStaticDir)) {
    await cp(vercelStaticDir, distDir, { recursive: true, force: true });
  } else if (await exists(distClientDir)) {
    await cp(distClientDir, distDir, { recursive: true, force: true });
  }

  let serverEntryPath = null;
  for (const candidate of candidateServerEntries) {
    if (await exists(candidate)) {
      serverEntryPath = candidate;
      break;
    }
  }

  if (serverEntryPath) {
    const mod = await import(pathToFileURL(serverEntryPath).href);
    const app = mod.default ?? mod;

    const routesToRender = [
      { urlPath: "/", outFiles: ["index.html", "200.html", "404.html"] },
      { urlPath: "/about", outFiles: ["about/index.html", "about.html"] },
    ];

    for (const route of routesToRender) {
      try {
        const req = new Request(`http://localhost${route.urlPath}`, {
          headers: { Accept: "text/html" },
        });
        const res = await app.fetch(req, {}, {});
        const html = await res.text();

        if (res.ok && html.includes("<html")) {
          for (const relOut of route.outFiles) {
            const distTarget = resolve(distDir, relOut);
            await mkdir(dirname(distTarget), { recursive: true });
            await writeFile(distTarget, html, "utf8");

            if (await exists(distClientDir)) {
              const clientTarget = resolve(distClientDir, relOut);
              await mkdir(dirname(clientTarget), { recursive: true });
              await writeFile(clientTarget, html, "utf8");
            }

            if (await exists(vercelStaticDir)) {
              const vercelTarget = resolve(vercelStaticDir, relOut);
              await mkdir(dirname(vercelTarget), { recursive: true });
              await writeFile(vercelTarget, html, "utf8");
            }
          }
          console.log(
            `[vercel-postbuild] Prerendered ${route.urlPath} -> ${route.outFiles.join(", ")}`,
          );
        } else {
          console.warn(`[vercel-postbuild] Unexpected status ${res.status} for ${route.urlPath}`);
        }
      } catch (err) {
        console.error(`[vercel-postbuild] Failed to prerender ${route.urlPath}:`, err);
      }
    }
  } else {
    console.warn("[vercel-postbuild] No server entry found in candidate paths.");
  }

  if (!process.env.VERCEL) {
    try {
      await rm(resolve(root, ".vercel"), { recursive: true, force: true });
    } catch {
      // ignore cleanup errors
    }
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error("[vercel-postbuild] Error:", err);
    process.exit(1);
  });
