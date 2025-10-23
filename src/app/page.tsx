"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { LoaderCircle, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

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
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0B0B0F] px-6 py-12 text-center text-[#EDEDED] relative overflow-hidden">
      {/* ===== GRADIENT BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-[#4C1D95]/30 blur-[120px]" />
      </div>

      {/* ===== HEADER ===== */}
      <header className="flex w-full justify-center pt-6">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#8B5CF6]/40 blur-lg rounded-full animate-pulse" />
            <Rocket className="w-9 h-9 text-[#A78BFA] drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#C4B5FD] tracking-tight">
            EstudoXP
          </h1>
        </div>
      </header>

      {/* ===== ILUSTRAÇÃO ===== */}
      <section className="flex flex-col items-center justify-center gap-6 mt-10">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#8B5CF6]/20 blur-3xl animate-pulse" />
          <Image
            src="/logo.png"
            alt="Logo EstudoXP"
            width={400}
            height={400}
            className="rounded-full relative z-10 select-none drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
            draggable={false}
          />
        </div>

        <h2 className="max-w-xs text-2xl font-semibold text-[#D6BCFA] leading-snug">
          O jeito divertido de transformar sua rotina em uma jornada de
          evolução.
        </h2>
      </section>

      {/* ===== BOTÕES ===== */}
      <footer className="flex w-full max-w-sm flex-col gap-4 pb-10">
        <Button
          onClick={() => router.push("/login")}
          className="flex w-full rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] py-6 text-lg font-extrabold text-white shadow-lg shadow-[#8B5CF6]/30 transition-all hover:scale-[1.02] hover:shadow-[#7C3AED]/40 active:scale-95"
        >
          CRIAR UMA CONTA
        </Button>

        <Button
          variant="bordered"
          className="flex w-full rounded-2xl border-2 border-[#8B5CF6]/60 bg-[#12121A]/60 backdrop-blur-xl py-6 text-lg font-extrabold text-[#C4B5FD] shadow-inner shadow-[#1E1E2A]/30 transition-all hover:bg-[#1C1C24]/80 hover:border-[#A78BFA]/70 active:scale-95"
          onClick={() => router.push("/login/checkout")}
        >
          JÁ POSSUI UMA CONTA?
        </Button>

        <div className="text-sm text-[#A0A0A8] mt-2">
          Ao continuar, você concorda com nossos{" "}
          <span className="text-[#A78BFA] hover:underline cursor-pointer transition">
            termos de uso
          </span>
          .
        </div>
      </footer>
    </main>
  );
}
