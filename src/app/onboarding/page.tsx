"use client";

import { Button, Card } from "@nextui-org/react";
import { Book, BookOpen, Calendar, Target, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Onboarding() {
  const [selected, setSelected] = useState<string | null>(null);

  const router = useRouter();

  const nextPage = () => {
    console.log("page");

    router.push("/intensity");
  };

  const options = [
    { id: "focus", label: "Foco e Disciplina", icon: Target },
    { id: "study", label: "Hábitos de Estudo", icon: BookOpen },
    { id: "reading", label: "Leitura Diária", icon: Book },
    { id: "routine", label: "Organização da Rotina", icon: Calendar },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0B0B0F] px-6 py-12 text-[#EDEDED] relative overflow-hidden">
      {/* ===== GRADIENT BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-[#4C1D95]/30 blur-[120px]" />
      </div>

      {/* ===== HEADER ===== */}
      <header className="flex flex-col items-center gap-3 mt-10">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-[#8B5CF6]/40 blur-lg rounded-full animate-pulse" />
          <Rocket className="w-8 h-8 text-[#A78BFA] drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" />
        </div>
        <h1 className="text-3xl font-extrabold text-[#C4B5FD] tracking-tight">
          EstudoXP
        </h1>
      </header>

      {/* ===== PERGUNTA ===== */}
      <section className="flex flex-col items-center gap-10 mt-16 w-full max-w-md">
        <h2 className="text-2xl font-extrabold text-center text-[#D6BCFA] leading-snug">
          O que você deseja aprimorar primeiro?
        </h2>

        <div className="grid grid-cols-2 gap-4 w-full">
          {options.map((opt) => (
            <Card
              key={opt.id}
              isPressable
              onClick={() => setSelected(opt.id)}
              className={`
                p-6 flex flex-col items-center justify-center gap-3 rounded-2xl
                transition-all duration-300 cursor-pointer
                ${
                  selected === opt.id
                    ? "border-2 border-[#8B5CF6] bg-[#1A1A1F] shadow-lg shadow-[#8B5CF6]/30 scale-105"
                    : "border border-transparent bg-[#121214] hover:bg-[#18181B] hover:scale-105"
                }
              `}
            >
              <opt.icon className="w-8 h-8 text-[#A78BFA]" />
              <p className="text-lg font-semibold text-[#EDEDED]">
                {opt.label}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== BOTÃO CONTINUAR ===== */}
      <footer className="w-full max-w-sm pb-10">
        <Button
          isDisabled={!selected}
          className="flex w-full rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] py-6 text-lg font-extrabold text-white shadow-lg shadow-[#8B5CF6]/30 transition-all hover:scale-[1.02] hover:shadow-[#7C3AED]/40 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          onClick={() => nextPage()}
        >
          CONTINUAR
        </Button>
      </footer>
    </main>
  );
}
