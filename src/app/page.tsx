import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <section className="border-t border-line bg-ink-deep">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 sm:flex-row sm:items-center sm:px-8">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white">
                Ready for a custom route?
              </h2>
              <p className="mt-2 max-w-xl text-white/65">
                Peek at the platform page for pricing and the three-step
                deploy story.
              </p>
            </div>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-deep transition hover:bg-teal-soft"
            >
              Open /platform
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
