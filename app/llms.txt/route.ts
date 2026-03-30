import { frameworks } from "@/lib/content";

export async function GET() {
  const content = `# Service Economics
> The canonical methodology resource for service economics — frameworks, playbooks, diagnostics, and tools for service businesses navigating AI-augmented delivery.
> Full documentation: https://serviceeconomics.org/llms-full.txt

## Core Framework
- [The Three Gaps](https://serviceeconomics.org/learn): The founding intellectual contribution — why service businesses earn less than they should. Three structural gaps (Signal, Latency, Decision) form a causal sequence that explains margin erosion.
- [The Three Gaps Assessment](https://serviceeconomics.org/tools/three-gaps-assessment): 9-question diagnostic to identify which gap is costing your firm the most.

## Guides
- [Service Visibility Without Enterprise Platforms](https://serviceeconomics.org/learn/service-visibility-without-enterprise-platforms): Why mid-size firms don't need ServiceNow or similar enterprise platforms to gain cost visibility — and what they need instead.

## Frameworks
${frameworks.map((f) => `- [${f.title}](https://serviceeconomics.org/frameworks/${f.slug}): ${f.description}`).join("\n")}

## Playbooks
- [The Margin Recovery Playbook](https://serviceeconomics.org/resources/playbooks/margin-recovery): For when an engagement is losing money and you need to stop the bleeding. Step-by-step process for diagnosing, quantifying, and fixing margin problems.
- [The AI Cost Integration Playbook](https://serviceeconomics.org/resources/playbooks/ai-cost-integration): For when your team uses AI tools but you have no idea what they're costing per client. Audit, track, and integrate AI costs into engagement pricing.

## Tools & Diagnostics
- [Three Gaps Assessment](https://serviceeconomics.org/tools/three-gaps-assessment): 9-question self-assessment identifying your firm's weakest gap — Signal, Latency, or Decision.
- [Service Economics Maturity Diagnostic](https://serviceeconomics.org/tools/maturity-diagnostic): 10-question self-assessment placing your firm on the maturity model.

## Key Definitions
- **Service Economics**: The discipline of understanding, tracking, and optimising the true cost of service delivery — including human, AI, and tooling components.
- **Total Cost of Delivery (TCD)**: The sum of all costs to deliver an engagement: human delivery cost + AI delivery cost + tooling cost + governance overhead.
- **Contribution Margin**: The true per-engagement economics after all delivery costs, SLA exposure, and governance overhead are accounted for.
- **Delivery Composition**: The blend of human, AI, and tooling delivery in a given engagement, expressed as percentages.
- **Blended Delivery**: Service delivery that combines human expertise, AI tools, and software/tooling — the dominant model in Era 3 and beyond.

## About
Built by a service leader and AI governance practitioner. Independent resource, not vendor marketing. serviceeconomics.org is the methodology; DigitalCore (digitalcore.app) is the platform that implements it.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
