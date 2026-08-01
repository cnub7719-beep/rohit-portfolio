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

export const metadata = {
  title: "Rohit Bhat | Video Editor & Thumbnail Designer",
  description:
    "Rohit Bhat is a professional Video Editor and Thumbnail Designer specializing in cinematic edits, gaming videos, motion graphics, AI videos and high-converting thumbnails.",
  keywords: [
    "Video Editor",
    "Thumbnail Designer",
    "YouTube Video Editor",
    "Gaming Video Editor",
    "Motion Graphics",
    "AI Video Creator",
  ],
  creator: "Rohit Bhat",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
