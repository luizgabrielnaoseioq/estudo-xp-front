"use client";

import { Button, Card } from "@nextui-org/react";
import { Zap, Flame, Moon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function IntensityLevel() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const levels = [
    { id: "light", label: "Leve", desc: "10–15 min por dia", icon: Moon },
    { id: "medium", label: "Equilibrado", desc: "30 min por dia", icon: Zap },
    { id: "hard", label: "Intenso", desc: "1h+ por dia", icon: Flame },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0B0B0F] px-6 py-12 text-[#EDEDED] relative overflow-hidden">
      {/* Fundo com gradiente */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-[#4C1D95]/30 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="mt-10 text-center">
        <h1 className="text-2xl font-extrabold text-[#C4B5FD]">
          Escolha seu ritmo
        </h1>
        <p className="text-sm text-[#A0A0A8] mt-2 max-w-xs mx-auto">
          Defina a intensidade da sua jornada. Isso ajuda a ajustar seus
          desafios diários e o ganho de XP.
        </p>
      </header>

      {/* Cards */}
      <section className="flex flex-col items-center gap-4 mt-12 w-full max-w-xs">
        {levels.map((lvl) => (
          <Card
            key={lvl.id}
            isPressable
            onClick={() => setSelected(lvl.id)}
            className={`p-6 flex flex-col items-center gap-2 w-full rounded-2xl transition-all duration-300 cursor-pointer ${
              selected === lvl.id
                ? "border-2 border-[#8B5CF6] bg-[#1A1A1F] shadow-lg shadow-[#8B5CF6]/30 scale-105"
                : "border border-transparent bg-[#121214] hover:bg-[#18181B] hover:scale-105"
            }`}
          >
            <lvl.icon className="w-8 h-8 text-[#A78BFA]" />
            <p className="text-lg font-semibold text-[#EDEDED]">{lvl.label}</p>
            <p className="text-sm text-[#A0A0A8]">{lvl.desc}</p>
          </Card>
        ))}
      </section>

      {/* Botão */}
      <footer className="w-full max-w-sm pb-10">
        <Button
          isDisabled={!selected}
          className="flex w-full rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] py-6 text-lg font-extrabold text-white shadow-lg shadow-[#8B5CF6]/30 transition-all hover:scale-[1.02]  hover:shadow-[#7C3AED]/40 active:scale-95 disabled:opacity-60"
          onClick={() => router.push("/dashboard")}
        >
          COMEÇAR JORNADA
        </Button>
      </footer>
    </main>
  );
}
