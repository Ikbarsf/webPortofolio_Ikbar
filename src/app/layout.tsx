import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ikbar Saif Fadilah | Web Developer & Data Engineer",
  description:
    "Portfolio Ikbar Saif Fadilah, Web Developer dengan fokus Frontend, Data Engineering, dan Computer Vision.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Ikbar Saif Fadilah",
    "Frontend Developer",
    "Web Developer",
    "Data Engineer",
    "Portfolio",
  ],
  openGraph: {
    title: "Ikbar Saif Fadilah | Portfolio",
    description:
      "Dark-first bilingual portfolio for frontend, web development, data engineering, and AI projects.",
    images: ["/profile.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const themeScript = `
    try {
      const storedTheme = localStorage.getItem('theme');
      const theme = storedTheme || 'dark';
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.documentElement.style.colorScheme = theme;
    } catch (_) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    }
  `;

  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
