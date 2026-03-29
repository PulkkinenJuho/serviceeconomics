import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Learn
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/learn" className="hover:text-foreground transition-colors">
                  The Four Eras
                </Link>
              </li>
              <li>
                <Link href="/frameworks" className="hover:text-foreground transition-colors">
                  Frameworks
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Tools
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/tools" className="hover:text-foreground transition-colors">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/tools/maturity-diagnostic" className="hover:text-foreground transition-colors">
                  Maturity Diagnostic
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/resources" className="hover:text-foreground transition-colors">
                  All Resources
                </Link>
              </li>
              <li>
                <Link href="/resources/playbooks/margin-recovery" className="hover:text-foreground transition-colors">
                  Playbooks
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              About
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.links.digitalcore}
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DigitalCore
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Service Economics
          </p>
          <p className="text-xs text-muted-foreground">
            Looking for a platform that implements these principles?{" "}
            <a
              href={siteConfig.links.digitalcore}
              className="underline underline-offset-2 hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              See DigitalCore &rarr;
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
