import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Playbooks, guides, and benchmark data for service economics practitioners. Structured depth — not a blog.",
};

const playbooks = [
  {
    title: "The Margin Recovery Playbook",
    description:
      "For when an engagement is losing money and you need to stop the bleeding.",
    href: "/resources/playbooks/margin-recovery",
  },
  {
    title: "The AI Cost Integration Playbook",
    description:
      "For when your team uses AI tools but you have no idea what they're costing per client.",
    href: "/resources/playbooks/ai-cost-integration",
  },
];

const guides = [
  {
    title: "The Complete Guide to Pricing AI-Augmented Services",
    description:
      "How to price engagements where AI is part of delivery. The three pricing models explained.",
    href: "#",
    comingSoon: true,
  },
  {
    title: "How to Run a Monthly Service Economics Review",
    description:
      "A practical guide to a review cadence that surfaces problems in time to act.",
    href: "#",
    comingSoon: true,
  },
  {
    title: "AI Cost Governance for Service Leaders",
    description:
      "The difference between AI risk governance and AI economic governance — and what to do about both.",
    href: "#",
    comingSoon: true,
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Resources
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Structured depth. Not a blog — a curated library of playbooks, guides,
          and benchmark data for service economics practitioners.
        </p>

        {/* Playbooks */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Playbooks
          </h2>
          <p className="text-muted-foreground mb-6">
            Step-by-step responses to specific service economics problems. Each
            playbook is a named, structured process you can follow without buying
            anything.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {playbooks.map((pb) => (
              <Link key={pb.href} href={pb.href}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{pb.title}</CardTitle>
                    <CardDescription>{pb.description}</CardDescription>
                    <div className="flex items-center text-sm text-primary mt-2">
                      Read playbook <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Guides */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <Card
                key={g.title}
                className={`h-full ${g.comingSoon ? "opacity-60" : "hover:shadow-md transition-shadow"}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{g.title}</CardTitle>
                  <CardDescription>{g.description}</CardDescription>
                  {g.comingSoon && (
                    <span className="text-xs text-muted-foreground mt-2 inline-block">
                      Coming soon
                    </span>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Benchmark Data */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Benchmark Data
          </h2>
          <div className="rounded-lg border border-dashed border-border p-8 text-center">
            <p className="text-muted-foreground">
              The service economics benchmark page — updated quarterly — is coming
              in Month 2. It will include margin ranges, utilisation thresholds,
              and AI cost ratios by firm type.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
