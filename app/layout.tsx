import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./../styles/globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cariri Tips | Site Oficial",
  description: "Página Oficial da Cariri Tips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
