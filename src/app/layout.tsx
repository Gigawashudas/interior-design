import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "FORM/SPACE — Interior Architecture & Design", description: "Interior architecture and design studio creating thoughtful spaces across Bangladesh." };
const themeScript = ` (function () { try { var theme = localStorage.getItem("theme"); if ( theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) ) { document.documentElement.classList.add("dark"); } else { document.documentElement.classList.remove("dark"); } } catch (error) {} })(); `;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
