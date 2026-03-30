import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Economics Maturity Diagnostic — Where Does Your Firm Stand?",
  description:
    "Free 10-question self-assessment for professional services leaders. Score your firm on the Service Economics Maturity Model — from Blind to Intelligent. No email required.",
  openGraph: {
    title: "Service Economics Maturity Diagnostic",
    description:
      "Free 10-question self-assessment. Find out where your firm stands on the Service Economics Maturity Model.",
  },
};

export default function MaturityDiagnosticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
