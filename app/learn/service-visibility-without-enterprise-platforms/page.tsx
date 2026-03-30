import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "@/lib/button-variants";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title:
    "Service Visibility Without Enterprise Platforms — Do You Really Need ServiceNow?",
  description:
    "Mid-size professional services firms don't need enterprise platforms like ServiceNow to gain cost visibility and margin control. Here's what they need instead — and why the frameworks matter more than the tooling.",
  keywords: [
    "ServiceNow alternative",
    "ServiceNow too expensive",
    "service management mid-size company",
    "professional services cost visibility",
    "ServiceNow alternative for professional services",
    "service economics without enterprise software",
    "engagement profitability without ServiceNow",
    "mid-size service firm technology",
  ],
};

export default function ServiceVisibilityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Service Visibility Without Enterprise Platforms — Do You Really Need ServiceNow?",
    description:
      "Why mid-size professional services firms don't need enterprise platforms to gain cost visibility, and what they need instead.",
    author: {
      "@type": "Organization",
      name: "Service Economics",
      url: "https://serviceeconomics.org",
    },
    publisher: {
      "@type": "Organization",
      name: "Service Economics",
      url: "https://serviceeconomics.org",
    },
    datePublished: "2025-06-01",
    dateModified: "2025-06-01",
    mainEntityOfPage:
      "https://serviceeconomics.org/learn/service-visibility-without-enterprise-platforms",
    keywords: [
      "ServiceNow alternative",
      "service management mid-size company",
      "professional services cost visibility",
      "service economics",
    ],
  };

  return (
    <div className="py-16 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <Link
          href="/learn"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to Learn
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
          Service Visibility Without Enterprise Platforms
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Do you really need a six-figure platform to know what your services
          cost?
        </p>

        {/* The assumption */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground">
            The assumption that&apos;s costing you money
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            There&apos;s a widespread belief in professional services that if you
            want real cost visibility — knowing your margin per engagement, tracking
            AI delivery costs, understanding where revenue leaks — you need an
            enterprise platform. ServiceNow, SAP, or a similarly large-scale
            system.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            For mid-size firms (50–500 people), this creates a painful situation.
            Enterprise platforms often cost $100k–$500k+ per year in licensing
            alone, require 6–18 months to implement, need dedicated admin teams
            to maintain, and were designed for organisations 5–10x your size. The
            result: many mid-size firms either over-invest in a platform they
            can&apos;t fully use, or — more commonly — give up on cost visibility
            entirely and default to spreadsheets and gut feel.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Both are the wrong answer. The problem isn&apos;t that you need better
            tooling. The problem is that you need a better framework for
            understanding what to measure, how fast you need to see it, and what
            to do when you do.
          </p>
        </section>

        {/* What you actually need */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground">
            What you actually need (and what you probably already have)
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Most mid-size professional services firms already have the data they
            need. It&apos;s scattered across 3–5 systems that don&apos;t talk to
            each other:
          </p>
          <div className="mt-6 space-y-3">
            {[
              {
                system: "PSA / Project Management",
                has: "Hours, utilisation, project status, resource allocation",
                missing: "No cost attribution — knows hours but not financial impact",
              },
              {
                system: "ERP / Finance",
                has: "Revenue, expenses, P&L, cash flow",
                missing: "No project context — knows money was lost, not why",
              },
              {
                system: "CRM",
                has: "Pipeline, deal values, client relationships",
                missing: "No delivery economics — knows revenue target, not whether the deal makes money",
              },
              {
                system: "Time Tracking",
                has: "Who worked on what and for how long",
                missing: "No cost rates or margin calculation per engagement",
              },
              {
                system: "AI Tools & APIs",
                has: "Usage logs, token counts, API bills",
                missing: "No engagement attribution — costs buried in 'software overhead'",
              },
            ].map((item) => (
              <div
                key={item.system}
                className="rounded-lg border border-border p-4"
              >
                <div className="text-sm font-semibold text-foreground">
                  {item.system}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    Has:
                  </span>{" "}
                  {item.has}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="text-red-600 dark:text-red-400 font-medium">
                    Missing:
                  </span>{" "}
                  {item.missing}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The data exists. The gap is between the systems. No single platform
            sees the whole picture. An enterprise platform solves this by
            replacing everything. But there&apos;s another way: connect the dots
            between what you already have.
          </p>
        </section>

        {/* The Three Gaps framing */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground">
            Framework first, tooling second
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The{" "}
            <Link
              href="/learn"
              className="text-primary hover:underline"
            >
              Three Gaps framework
            </Link>{" "}
            explains why cost visibility breaks down — and it has nothing to do
            with which platform you use:
          </p>
          <div className="mt-6 space-y-4">
            <div className="pl-4 border-l-2 border-red-500/30">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Gap 1 — The Signal Gap:
                </strong>{" "}
                You aren&apos;t watching the right things. Enterprise platforms
                don&apos;t solve this — they just give you more dashboards. If
                you haven&apos;t defined which 12–15 economic signals matter for
                your business, more dashboards means more noise.
              </p>
            </div>
            <div className="pl-4 border-l-2 border-amber-500/30">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Gap 2 — The Latency Gap:
                </strong>{" "}
                Data arrives too late. Enterprise platforms can reduce this, but
                only if the integration is real-time. Most implementations end up
                with the same monthly batch processes — just inside a more
                expensive system.
              </p>
            </div>
            <div className="pl-4 border-l-2 border-blue-500/30">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Gap 3 — The Decision Gap:
                </strong>{" "}
                No platform makes decisions for you. Even with ServiceNow, if
                your governance process is quarterly reviews and slow escalation
                chains, you still act 4–6 weeks too late.
              </p>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The framework matters more than the platform. A firm with the right
            signals defined, weekly visibility, and structured decision
            processes — running on a PSA and some integrations — will outperform
            a firm with ServiceNow but quarterly reviews and wrong KPIs.
          </p>
        </section>

        {/* What mid-size firms should do */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground">
            What mid-size firms should do instead
          </h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-border p-5">
              <div className="text-sm font-semibold text-foreground">
                1. Define your signal landscape
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Before buying anything, map the 12–15 economic signals that
                matter for your business. Revenue signals, delivery cost
                signals, quality signals, and decision lag signals. Most firms
                monitor 4–5. The{" "}
                <Link
                  href="/tools/three-gaps-assessment"
                  className="text-primary hover:underline"
                >
                  Three Gaps Assessment
                </Link>{" "}
                helps you find out where you stand.
              </p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <div className="text-sm font-semibold text-foreground">
                2. Close the integration gap
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                You don&apos;t need to replace your systems — you need them to
                talk to each other. Connect your PSA hours to your finance cost
                rates. Attribute AI API spend to specific engagements. Link
                CRM deal values to actual delivery cost. The bridge between
                systems is where the insight lives.
              </p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <div className="text-sm font-semibold text-foreground">
                3. Move from monthly to weekly visibility
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                The{" "}
                <Link
                  href="/learn#latency-gap"
                  className="text-primary hover:underline"
                >
                  Latency Gap
                </Link>{" "}
                research shows: a problem seen in week 2 costs $4,000. The
                same problem seen in week 6 costs $12,000. Weekly margin
                reviews — even rough ones — outperform monthly precision
                reports.
              </p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <div className="text-sm font-semibold text-foreground">
                4. Build decision processes, not just dashboards
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                When an engagement drifts, what happens? If the answer is
                &ldquo;we discuss it at the next monthly review,&rdquo;
                you&apos;ve already lost 3–4 weeks of margin. Build a
                structured weekly process: threshold breach → investigation →
                decision → action. The{" "}
                <Link
                  href="/resources/playbooks/margin-recovery"
                  className="text-primary hover:underline"
                >
                  Margin Recovery Playbook
                </Link>{" "}
                shows you how.
              </p>
            </div>
          </div>
        </section>

        {/* The real cost of no visibility */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground">
            The real cost of no visibility
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Doing nothing is not free. The research is clear:
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border p-5 text-center">
              <div className="text-2xl font-bold text-foreground">22%</div>
              <p className="mt-1 text-sm text-muted-foreground">
                cumulative revenue leakage across billing failures and
                collection shortfalls
              </p>
            </div>
            <div className="rounded-lg border border-border p-5 text-center">
              <div className="text-2xl font-bold text-foreground">15%</div>
              <p className="mt-1 text-sm text-muted-foreground">
                of chargeable work is never billed in the average service firm
              </p>
            </div>
            <div className="rounded-lg border border-border p-5 text-center">
              <div className="text-2xl font-bold text-foreground">4%+</div>
              <p className="mt-1 text-sm text-muted-foreground">
                of topline revenue lost annually to slow decisions
              </p>
            </div>
            <div className="rounded-lg border border-border p-5 text-center">
              <div className="text-2xl font-bold text-foreground">$68k/mo</div>
              <p className="mt-1 text-sm text-muted-foreground">
                average missed charges from billing errors alone (MSPs)
              </p>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The question isn&apos;t whether to invest in visibility. It&apos;s
            whether you can afford not to — and whether you need a six-figure
            platform to do it.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-lg border border-border p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Find Out Where Your Firm Stands
          </h2>
          <p className="text-muted-foreground mb-6">
            The Three Gaps Assessment takes 2 minutes and shows you which gap
            is your biggest margin leak — no platform required.
          </p>
          <Link
            href="/tools/three-gaps-assessment"
            className={cn(buttonVariants())}
          >
            Take the Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Related */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Related
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/learn"
                className="text-primary hover:underline"
              >
                The Three Gaps — founding document &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/resources/playbooks/ai-cost-integration"
                className="text-primary hover:underline"
              >
                AI Cost Integration Playbook &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/frameworks/engagement-health-matrix"
                className="text-primary hover:underline"
              >
                Engagement Health Matrix &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
