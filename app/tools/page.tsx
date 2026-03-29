import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowRight, FileText, Activity, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Free tools, templates, diagnostics, and calculators for service economics. No email required for most tools.",
};

const diagnostics = [
  {
    title: "Service Economics Maturity Diagnostic",
    description:
      "10 questions. Scored result. Places you on the Maturity Model.",
    href: "/tools/maturity-diagnostic",
    icon: Activity,
  },
];

const templates = [
  {
    title: "Service Economics Business Case Template",
    description:
      "Build the financial case for a service initiative with a structured template.",
    href: "#",
    icon: FileText,
    comingSoon: false,
  },
  {
    title: "Engagement Health Scorecard",
    description:
      "Score any engagement across delivery health and financial health dimensions.",
    href: "#",
    icon: FileText,
    comingSoon: true,
  },
  {
    title: "AI Cost Allocation Worksheet",
    description:
      "Three allocation models with worked examples: direct attribution, pro-rata, absorption.",
    href: "#",
    icon: FileText,
    comingSoon: true,
  },
];

const calculators = [
  {
    title: "True Cost of Delivery Calculator",
    description:
      "Input hours, rates, AI spend, and tool costs. Get your TCD and implied margin.",
    href: "/tools/tcd-calculator",
    icon: Calculator,
    comingSoon: true,
  },
];

export default function ToolsPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Tools
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Free, immediately usable assets. The best tools require no email. Use
          them today without buying anything.
        </p>

        {/* Diagnostics */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Diagnostics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diagnostics.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <tool.icon className="h-6 w-6 text-primary mb-2" />
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                    <div className="flex items-center text-sm text-primary mt-2">
                      Take it now <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((tool) => (
              <Card
                key={tool.title}
                className={`h-full ${tool.comingSoon ? "opacity-60" : "hover:shadow-md transition-shadow"}`}
              >
                <CardHeader>
                  <tool.icon className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                  {tool.comingSoon && (
                    <span className="text-xs text-muted-foreground mt-2 inline-block">
                      Coming soon
                    </span>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Calculators */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {calculators.map((tool) => (
              <Card
                key={tool.title}
                className={`h-full ${tool.comingSoon ? "opacity-60" : "hover:shadow-md transition-shadow"}`}
              >
                <CardHeader>
                  <tool.icon className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                  {tool.comingSoon && (
                    <span className="text-xs text-muted-foreground mt-2 inline-block">
                      Coming soon
                    </span>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
