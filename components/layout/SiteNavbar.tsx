"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { contactEmail, mainNav, type NavGroup } from "@/content/navigation";
import SiteLogo from "@/components/layout/SiteLogo";

function isActive(pathname: string, href?: string) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function isGroupActive(pathname: string, group: NavGroup) {
  if (group.href && isActive(pathname, group.href)) return true;
  return group.children?.some((c) => isActive(pathname, c.href)) ?? false;
}

const navLinkClass =
  "whitespace-nowrap rounded-lg px-2 py-2 font-sans text-[13px] font-medium transition-colors xl:px-2.5 xl:text-sm";

export default function SiteNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const onHome = pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/95 shadow-sm backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 md:px-6 lg:gap-3 lg:px-8">
        <SiteLogo priority={onHome} />

        <nav className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative shrink-0"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 ${navLinkClass} ${
                    isGroupActive(pathname, item)
                      ? "bg-primary/8 text-primary"
                      : "text-black/70 hover:bg-[#E8F0FA] hover:text-black"
                  }`}
                >
                  {item.label}
                  <ChevronDown size={14} className="shrink-0" />
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-50 min-w-[260px] pt-2"
                    >
                      <div className="rounded-xl border border-primary/10 bg-white p-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-lg px-3 py-2.5 transition-colors hover:bg-[#E8F0FA] ${
                              isActive(pathname, child.href)
                                ? "bg-primary/8 text-primary"
                                : "text-black/80"
                            }`}
                          >
                            <span className="block font-sans text-sm font-medium">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-0.5 block font-sans text-xs text-black/45">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={`shrink-0 ${navLinkClass} ${
                  isActive(pathname, item.href)
                    ? "bg-primary/8 text-primary"
                    : "text-black/70 hover:bg-[#E8F0FA] hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <motion.a
            href={`mailto:${contactEmail}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="whitespace-nowrap rounded-full bg-primary px-4 py-2 font-sans text-[13px] font-semibold text-white xl:px-5 xl:py-2.5 xl:text-sm"
          >
            Kontakt
          </motion.a>
        </div>

        <button
          type="button"
          className="ml-auto shrink-0 p-2 text-black lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-primary/10 bg-white lg:hidden"
          >
            <nav className="max-h-[70vh] space-y-1 overflow-y-auto px-4 py-4">
              {mainNav.map((item) =>
                item.children ? (
                  <div key={item.label} className="py-2">
                    <p className="px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-primary/50">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 font-sans text-sm text-black/80 hover:bg-[#E8F0FA]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="block rounded-lg px-3 py-2.5 font-sans text-sm font-medium text-black/80 hover:bg-[#E8F0FA]"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 block rounded-full bg-primary px-4 py-3 text-center font-sans text-sm font-semibold text-white"
              >
                Kontakt - {contactEmail}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
