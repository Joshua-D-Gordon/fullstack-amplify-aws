import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden mesh-bg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="animate-rise">
          <p className="font-display text-4xl font-semibold tracking-tight text-ink-deep sm:text-5xl">
            Relay
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            <Zap className="size-3.5 text-flare" aria-hidden="true" />
            Built on Amplify Hosting
          </div>

          <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-deep sm:text-5xl lg:text-[3.4rem]">
            Ship fullstack AWS apps in one push.
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Connect your repo, deploy to a global CDN, and iterate with
            Git-native CI/CD. Relay is the calm layer over Amplify for teams
            who want production without the ceremony.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-full bg-ink-deep px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal"
            >
              Explore the platform
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#features"
              className="inline-flex items-center rounded-full border border-line bg-panel px-6 py-3 text-sm font-semibold text-foreground transition hover:border-teal hover:text-teal"
            >
              See how it works
            </Link>
          </div>
        </div>

        <div className="animate-rise-delay animate-float">
          <div
            className="relative overflow-hidden rounded-[1.75rem] border border-line bg-ink-deep p-5 shadow-[0_30px_80px_-40px_rgba(16,35,31,0.7)]"
            aria-label="Relay deploy console preview"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                deploy · main
              </span>
            </div>

            <div className="space-y-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between text-sm text-white/80">
                <span>fullstack-amplify-aws</span>
                <span className="rounded-full bg-teal/30 px-2.5 py-0.5 text-xs font-semibold text-teal-soft">
                  Live
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-teal to-flare" />
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] text-white/50">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-white/35">Build</p>
                  <p className="mt-1 text-sm font-semibold text-white">48s</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-white/35">Region</p>
                  <p className="mt-1 text-sm font-semibold text-white">us-e1</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-white/35">CDN</p>
                  <p className="mt-1 text-sm font-semibold text-white">Edge</p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2 font-mono text-[11px] leading-5 text-teal-soft/80">
              <p>$ git push origin main</p>
              <p>→ Amplify detected Next.js SSR</p>
              <p>→ Pipeline job #1 SUCCEED</p>
              <p className="text-white/90">
                https://main.d23ezhab0sg7go.amplifyapp.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
