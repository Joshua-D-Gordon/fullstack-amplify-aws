import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-ink-deep">Relay</p>
          <p className="mt-1 text-sm text-muted">
            Fullstack AWS shipping, without the ops tax.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/platform" className="hover:text-foreground">
            Platform
          </Link>
          <a
            href="https://github.com/Joshua-D-Gordon/fullstack-amplify-aws"
            className="hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
