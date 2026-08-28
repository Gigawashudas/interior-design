import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORM/SPACE — Interior Architecture & Design",
  description: "Interior architecture and design studio creating thoughtful spaces across Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
