import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { ExtensionProvider } from "@/components/extensions";
import LiveChat from "@/components/extensions/LiveChat";
import Analytics from "@/components/extensions/Analytics";
import { extensions } from "@/content/extensions";

const poppins = Poppins({
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "General Warehouse Provider",
    template: "%s | General Warehouse Provider",
  },
  description:
    "Professional warehouse and storage solutions for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-neutral-50 font-sans text-neutral-800 antialiased">
        <ExtensionProvider config={extensions}>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <LiveChat />
          <Analytics />
        </ExtensionProvider>
      </body>
    </html>
  );
}
