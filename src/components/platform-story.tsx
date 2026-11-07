const steps = [
  {
    step: "01",
    title: "Connect the repo",
    body: "Point Amplify at GitHub. Framework detection picks Next.js SSR and wires the build.",
  },
  {
    step: "02",
    title: "Push to main",
    body: "A RELEASE job builds, uploads artifacts, and promotes the branch URL automatically.",
  },
  {
    step: "03",
    title: "Iterate in public",
    body: "Change a page, push again, watch the CDN update. That loop is the product.",
  },
];

export function PlatformStory() {
  return (
    <section className="mesh-bg border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-4xl font-semibold tracking-tight text-ink-deep sm:text-5xl">
            Relay
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-deep sm:text-5xl">
            The platform behind the push.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            This page is a demo surface for the Amplify Hosting tutorial:
            custom routes, a shared design system, and a startup story that
            still maps to what you actually deployed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.5rem] border border-line bg-panel/90 p-6 backdrop-blur-sm"
            >
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-flare">
                {item.step}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-ink-deep">
                {item.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
