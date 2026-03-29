import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { frameworks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frameworks",
  description:
    "Named visual frameworks for the core concepts of service economics. The canonical reference library for service business leaders.",
};

export default function FrameworksPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Frameworks
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Named visual models for the core concepts of service economics. Each
          framework solves a specific problem, comes with a downloadable visual,
          and connects to a playbook that tells you what to do about it.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((fw) => (
            <Link key={fw.slug} href={`/frameworks/${fw.slug}`}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{fw.title}</CardTitle>
                  <CardDescription>{fw.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
