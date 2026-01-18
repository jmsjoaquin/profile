import type { Metadata } from "next";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Spotlight } from "@/components/ui/spotlight";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "James | Backend-First Full Stack Developer",
  description:
    "Portfolio of James, a backend-focused full stack developer building reliable systems and clean web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${jetBrainsMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <div className="pointer-events-none absolute inset-0">
              <Spotlight
                className="left-[-160px] top-[5%] h-[420px] w-[420px]"
                fill="rgba(14,116,144,0.55)"
              />
              <Spotlight
                className="right-[-200px] top-[12%] h-[420px] w-[420px]"
                fill="rgba(234,179,8,0.45)"
              />
            </div>
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
