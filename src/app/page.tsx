"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { GoalIcon, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0B0B0F] px-6 py-12 text-center text-[#EDEDED]">
      {/* ===== HEADER ===== */}
      <header className="flex w-full justify-center pt-6">
        <div className="flex items-center gap-2">
          {/* <Image src="/logo.png" alt="Logo EstudoXP" width={36} height={36} /> */}
          <Rocket className="w-9 h-9 text-[#8B5CF6]" />
          <h1 className="text-3xl font-extrabold text-[#8B5CF6] tracking-tight">
            EstudoXP
          </h1>
        </div>
      </header>

      {/* ===== ILUSTRAÇÃO ===== */}
      <section className="flex flex-col items-center justify-center gap-6 mt-10">
        <div className="relative">
          <div className="absolute inset-0 animate-pulse rounded-full bg-[#8B5CF6]/20 blur-3xl" />
          <Image
            src="/logo.png"
            alt="Pessoas estudando"
            width={300}
            height={300}
            className="rounded-full relative z-10 select-none drop-shadow-[0_0_12px_rgba(139,92,246,0.4)]"
            draggable={false}
          />
        </div>

        <h2 className="max-w-xs text-2xl font-semibold text-[#A78BFA]">
          O jeito divertido de transformar sua rotina em uma aventura de
          evolução.
        </h2>
      </section>

      {/* ===== BOTÕES ===== */}
      <footer className="flex w-full max-w-sm flex-col gap-4 pb-10">
        <Button
          isIconOnly
          onClick={() => signIn("google")}
          className=" flex w-full rounded-2xl bg-[#8B5CF6] py-6 text-lg font-extrabold text-white shadow-lg shadow-[#8B5CF6]/30 transition hover:bg-[#7C3AED] hover:shadow-[#7C3AED]/40 active:scale-95"
        >
          <Image
            src="/googleLogo.png"
            alt="logo google"
            width={25}
            height={25}
          />
          ENTRAR COM GOOGLE
        </Button>

        <div className="text-sm text-[#A0A0A8] mt-2">
          Ao continuar, você concorda com nossos{" "}
          <span className="text-[#A78BFA] hover:underline cursor-pointer">
            termos de uso
          </span>
          .
        </div>
      </footer>
    </main>
  );
}
