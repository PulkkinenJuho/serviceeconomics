import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI Cost Integration Playbook",
  description:
    "For when your team uses AI tools but you have no idea what they're costing per client. A step-by-step process for auditing, tracking, and integrating AI costs.",
};

export default function AiCostIntegrationPlaybook() {
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
          The AI Cost Integration Playbook
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          For when your team uses AI tools but you have no idea what they&apos;re
          costing per client.
        </p>

        {/* When to Use */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            When to Use This Playbook
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="pl-4 border-l-2 border-border">
              Your team uses AI tools in delivery but costs are buried in
              &quot;software&quot; or &quot;overhead&quot;
            </li>
            <li className="pl-4 border-l-2 border-border">
              You can&apos;t answer what AI costs you per engagement
            </li>
            <li className="pl-4 border-l-2 border-border">
              AI API bills are growing and you don&apos;t know what&apos;s driving the
              growth
            </li>
            <li className="pl-4 border-l-2 border-border">
              You want to build AI costs into engagement pricing going forward
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
              A list of AI tools and subscriptions used in delivery
            </li>
            <li className="pl-4 border-l-2 border-border">
              API billing data or subscription invoices for the last 3 months
            </li>
            <li className="pl-4 border-l-2 border-border">
              Rough understanding of which delivery activities use AI
            </li>
            <li className="pl-4 border-l-2 border-border">
              2–3 hours for the full audit; ongoing tracking takes 15 minutes per
              week
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
                Step 1: Audit Current AI Tool Usage
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                List every AI tool your teams use in client delivery. Include
                both paid subscriptions (ChatGPT, Claude, Midjourney) and API
                usage (OpenAI API, Anthropic API, custom models). Don&apos;t forget
                embedded AI in existing tools — Notion AI, GitHub Copilot,
                Grammarly Business.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">
                Step 2: Map Tools to Delivery Activities
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                For each tool, identify which delivery activities it supports.
                Content drafting? Code generation? Data analysis? Quality review?
                This mapping is essential for attribution — you need to know which
                engagements benefit from which AI tools.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">
                Step 3: Choose an Allocation Model
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Three models, pick the one that fits your current data:
              </p>
              <ul className="mt-3 space-y-3 text-muted-foreground">
                <li className="pl-4 border-l-2 border-primary/40">
                  <strong>Direct Attribution:</strong> AI costs are tracked to
                  specific engagements via API keys, project tags, or usage logs.
                  Most accurate but requires tooling.
                </li>
                <li className="pl-4 border-l-2 border-primary/40">
                  <strong>Pro-Rata:</strong> Total AI cost divided across
                  engagements by revenue share, headcount, or hours. Simple but
                  imprecise.
                </li>
                <li className="pl-4 border-l-2 border-primary/40">
                  <strong>Absorption:</strong> AI costs treated as overhead and
                  factored into fully-loaded rates. Simplest but hides
                  engagement-level economics.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">
                Step 4: Implement Minimum-Viable Tracking
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Start simple. A spreadsheet that captures monthly AI costs by
                tool, mapped to engagement or engagement type via your chosen
                allocation model. Automate later; understand the numbers first.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">
                Step 5: Build Into Engagement Pricing
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Once you understand your AI cost per engagement, factor it into
                new engagement pricing. For existing engagements, use the data to
                assess whether current pricing still works — or whether you need
                the Margin Recovery Playbook.
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
              <strong>Only counting the API bill.</strong> The AI Cost Iceberg
              shows that visible API costs are a fraction of true AI delivery
              cost. Don&apos;t forget prompt engineering time, quality review, and
              rework.
            </li>
            <li className="pl-4 border-l-2 border-destructive">
              <strong>Waiting for perfect data.</strong> Rough allocation is
              infinitely better than no allocation. Start with what you have and
              refine.
            </li>
            <li className="pl-4 border-l-2 border-destructive">
              <strong>Treating AI cost as pure overhead.</strong> If AI
              contributes directly to delivery, it should be attributed to
              engagements — not hidden in a general overhead bucket.
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
                href="/frameworks/delivery-composition-triangle"
                className="text-primary hover:underline"
              >
                The Delivery Composition Triangle &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/frameworks/ai-value-governance-map"
                className="text-primary hover:underline"
              >
                The AI Value Governance Map &rarr;
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
