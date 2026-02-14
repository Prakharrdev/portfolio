import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perkkk.dev"),
  title: {
    default: "Perkkk | Creative Developer",
    template: "%s | Perkkk",
  },
  description: "Computer Science Student & Creative Engineer. Crafting digital reality with pixel-perfect aesthetics and scalable architecture.",
  keywords: ["Perkkk", "Creative Developer", "Portfolio", "Web Development", "Computer Science", "Next.js", "React", "Three.js"],
  authors: [{ name: "Perkkk", url: "https://perkkk.dev" }],
  creator: "Perkkk",
  openGraph: {
    title: "Perkkk | Creative Developer",
    description: "Computer Science Student & Creative Engineer. Building the future, one commit at a time.",
    url: "https://perkkk.dev",
    siteName: "Perkkk Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perkkk | Creative Developer",
    description: "Creative Engineer & Computer Science Student.",
    creator: "@perkkk", // Placeholder or if known
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
