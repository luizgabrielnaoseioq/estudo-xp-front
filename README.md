# 🎮 EstudoXP — Gamifique seu aprendizado

> Transforme disciplina, foco e consistência em um jogo.

O **EstudoXP** é uma plataforma gamificada que transforma o crescimento pessoal em uma experiência competitiva e divertida.
A ideia é simples: estudar, evoluir e competir com amigos enquanto você constrói hábitos reais e conquista metas.

---

## 🚀 Visão do Projeto

O aplicativo funciona como um **jogo de desenvolvimento pessoal**.
Você cria uma conta com o **Google**, entra em desafios semanais, participa de rankings e ganha XP conforme cumpre metas reais — como acordar cedo, estudar, focar por blocos de tempo, ler, etc.

**Missão:** Ajudar as pessoas a prosperar de forma saudável e competitiva, transformando o esforço diário em progresso visível e recompensador.

---

## ⚙️ Tecnologias Principais

| Stack              | Tecnologias                                      |
| ------------------ | ------------------------------------------------ |
| **Frontend Web**   | Next.js 14, Tailwind CSS, NextUI, NextAuth       |
| **Backend**        | NestJS, Prisma, MySQL                            |
| **Mobile**         | React Native (futuro)                            |
| **Infraestrutura** | Render (API), Vercel (Web), Hostinger/MySQL (DB) |
| **Autenticação**   | Google OAuth 2.0 (NextAuth + Google API)         |

---

## 🧩 Estrutura Inicial

```

estudoxp/
│
├── app/
│   ├── login/                # Tela de login (Google Auth)
│   ├── dashboard/            # Painel inicial do usuário
│   └── api/auth/[...nextauth]/  # Rota de autenticação (NextAuth)
│
├── components/               # Componentes reutilizáveis (botões, cards, etc)
├── styles/                   # Estilos globais e Tailwind
├── .env.local                # Variáveis de ambiente
└── README.md

```

---

## 🔐 Autenticação

O login é feito **exclusivamente via Google**, para evitar armazenamento desnecessário de senhas e facilitar a entrada dos usuários.

Fluxo:

1. Usuário clica em “Entrar com Google”.
2. O app usa o **NextAuth** para autenticar via OAuth 2.0.
3. O token recebido é validado pelo backend (NestJS), que cria o usuário no banco se não existir.
4. O usuário é redirecionado para o **Dashboard**, onde começa a jornada.

---

## 🧠 Conceito de Gamificação

Cada jogador possui:

- **XP** (experiência): ganha ao completar tarefas.
- **Streak**: sequência de dias cumprindo metas.
- **Level**: aumenta conforme o XP acumulado.
- **Ranking**: comparação com amigos e comunidade.

Tipos de desafios:

- 🌅 Rotina: acordar cedo, fazer leitura, dormir no horário.
- 📚 Estudo: completar pomodoros ou metas de tempo.
- ⚔️ Competitivo: desafios entre amigos.
- 💬 Social: estudar em grupo, motivar outros jogadores.

---

## 🧱 Roadmap

### ✅ MVP 1.0 — Base

- [x] Login com Google (NextAuth)
- [x] Dashboard com dados do usuário
- [ ] Integração NestJS + Prisma (criação automática de usuários)
- [ ] Sistema básico de desafios e XP
- [ ] Ranking semanal

### 🔜 MVP 2.0 — Gamificação Real

- [ ] Modo foco com temporizador Pomodoro
- [ ] Validação de desafios com prova (foto, timer, sensor)
- [ ] Missões semanais automáticas
- [ ] Sistema de reputação

### 🌍 Futuro

- [ ] Aplicativo React Native (modo foco + notificações)
- [ ] IA Coach para recomendar desafios personalizados
- [ ] Marketplace de recompensas (skins, conquistas visuais)
- [ ] Sistema de clãs e eventos sazonais

---

## 💡 Filosofia

> “A verdadeira vitória é vencer o seu eu de ontem —
> mas competir com amigos torna isso inevitável.”

EstudoXP quer ser mais que um app: um **movimento pela disciplina gamificada**.

---

## 💻 Rodando o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/estudo-xp.git
cd estudo-xp
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local`:

```env
GOOGLE_CLIENT_ID=SEU_CLIENT_ID
GOOGLE_CLIENT_SECRET=SEU_SECRET
NEXTAUTH_SECRET=uma_chave_unica
NEXTAUTH_URL=http://localhost:3000
```

### 4. Inicie o servidor

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

---

## 🧑‍💻 Contribuidores

- [@LuizGabrielDev](https://github.com/seuusuario) – Idealizador & Full Stack Dev
- (Adicione outros conforme entrarem no time 🚀)

---

## 🏁 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para estudar, contribuir e evoluir com a ideia 💪
