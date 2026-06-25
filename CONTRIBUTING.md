# Beitragen zu Freelancer Toolkit Germany

Vielen Dank für Ihr Interesse, zum Freelancer Toolkit Germany beizutragen! Dieses Dokument enthält Richtlinien und Anweisungen für Beiträge.

## Code of Conduct

Wir verpflichten uns, einen offenen und einladenden Raum für alle zu schaffen. Bitte behandeln Sie andere mit Respekt und Höflichkeit.

## Wie man beiträgt

### 1. Issues melden

Wenn Sie einen Bug gefunden haben oder eine Funktionsanfrage haben:

1. Überprüfen Sie zuerst die [bestehenden Issues](https://github.com/rintuchowdory/freelancer-toolkit-germany/issues)
2. Erstellen Sie ein neues Issue mit einer klaren Beschreibung
3. Fügen Sie Screenshots oder Code-Beispiele hinzu, wenn relevant
4. Verwenden Sie die Issue-Templates, falls verfügbar

### 2. Pull Requests einreichen

#### Vorbereitung
```bash
# 1. Repository forken
# 2. Lokales Repository klonen
git clone https://github.com/YOUR_USERNAME/freelancer-toolkit-germany.git
cd freelancer-toolkit-germany

# 3. Branch erstellen
git checkout -b feature/your-feature-name
# oder
git checkout -b fix/your-bug-fix

# 4. Abhängigkeiten installieren
pnpm install
```

#### Entwicklung
```bash
# Entwicklungsserver starten
pnpm dev

# TypeScript-Check
pnpm check

# Code formatieren
pnpm format

# Build testen
pnpm build
```

#### Commit-Richtlinien

Verwenden Sie aussagekräftige Commit-Nachrichten:

```
feat: Neue Funktion hinzufügen
fix: Bug beheben
docs: Dokumentation aktualisieren
style: Code-Stil ändern (kein funktionaler Unterschied)
refactor: Code umstrukturieren
perf: Performance verbessern
test: Tests hinzufügen oder aktualisieren
chore: Abhängigkeiten aktualisieren
```

Beispiele:
```bash
git commit -m "feat: Dunkelmodus für Dashboard hinzufügen"
git commit -m "fix: Rechnungsnummern-Formatierung korrigieren"
git commit -m "docs: README aktualisieren"
```

#### Push und Pull Request

```bash
# Änderungen pushen
git push origin feature/your-feature-name

# Pull Request auf GitHub erstellen
# - Aussagekräftigen Titel verwenden
# - Beschreibung der Änderungen hinzufügen
# - Relevante Issues verlinken (#123)
# - Screenshots/GIFs hinzufügen, falls UI-Änderungen
```

## Coding Standards

### TypeScript
- Strikte Typprüfung aktiviert
- Keine `any` Typen ohne guten Grund
- Interfaces für Props und State verwenden
- Generics für wiederverwendbare Komponenten

```typescript
// ✅ Gut
interface UserProps {
  name: string;
  email: string;
  onSave: (user: User) => void;
}

// ❌ Schlecht
function User(props: any) {
  // ...
}
```

### React Komponenten
- Funktionale Komponenten mit Hooks
- Aussagekräftige Komponentennamen
- Props-Destructuring verwenden
- Komponenten in separaten Dateien

```typescript
// ✅ Gut
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

// ❌ Schlecht
export function btn(props) {
  return <button {...props} />;
}
```

### Styling
- Tailwind CSS Utility-Klassen verwenden
- Keine inline Styles
- Konsistente Spacing und Farben
- Dark Mode unterstützen

```typescript
// ✅ Gut
<div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow">
  {/* Content */}
</div>

// ❌ Schlecht
<div style={{ padding: '16px', backgroundColor: 'white' }}>
  {/* Content */}
</div>
```

### Komponenten-Struktur
```
components/
├── MyComponent.tsx          # Komponente
├── MyComponent.test.tsx     # Tests
└── index.ts                 # Export
```

### Dateibenennungen
- Komponenten: PascalCase (`DashboardHome.tsx`)
- Utilities: camelCase (`useComposition.ts`)
- Konstanten: UPPER_SNAKE_CASE (`const.ts`)
- Styles: Tailwind CSS (keine separaten CSS-Dateien)

## Dokumentation

### README Updates
- Änderungen an Features in README dokumentieren
- Neue Befehle hinzufügen, falls relevant
- Architektur-Änderungen dokumentieren

### Code Comments
- Komplexe Logik erklären
- Warum, nicht Was (Code zeigt das Was)
- JSDoc für öffentliche Funktionen

```typescript
// ✅ Gut
/**
 * Berechnet die Umsatzsteuer basierend auf dem Betrag
 * @param amount - Bruttobetrag in Euro
 * @param rate - Steuersatz (z.B. 0.19 für 19%)
 * @returns Umsatzsteuer in Euro
 */
function calculateVAT(amount: number, rate: number): number {
  return amount * rate;
}

// ❌ Schlecht
// Berechne Steuer
const tax = amount * 0.19;
```

## Testing

### Unit Tests
```bash
pnpm test
```

### Komponenten-Tests
- Kritische Komponenten testen
- User Interactions simulieren
- Edge Cases abdecken

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('sollte auf Klick reagieren', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    screen.getByText('Click me').click();
    expect(handleClick).toHaveBeenCalled();
  });
});
```

## Performance

- Komponenten-Memoization verwenden, wo sinnvoll
- Unnötige Re-Renders vermeiden
- Bilder optimieren
- Lazy Loading für große Komponenten

```typescript
// ✅ Gut
export const Dashboard = React.memo(function Dashboard(props) {
  return <div>{/* Content */}</div>;
});

// Lazy Loading
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

## Accessibility (a11y)

- WCAG 2.1 Level AA Standards einhalten
- Semantisches HTML verwenden
- ARIA-Labels wo nötig
- Keyboard Navigation unterstützen
- Farbkontrast überprüfen

```typescript
// ✅ Gut
<button 
  aria-label="Menü öffnen"
  onClick={handleMenuOpen}
>
  <MenuIcon />
</button>

// ❌ Schlecht
<div onClick={handleMenuOpen}>
  <MenuIcon />
</div>
```

## Sicherheit

- Keine sensiblen Daten in Code hardcoden
- Environment Variables für Secrets verwenden
- Input Validation durchführen
- XSS Prevention beachten (React macht das meist automatisch)

```typescript
// ✅ Gut
const apiKey = process.env.REACT_APP_API_KEY;

// ❌ Schlecht
const apiKey = "sk-1234567890abcdef";
```

## Review-Prozess

1. Automatische Checks (CI/CD)
   - TypeScript Type-Check
   - ESLint Linting
   - Build Test

2. Code Review
   - Mindestens ein Maintainer Review
   - Feedback adressieren
   - Erneut reviewen nach Änderungen

3. Merge
   - Squash Commits (optional)
   - Delete Branch nach Merge

## Fragen?

- GitHub Discussions nutzen
- Issues für Bugs und Features
- Email: rintu@example.com

---

**Vielen Dank für Ihre Beiträge! 🙏**
