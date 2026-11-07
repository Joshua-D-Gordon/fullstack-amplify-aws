import {
  Blocks,
  GitBranch,
  Globe2,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Git-native deploys",
    description:
      "Every push to main rebuilds and ships. Preview branches stay isolated without extra scripts.",
  },
  {
    icon: Globe2,
    title: "Global edge delivery",
    description:
      "SSR and static assets ride Amplify Hosting so users hit a nearby edge, not your laptop.",
  },
  {
    icon: TimerReset,
    title: "Minutes, not meetings",
    description:
      "Skip the ticket queue for CDN wiring. Connect the repo once and keep shipping product.",
  },
  {
    icon: ShieldCheck,
    title: "Least-drama defaults",
    description:
      "HTTPS, managed builds, and framework detection out of the box. You own the app code.",
  },
  {
    icon: Blocks,
    title: "Ready for Gen 2",
    description:
      "Start with hosting, then grow into Amplify Auth, Data, and Storage when you need them.",
  },
  {
    icon: Sparkles,
    title: "Startup-speed polish",
    description:
      "A calm UI for launch day: clear status, fast feedback, and a URL you can paste in Slack.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
            Features
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-deep sm:text-4xl">
            Ready out of the box
          </h2>
          <p className="mt-3 text-lg text-muted">
            Inspired by production SaaS feature grids: short, specific, and
            focused on what actually unblocks shipping.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-teal-soft text-teal transition group-hover:bg-teal group-hover:text-white">
                <feature.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-ink-deep">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
