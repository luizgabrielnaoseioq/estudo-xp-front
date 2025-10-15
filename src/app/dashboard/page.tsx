"use client";
import { Card } from "@nextui-org/react";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo, user</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">XP: 1200</Card>
        <Card className="p-6">Nível: 5</Card>
        <Card className="p-6">Streak: 8 dias 🔥</Card>
      </div>
    </main>
  );
}
