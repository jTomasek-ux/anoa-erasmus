import PageShell from "@/components/layout/PageShell";
import { SiteSettingsProvider } from "@/components/providers/SiteSettingsProvider";
import { loadSiteSettings } from "@/lib/cms/defaults";

/** Refresh CMS content at least every 60s even if the webhook fails */
export const revalidate = 60;

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await loadSiteSettings();

  return (
    <SiteSettingsProvider settings={settings}>
      <PageShell>{children}</PageShell>
    </SiteSettingsProvider>
  );
}
