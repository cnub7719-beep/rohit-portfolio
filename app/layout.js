import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
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
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}