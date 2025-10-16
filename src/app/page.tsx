"use client";
import { Loader, LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-violet-500 to-violet-600">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Logo EstudoXP"
            width={400}
            height={400}
            className="rounded-full relative z-10 select-none drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
            draggable={false}
          />
          <LoaderCircle className="h-10 w-10 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <main className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <h1>Bem-vindo ao app!</h1>
    </main>
  );
}
