export interface Framework {
  slug: string;
  title: string;
  description: string;
  problem: string;
}

export const frameworks: Framework[] = [
  {
    slug: "three-gaps",
    title: "The Three Gaps",
    description:
      "Why service businesses systematically earn less than their revenue suggests — and the structural sequence that explains it.",
    problem:
      "You know you're leaving money on the table. You can't tell anyone where. The answer isn't a reporting problem — it's a signal problem, a latency problem, and a decision problem, in that order.",
  },
  {
    slug: "maturity-model",
    title: "The Service Economics Maturity Model",
    description:
      "Five stages from Blind to Intelligent — locate where your firm stands today.",
    problem:
      "You know something is wrong with how your firm manages service economics, but you can't articulate where you are or what the next step looks like.",
  },
  {
    slug: "engagement-health-matrix",
    title: "The Engagement Health Matrix",
    description:
      "A 2×2 that reveals your Stars, Busy Fools, Comfortable-but-Fragile, and Danger Zone engagements.",
    problem:
      "Some engagements feel busy and successful but are actually losing money. You need a way to see delivery health and financial health together.",
  },
  {
    slug: "utilisation-paradox-curve",
    title: "The Utilisation Paradox Curve",
    description:
      "Why pushing past 80% utilisation costs more than it earns.",
    problem:
      "Your firm treats higher utilisation as always better. Nobody has quantified the point where quality, rework, and burnout start eroding the gains.",
  },
  {
    slug: "service-economics-stack",
    title: "The Service Economics Stack",
    description:
      "From contract value to contribution margin — every cost layer named and explained.",
    problem:
      "You know what you charge and roughly what you earn, but everything between contract value and contribution margin is invisible.",
  },
  {
    slug: "margin-erosion-waterfall",
    title: "The Margin Erosion Waterfall",
    description:
      "See the story of how your margin disappears — from contract value to contribution margin.",
    problem:
      "You know your margin isn't where it should be, but you can't see which cost layers are eating into it the most.",
  },
  {
    slug: "delivery-composition-triangle",
    title: "The Delivery Composition Triangle",
    description:
      "Map where your engagements actually sit in the Human–AI–Tooling spectrum.",
    problem:
      "You think your delivery is mostly human. You haven't measured how much AI and tooling actually contribute — or what that blend costs.",
  },
  {
    slug: "ai-value-governance-map",
    title: "The AI Value Governance Map",
    description:
      "Balance AI value creation with value protection — most firms only have half the picture.",
    problem:
      "Your firm is focused on AI's productivity benefits but has no framework for governing its economic impact on service delivery.",
  },
];

export function getFramework(slug: string): Framework | undefined {
  return frameworks.find((f) => f.slug === slug);
}

export function getAllFrameworks(): Framework[] {
  return frameworks;
}
