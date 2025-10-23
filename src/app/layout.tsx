import type { Metadata } from "next";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";

export const metadata: Metadata = {
  title: "Meu App",
  description: "Aplicação com Next + Tailwind + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-50 text-gray-900">
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
