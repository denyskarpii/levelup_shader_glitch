import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AI } from "@/app/api/chat/actions"; // Import AI
import { nanoid } from "nanoid";
import type React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AI>
        <body
          className={inter.className}
          style={{ backgroundColor: "transparent" }}
        >
          {children}
        </body>
      </AI>
    </html>
  );
}
