import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yash Parmar — Software Developer, AI Builder & Digital Creator",
    template: "%s | Yash Parmar"
  },
  description:
    "Yash Parmar builds software products, AI tools, automation systems, games and 3D experiences. Explore selected projects, capabilities and experiments.",
  applicationName: "Yash Parmar Portfolio",
  keywords: [
    "Yash Parmar", "Software Developer", "MERN Stack Developer",
    "AI Tools", "Workflow Automation", "Game Development",
    "Blender 3D", "Product Engineering", "Web Applications"
  ],
  openGraph: {
    type: "website",
    title: "Yash Parmar — I build digital things beyond limits",
    description:
      "Software, AI, automation, games and 3D experiences — from idea to working product.",
    siteName: "Yash Parmar Portfolio",
    images: [{ url: "/illustrations/yp-portal.svg", width: 900, height: 900, alt: "YP portal identity" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Parmar — Digital Creator",
    description: "Software, AI, automation, games and 3D experiences."
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#FBFAFF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1
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
