import { Geist, Geist_Mono } from "next/font/google";
import { Play } from "next/font/google";
import "./globals.css";

const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Frontend Forge",
  description:
    "Sosial plattform for webutviklere og -designere. MVP under utvikling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${play.variable} antialiased bg-gradient-to-br from-[#0f0000] to-rose-950`}
      >
        {children}
      </body>
    </html>
  );
}
