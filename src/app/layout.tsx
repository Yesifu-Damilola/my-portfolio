import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Font setup
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // ✅ ensures faster font loading
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap", // ✅ improves performance
});

// Metadata (SEO + accessibility)
export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Portfolio of a results-driven web developer with strong expertise in JavaScript, React, Next.js, TypeScript, and Tailwind CSS. Passionate about building intuitive, responsive, and future-ready applications that combine technology with real business value.",
  icons: {
    icon: "/favicon.ico", // ✅ optional: favicon support
  },
  openGraph: {
    title: "My Portfolio",
    description:
      "Explore my portfolio showcasing expertise in JavaScript, React, Next.js, TypeScript, and Tailwind CSS.",
    url: "https://my-portfolio.com", // replace with your real domain
    siteName: "My Portfolio",
    images: [
      {
        url: "/images/portfolio-preview.png", // ✅ add a preview image in public/images
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
