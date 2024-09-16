import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dawson McThay",
  description:
    "Dawson McThay builds digital solutions that drive results: mobile apps, games, and websites with a sales-focused edge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
