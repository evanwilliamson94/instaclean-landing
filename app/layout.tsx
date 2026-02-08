import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instaclean LLC | Houston Cleaning Services",
  description:
    "Move-in/move-out, deep cleaning, post-construction, residential & commercial cleaning, Airbnb turnovers. Call or text for same-day service.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-900 antialiased">{children}</body>
    </html>
  );
}
