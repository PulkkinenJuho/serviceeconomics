import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "@/lib/button-variants";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Three Gaps — Why Service Businesses Earn Less Than They Should",
  description:
    "The founding document of Service Economics. Service businesses systematically earn less than their revenue suggests — and the gap is structural, not operational. Here's the mechanism.",
};

export default function LearnPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          The Three Gaps: Why Service Businesses Earn Less Than They Should
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Most service businesses assume they have a reporting problem. They
          don&apos;t. They have a signal problem. They are accurately reporting on
          the wrong things, too slowly, with no decision mechanism attached.
        </p>

        {/* The question nobody can answer */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground">
            The question nobody can answer
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            &ldquo;I know we&apos;re leaving money on the table. I can&apos;t
            tell you where.&rdquo;
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every service business leader has said some version of this. The
            numbers confirm it. In 2024, professional services EBITDA margins
            compressed to 9.8% — the lowest in five years — while revenue growth
            slowed to 4.6%. Billable utilisation fell to 68.9%, below the 75%
            operational threshold. On-time delivery dropped to 73.4%. Only 34% of
            projects stayed on budget.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            These are not the numbers of an industry doing well. And yet most
            firms can&apos;t explain <em>where</em> the money goes. They know the
            gap exists. They can&apos;t point to it.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The standard response is &ldquo;better reporting.&rdquo; More
            dashboards, more KPIs, faster month-end close. But 70% of CFOs still
            rely on Excel for planning and forecasting. 88% of those spreadsheets
            contain errors. The reports arrive, but they arrive late, they
            measure the wrong things, and nobody has a structured process to act
            on what they find.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The problem is structural. It cannot be closed by working harder or
            hiring better people. It can only be closed by seeing it.
          </p>
        </section>

        {/* Why this isn't a reporting problem */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground">
            Why this isn&apos;t a reporting problem
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            There is a critical distinction between measuring accurately and
            measuring the right things. Most service firms have mastered the
            first and completely missed the second.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Your ERP knows <em>that</em> money was lost, but lacks the project
            context to explain <em>why</em>. Your PSA knows <em>that</em> a
            project is over budget on hours, but lacks the cost data to calculate
            the <em>financial</em> impact. Your CRM knows the pipeline, but not
            whether winning that deal will make or lose you money.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            These systems were designed for accuracy and compliance — different
            objectives from decision speed. They work. They just don&apos;t work
            <em>together</em>, and they don&apos;t work <em>fast enough</em>.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The result is a three-stage failure that we call The Three Gaps.
          </p>
        </section>

        {/* The Three Gaps Visual */}
        <section className="mt-16">
          <div className="rounded-lg border border-border bg-muted/30 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6 text-center">
              The Three Gaps — Timeline View
            </h3>
            <div className="space-y-0">
              {/* Row 1 */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground whitespace-nowrap w-40 text-right shrink-0">
                  Problem forms
                </span>
                <div className="flex-1 h-10 rounded bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <span className="text-xs font-medium text-red-600 dark:text-red-400">
                    Signal Gap
                  </span>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap w-32 shrink-0">
                  Signal visible
                </span>
              </div>
              {/* Connector */}
              <div className="flex items-center gap-3">
                <span className="w-40 shrink-0" />
                <div className="flex-1 flex justify-end pr-4">
                  <div className="w-px h-4 bg-border" />
                </div>
                <span className="w-32 shrink-0" />
              </div>
              {/* Row 2 */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground whitespace-nowrap w-40 text-right shrink-0">
                  Signal visible
                </span>
                <div className="flex-1 h-10 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                    Latency Gap
                  </span>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap w-32 shrink-0">
                  Decision-maker sees it
                </span>
              </div>
              {/* Connector */}
              <div className="flex items-center gap-3">
                <span className="w-40 shrink-0" />
                <div className="flex-1 flex justify-end pr-4">
                  <div className="w-px h-4 bg-border" />
                </div>
                <span className="w-32 shrink-0" />
              </div>
              {/* Row 3 */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground whitespace-nowrap w-40 text-right shrink-0">
                  Decision-maker sees it
                </span>
                <div className="flex-1 h-10 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    Decision Gap
                  </span>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap w-32 shrink-0">
                  Action taken
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center text-xs text-muted-foreground border-t border-border pt-4">
              <div>
                <span className="font-medium text-foreground">Most firms:</span>{" "}
                problem to action = 6–8 weeks
              </div>
              <div>
                <span className="font-medium text-foreground">
                  Well-instrumented firm:
                </span>{" "}
                problem to action = 3–5 days
              </div>
            </div>
          </div>
        </section>

        {/* Gap 1: The Signal Gap */}
        <section className="mt-20" id="signal-gap">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-sm font-medium text-red-600 dark:text-red-400 uppercase tracking-wider">
              Gap 1
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-foreground">
            The Signal Gap
          </h2>
          <p className="mt-2 text-lg text-muted-foreground italic">
            Not knowing which economic signals matter, so reporting is never
            built to surface them.
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            The Mechanism
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You cannot define signals you haven&apos;t yet learned to watch for.
            Every firm builds reporting based on past failures. The next failure
            comes through a gap the reporting wasn&apos;t designed to catch. This
            is self-perpetuating — each post-mortem closes one gap and leaves the
            next one open.
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What the Data Shows
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            A complete service economics signal landscape contains 12–15 distinct
            economic signals across four clusters: revenue signals, delivery cost
            signals, quality and risk signals, and decision lag signals. The
            average firm actively monitors 4–5. That means{" "}
            <strong>60–70% of the early warning system is dark</strong>.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The consequences are measurable. 40–42% of organisations experience
            revenue leakage. 15% of chargeable consulting work is never billed.
            MSPs leak roughly 10% of revenue to billing errors alone — about
            $68,000 per month in missed charges. Cumulative revenue leakage
            across billing failures and collection shortfalls reaches 22%. And
            58.7% of firms cite scope creep as their top project challenge,
            eroding 5–20% of engagement margin.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The root cause is the same: the signals that would have caught these
            problems early were never defined, so the reporting systems were
            never built to surface them.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Meanwhile, an entire category of cost signal has emerged that most
            firms aren&apos;t watching at all: AI delivery costs. Teams use AI
            daily but the economics are invisible — buried in &ldquo;software&rdquo;
            or &ldquo;overhead&rdquo; line items with no attribution to specific
            engagements. When firms have tried to offer &ldquo;unlimited AI&rdquo;
            to clients, the result is predictable: 1–2 power users can destroy
            unit economics, and nobody sees it coming because AI cost isn&apos;t
            defined as a signal.
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Why It Persists
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Signal definition requires prior knowledge of what can go wrong. In
            a complex service business, the failure modes are numerous and not all
            obvious. Without a complete map of the signal landscape, firms build
            partial reporting systems that give false confidence. Only 28% of
            firms allocate indirect expenses accurately. Fewer than 13% use
            activity-based costing. The rest are &ldquo;peanut-buttering&rdquo;
            costs across the portfolio — and their most profitable clients are
            subsidising their worst relationships without anyone knowing.
          </p>
        </section>

        {/* Gap 2: The Latency Gap */}
        <section className="mt-20" id="latency-gap">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-sm font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              Gap 2
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-foreground">
            The Latency Gap
          </h2>
          <p className="mt-2 text-lg text-muted-foreground italic">
            Even when watching the right signals, data arrives too slowly to act.
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            The Mechanism
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Delivery, finance, and reporting run on different organisational
            cadences owned by different functions. Nobody is accountable for the
            gap between them. The architecture was designed for accuracy and
            compliance, not decision speed — these are different objectives.
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What the Data Shows
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            The median month-end close takes 6 business days. Top performers
            close in under 3 days. Laggards take 10–14 days. Finance teams spend
            25 hours per week on manual data entry and reconciliation — time that
            adds latency, not insight.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            But month-end close is only the beginning of the lag. After the books
            close, reports must be generated, reviewed, and distributed.
            Variances must be investigated. By the time a project manager sees
            that an engagement is bleeding margin, the average visibility lag is
            4–6 weeks from when the problem actually formed.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The cost scales linearly with time. A problem leaking margin at the
            rate of a few thousand per week costs one amount when caught in week
            2 — and costs three to six times more when it surfaces in a monthly
            report at week 6. A $15 per hour drop in realised rate for a
            20-person team translates to over $100,000 lost in a single quarter.
            Revenue per consultant has already dropped to $199,000 in 2024. There
            is no margin buffer left to absorb weeks of invisible leakage.
          </p>

          <div className="mt-6 rounded-lg border border-border p-6 bg-muted/20">
            <p className="text-sm font-medium text-foreground mb-1">
              The Latency Formula
            </p>
            <p className="text-lg font-semibold text-foreground">
              Leakage Rate &times; Visibility Lag = Margin Gap
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              A $2,000/week leakage seen in week 2 costs $4,000. Seen in week 6,
              it costs $12,000. Same problem. Different cost. The only variable
              is speed.
            </p>
          </div>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Why It Persists
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Monthly reporting cadences are embedded in accounting practice,
            management convention, and organisational rhythms. Changing them
            requires changing how three separate functions operate
            simultaneously. No single person owns the lag. High-performing firms
            review project margins weekly. Average firms do it monthly. That
            difference — weekly versus monthly — is the latency gap in its
            simplest form.
          </p>
        </section>

        {/* Gap 3: The Decision Gap */}
        <section className="mt-20" id="decision-gap">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Gap 3
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-foreground">
            The Decision Gap
          </h2>
          <p className="mt-2 text-lg text-muted-foreground italic">
            Even with complete, timely signal, no structured mechanism exists to
            turn signal into governed action in the same week.
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            The Mechanism
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Service businesses have governance processes designed for planned
            decisions — quarterly reviews, annual pricing cycles — not reactive
            ones. When an engagement drifts, there is no structured process to
            act this week. Better data without a better decision process produces
            faster awareness of problems that still don&apos;t get fixed in time.
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What the Data Shows
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            50% of executives estimate that slow decisions cost their
            organisations at least 4% of topline revenue annually. 49% of
            C-suite leaders report missing a major market opportunity in the
            last 12 months due to decision latency. 56% report being beaten to
            market by competitors who decided faster.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The data quality problem compounds this. 58% of business leaders
            admit they use inaccurate data for major decisions. Over 80% rely on
            outdated information. 89% of CFOs make decisions based on
            inaccurate or incomplete data. Nearly half of all business decisions
            are made on gut feel rather than evidence.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            But decision quality has a measurable impact on financial
            performance. Research from Bain shows decision effectiveness
            correlates with financial results at a 95% confidence level. Firms
            in the top quintile for decision-making deliver 6 percentage points
            higher total shareholder return than their peers. McKinsey finds that
            fast-decision companies are twice as likely to outperform on
            profitability.
          </p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Why It Persists
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Reactive governance feels like firefighting, so most organisations
            invest only in processes for planned decisions and manage reactive
            ones through slow escalation chains. Even when a firm sees a problem
            in week 3, without a structured decision process it takes another 2–3
            weeks to convene the right people, agree on the response, and
            implement it. A 3-week latency becomes a 5–6 week effective lag.
            Real-time dashboards become 45-day dashboards in practice.
          </p>
        </section>

        {/* The Sequence */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-foreground">
            Why the order matters
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This is what makes the Three Gaps a framework rather than a list of
            problems. The gaps have a strict sequence dependency:
          </p>

          <div className="mt-6 space-y-6">
            <div className="pl-4 border-l-2 border-red-500/30">
              <p className="text-muted-foreground leading-relaxed">
                <strong>You cannot close Gap 2 without first closing Gap 1.</strong>{" "}
                Building faster reporting for the wrong signals means being wrong
                faster. Real-time dashboards of irrelevant metrics are worse than
                monthly reports of the right ones — they create action on false
                signals.
              </p>
            </div>
            <div className="pl-4 border-l-2 border-amber-500/30">
              <p className="text-muted-foreground leading-relaxed">
                <strong>You cannot close Gap 3 without first closing Gap 2.</strong>{" "}
                A fast decision process operating on monthly data still produces
                decisions 30–45 days late. Decision speed is only valuable when
                the signal it acts on is timely.
              </p>
            </div>
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            The sequence is fixed:{" "}
            <strong>Signal &rarr; Latency &rarr; Decision.</strong>
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Firms that try to fix their decision-making without fixing their
            signal definition first improve their decisions about the wrong
            things. This is the most common and most expensive mistake in service
            improvement programmes.
          </p>
        </section>

        {/* What closing all three gaps looks like */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-foreground">
            What closing all three gaps looks like
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The evidence for what&apos;s possible is already in the data. Firms
            that have implemented professional services automation with
            integrated economic visibility achieve +14% project margins, +28%
            EBITDA, and 20% less revenue leakage than their peers.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The gap between top-performing and bottom-performing firms is not
            incremental — it is an order of magnitude. Level 5 maturity firms
            outperform Level 1 firms by 739% on revenue growth, 537% on profit
            margin, and 71% on utilisation. These are not firms with better
            people or better clients. They are firms that have closed the three
            gaps: they know what to watch, they see it in time, and they have a
            process to act on it.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            In a well-instrumented firm, the journey from problem formation to
            action taken takes 3–5 days, not 6–8 weeks. That difference —
            measured across a portfolio of engagements over a fiscal year — is
            the difference between an industry-average 9.8% EBITDA and the 25%+
            EBITDA that top performers achieve.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-20 rounded-lg border border-border p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Which Gap Is Your Firm Stuck In?
          </h2>
          <p className="text-muted-foreground mb-6">
            Take the Three Gaps Self-Assessment — 10 questions to find out where
            your firm&apos;s biggest margin leak is hiding.
          </p>
          <Link
            href="/tools/three-gaps-assessment"
            className={cn(buttonVariants())}
          >
            Take the Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* The Four Eras — supporting context */}
        <section className="mt-20">
          <h2 className="text-xl font-semibold text-foreground">
            Where Most Firms Sit: The Four Eras
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The Three Gaps map cleanly onto the four eras of service delivery.
            Understanding which era your firm occupies helps locate which gap is
            your most immediate constraint.
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Era 1–2
                </span>
                <span className="text-sm font-semibold text-foreground">
                  Intuition-Led &amp; Data-Driven
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Stuck in Gap 1. Firms don&apos;t know what signals to watch.
                Decisions are made on relationships and gut feel. Dashboards
                exist but measure the wrong things.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Era 3
                </span>
                <span className="text-sm font-semibold text-foreground">
                  AI-Augmented
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Stuck in Gap 2. Some signals are tracked but data arrives too
                late. AI costs are invisible. Teams use AI daily but nobody knows
                what it costs per engagement.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Era 4
                </span>
                <span className="text-sm font-semibold text-foreground">
                  Intelligent Services
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                All three gaps closed. The right signals are monitored, data
                arrives in days not weeks, and structured governance turns signal
                into action within the same week.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Related
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/frameworks/three-gaps"
                className="text-primary hover:underline"
              >
                The Three Gaps Framework &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/frameworks/maturity-model"
                className="text-primary hover:underline"
              >
                The Service Economics Maturity Model &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/tools/three-gaps-assessment"
                className="text-primary hover:underline"
              >
                Three Gaps Self-Assessment &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/resources/playbooks/margin-recovery"
                className="text-primary hover:underline"
              >
                The Margin Recovery Playbook &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
