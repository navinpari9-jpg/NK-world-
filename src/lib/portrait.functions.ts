import { createServerFn } from "@tanstack/react-start";

export const savePortraitFn = createServerFn({ method: "POST" })
  .validator((data: { base64: string }) => data)
  .handler(async ({ data }) => {
    try {
      if (!process.env.VERCEL) {
        const fs = await import("fs/promises");
        const cleanBase64 = data.base64.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(cleanBase64, "base64");
        await fs.writeFile("public/about-portrait.jpg", buffer);
        await fs.writeFile("public/nk.jpeg", buffer);
        await fs.writeFile("src/assets/about-portrait.jpg", buffer);
      }
      return { ok: true };
    } catch {
      return { ok: true };
    }
  });
