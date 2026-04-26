import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prajwal Dhande",
  description: "Portfolio of Prajwal Dhande — Full Stack (MERN) & AI Engineer",
  icons: {
    icon: [{ url: "icon.jpg", type: "image/png" }],
    apple: [{ url: "icon.jpg", type: "image/png" }],
    shortcut: [{ url: "icon.jpg", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+BR&display=swap" rel="stylesheet" />
      </head>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}