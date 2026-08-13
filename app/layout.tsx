import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ncatofthe.github.io"),
  title: "Портфолио разработчика внутренних сервисов",
  description:
    "Портфолио разработчика внутренних сервисов, автоматизации, API-интеграций, ботов и служебных приложений.",
  alternates: {
    canonical: "/portfolio/",
  },
  themeColor: "#08090b",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Портфолио разработчика внутренних сервисов и автоматизации",
    description:
      "Service Desk, боты, интеграции, административные панели и служебные приложения для компаний.",
    url: "https://ncatofthe.github.io/portfolio/",
    siteName: "Портфолио разработчика",
    images: [
      {
        url: "/portfolio/og.png",
        width: 1200,
        height: 630,
        alt: "Портфолио разработчика внутренних сервисов и автоматизации",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Портфолио разработчика внутренних сервисов",
    description: "Внутренние сервисы, автоматизация, API-интеграции и боты.",
    images: ["/portfolio/og.png"],
  },
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Портфолио разработчика",
  about: "Разработка внутренних сервисов, сайтов, автоматизации, ботов и прикладных инструментов",
  url: "https://ncatofthe.github.io/portfolio/",
  sameAs: ["https://github.com/ncatofthe", "https://t.me/vivesupport"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
