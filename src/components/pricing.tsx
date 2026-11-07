import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    id: "starter",
    name: "Starter",
    description: "Solo builders proving a fullstack idea on Amplify.",
    price: "$0",
    frequency: "to start",
    features: [
      "1 production app",
      "GitHub auto-deploy",
      "Shared edge CDN",
      "Community support",
    ],
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    description: "Small teams shipping previews and weekly releases.",
    price: "$49",
    frequency: "/month",
    features: [
      "Unlimited preview branches",
      "Faster concurrent builds",
      "Custom domain + SSL",
      "Priority email support",
      "Deploy insights",
    ],
    popular: true,
  },
  {
    id: "scale",
    name: "Scale",
    description: "Companies that need isolation, SLAs, and guidance.",
    price: "$199",
    frequency: "/month",
    features: [
      "Dedicated build capacity",
      "Multi-env promotion flow",
      "SSO-ready workspace",
      "Architecture office hours",
      "24/7 incident channel",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-line bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-deep sm:text-4xl">
            Plans that match how you ship
          </h2>
          <p className="mt-3 text-lg text-muted">
            Fake numbers for the demo. Real Amplify Hosting starts free for
            hobby projects.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col rounded-[1.5rem] border bg-panel p-6 ${
                tier.popular
                  ? "border-teal shadow-[0_24px_60px_-40px_rgba(15,118,110,0.55)]"
                  : "border-line"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-ink-deep">
                  {tier.name}
                </h3>
                {tier.popular ? (
                  <span className="rounded-full bg-teal-soft px-2.5 py-1 text-xs font-semibold text-teal">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-ink-deep">
                  {tier.price}
                </span>
                <span className="text-sm text-muted">{tier.frequency}</span>
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-teal"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/"
                className={`mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition ${
                  tier.popular
                    ? "bg-ink-deep text-white hover:bg-teal"
                    : "border border-line text-foreground hover:border-teal hover:text-teal"
                }`}
              >
                Get started
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
