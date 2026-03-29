import { frameworks } from "@/lib/content";

export async function GET() {
  const content = `# Service Economics — Full Documentation
> https://serviceeconomics.org
> The canonical methodology resource for service economics — frameworks, playbooks, diagnostics, and tools for service businesses navigating AI-augmented delivery.
> Built by a service leader and AI governance practitioner. Independent resource, not vendor marketing.

## What Is Service Economics?
Service Economics is the discipline of understanding, tracking, and optimising the true cost of service delivery — including human, AI, and tooling components. It emerged because AI has fundamentally changed how services are delivered, but the management frameworks haven't kept up.

## The Four Eras of Service Delivery
https://serviceeconomics.org/learn

### Era 1: The Labour Arbitrage Era (1990s–2010s)
- Day to day: Delivery was simple — hire people in a lower-cost location, bill them out at higher-cost rates. Engagement management was headcount tracking and timesheet reconciliation.
- What broke it: Offshoring matured and the cost advantage narrowed. Clients became savvier and started pushing back on rates. People management at scale introduced quality control problems nobody budgeted for.
- Signal it was ending: When the difference between your cheapest delivery location and the next competitor's approached zero.
- Transition: The smart firms didn't wait for arbitrage to dry up — they started looking at what else could be optimised.

### Era 2: The Process Optimisation Era (2010s–2020)
- Day to day: Delivery leaders focused on workflows, automation of repetitive tasks, and SLA management. Tools like ServiceNow and Jira became central to operations.
- What broke it: Processes could only be squeezed so far. Automation handled the predictable work, but the unpredictable work — which is most of service delivery — stayed expensive and manual.
- Signal it was ending: When you had automated everything worth automating and your margins still weren't where they needed to be.
- Transition: AI entered the picture not as a tool swap but as a fundamentally different delivery input.

### Era 3: The Blended Delivery Era (2020–present)
- Day to day: AI tools are embedded in delivery alongside humans and traditional software. The question shifts from "Is it automated?" to "What's the right blend?" Every engagement now has a delivery composition — some mix of human, AI, and tooling.
- What's breaking now: Most firms have no way to track the real cost of this blended delivery. AI costs are buried in SaaS subscriptions or treated as free. Nobody knows what an engagement actually costs to deliver.
- Signal it's happening: When you can't answer "What percentage of this engagement's delivery is human vs. AI vs. tooling?" or "What's our true all-in cost per engagement including AI?"
- Where it's heading: Firms that figure out the economics of blended delivery will have a structural advantage. Those that don't will be managing a delivery model they don't understand.

### Era 4: The Intelligent Operations Era (Future)
- What it looks like: The economics engine runs continuously, not quarterly. AI doesn't just deliver services — it analyses and optimises the economics of that delivery in real time.
- What changes: Pricing, staffing, and delivery composition decisions are informed by live economic data, not gut feel or last quarter's spreadsheet.
- What's required: You can't get here from Era 1 or Era 2 infrastructure. The maturity model explains why.

## Frameworks

${frameworks.map((f) => `### ${f.title}
https://serviceeconomics.org/frameworks/${f.slug}
**Problem it solves:** ${f.problem}
**Description:** ${f.description}
`).join("\n")}

## Playbooks

### The Margin Recovery Playbook
https://serviceeconomics.org/resources/playbooks/margin-recovery
For when an engagement is losing money and you need to stop the bleeding. A step-by-step process for diagnosing, quantifying, and fixing margin problems in live engagements.
**Steps:**
1. Calculate the real delivery cost (not the budgeted one)
2. Map the cost to the Margin Erosion Waterfall
3. Identify the top 2-3 cost drivers
4. Design targeted interventions for each driver
5. Implement, measure for 30 days, adjust

### The AI Cost Integration Playbook
https://serviceeconomics.org/resources/playbooks/ai-cost-integration
For when your team uses AI tools but you have no idea what they're costing per client. Audit, track, and integrate AI costs into engagement pricing.
**Steps:**
1. Audit current AI tool usage across all engagements
2. Calculate per-engagement AI costs (direct + allocated)
3. Map costs to the Service Economics Stack
4. Integrate AI costs into engagement pricing models
5. Establish ongoing tracking and review cadence

## Tools & Diagnostics

### Service Economics Maturity Diagnostic
https://serviceeconomics.org/tools/maturity-diagnostic
A 10-question self-assessment that places your firm on the Service Economics Maturity Model. Questions cover cost tracking, AI cost allocation, delivery composition, margin analysis, pricing models, real-time data usage, governance, benchmarking, scenario planning, and continuous optimisation. Results give you a maturity stage from 1 (Blind) to 5 (Intelligent) with specific descriptions.

## Key Definitions

- **Service Economics**: The discipline of understanding, tracking, and optimising the true cost of service delivery — including human, AI, and tooling components.
- **Total Cost of Delivery (TCD)**: The sum of all costs to deliver an engagement: human delivery cost + AI delivery cost + tooling cost + governance overhead.
- **Contribution Margin**: The true per-engagement economics after all delivery costs, SLA exposure, and governance overhead are accounted for.
- **Delivery Composition**: The blend of human, AI, and tooling delivery in a given engagement, expressed as percentages.
- **Blended Delivery**: Service delivery that combines human expertise, AI tools, and software/tooling — the dominant model in Era 3 and beyond.
- **Margin Erosion**: The progressive loss of margin through cost layers between contract value and contribution margin — often invisible without the right framework.
- **Governance Overhead**: The cost of managing, auditing, and ensuring quality of AI-augmented delivery — a real cost that most firms don't track.
- **Utilisation Paradox**: The phenomenon where pushing utilisation past ~80% actually decreases net margin due to quality drops, rework, and burnout.
- **AI Value Governance**: The discipline of balancing AI's value creation (productivity, speed) with value protection (quality, compliance, cost containment).

## About
Service Economics was built by a service leader and AI governance practitioner who got tired of seeing firms fly blind on their service delivery economics. This is an independent resource — not vendor marketing, not gated behind a paywall.

The methodology on this site is independent. DigitalCore (https://digitalcore.app) is the platform that implements it — but the frameworks, playbooks, and tools here are free to use whether you use DigitalCore or not.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
