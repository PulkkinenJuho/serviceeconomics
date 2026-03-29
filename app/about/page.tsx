import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who built Service Economics, why this resource exists, and its relationship to DigitalCore.",
};

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          About
        </h1>

        {/* Who built this */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Who Built This
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;ve spent the last decade working at the intersection of service
              delivery, data-driven operations, and AI governance in corporate
              environments. Along the way, I&apos;ve built service intelligence
              tooling, implemented AI governance frameworks in large
              organisations, and seen first-hand what happens when service firms
              fly blind on their economics.
            </p>
            <p>
              This site exists because the frameworks weren&apos;t there when I needed
              them. Every concept, visual, and playbook here is something I wish
              had existed when I was trying to help service teams understand what
              their work actually cost — and what to do about it. It&apos;s built from
              experience, not theory.
            </p>
            <p>
              This is not a vendor resource. It&apos;s not consulting marketing. It&apos;s
              not generic AI content. It&apos;s a practitioner&apos;s body of work made
              public — because the discipline of service economics is too
              important to keep behind a paywall.
            </p>
          </div>
        </section>

        {/* How this site was built */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            How This Site Was Built
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This site was built with AI assistance — for content research,
            framework development, and drafting. This is transparent because it&apos;s
            relevant: the site is itself a demonstration of AI-augmented
            knowledge work, which is exactly what the discipline addresses. The
            economics of building this site are tracked using the same principles
            it teaches.
          </p>
        </section>

        {/* DigitalCore */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            The Connection to DigitalCore
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m also the founder of{" "}
            <a
              href="https://digitalcore.app"
              className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              DigitalCore
            </a>
            , a platform that implements the Service Economics framework in
            software. I&apos;ve kept that separate from this resource deliberately. If
            you want a tool that automates what these playbooks describe, that&apos;s
            where to look. But everything on this site works without it.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Connect
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m always interested in talking to service leaders working through
            these problems. Reach out on LinkedIn or through{" "}
            <a
              href="https://digitalcore.app"
              className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              DigitalCore
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
