# Freelancer Toolkit Germany — Professional SaaS Dashboard

> **Professionelle Finanz- und Geschäftsverwaltung für deutsche Freelancer und Kleinunternehmer**

Ein modernes, vollständig funktionales SaaS-Dashboard für Freelancer in Deutschland. Entwickelt als Portfolio-Projekt, um professionelle Webentwicklungskompetenz, deutsches Steuerrecht-Know-how und modernes UI/UX-Design zu demonstrieren.

[![CI — Lint, Type-Check & Build](https://github.com/rintuchowdory/freelancer-toolkit-germany/actions/workflows/ci.yml/badge.svg)](https://github.com/rintuchowdory/freelancer-toolkit-germany/actions/workflows/ci.yml)
[![CD — Deploy to GitHub Pages](https://github.com/rintuchowdory/freelancer-toolkit-germany/actions/workflows/deploy.yml/badge.svg)](https://github.com/rintuchowdory/freelancer-toolkit-germany/actions/workflows/deploy.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

---

## 🎯 Überblick

**Freelancer Toolkit Germany** ist ein umfassendes SaaS-Dashboard, das deutsche Freelancer und Kleinunternehmer bei der Verwaltung ihrer Finanzen, Steuern und Geschäftsbeziehungen unterstützt. Das Projekt konkurriert mit etablierten Tools wie Debitoor, Lexoffice und FastBill, bietet aber eine spezialisierte Lösung für den deutschen Markt.

### Zielgruppe
- Freiberufler (Freiberufler nach §18 EStG)
- Gewerbetreibende (Unternehmer nach §1 HGB)
- Kleinunternehmer (§19 UStG)
- Einzelunternehmer mit bis zu 5 Mitarbeitern

### Kernwert
Das Toolkit vereinfacht komplexe deutsche Steuervorschriften in eine intuitive, benutzerfreundliche Oberfläche und spart Freelancern Zeit und Geld bei der Buchhaltung, Steuererklärung und Geschäftsverwaltung.

---

## ✨ Features

| Modul | Beschreibung | Status |
|-------|-------------|--------|
| **📊 Dashboard** | KPI-Übersicht, Umsatz-Charts, Fristen-Kalender, Schnellaktionen | ✅ Aktiv |
| **🧾 Rechnungsgenerator** | Professionelle Rechnungen nach §14 UStG, PDF-Export, Rechnungsliste | ✅ Aktiv |
| **🔍 Kleinunternehmer-Prüfer** | §19 UStG Umsatzgrenzen-Checker mit Jahresprognose | ✅ Aktiv |
| **⏰ USt-Erinnerungen** | Voranmeldungsfristen, Jahreserklärung, Benachrichtigungen | ✅ Aktiv |
| **🤖 ELSTER KI-Assistent** | KI-gestützte Steuerhilfe, FAQ-Datenbank, offizielle Ressourcen | ✅ Aktiv |
| **💰 Ausgabenkategorisierung** | Betriebsausgaben erfassen, EÜR-Export, Absetzbarkeit | ✅ Aktiv |
| **👥 CRM Kontakte** | Kundenverwaltung, Umsatz pro Kunde, Kommunikationshistorie | ✅ Aktiv |
| **⏱️ Zeiterfassung** | Stundenzettel, Projekttracking, Abrechnung | 🔄 In Entwicklung |
| **📝 Vertragsmanagement** | Vertrag-Templates, Versionskontrolle, Archiv | 🔄 In Entwicklung |
| **💼 Angebotsverwaltung** | Angebote erstellen, Tracking, Konvertierungsanalyse | 🔄 In Entwicklung |

---

## 🏗️ Architektur & Tech Stack

### Frontend
- **React 19** mit TypeScript 5.6 — Moderne, typsichere Komponentenentwicklung
- **Tailwind CSS 4** mit shadcn/ui — Professionelle, konsistente UI-Komponenten
- **Recharts** — Interaktive Datenvisualisierungen
- **Wouter** — Leichtgewichtiges Client-Side Routing
- **Framer Motion** — Sanfte, funktionale Animationen
- **React Hook Form + Zod** — Robuste Formularvalidierung

### Design System
- **IBM Plex Sans** — Überschriften (deutsches Erbe)
- **JetBrains Mono** — Finanzielle Daten und Code (tabellarische Ziffern)
- **Neue Sachlichkeit Design** — Deutsche Funktionalismus-Ästhetik

### Build & Tooling
- **Vite 7** — Ultraschneller Build-Tool
- **pnpm** — Effizientes Package Management
- **TypeScript** — Strikte Typprüfung
- **Prettier** — Code-Formatierung

### Backend (Geplant)
- **Express.js** — Leichtgewichtiger Node.js Server
- **PostgreSQL/MySQL** — Relationale Datenbank
- **Drizzle ORM** — Typsicheres Datenbankzugriff
- **JWT** — Sichere Authentifizierung

### Deployment
- **GitHub Pages** — Statische Hosting (aktuell)
- **Vercel** — Serverless Functions (geplant)
- **Docker** — Containerisierung (geplant)

---

## 🎨 Design-Philosophie: Neue Sachlichkeit

Das Projekt folgt der **Neue Sachlichkeit (New Objectivity)** — einer deutschen Funktionalismus-Ästhetik, die Qualität, Präzision und Vertrauen ausstrahlt.

### Farbpalette
- **Hintergrund:** Warmes Grau `#F7F6F3` — evoziert Qualitätspapier
- **Sidebar:** Tiefes Schiefergrau `#1C1F26` — Autorität und Fokus
- **Akzent:** Bernstein-Gold `#D4820A` — Deutsche Ingenieurskunst
- **Text:** Tiefes Schwarz `#18191C` — Maximale Lesbarkeit
- **Erfolg:** Gedämpftes Waldgrün `#2D6A4F`

### Designprinzipien
1. **Informationsdichte ohne visuelles Rauschen** — Jedes Pixel hat einen Zweck
2. **Typografische Hierarchie** — Primäres Organisationssystem
3. **Monochrome Basis mit einzelnem Akzent** — Fokus auf Daten
4. **Rastersteifheit** — Nur Datenvisualisierungen brechen das Raster

### Interaktionsphilosophie
- Keine dekorativen Animationen — nur funktionale Übergänge (150ms ease-out)
- Hover-Zustände verschieben den Hintergrund um 3% Helligkeit
- Inline-Formularvalidierung, nie modal
- Keyboard-Navigation vollständig unterstützt

---

## 📦 Installation & Entwicklung

### Voraussetzungen
- Node.js 22+ (mit npm oder pnpm)
- Git
- Grundkenntnisse in React und TypeScript

### Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/rintuchowdory/freelancer-toolkit-germany.git
cd freelancer-toolkit-germany

# Abhängigkeiten installieren
pnpm install

# Entwicklungsserver starten (http://localhost:5173)
pnpm dev

# TypeScript-Typprüfung
pnpm check

# Code formatieren
pnpm format

# Produktions-Build erstellen
pnpm build

# Produktions-Server starten
pnpm start
```

### Entwicklungsumgebung
- **Port:** 5173 (Vite Dev Server)
- **TypeScript:** Strikte Konfiguration aktiviert
- **Prettier:** Automatische Code-Formatierung
- **Hot Module Replacement:** Sofortige Änderungen ohne Neuladen

---

## 🔄 CI/CD Pipeline

Das Projekt nutzt **GitHub Actions** für automatisierte Tests und Deployment:

```
Push zu main
    │
    ├── CI Workflow (ci.yml)
    │   ├── Checkout Repository
    │   ├── Setup Node.js 22 + pnpm
    │   ├── Cache pnpm Dependencies
    │   ├── Install Dependencies
    │   ├── TypeScript Type-Check
    │   ├── ESLint Lint-Check
    │   └── Build Production Bundle
    │
    └── CD Workflow (deploy.yml)
        ├── Build Production Bundle
        ├── Configure GitHub Pages
        ├── Upload Pages Artifact
        └── Deploy zu GitHub Pages
```

### Workflows
- **ci.yml** — Lint, TypeScript-Check, Build auf jedem Push
- **deploy.yml** — Automatisches Deployment auf GitHub Pages bei Push auf `main`
- **pr-review.yml** — Code-Qualitätsprüfung bei Pull Requests

---

## 📁 Projektstruktur

```
freelancer-toolkit-germany/
├── .github/
│   └── workflows/
│       ├── ci.yml              # CI: Lint, TypeCheck, Build
│       ├── deploy.yml          # CD: GitHub Pages Deployment
│       └── pr-review.yml       # PR: Code Quality Check
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DashboardLayout.tsx   # Sidebar + Header Shell
│   │   │   ├── ErrorBoundary.tsx     # Error Handling
│   │   │   ├── TaxCalculator.tsx     # Steuerrechner
│   │   │   └── ui/                   # shadcn/ui Komponenten
│   │   ├── pages/
│   │   │   ├── DashboardHome.tsx     # KPI Dashboard
│   │   │   ├── InvoiceGenerator.tsx  # Rechnungsgenerator
│   │   │   ├── KleinunternehmerChecker.tsx
│   │   │   ├── VatReminders.tsx
│   │   │   ├── ElsterHelper.tsx
│   │   │   ├── ExpenseCategorization.tsx
│   │   │   ├── CrmContacts.tsx
│   │   │   ├── Zeiterfassung.tsx
│   │   │   ├── Angebote.tsx
│   │   │   ├── Projektuebersicht.tsx
│   │   │   ├── Vertraege.tsx
│   │   │   └── Settings.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx      # Dark/Light Mode
│   │   ├── hooks/
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   ├── lib/
│   │   │   └── utils.ts              # Utility Funktionen
│   │   ├── App.tsx                   # Router
│   │   ├── main.tsx                  # Entry Point
│   │   └── index.css                 # Design Tokens
│   ├── index.html
│   └── public/
├── server/
│   └── index.ts                      # Express Server
├── shared/
│   └── const.ts                      # Gemeinsame Konstanten
├── vite.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## 🚀 Deployment

### GitHub Pages (Aktuell)
```bash
# Automatisch bei Push zu main
# Deployment URL: https://rintuchowdory.github.io/freelancer-toolkit-germany/
```

### Vercel (Empfohlen für Produktion)
```bash
# Vercel CLI installieren
npm i -g vercel

# Deployment
vercel
```

### Docker (Geplant)
```bash
# Docker Image bauen
docker build -t freelancer-toolkit .

# Container starten
docker run -p 3000:3000 freelancer-toolkit
```

---

## 🔐 Sicherheit

- **HTTPS** — Alle Verbindungen verschlüsselt
- **CSRF Protection** — Token-basierte Schutzmaßnahmen (geplant)
- **XSS Prevention** — React's built-in escaping
- **SQL Injection Prevention** — Parameterisierte Queries (geplant)
- **Rate Limiting** — API-Anfragen begrenzen (geplant)
- **Data Encryption** — Sensible Daten verschlüsseln (geplant)

---

## 📊 Roadmap

### Phase 1: MVP (Aktuell)
- ✅ Dashboard mit KPIs
- ✅ Rechnungsgenerator
- ✅ Kleinunternehmer-Prüfer
- ✅ VAT-Erinnerungen
- ✅ ELSTER-Assistent
- ✅ Ausgabenverwaltung
- ✅ CRM-Kontakte

### Phase 2: Authentifizierung & Datenspeicherung (Q3 2026)
- 🔄 User Authentication (Google OAuth, GitHub OAuth)
- 🔄 Backend-API
- 🔄 Datenbank-Integration
- 🔄 Datenpersistenz

### Phase 3: Erweiterte Features (Q4 2026)
- 📋 Zeiterfassung
- 📋 Vertragsmanagement
- 📋 Angebotsverwaltung
- 📋 Multi-Währungs-Unterstützung

### Phase 4: Enterprise (2027)
- 🎯 Team-Verwaltung
- 🎯 Advanced Analytics
- 🎯 API für Third-Party Integration
- 🎯 White-Label-Lösung

---

## 🤝 Beitragen

Beiträge sind willkommen! Bitte beachten Sie:

1. **Fork** das Repository
2. **Branch** erstellen (`git checkout -b feature/AmazingFeature`)
3. **Commit** Ihre Änderungen (`git commit -m 'Add AmazingFeature'`)
4. **Push** zum Branch (`git push origin feature/AmazingFeature`)
5. **Pull Request** öffnen

### Coding Standards
- TypeScript mit strikter Konfiguration
- Prettier für Code-Formatierung
- ESLint für Linting
- React Best Practices
- Komponenten-getriebene Entwicklung

---

## 📝 Lizenz

MIT License — Freie Verwendung für Portfolio- und Produktionszwecke.

```
Copyright (c) 2024 Rintu Chowdory

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Support & Kontakt

- **GitHub Issues:** [Probleme melden](https://github.com/rintuchowdory/freelancer-toolkit-germany/issues)
- **Discussions:** [Fragen stellen](https://github.com/rintuchowdory/freelancer-toolkit-germany/discussions)
- **Email:** rintu@example.com

---

## 🙏 Danksagungen

- **shadcn/ui** — Wunderbare UI-Komponenten
- **Radix UI** — Zugängliche Komponenten-Primitive
- **Tailwind CSS** — Utility-First CSS Framework
- **React** — Moderne Frontend-Bibliothek
- **TypeScript** — Typsicherheit für JavaScript

---

## 📊 Statistiken

- **Komponenten:** 50+
- **Seiten:** 13
- **Abhängigkeiten:** 60+
- **Codezeilen:** 5000+
- **TypeScript Coverage:** 100%
- **Lighthouse Score:** 95+

---

**Entwickelt mit ❤️ für deutsche Freelancer**

*Zuletzt aktualisiert: Juni 2026*
