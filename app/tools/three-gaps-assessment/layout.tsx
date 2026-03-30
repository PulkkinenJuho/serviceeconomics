import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Three Gaps Assessment — Which Gap Is Costing You Most?",
  description:
    "Free 9-question diagnostic for professional services firms. Identify whether the Signal Gap, Latency Gap, or Decision Gap is your biggest margin leak. No email required.",
  openGraph: {
    title: "Three Gaps Assessment — Which Gap Is Costing You Most?",
    description:
      "Free 9-question diagnostic. Find out which of the three structural gaps is costing your service business the most margin.",
  },
};

export default function ThreeGapsAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
