"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/lib/button-variants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Gap = "signal" | "latency" | "decision";

interface Question {
  text: string;
  gap: Gap;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  // --- Signal Gap (3 questions) ---
  {
    text: "How many of the economic signals in your service delivery do you actively monitor?",
    gap: "signal",
    options: [
      { label: "We track revenue and utilisation — that's about it", score: 1 },
      { label: "We watch 4–5 metrics when someone asks", score: 2 },
      { label: "We have dashboards covering most financial KPIs", score: 3 },
      {
        label:
          "We monitor delivery, finance, and client health signals in one place",
        score: 4,
      },
      {
        label:
          "We have automated alerts across 12+ signals including AI cost attribution",
        score: 5,
      },
    ],
  },
  {
    text: "When a client engagement starts losing margin, how do you find out?",
    gap: "signal",
    options: [
      {
        label: "We don't — we discover it when the invoice looks wrong",
        score: 1,
      },
      { label: "Someone mentions it in a review meeting", score: 2 },
      { label: "Monthly financial reports flag it after close", score: 3 },
      {
        label: "Weekly delivery data highlights the trend early",
        score: 4,
      },
      {
        label: "An automated signal catches it within days of the shift",
        score: 5,
      },
    ],
  },
  {
    text: "Can you identify your most and least profitable clients right now?",
    gap: "signal",
    options: [
      { label: "No — we don't have client-level profitability data", score: 1 },
      { label: "We could guess based on revenue size", score: 2 },
      {
        label: "We run the analysis quarterly but it takes manual effort",
        score: 3,
      },
      {
        label:
          "We have a current view that includes direct costs per client",
        score: 4,
      },
      {
        label:
          "Yes — fully loaded profitability including indirect allocation, updated continuously",
        score: 5,
      },
    ],
  },
  // --- Latency Gap (3 questions) ---
  {
    text: "When a margin problem forms, how long until it appears in a report someone acts on?",
    gap: "latency",
    options: [
      { label: "60+ days — often after the engagement is over", score: 1 },
      { label: "30–45 days — at month-end close", score: 2 },
      { label: "2–3 weeks — via fortnightly reporting", score: 3 },
      { label: "Within a week — near-real-time dashboards", score: 4 },
      { label: "Same day — problems surface as live signals", score: 5 },
    ],
  },
  {
    text: "How long does your monthly financial close take?",
    gap: "latency",
    options: [
      { label: "10+ working days — and it's still full of adjustments", score: 1 },
      { label: "6–10 days with significant manual reconciliation", score: 2 },
      { label: "4–6 days with some automation", score: 3 },
      { label: "2–3 days with connected systems", score: 4 },
      { label: "Continuous close — financials are always current", score: 5 },
    ],
  },
  {
    text: "How connected are your delivery systems (PSA, timesheets) to your financial reporting?",
    gap: "latency",
    options: [
      {
        label: "Completely separate — finance re-enters data from spreadsheets",
        score: 1,
      },
      { label: "Manual export/import with lag and errors", score: 2 },
      { label: "Partial integration — some data flows, some doesn't", score: 3 },
      {
        label: "Well-integrated with automated data pipelines",
        score: 4,
      },
      {
        label: "Single source of truth — delivery actions update financials in real time",
        score: 5,
      },
    ],
  },
  // --- Decision Gap (3 questions) ---
  {
    text: "When leadership reviews service performance, how confident are they in the data?",
    gap: "decision",
    options: [
      { label: "Not confident — most decisions are gut feel", score: 1 },
      { label: "Low confidence — the data is usually stale or incomplete", score: 2 },
      { label: "Moderate — we trust the trends but not the specifics", score: 3 },
      {
        label: "High confidence — data is timely and cross-validated",
        score: 4,
      },
      {
        label: "Very high — we have decision-grade intelligence with scenario modelling",
        score: 5,
      },
    ],
  },
  {
    text: "In the last 12 months, have you missed a commercial opportunity because the data arrived too late?",
    gap: "decision",
    options: [
      { label: "Almost certainly — but we wouldn't even know which ones", score: 1 },
      { label: "Yes — at least one major one we can point to", score: 2 },
      { label: "Probably — we've suspected it but can't prove it", score: 3 },
      { label: "Unlikely — our data is fast enough to catch most windows", score: 4 },
      { label: "No — we act on signals before competitive windows close", score: 5 },
    ],
  },
  {
    text: "How quickly can your firm reprice or restructure an engagement in response to changing economics?",
    gap: "decision",
    options: [
      { label: "We don't — pricing is set at the start and rarely revisited", score: 1 },
      { label: "Months — it requires executive approval and new proposals", score: 2 },
      { label: "Weeks — we can adjust at the next review cycle", score: 3 },
      { label: "Days — we have pricing authority and current margin data", score: 4 },
      {
        label:
          "Proactively — we adjust before the client notices a problem",
        score: 5,
      },
    ],
  },
];

const gapMeta: Record<
  Gap,
  { name: string; color: string; bg: string; border: string; description: string }
> = {
  signal: {
    name: "Signal Gap",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-900",
    description:
      "Your firm isn't watching the right signals. You likely monitor revenue and utilisation but miss 60–70% of the economic data that drives margin. Focus first on building visibility: client profitability, AI cost attribution, delivery composition, and scope variance.",
  },
  latency: {
    name: "Latency Gap",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-900",
    description:
      "You may have the right signals, but they arrive too late. A margin problem that costs £500/week seen at week 2 costs £1,000 — seen at week 6 it costs £3,000. Focus on closing the loop between delivery data and financial reporting, reducing your month-end close, and connecting systems.",
  },
  decision: {
    name: "Decision Gap",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-900",
    description:
      "Your signals and speed may be adequate, but decisions still lag. Research shows 50% of executives estimate slow decisions cost 4%+ of revenue annually. Focus on decision authority, scenario modelling, and building confidence in the data so leaders act on it — not just review it.",
  },
};

function getGapScores(answers: Record<number, number>) {
  const scores: Record<Gap, number> = { signal: 0, latency: 0, decision: 0 };
  for (const [qi, score] of Object.entries(answers)) {
    const gap = questions[Number(qi)].gap;
    scores[gap] += score;
  }
  return scores;
}

function getWeakestGap(scores: Record<Gap, number>): Gap {
  const entries = Object.entries(scores) as [Gap, number][];
  entries.sort((a, b) => a[1] - b[1]);
  return entries[0][0];
}

function getGapLevel(score: number): string {
  if (score <= 5) return "Critical";
  if (score <= 9) return "Weak";
  if (score <= 12) return "Developing";
  return "Strong";
}

export default function ThreeGapsAssessmentPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const allAnswered = Object.keys(answers).length === questions.length;
  const scores = getGapScores(answers);
  const weakest = getWeakestGap(scores);
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const meta = gapMeta[weakest];

  const gapOrder: Gap[] = ["signal", "latency", "decision"];

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
          Three Gaps Assessment
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          9 questions. Takes about 2 minutes. Find out which gap — Signal,
          Latency, or Decision — is costing your firm the most.
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
                  Answer all 9 questions to see your result.
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-12">
            <Card className={cn("border-2", meta.border)}>
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-1">
                  Overall Score: {totalScore} / 45
                </div>
                <CardTitle className={cn("text-2xl", meta.color)}>
                  Your biggest gap: {meta.name}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {meta.description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Per-gap breakdown */}
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-foreground">Gap Breakdown</h3>
              {gapOrder.map((gap) => {
                const gm = gapMeta[gap];
                const score = scores[gap];
                const level = getGapLevel(score);
                const pct = Math.round((score / 15) * 100);
                return (
                  <div key={gap}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={cn("text-sm font-medium", gm.color)}>
                        {gm.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {score}/15 — {level}
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <div
                        className={cn("h-full rounded-full transition-all", {
                          "bg-red-500 dark:bg-red-400": gap === "signal",
                          "bg-amber-500 dark:bg-amber-400": gap === "latency",
                          "bg-blue-500 dark:bg-blue-400": gap === "decision",
                        })}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sequence reminder */}
            <div className="mt-8 rounded-lg border border-border bg-muted/40 p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Remember the sequence:
                </span>{" "}
                Signal → Latency → Decision. Closing a downstream gap without
                fixing the one before it rarely works. If your Signal Gap is
                critical, fix that first — no amount of faster reporting helps
                if you&apos;re watching the wrong data.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  setAnswers({});
                  setShowResult(false);
                }}
                variant="outline"
              >
                Retake Assessment
              </Button>
              <Link
                href="/learn"
                className={cn(buttonVariants())}
              >
                Read the Three Gaps Analysis
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
