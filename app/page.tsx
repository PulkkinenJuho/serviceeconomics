import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";
import { ArrowRight, BookOpen, BarChart3, ClipboardList, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Service Economics — Know what your services actually cost",
  description:
    "Free frameworks, playbooks, diagnostics, and tools for service businesses navigating AI-augmented delivery. The discipline of knowing what your services actually cost — and what to do about it.",
};

const cards = [
  {
    title: "Frameworks",
    description:
      "Named visual models for the core concepts of service economics.",
    href: "/frameworks",
    icon: BookOpen,
  },
  {
    title: "Diagnostics",
    description:
      "Self-assessments to find out where your firm has gaps.",
    href: "/tools/maturity-diagnostic",
    icon: BarChart3,
  },
  {
    title: "Playbooks",
    description:
      "Step-by-step responses to specific service economics problems.",
    href: "/resources",
    icon: ClipboardList,
  },
  {
    title: "Tools & Templates",
    description:
      "Free downloads you can use today without buying anything.",
    href: "/tools",
    icon: Wrench,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Service Economics is the discipline of knowing what your services
            actually cost — and what to do about it.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            AI has changed how services are delivered. The frameworks for running
            them haven&apos;t kept up. This site is the fix.
          </p>
          <div className="mt-8">
            <Link href="/learn" className={cn(buttonVariants({ size: "lg" }))}>
              Start with the Framework
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Four Eras — visual */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            {[
              {
                era: "Era 1",
                title: "Intuition-Led",
                quote: '"We know our clients"',
              },
              {
                era: "Era 2",
                title: "Data-Driven",
                quote: '"We track metrics"',
              },
              {
                era: "Era 3",
                title: "AI-Augmented",
                quote: '"We use AI but don\'t know what it costs"',
              },
              {
                era: "Era 4",
                title: "Intelligent Services",
                quote: '"Our services self-diagnose and adapt"',
              },
            ].map((item, i) => (
              <div
                key={item.era}
                className="relative rounded-lg border border-border bg-background p-6"
              >
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {item.era}
                </div>
                <div className="mt-2 text-lg font-semibold text-foreground">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground italic">
                  {item.quote}
                </p>
                {i < 3 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Most service firms are somewhere in Era 2 or 3. The discipline exists
            to move them forward.
          </p>
          <div className="mt-4 text-center">
            <Link
              href="/tools/maturity-diagnostic"
              className="text-sm font-medium text-primary hover:underline"
            >
              Find out where you are &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem — Three Lines */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-2xl space-y-6">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            You know your revenue. You don&apos;t know your margin per engagement.
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            You use AI every day. You don&apos;t know what it&apos;s costing you per
            client.
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            You find out what went wrong about 45 days after you could have done
            something about it.
          </p>
        </div>
      </section>

      {/* What You'll Find Here — Four Cards */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            What You&apos;ll Find Here
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <Link key={card.href} href={card.href}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <card.icon className="h-6 w-6 text-primary mb-2" />
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Service Economics Stack */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            The Service Economics Stack
          </h2>
          <div className="rounded-lg border border-border overflow-hidden text-sm">
            {[
              { label: "Contract Value", desc: "What you charge" },
              {
                label: "Human Delivery Cost",
                desc: "Hours × fully-loaded rate",
              },
              {
                label: "AI Delivery Cost",
                desc: "Tokens, API calls, model usage",
              },
              { label: "Tooling Cost", desc: "SaaS, platforms, per-seat" },
              { label: "Gross Margin", desc: "What's left after delivery" },
              {
                label: "SLA / Penalty Exposure",
                desc: "Financial risk from performance",
              },
              {
                label: "Governance Overhead",
                desc: "Decision, oversight, compliance cost",
              },
              {
                label: "Contribution Margin",
                desc: "True per-engagement economics",
              },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-6 py-3 ${
                  i % 2 === 0 ? "bg-muted/40" : "bg-background"
                }`}
              >
                <span className="font-medium text-foreground">{row.label}</span>
                <span className="text-muted-foreground text-right">
                  {row.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-muted-foreground text-sm">
            Most firms only know the top and bottom. Everything in between is
            invisible. That invisibility is where value leaks.
          </p>
          <div className="mt-4 text-center">
            <Link
              href="/frameworks/service-economics-stack"
              className="text-sm font-medium text-primary hover:underline"
            >
              Explore the full framework &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to understand your service economics?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with the foundational narrative — the Four Eras of Service
            Delivery — and discover where your firm stands today.
          </p>
          <Link href="/learn" className={cn(buttonVariants({ size: "lg" }))}>
            Read the Four Eras
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
