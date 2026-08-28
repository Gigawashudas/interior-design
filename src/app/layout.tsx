import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "FORM/SPACE — Interior Architecture & Design", description: "Interior architecture and design studio creating thoughtful spaces across Bangladesh." };
const themeScript = ` (() => { try { const savedTheme = localStorage.getItem("theme"); const shouldUseDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches); document.documentElement.classList.toggle("dark", shouldUseDark); } catch {} })(); `;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {" "}
      <head>
        {" "}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />{" "}
      </head>{" "}
      <body>{children}</body>{" "}
    </html>
  );
}
