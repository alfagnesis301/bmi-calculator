import { siteConfig } from "@/lib/seo";

type AnyProps = Record<string, unknown>;

function AdSlot(_props: AnyProps = {}) {
  if (!siteConfig.adsenseEnabled) return null;
  return null;
}

export function AdPlaceholder(_props: AnyProps = {}) {
  return <AdSlot />;
}

export function ResponsiveAdSlot(_props: AnyProps = {}) {
  return <AdSlot />;
}

export function SidebarAd(_props: AnyProps = {}) {
  return <AdSlot />;
}

export function InContentAd(_props: AnyProps = {}) {
  return <AdSlot />;
}
