# MianX — AI-Powered Conversation Strategy Engine

> **Before you reply... know exactly what it will cost you.**

[![Live Demo](https://img.shields.io/badge/Live-mianhassam96.github.io%2FMianX-8B5CF6?style=for-the-badge)](https://mianhassam96.github.io/MianX/)
[![Built by MultiMian](https://img.shields.io/badge/Built%20by-MultiMian-EC4899?style=for-the-badge)](https://multimian.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge)](https://typescriptlang.org)

---

## What is MianX?

MianX is a **conversation strategy engine** that analyzes any message you receive, decodes the hidden intent, predicts the outcome, and gives you the reply that actually wins — before you hit send.

Most people reply on instinct. That is why they lose.

**MianX shows you:**
- What the message actually means (not just what it says)
- How the power dynamic is shifting
- What your reply will cost you
- The exact words that flip it in your favor

---

## Live Demo

**[https://mianhassam96.github.io/MianX/](https://mianhassam96.github.io/MianX/)**

---

## Features

### Core Engine
- **Keyword-based intelligence layer** — detects neediness, passive aggression, emotional distancing, over-explaining, low-value signals
- **4-point analysis** — Hidden Intent, Tone, Risk, Power Shift
- **Warning flags** — flags exactly what is wrong with the message
- **3 reply variants** — Safe (72/100), Bold (88/100), High-Status (94/100)
- **Why it works explanations** — builds trust and teaches the user

### Habit & Retention Loops
- **Before vs After score cards** — animated score bars showing your message vs the improved reply
- **Daily progress dashboard** — Your average / Today count / Best score
- **Streak tracking** — persists across sessions via localStorage
- **Micro addiction feedback** — +1 improved message today, 2 more to reach top 20%
- **Copy & Send button** — one tap to copy the High-Status reply
- **Share score** — shareable text with score + link (native share on mobile)
- **Now send it. Come back when they reply.** — creates a real-world return loop

### Positioning
- **Use Cases** — Dating, Client, Disrespect, Negotiation with live before/after examples
- **Identity Selector** — Dating / Professional / Freelancer / Student with tailored examples
- **Mode System** — Cold Control, High Attraction, Strategic Dominance, Effortless Presence, Instant Impact
- **Social Proof** — Real before/after message transformations with scores

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router, Static Export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deployment | GitHub Pages via GitHub Actions |
| Storage | localStorage (client-side, no backend) |
| Fonts | Inter (Google Fonts) |

---

## Project Structure

`
mianx/
├── .github/workflows/deploy.yml   # Auto-deploy to GitHub Pages
├── public/
│   └── favicon.svg                # Custom MianX favicon
src/app/
    ├── layout.tsx                 # Root layout + metadata
    ├── page.tsx                   # Page composition
    ├── globals.css                # Design system + animations
    └── components/
        ├── Navbar.tsx             # Fixed nav with scroll blur
        ├── Hero.tsx               # Full-viewport hero
        ├── InteractiveDemo.tsx    # Core engine + all loops
        ├── UseCases.tsx           # 4 real situations
        ├── IdentitySelector.tsx   # Personalization layer
        ├── ModeSystem.tsx         # 5 reply modes
        ├── SocialProof.tsx        # Before/after transformations
        └── Footer.tsx             # MultiMian branded footer
`

---

## Getting Started

`ash
git clone https://github.com/Mianhassam96/MianX.git
cd MianX/mianx
npm install
npm run dev
`

Open http://localhost:3000/MianX

---

## Part of the MultiMian Ecosystem

MianX is one of several tools built and maintained by **[MultiMian](https://multimian.com)** — a product-focused web & SaaS development studio.

| Product | Description |
|---------|-------------|
| [MianX](https://mianhassam96.github.io/MianX/) | Conversation strategy engine |
| [MianConvert](https://mianhassam96.github.io/MianConvert/) | Browser-based video converter |
| [MianScan](https://mianhassam96.github.io/MianScan/) | SEO & performance analyzer |
| [ImageKit](https://mianhassam96.github.io/MultiMian-ImageKit/) | All-in-one image toolkit |
| [WaqtX](https://mianhassam96.github.io/MultiMian-WaqtX/) | Productivity & focus system |
| [MianPix](https://mianhassam96.github.io/MianPix/) | Image tools |
| [MianScribe](https://mianscribe.vercel.app/) | Writing assistant |
| [MianSnap](https://mianhassam96.github.io/MianSnap/) | Screenshot tool |

---

## Built By

**Mian Hassam** — Full-stack developer & founder of MultiMian

- Website: [multimian.com](https://multimian.com)
- GitHub: [@Mianhassam96](https://github.com/Mianhassam96)
- LinkedIn: [mianhassam96](https://www.linkedin.com/in/mianhassam96/)
- WhatsApp: [+92 325 883 1437](https://wa.me/923258831437)
- Email: mianhassam96@gmail.com

---

## License

MIT — free to use, fork, and build on.

---

*Built for people who think before they reply.*