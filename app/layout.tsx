import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Crash Programming Language",
  description: "The Crash Programming Language",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
