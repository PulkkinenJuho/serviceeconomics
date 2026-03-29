"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/lib/button-variants";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const questions = [
  {
    text: "How does your firm currently track the profitability of individual engagements?",
    options: [
      { label: "We don't — we look at total revenue and hope", score: 1 },
      { label: "Spreadsheets after the engagement ends", score: 2 },
      { label: "Monthly reports from our PSA or finance team", score: 3 },
      { label: "Real-time dashboards connected to delivery data", score: 4 },
      { label: "Automated signals that flag margin issues proactively", score: 5 },
    ],
  },
  {
    text: "When you discover a margin problem on an engagement, how old is the data?",
    options: [
      { label: "We usually find out when the invoice doesn't add up", score: 1 },
      { label: "60+ days old", score: 2 },
      { label: "30–45 days old", score: 3 },
      { label: "Within 1–2 weeks", score: 4 },
      { label: "We catch it before it becomes a problem", score: 5 },
    ],
  },
  {
    text: "How well do you understand the cost of AI usage in your service delivery?",
    options: [
      { label: "We don't track it at all", score: 1 },
      { label: "We know the total subscription/API bill", score: 2 },
      { label: "We can roughly estimate AI cost per engagement type", score: 3 },
      { label: "We attribute AI costs to specific engagements", score: 4 },
      { label: "AI costs are fully integrated into our pricing and margin tracking", score: 5 },
    ],
  },
  {
    text: "If a client asked 'how much of this engagement was delivered by AI?', could you answer?",
    options: [
      { label: "No — we have no visibility", score: 1 },
      { label: "We could give a rough guess", score: 2 },
      { label: "We could estimate within a reasonable range", score: 3 },
      { label: "We track delivery composition systematically", score: 4 },
      { label: "Yes — we have full delivery attribution by component", score: 5 },
    ],
  },
  {
    text: "How do you price engagements that involve significant AI delivery?",
    options: [
      { label: "Same as we've always priced — hourly or fixed", score: 1 },
      { label: "We adjust intuitively but without a model", score: 2 },
      { label: "We have guidelines but they're not consistently applied", score: 3 },
      { label: "We have a pricing model that accounts for blended delivery", score: 4 },
      { label: "Pricing dynamically reflects the delivery composition", score: 5 },
    ],
  },
  {
    text: "How does your firm handle governance of AI usage in client delivery?",
    options: [
      { label: "No governance — teams use whatever tools they want", score: 1 },
      { label: "Informal guidelines that aren't enforced", score: 2 },
      { label: "Written policy, but compliance is manual", score: 3 },
      { label: "Systematic governance with regular reviews", score: 4 },
      { label: "Automated governance integrated into delivery workflows", score: 5 },
    ],
  },
  {
    text: "How connected are your delivery, finance, and sales data?",
    options: [
      { label: "Completely siloed — different tools, different people", score: 1 },
      { label: "Manually combined in spreadsheets for monthly reviews", score: 2 },
      { label: "Some integration, but gaps between systems", score: 3 },
      { label: "Well-integrated with a single source of truth", score: 4 },
      { label: "Fully connected with real-time cross-functional visibility", score: 5 },
    ],
  },
  {
    text: "How do you currently manage utilisation and capacity?",
    options: [
      { label: "Gut feel and reactive hiring", score: 1 },
      { label: "Basic utilisation tracking after the fact", score: 2 },
      { label: "Weekly utilisation reports with some forward planning", score: 3 },
      { label: "Capacity model that connects utilisation to demand and quality metrics", score: 4 },
      { label: "Predictive capacity management with quality-adjusted thresholds", score: 5 },
    ],
  },
  {
    text: "How often do you review service economics metrics as a leadership team?",
    options: [
      { label: "Never — or only when something goes wrong", score: 1 },
      { label: "Quarterly at best", score: 2 },
      { label: "Monthly with a standard agenda", score: 3 },
      { label: "Fortnightly with data-driven discussion and action tracking", score: 4 },
      { label: "Continuously — metrics are embedded in daily operations", score: 5 },
    ],
  },
  {
    text: "Where would you place your firm's overall service economics maturity?",
    options: [
      { label: "Blind — running on gut and invoice", score: 1 },
      { label: "Reactive — discover problems after the fact", score: 2 },
      { label: "Aware — tracking key metrics but not consistently", score: 3 },
      { label: "Managed — systematic tracking with regular review cadence", score: 4 },
      { label: "Intelligent — proactive signals and AI-assisted diagnosis", score: 5 },
    ],
  },
];

const stages = [
  {
    name: "Blind",
    range: "10–18",
    description:
      "Your firm has little to no visibility into service economics. Decisions are based on gut feel and problems surface as surprises. The first step is to establish basic tracking.",
  },
  {
    name: "Reactive",
    range: "19–26",
    description:
      "You have some data, but it arrives too late to act on. Monthly spreadsheet archaeology is the norm. Focus on connecting delivery data to financial outcomes in near-real-time.",
  },
  {
    name: "Aware",
    range: "27–34",
    description:
      "Key metrics exist but aren't consistently tracked or connected. You know there are problems but can't always pinpoint them. Build the connective tissue between data sources.",
  },
  {
    name: "Managed",
    range: "35–42",
    description:
      "Systematic tracking with a regular review cadence. Data-driven decisions are the norm. The next step is to build proactive signals and automate governance.",
  },
  {
    name: "Intelligent",
    range: "43–50",
    description:
      "Proactive intelligence. Problems surface as signals before they become crises. Delivery composition is understood, priced, and governed. You're operating at the frontier.",
  },
];

function getStage(score: number) {
  if (score <= 18) return stages[0];
  if (score <= 26) return stages[1];
  if (score <= 34) return stages[2];
  if (score <= 42) return stages[3];
  return stages[4];
}

export default function MaturityDiagnosticPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const allAnswered = Object.keys(answers).length === questions.length;
  const stage = getStage(totalScore);

  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/tools"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; All Tools
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Service Economics Maturity Diagnostic
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          10 questions. Takes about 3 minutes. Find out where your firm stands on
          the Service Economics Maturity Model — and what it takes to move
          forward.
        </p>

        {!showResult ? (
          <div className="mt-12 space-y-10">
            {questions.map((q, qi) => (
              <div key={qi}>
                <p className="font-medium text-foreground mb-4">
                  {qi + 1}. {q.text}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt) => (
                    <button
                      key={opt.score}
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, [qi]: opt.score }))
                      }
                      className={`w-full text-left rounded-lg border p-3 text-sm transition-colors ${
                        answers[qi] === opt.score
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Button
                size="lg"
                disabled={!allAnswered}
                onClick={() => setShowResult(true)}
              >
                See My Result
              </Button>
              {!allAnswered && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Answer all 10 questions to see your result.
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-12">
            <Card>
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-1">
                  Your Score: {totalScore} / 50
                </div>
                <CardTitle className="text-2xl">
                  Stage: {stage.name}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {stage.description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Maturity bar */}
            <div className="mt-8">
              <div className="flex gap-1">
                {stages.map((s, i) => (
                  <div
                    key={s.name}
                    className={`flex-1 h-3 rounded-sm ${
                      s.name === stage.name
                        ? "bg-primary"
                        : i < stages.indexOf(stage)
                          ? "bg-primary/40"
                          : "bg-muted"
                    }`}
                    title={s.name}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                {stages.map((s) => (
                  <span key={s.name}>{s.name}</span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button onClick={() => { setAnswers({}); setShowResult(false); }} variant="outline">
                Retake Diagnostic
              </Button>
              <Link href="/frameworks/maturity-model" className={cn(buttonVariants())}>
                Explore the Maturity Model
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
