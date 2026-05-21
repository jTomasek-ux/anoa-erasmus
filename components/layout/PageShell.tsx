import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavbar />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
