import { frameworks } from "@/lib/content";

export async function GET() {
  const content = `# Service Economics — Full Documentation
> https://serviceeconomics.org
> The canonical methodology resource for service economics — frameworks, playbooks, diagnostics, and tools for service businesses navigating AI-augmented delivery.
> Built by a service leader and AI governance practitioner. Independent resource, not vendor marketing.

## What Is Service Economics?
Service Economics is the discipline of understanding, tracking, and optimising the true cost of service delivery — including human, AI, and tooling components. It emerged because AI has fundamentally changed how services are delivered, but the management frameworks haven't kept up.

## The Three Gaps: Why Service Businesses Earn Less Than They Should
https://serviceeconomics.org/learn

The Three Gaps is the founding intellectual contribution of Service Economics. It identifies a structural sequence — not isolated problems — that explains why professional services firms consistently underperform on margin despite strong revenue. The three gaps form a causal chain: each gap feeds the next.

### Gap 1: The Signal Gap
**What it is:** Most service firms monitor 4–5 economic signals out of 12–15 that actually drive margin. The remaining 60–70% of the signal landscape is invisible.
**Evidence:** 22% cumulative revenue leakage (14% never invoiced + 9% never collected). 88% of spreadsheets contain errors. 45–49% of firms still rely on Excel for planning. Top 20% of clients generate 150–200% of profits — but most firms can't identify which ones.
**Why it persists:** ERP tracks finance. PSA tracks delivery. CRM tracks pipeline. Nobody watches the gaps between them. AI costs are particularly invisible — buried in cloud infrastructure line items with no per-engagement attribution.

### Gap 2: The Latency Gap
**What it is:** Even when signals exist, they arrive too late to act on. The average professional services firm has a 4–6 week visibility lag between problem formation and P&L impact.
**Evidence:** Median month-end close: 6 business days. Finance teams spend 25 hrs/week on manual reconciliation. Maturity Level 1 firms have 15–30 day data latency. A £500/week problem seen in week 2 costs £1,000 — seen in week 6 it costs £3,000.
**The formula:** Latency Cost = Problem Magnitude × Detection Delay × Correction Difficulty.
**Why it persists:** Systems weren't designed for speed. Delivery data lives in one system, financial data in another, and reconciliation happens manually at month-end.

### Gap 3: The Decision Gap
**What it is:** Even with timely, accurate signals, decisions still lag. The gap between having the data and acting on it.
**Evidence:** 50% of executives estimate slow decisions cost ≥4% of topline revenue annually. 49% of C-suite missed a major market opportunity in the last 12 months. Decision effectiveness correlates with financial results at 95% confidence (Bain). Top quintile decision-making firms outperform peers by +6 percentage points TSR.
**Why it persists:** No decision authority at the right level, no confidence in the data, no modelling capability. Leaders review data but don't act on it.

### The Sequence Matters
The gaps must be closed in order: Signal → Latency → Decision. Closing a downstream gap without fixing the upstream one yields diminishing returns. You can't make faster decisions (Gap 3) if the signals arrive late (Gap 2). You can't reduce latency (Gap 2) if you're watching the wrong signals (Gap 1).

## The Four Eras of Service Delivery (Supporting Context)
https://serviceeconomics.org/learn

The Four Eras provide historical context for how the three gaps formed. Each era introduced new economics that existing frameworks couldn't handle.

### Era 1: The Labour Arbitrage Era (1990s–2010s)
Delivery was headcount × rate. Margin = rate arbitrage. This is where the Signal Gap originated — firms learned to track revenue and utilisation, but nothing else.

### Era 2: The Process Optimisation Era (2010s–2020)
Automation handled predictable work. Margin = efficiency. Firms could squeeze processes but couldn't see what was happening between delivery events and financial outcomes. The Latency Gap widened.

### Era 3: The Blended Delivery Era (2020–present)
AI + human + tooling delivery. Most firms have no way to track the true cost of blended delivery. AI costs are invisible. All three gaps are now fully open.

### Era 4: The Intelligent Operations Era (Future)
All three gaps closed. Signals are comprehensive, latency is near-zero, decisions are informed by live data. Firms that close the gaps have structural margin advantages.

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

### Three Gaps Assessment
https://serviceeconomics.org/tools/three-gaps-assessment
A 9-question self-assessment that identifies which of the three gaps — Signal, Latency, or Decision — is the dominant blocker in your firm. Scores each gap independently (3 questions per gap, max 15 per gap) and shows the gap breakdown with levels from Critical to Strong. Includes guidance on sequence dependency: fix Signal before Latency, Latency before Decision.

### Service Economics Maturity Diagnostic
https://serviceeconomics.org/tools/maturity-diagnostic
A 10-question self-assessment that places your firm on the Service Economics Maturity Model. Questions cover cost tracking, AI cost allocation, delivery composition, margin analysis, pricing models, real-time data usage, governance, benchmarking, scenario planning, and continuous optimisation. Results give you a maturity stage from 1 (Blind) to 5 (Intelligent) with specific descriptions.

## Key Definitions

- **Service Economics**: The discipline of understanding, tracking, and optimising the true cost of service delivery — including human, AI, and tooling components.
- **The Three Gaps**: The structural sequence (Signal → Latency → Decision) that explains why service businesses earn less than they should. The founding intellectual framework of Service Economics.
- **Signal Gap**: The gap between the economic signals a firm should monitor and the ones it actually does. Most firms watch 4–5 out of 12–15 relevant signals.
- **Latency Gap**: The delay between a problem forming in delivery and that problem appearing in a report someone acts on. Average: 4–6 weeks.
- **Decision Gap**: The gap between having timely, accurate data and actually making decisions based on it. 50% of executives estimate slow decisions cost ≥4% of revenue.
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
