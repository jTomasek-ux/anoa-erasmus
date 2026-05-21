"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "O programu", href: "#o-programu" },
  { label: "Pro studenty", href: "#pro-studenty" },
  { label: "Projekty", href: "#projekty" },
  { label: "Jak to probíhá", href: "#jak-to-probiha" },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkColor = scrolled
    ? "text-[#00468E]/80 hover:text-[#00468E]"
    : "text-white/85 hover:text-white";
  const logoColor = scrolled ? "text-[#00468E]" : "text-white";

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#00468E]/15 bg-[#E8F0FA] shadow-md"
            : "border-b border-white/10 bg-[#00468E]/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
          <a
            href="#uvod"
            className={`font-heading text-lg tracking-tight transition-colors ${logoColor}`}
          >
            ANOA<span className="text-primary">+</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors ${linkColor}`}
              >
                {link.label}
              </a>
            ))}
            <motion.a
              href="#o-programu"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-white"
            >
              Zjistit více
            </motion.a>
          </nav>

          <button
            type="button"
            className={`p-2 md:hidden ${logoColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-[#00468E]/15 bg-[#E8F0FA] px-6 py-6 shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#00468E]/10 py-3 font-sans text-base font-medium text-[#171717]/80 last:border-0 hover:text-[#171717]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#o-programu"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 font-sans text-sm font-semibold text-white"
              >
                Zjistit více
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
