import type { Metadata } from "next";
import { PlatformStory } from "@/components/platform-story";
import { Pricing } from "@/components/pricing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Platform · Relay",
  description:
    "How Relay uses Amplify Hosting to ship fullstack apps from a Git push.",
};

export default function PlatformPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PlatformStory />
        <Pricing />
      </main>
      <SiteFooter />
    </div>
  );
}
