import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juris Bootstrap v521",
  description: "Legal contract management system",
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
