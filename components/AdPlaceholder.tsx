// All ad slots are intentionally disabled until AdSense approves the site.
// Re-enable by restoring the previous implementation (see git history) once
// the property is approved and we want to start serving ads.
//
// Note: the AdSense loader script is still attached in app/layout.tsx so
// Google's crawler / AdSense console can detect the publisher tag, but no
// "Advertisement" labels or empty <ins> placeholders are rendered.

type AnyProps = Record<string, unknown>;

export function AdPlaceholder(_props: AnyProps = {}) {
  return null;
}

export function ResponsiveAdSlot(_props: AnyProps = {}) {
  return null;
}

export function SidebarAd(_props: AnyProps = {}) {
  return null;
}

export function InContentAd(_props: AnyProps = {}) {
  return null;
}
