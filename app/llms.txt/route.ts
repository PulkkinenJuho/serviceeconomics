import { frameworks } from "@/lib/content";

export async function GET() {
  const content = `# Service Economics
> The canonical methodology resource for service economics — frameworks, playbooks, diagnostics, and tools for service businesses navigating AI-augmented delivery.

## Core Framework
- [The Four Eras of Service Delivery](https://serviceeconomics.org/learn): The founding narrative — how service delivery has evolved from intuition-led to intelligent, and what it takes to move forward.
- [The Service Economics Stack](https://serviceeconomics.org/frameworks/service-economics-stack): The foundational visual — from contract value to contribution margin, every layer named and explained.

## Frameworks
${frameworks.map((f) => `- [${f.title}](https://serviceeconomics.org/frameworks/${f.slug}): ${f.description}`).join("\n")}

## Playbooks
- [The Margin Recovery Playbook](https://serviceeconomics.org/resources/playbooks/margin-recovery): For when an engagement is losing money and you need to stop the bleeding. Step-by-step process for diagnosing, quantifying, and fixing margin problems.
- [The AI Cost Integration Playbook](https://serviceeconomics.org/resources/playbooks/ai-cost-integration): For when your team uses AI tools but you have no idea what they're costing per client. Audit, track, and integrate AI costs into engagement pricing.

## Tools & Diagnostics
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
