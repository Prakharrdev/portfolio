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
    default: "Prakhar Gupta | Creative Developer",
    template: "%s | Prakhar Gupta",
  },
  description: "Prakhar Gupta is a B.Tech Computer Science student at Manipal University Jaipur and a creative frontend developer building interactive, scroll-driven web experiences.",
  keywords: ["Perkkk", "Creative Developer", "Portfolio", "Web Development", "Computer Science", "Prakhar Gupta IEEE", "Prakhar Gupta manipal jaipur", "Prakhar Gupta MUJ","Prakhar Gupta frontend developer", "Prakhar Gupta frontend engineer","Perkkk dev", "Prakhar Gupta creative developer", "Prakhar Gupta web developer", "Prakhar Gupta interactive web experiences"],
  authors: [{ name: "Prakhar Gupta", url: "https://perkkk.dev" }],
  creator: "Prakhar Gupta",
  openGraph: {
    title: "Prakhar Gupta | Creative Developer",
    description: "Computer Science Student & Creative Engineer. Building the future, one commit at a time.",
    url: "https://perkkk.dev",
    siteName: "Prakhar Gupta Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakhar Gupta | Creative Developer",
    description: "Creative Engineer & Computer Science Student.",
    creator: "@perkkkdev", // Placeholder or if known
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://perkkk.dev/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Prakhar Gupta",
              "url": "https://perkkk.dev/",
              "sameAs": [
                "https://www.linkedin.com/in/prakharrdev/"
              ],
              "jobTitle": "Creative Frontend Developer",
              "affiliation": {
                "@type": "CollegeOrUniversity",
                "name": "Manipal University Jaipur"
              }
            })
          }}
        />       
      </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
          {children}
        </body>
    </html>
  );
}
