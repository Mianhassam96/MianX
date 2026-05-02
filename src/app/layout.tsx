import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MianX — Before you reply… know exactly what it will cost you.",
  description:
    "MianX analyzes hidden intent, predicts outcomes, and shows you the smartest move—before you hit send.",
  keywords: [
    "conversation analysis",
    "message analysis",
    "hidden intent",
    "reply strategy",
    "communication tool",
    "text message analyzer",
  ],
  openGraph: {
    title: "MianX — Before you reply… know exactly what it will cost you.",
    description:
      "MianX analyzes hidden intent, predicts outcomes, and shows you the smartest move—before you hit send.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/MianX/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/MianX/favicon.svg",
    apple: "/MianX/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/MianX/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
