import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/context/ThemeContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    "Software Engineer with  1 years of software engineering experience in startups , currently building 3D printing software at Designing Alley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppFragmentGlareLight.variable} ${departureMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
          <GoogleAnalytics gaId="G-G1BEZ46KNJ" />
        </ThemeProvider>
      </body>
    </html>
  );
}
