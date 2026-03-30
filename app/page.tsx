import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";
import { ArrowRight, BookOpen, BarChart3, ClipboardList, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Service Economics — Know what your services actually cost",
  description:
    "Free frameworks, playbooks, diagnostics, and tools for service businesses navigating AI-augmented delivery. The discipline of knowing what your services actually cost — and what to do about it.",
};

const cards = [
  {
    title: "Frameworks",
    description:
      "Named visual models for the core concepts of service economics.",
    href: "/frameworks",
    icon: BookOpen,
  },
  {
    title: "Diagnostics",
    description:
      "Self-assessments to find out which gap your firm is stuck in.",
    href: "/tools/three-gaps-assessment",
    icon: BarChart3,
  },
  {
    title: "Playbooks",
    description:
      "Step-by-step responses to specific service economics problems.",
    href: "/resources",
    icon: ClipboardList,
  },
  {
    title: "Tools & Templates",
    description:
      "Free downloads you can use today without buying anything.",
    href: "/tools",
    icon: Wrench,
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Service Economics",
    url: "https://serviceeconomics.org",
    description:
      "The canonical methodology resource for service economics — frameworks, playbooks, diagnostics, and tools for service businesses navigating AI-augmented delivery.",
    publisher: {
      "@type": "Organization",
      name: "Service Economics",
      url: "https://serviceeconomics.org",
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Service Economics is the discipline of knowing what your services
            actually cost — and what to do about it.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            AI has changed how services are delivered. The frameworks for running
            them haven&apos;t kept up. This site is the fix.
          </p>
          <div className="mt-8">
            <Link href="/learn" className={cn(buttonVariants({ size: "lg" }))}>
              Start with the Framework
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Three Gaps — visual */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              {
                gap: "Gap 1",
                title: "The Signal Gap",
                quote: '"We don\'t know which signals to watch"',
                color: "text-red-600 dark:text-red-400",
                borderColor: "border-red-500/20",
                bgColor: "bg-red-500/5",
              },
              {
                gap: "Gap 2",
                title: "The Latency Gap",
                quote: '"We see problems 4–6 weeks too late"',
                color: "text-amber-600 dark:text-amber-400",
                borderColor: "border-amber-500/20",
                bgColor: "bg-amber-500/5",
              },
              {
                gap: "Gap 3",
                title: "The Decision Gap",
                quote: '"We see problems but can\'t act fast enough"',
                color: "text-blue-600 dark:text-blue-400",
                borderColor: "border-blue-500/20",
                bgColor: "bg-blue-500/5",
              },
            ].map((item, i) => (
              <div
                key={item.gap}
                className={`relative rounded-lg border ${item.borderColor} ${item.bgColor} bg-background p-6`}
              >
                <div className={`text-xs font-medium ${item.color} uppercase tracking-wider`}>
                  {item.gap}
                </div>
                <div className="mt-2 text-lg font-semibold text-foreground">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground italic">
                  {item.quote}
                </p>
                {i < 2 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            The sequence is fixed: Signal &rarr; Latency &rarr; Decision. You
            cannot skip a gap.
          </p>
          <div className="mt-4 text-center">
            <Link
              href="/tools/three-gaps-assessment"
              className="text-sm font-medium text-primary hover:underline"
            >
              Find out which gap your firm is stuck in &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem — Three Lines */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-2xl space-y-6">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            You know your revenue. You don&apos;t know your margin per engagement.
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            You use AI every day. You don&apos;t know what it&apos;s costing you per
            client.
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            You find out what went wrong about 45 days after you could have done
            something about it.
          </p>
        </div>
      </section>

      {/* What You'll Find Here — Four Cards */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            What You&apos;ll Find Here
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <Link key={card.href} href={card.href}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <card.icon className="h-6 w-6 text-primary mb-2" />
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Three Gaps — evidence */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            The Cost of the Three Gaps
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border p-5 text-center">
                <div className="text-3xl font-bold text-foreground">60–70%</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  of economic signals go unmonitored in the average service firm
                </p>
              </div>
              <div className="rounded-lg border border-border p-5 text-center">
                <div className="text-3xl font-bold text-foreground">4–6 wks</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  average visibility lag from problem formation to P&amp;L
                </p>
              </div>
              <div className="rounded-lg border border-border p-5 text-center">
                <div className="text-3xl font-bold text-foreground">4%+</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  of topline revenue lost annually to slow decisions
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-muted-foreground text-sm">
            The gaps compound. A signal you don&apos;t watch leaks margin you
            don&apos;t see on a timeline you can&apos;t act within.
          </p>
          <div className="mt-4 text-center">
            <Link
              href="/learn"
              className="text-sm font-medium text-primary hover:underline"
            >
              Read the full Three Gaps analysis &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to understand your service economics?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with the Three Gaps — the structural sequence that explains
            why service businesses earn less than they should.
          </p>
          <Link href="/learn" className={cn(buttonVariants({ size: "lg" }))}>
            Understand the Three Gaps
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
