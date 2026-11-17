import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Parmar — Digital Creator",
  description:
    "I build digital products beyond limits: software, AI tools, automation, games and 3D experiences."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}