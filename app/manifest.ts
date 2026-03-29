import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Service Economics",
    short_name: "ServiceEcon",
    description:
      "Frameworks, playbooks, diagnostics, and tools for service businesses navigating AI-augmented delivery.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#09090b",
  };
}
