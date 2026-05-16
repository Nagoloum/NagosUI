import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "NagosUI — Composants frontend premium",
  description:
    "Librairie de composants animés, fluides et cinématiques par Nagos.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
