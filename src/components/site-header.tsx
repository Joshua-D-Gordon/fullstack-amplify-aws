import Link from "next/link";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/#features", label: "Features" },
  { href: "/platform#pricing", label: "Pricing" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink-deep"
        >
          Relay
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/platform"
            className="hidden text-sm font-medium text-muted transition-colors hover:text-foreground sm:inline"
          >
            Sign in
          </Link>
          <Link
            href="/platform#pricing"
            className="rounded-full bg-ink-deep px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
