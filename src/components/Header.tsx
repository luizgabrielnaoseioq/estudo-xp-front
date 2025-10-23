"use client";

import { HeaderProps } from "@/interfaces/HeaderInterface";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeaderComponent({ title }: HeaderProps) {
  const router = useRouter();
  return (
    <header className="container mx-auto flex justify-between items-center h-[8rem]">
      <h1 className="text-2xl font-extrabold">{title}</h1>
      <button
        className="w-12 h-12 bg-violet-500 rounded-md flex justify-center items-center"
        onClick={() => router.back()}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
    </header>
  );
}
