import PageShell from "@/components/layout/PageShell";
import { SiteSettingsProvider } from "@/components/providers/SiteSettingsProvider";
import { loadSiteSettings } from "@/lib/cms/defaults";

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
