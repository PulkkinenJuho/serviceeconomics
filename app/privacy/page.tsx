import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How serviceeconomics.org handles analytics, cookies, and your data.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Home
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: 30 March 2026
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              What we collect
            </h2>
            <p>
              This site uses{" "}
              <strong className="text-foreground">Google Analytics 4</strong>{" "}
              (measurement ID: G-1DEKX9HYFW) to understand how visitors use the
              site — which pages are visited, how long people stay, and where
              traffic comes from. This helps us improve the content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Cookies
            </h2>
            <p>
              Google Analytics sets first-party cookies (prefixed{" "}
              <code className="text-sm bg-muted px-1 py-0.5 rounded">_ga</code>)
              to distinguish unique visitors and track sessions. These cookies
              contain no personally identifiable information.
            </p>
            <p className="mt-2">
              You can decline analytics cookies when prompted. If you decline,
              Google Analytics is disabled and no tracking cookies are set.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              What we don&apos;t do
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>We do not sell or share your data with third parties.</li>
              <li>We do not collect names, emails, or personal information through analytics.</li>
              <li>We do not run remarketing or advertising campaigns.</li>
              <li>We do not use Google Signals or demographic/interest reporting.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Your choices
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">Cookie banner:</strong> Accept
                or decline analytics when you first visit.
              </li>
              <li>
                <strong className="text-foreground">Browser settings:</strong> Block
                cookies or use a privacy extension — the site works fine without
                analytics.
              </li>
              <li>
                <strong className="text-foreground">Google opt-out:</strong> Install
                the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Contact
            </h2>
            <p>
              Questions about this policy? Reach us through{" "}
              <a
                href="https://digitalcore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                digitalcore.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
