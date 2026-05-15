import { ThemeProvider } from "@/context/ThemeContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import { SpeedInsights } from "@vercel/speed-insights/next";
const ppFragmentGlareLight = localFont({
  src: "./fonts/pp-fragment-glare-light.ttf",
  variable: "--font-pp-fragment-glare-light",
});
const departureMono = localFont({
  src: "./fonts/departure-mono.woff",
  variable: "--font-departure-mono",
});

export const metadata: Metadata = {
  title: "Abhimanyu Jangid",
  description:
    "Full-Stack Developer with experience in MERN, Next.js, microservices, and scalable backend architectures. Currently working at Designing Alley and contributing part-time as a Senior MERN Developer at True Response Softech.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ppFragmentGlareLight.variable} ${departureMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScrolling>
            {children}
            <GoogleAnalytics gaId="G-G1BEZ46KNJ" />
            <SpeedInsights />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
