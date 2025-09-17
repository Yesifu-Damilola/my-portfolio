import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Damilola Yesifu",
  description:
    "As a passionate software developer, I help businesses and individuals bring their digital ideas to life. With expertise in React, Next.js, TypeScript, and Tailwind CSS, I build fast, responsive, and modern websites that not only look great but also drive results. I combine creativity with technical expertise to deliver applications that meet both user needs and business goals.",
  keywords: [
    "Damilola Yesifu",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Damilola Yesifu" }],
  creator: "Damilola Yesifu",
  publisher: "Damilola Yesifu",
  metadataBase: new URL("https://my-portfolio-five-tau-60.vercel.app/"), // Replace with your domain
  openGraph: {
    title: "Damilola Yesifu",
    description:
      "A passionate software developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
    url: "https://my-portfolio-five-tau-60.vercel.app/",
    siteName: "Damilola Yesifu",
    images: [
      {
        url: "https://your-portfolio-domain.com/images/profile.jpg", // Replace with real image
        width: 1200,
        height: 630,
        alt: "Damilola Yesifu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damilola Yesifu",
    description:
      "Software developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Building responsive and modern applications.",
    creator: "@/YesifuM", // Replace with your Twitter username
    images: ["https://your-portfolio-domain.com/images/profile.jpg"], // Replace with real image
  },
  alternates: {
    canonical: "https://my-portfolio-five-tau-60.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
