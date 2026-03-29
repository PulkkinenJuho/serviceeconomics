import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Margin Recovery Playbook",
  description:
    "For when an engagement is losing money and you need to stop the bleeding. A step-by-step process for diagnosing, quantifying, and fixing margin problems.",
};

export default function MarginRecoveryPlaybook() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/resources"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; All Resources
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          The Margin Recovery Playbook
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          For when an engagement is losing money and you need to stop the
          bleeding.
        </p>

        {/* When to Use */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            When to Use This Playbook
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="pl-4 border-l-2 border-border">
              An engagement&apos;s actual margin is more than 10 points below target
            </li>
            <li className="pl-4 border-l-2 border-border">
              You&apos;ve discovered post-facto that a &quot;profitable&quot; engagement has been
              losing money
            </li>
            <li className="pl-4 border-l-2 border-border">
              A key client relationship is at risk because of delivery cost
              overruns
            </li>
            <li className="pl-4 border-l-2 border-border">
              The Engagement Health Matrix placed this in &quot;Busy Fool&quot; or &quot;Danger
              Zone&quot;
            </li>
          </ul>
        </section>

        {/* What You'll Need */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            What You&apos;ll Need
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="pl-4 border-l-2 border-border">
              Contract value and current billing data
            </li>
            <li className="pl-4 border-l-2 border-border">
              Time/effort records by role for the engagement
            </li>
            <li className="pl-4 border-l-2 border-border">
              AI tool usage data (if available — rough estimates work)
            </li>
            <li className="pl-4 border-l-2 border-border">
              SLA/penalty exposure details from the contract
            </li>
            <li className="pl-4 border-l-2 border-border">
              30 minutes for initial diagnosis, 1–2 hours for full process
            </li>
          </ul>
        </section>

        {/* The Process */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            The Process
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                Step 1: Diagnose the Root Cause Layer
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Use the Service Economics Stack to identify which cost layer is
                driving the margin gap. Is it human delivery cost (scope creep,
                overtime, wrong seniority mix)? AI delivery cost (unattributed
                model usage)? SLA exposure? Governance overhead? Name the layer
                before you try to fix anything.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">
                Step 2: Quantify the Gap
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Calculate the exact delta between target margin and actual
                margin. Break it down by the cost layer you identified. You need
                a number, not a feeling. If margin should be 40% and it&apos;s 22%,
                that&apos;s 18 points — and you need to know where those 18 points
                went.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">
                Step 3: Identify the Fastest Lever
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Not every lever is equally fast or equally effective. Scope
                reduction is the fastest lever but requires a client conversation.
                Seniority rebalancing changes the cost profile without changing
                scope. AI cost attribution often reveals that costs assumed to be
                &quot;overhead&quot; are actually engagement-specific.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">
                Step 4: Have the Right Conversation
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                If the lever is internal (seniority mix, processes, AI usage),
                act directly. If the lever requires client involvement (scope
                change, repricing), prepare the data first. Lead with the impact
                on quality and outcomes, not just cost.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">
                Step 5: Implement and Track
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Set a 2-week checkpoint. Measure the margin impact of the change
                you made. If the gap hasn&apos;t closed, return to Step 1 — the root
                cause may be in a different layer than you initially identified.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Common Mistakes
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="pl-4 border-l-2 border-destructive">
              <strong>Fixing the symptom, not the cause.</strong> Cutting hours
              without understanding why hours grew just creates a different
              problem (quality drops, team burns out).
            </li>
            <li className="pl-4 border-l-2 border-destructive">
              <strong>Treating all margin gaps the same.</strong> A margin gap
              from scope creep needs a completely different response than one from
              AI cost overruns.
            </li>
            <li className="pl-4 border-l-2 border-destructive">
              <strong>Waiting for the monthly review.</strong> If you&apos;ve
              identified a margin problem, two more weeks of data won&apos;t make the
              picture clearer. Act now, refine later.
            </li>
          </ul>
        </section>

        {/* Related */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Related Frameworks
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/frameworks/service-economics-stack"
                className="text-primary hover:underline"
              >
                The Service Economics Stack &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/frameworks/engagement-health-matrix"
                className="text-primary hover:underline"
              >
                The Engagement Health Matrix &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/frameworks/margin-erosion-waterfall"
                className="text-primary hover:underline"
              >
                The Margin Erosion Waterfall &rarr;
              </Link>
            </li>
          </ul>
        </section>

        {/* DigitalCore reference */}
        <section className="mt-10 rounded-lg border border-border p-6 bg-muted/30">
          <p className="text-sm text-muted-foreground">
            DigitalCore automates this playbook —{" "}
            <a
              href="https://digitalcore.app"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              see how it works &rarr;
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
