import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { frameworks, getFramework } from "@/lib/content";

export function generateStaticParams() {
  return frameworks.map((fw) => ({ slug: fw.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fw = getFramework(slug);
  if (!fw) return {};
  return {
    title: fw.title,
    description: fw.description,
  };
}

export default async function FrameworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fw = getFramework(slug);
  if (!fw) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fw.title,
    description: fw.description,
    author: {
      "@type": "Organization",
      name: "Service Economics",
      url: "https://serviceeconomics.org",
    },
    publisher: {
      "@type": "Organization",
      name: "Service Economics",
      url: "https://serviceeconomics.org",
    },
    mainEntityOfPage: `https://serviceeconomics.org/frameworks/${slug}`,
    keywords: ["service economics", fw.title.toLowerCase(), "professional services frameworks"],
  };

  return (
    <div className="py-16 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <Link
          href="/frameworks"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; All Frameworks
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {fw.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{fw.description}</p>

        {/* 1. The Problem It Solves */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            The Problem It Solves
          </h2>
          <p className="text-muted-foreground leading-relaxed">{fw.problem}</p>
        </section>

        {/* 2. The Visual — placeholder */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            The Visual
          </h2>
          <div className="rounded-lg border border-dashed border-border bg-muted/30 p-12 text-center text-muted-foreground">
            <p className="text-sm">
              Framework visual will be rendered here.
            </p>
            <p className="text-xs mt-2">SVG / interactive component coming soon.</p>
          </div>
        </section>

        {/* 3. How to Read It */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            How to Read It
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Detailed walkthrough of each element in the visual — what it means
            and how the parts connect. Content coming soon.
          </p>
        </section>

        {/* 4. How to Apply It */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            How to Apply It
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Step-by-step guidance for using this framework in your own firm.
            Content coming soon.
          </p>
        </section>

        {/* 5. Good vs Bad */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            What Good Looks Like vs. What Bad Looks Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Good
              </h3>
              <p className="text-sm text-muted-foreground">
                Detailed comparison coming soon.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Bad
              </h3>
              <p className="text-sm text-muted-foreground">
                Detailed comparison coming soon.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Related Frameworks */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Related Frameworks
          </h2>
          <ul className="space-y-2">
            {frameworks
              .filter((f) => f.slug !== slug)
              .slice(0, 3)
              .map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/frameworks/${f.slug}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {f.title} &rarr;
                  </Link>
                </li>
              ))}
          </ul>
        </section>

        {/* 7. Related Playbook */}
        <section className="mt-10 rounded-lg border border-border p-6 bg-muted/30">
          <p className="text-sm text-muted-foreground">
            If this framework revealed a problem,{" "}
            <Link
              href="/resources/playbooks/margin-recovery"
              className="text-primary hover:underline"
            >
              the Margin Recovery Playbook
            </Link>{" "}
            tells you what to do about it.
          </p>
        </section>
      </div>
    </div>
  );
}
