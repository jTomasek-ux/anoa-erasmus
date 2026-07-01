import type { Metadata } from "next";
import { Host_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-host-grotesk",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Erasmus+",
  description:
    "Erasmus+ je vzdělávací program Evropské unie podporující spolupráci, mobilitu a praktické vzdělávání studentů napříč Evropou.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${hostGrotesk.variable} ${inter.variable}`}>
      <body>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[9999]"
          style={{
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />
        {children}
      </body>
    </html>
  );
}
