import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "@/lib/button-variants";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Four Eras of Service Delivery",
  description:
    "The founding narrative of Service Economics — how service delivery evolved from intuition-led to intelligent, and why Era 3 is the most dangerous.",
};

const eras = [
  {
    number: 1,
    name: "Intuition-Led Services",
    defining:
      "Decisions made on relationships, experience, and gut feel. No systematic tracking.",
    dayToDay:
      "Partners price based on what feels right. Margins are discovered after invoicing — or when a client complains. Knowledge lives entirely in people's heads. New hires take months to become productive because nothing is documented.",
    breaks: [
      "Margin surprises on projects that looked profitable",
      "No ability to scale without adding expensive senior hires",
      "Key person dependency — one departure can destabilize client relationships",
    ],
    signal:
      'The moment you realize a project that "felt fine" actually lost money — and you only found out 60 days later.',
    transition:
      "The first systematic tracking. Usually triggered by a margin surprise painful enough to force change. Someone builds a spreadsheet. Then another. Then a dashboard.",
  },
  {
    number: 2,
    name: "Data-Driven Services",
    defining:
      "Metrics, dashboards, KPIs. Firms track utilisation, revenue per head, project status.",
    dayToDay:
      "Tools like Harvest, Teamwork, or Kantata enter the picture. Weekly status reports exist. Monthly finance reviews happen. There are dashboards — perhaps too many. But the data lives in silos. Finance doesn't talk to delivery. Utilisation numbers don't connect to margin.",
    breaks: [
      "Data exists but isn't connected — you have numbers without insight",
      "Finance reports arrive 30–45 days after the period they describe",
      "Dashboards become a reporting obligation rather than a decision tool",
    ],
    signal:
      "The meeting where three dashboards show different numbers for the same engagement, and nobody knows which is right.",
    transition:
      "AI tools arrive. Someone starts using GPT for drafts. Claude for analysis. A developer integrates an API. Nobody tracks what it costs.",
  },
  {
    number: 3,
    name: "AI-Augmented Services",
    defining:
      "Teams use AI tools daily. Delivery is faster. But the economics are invisible.",
    dayToDay:
      "Everyone has AI subscriptions. Clients benefit from faster turnaround. But nobody knows what AI actually costs per engagement. Pricing still assumes human-only delivery. AI costs are buried in 'software' or 'overhead.' Governance is absent where it's needed most.",
    breaks: [
      "New cost structures with no tracking mechanism",
      "Margin erosion from unattributed AI costs across engagements",
      "Client transparency gaps — can you answer 'how much of this was AI?'",
      "Governance absent where it's needed most",
    ],
    signal:
      "The client who asks 'how much of this was done by AI?' — and you don't have an answer.",
    transition:
      "A governance failure or margin crisis forces a rethink. The firm realizes it needs to treat AI as a tracked, attributed delivery input — not just a productivity hack.",
  },
  {
    number: 4,
    name: "Intelligent Services",
    defining:
      "Proactive intelligence. The operation surfaces problems before they become crises.",
    dayToDay:
      "Delivery composition is understood and priced correctly. Governance is automatic. AI is a tracked, attributed input. Engagement health is monitored in real time. Problems surface as signals, not as surprises. Pricing reflects the true cost of blended delivery.",
    breaks: [],
    signal:
      "The team gets an alert that an engagement's margin is trending 8 points below target — three weeks before the monthly review would have caught it.",
    transition: null,
  },
];

export default function LearnPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          The Four Eras of Service Delivery — and Why Era 3 Is the Most
          Dangerous
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Service economics frameworks were built for a world where delivery was
          100% human. That world no longer exists. Work is now delivered through a
          blend of human expertise, AI tools, and software — and almost nobody is
          tracking the economics of that blend. This is the founding narrative of
          Service Economics: four eras, each with its own economics, and each
          with its own failure modes.
        </p>

        {/* Eras */}
        <div className="mt-16 space-y-20">
          {eras.map((era) => (
            <section key={era.number} id={`era-${era.number}`}>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Era {era.number}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                {era.name}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {era.defining}
              </p>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Day-to-Day
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {era.dayToDay}
              </p>

              {era.breaks.length > 0 && (
                <>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    What Breaks
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {era.breaks.map((b) => (
                      <li
                        key={b}
                        className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                The Signal You Recognise
              </h3>
              <p className="mt-2 text-muted-foreground italic leading-relaxed">
                {era.signal}
              </p>

              {era.transition && (
                <>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    The Transition
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {era.transition}
                  </p>
                </>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-lg border border-border p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Which Era Are You In?
          </h2>
          <p className="text-muted-foreground mb-6">
            Take the 10-question Maturity Diagnostic to find out where your firm
            stands — and what it takes to move forward.
          </p>
          <Link href="/tools/maturity-diagnostic" className={cn(buttonVariants())}>
            Take the Diagnostic
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
                href="/frameworks/maturity-model"
                className="text-primary hover:underline"
              >
                The Service Economics Maturity Model &rarr;
              </Link>
            </li>
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
