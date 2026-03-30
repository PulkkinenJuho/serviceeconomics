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
  const jsonLd = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is service economics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Service economics is the discipline of knowing what your services actually cost — and what to do about it. It provides frameworks, diagnostics, and playbooks for professional services firms to close the gap between revenue and margin by improving cost visibility, decision speed, and AI delivery cost attribution.",
          },
        },
        {
          "@type": "Question",
          name: "Why are professional services margins declining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional services EBITDA margins compressed to 9.8% in 2024. The root cause is structural: three gaps — Signal, Latency, and Decision — form a causal sequence. Firms don't know which economic signals to watch (60–70% go unmonitored), data arrives 4–6 weeks late, and no structured process exists to act on problems in time.",
          },
        },
        {
          "@type": "Question",
          name: "What are the Three Gaps in service economics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Three Gaps are: (1) The Signal Gap — not knowing which economic signals matter, so reporting never surfaces them. (2) The Latency Gap — even right signals arrive 4–6 weeks too late to act on. (3) The Decision Gap — even with timely data, no structured mechanism turns signal into action the same week. The sequence is fixed: Signal → Latency → Decision.",
          },
        },
        {
          "@type": "Question",
          name: "How do I track AI delivery costs per engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most firms bury AI costs in 'software' or 'overhead' line items with no attribution to engagements. The AI Cost Integration Playbook provides a step-by-step process: audit all AI tools and spend, attribute costs to specific engagements using logs or token tracking, calculate per-engagement AI cost, then integrate into future pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need expensive enterprise software like ServiceNow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Many mid-size service firms already have the data they need across existing tools — PSA, ERP, CRM, and time systems. The problem isn't the tooling, it's the gap between systems. Service economics focuses on closing that gap: defining the right signals, reducing visibility lag, and building decision processes — regardless of which platform you use.",
          },
        },
      ],
    },
  ];

  return (
    <div>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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

      {/* FAQ — targets question-based searches */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is service economics?",
                a: "Service economics is the discipline of knowing what your services actually cost — and what to do about it. It provides frameworks, diagnostics, and playbooks for professional services firms to close the gap between revenue and margin.",
              },
              {
                q: "Why are professional services margins declining?",
                a: "EBITDA margins hit 9.8% in 2024 — the lowest in five years. The root cause is structural: firms don't know which signals to watch, data arrives 4–6 weeks late, and no structured process turns insight into action fast enough.",
              },
              {
                q: "What are the Three Gaps?",
                a: "The Signal Gap (not watching the right things), the Latency Gap (seeing problems too late), and the Decision Gap (no mechanism to act fast). They form a strict sequence — you can't skip ahead.",
              },
              {
                q: "How do I track AI costs per client engagement?",
                a: "Most firms bury AI costs in 'software' or 'overhead' with no engagement attribution. Our AI Cost Integration Playbook walks you through auditing, attributing, and pricing AI delivery costs step by step.",
              },
              {
                q: "Do I need expensive enterprise tools to do this?",
                a: "No. Most mid-size firms already have the data — it's scattered across PSA, ERP, CRM, and time systems. The problem isn't tooling, it's the gap between systems. Service economics focuses on closing that gap.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-lg border border-border p-5"
              >
                <summary className="cursor-pointer text-foreground font-medium list-none flex items-center justify-between">
                  {faq.q}
                  <span className="ml-2 text-muted-foreground group-open:rotate-45 transition-transform text-lg">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
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
