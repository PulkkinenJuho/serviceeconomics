"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_KEY = "se-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
    // Disable GA by setting the opt-out window property
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)[`ga-disable-G-1DEKX9HYFW`] = true;
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="rounded-xl border border-border bg-background/95 backdrop-blur-sm shadow-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <p className="text-sm text-muted-foreground flex-1">
          We use cookies for analytics to improve this site. No personal data is
          sold.{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
            Privacy policy
          </Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
