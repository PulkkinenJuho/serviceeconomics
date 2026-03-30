import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "ClaudeBot", "anthropic-ai", "PerplexityBot", "Applebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: "https://serviceeconomics.org/sitemap.xml",
    host: "https://serviceeconomics.org",
  };
}
