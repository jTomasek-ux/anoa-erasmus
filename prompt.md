# ANOA Erasmus+ — Website Build Prompt

Build a single-page marketing site for **ANOA Erasmus+** (Czech school Erasmus+ program). Language: **Czech**. Stack: **Next.js App Router**, **Tailwind CSS v4**, **Framer Motion**, **Lucide React**.

---

## Design system

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| bg | `#F5F3EE` | Main background |
| paper | `#ECEAE4` | Alternate section background |
| ink | `#111111` | Primary text, dark footer |
| accent | `#8C7B6B` | Highlights, italic accents |
| dark | `#1A1816` | Manifesto section background |
| muted | `#706B65` | Secondary text |
| border | `#D8D3CC` | Borders, dividers |

### Typography
- **Sans:** Space Grotesk (400–700) — body, headings
- **Serif:** DM Serif Display (italic for emphasis) — hero tagline, section accents
- **Mono:** Space Mono — labels, small caps, footer meta

Load via Google Fonts in `layout.tsx`.

### Global details
- Smooth scroll (`html { scroll-behavior: smooth }`)
- Subtle film-grain noise overlay on body (fixed, low opacity SVG turbulence)
- Section labels: mono, `0.65rem`, wide letter-spacing, uppercase, accent color
- Rounded cards: `rounded-[2rem]`, footer top: `rounded-t-[3.5rem]`
- Animations: Framer Motion fade-up on scroll (`useInView`, once), staggered children, spring hover on buttons

---

## Page structure

### Navbar (fixed, pill-shaped)
- Logo: **ANOA** + accent **+**
- Links: O programu (`#o-programu`), Projekty (`#projekty`)
- CTA: Zjistit více → `#o-programu`
- Transparent on hero; on scroll (>80px): cream background, blur, border, dark text
- Mobile: hamburger menu with dropdown panel

### Hero (full viewport)
- Background: European city/architecture photo (Unsplash), cover, centered
- Gradients: dark bottom + left overlay
- Eyebrow: `ANOA — Erasmus+ Program`
- Headline line 1 (sans bold): **Vzdělávání**
- Headline line 2 (serif italic, large): **bez hranic.**
- Subtext: Erasmus+ je vzdělávací program Evropské unie, který propojuje studenty a školy napříč celou Evropou.
- CTAs: **Zjistit více** (filled cream pill) → `#o-programu`, **Naše projekty** (outline) → `#projekty`
- Scroll indicator bottom-right (animated arrow)

### Section 01 — O programu (`#o-programu`)
- Background: bg
- Label: `01 — O programu`
- Heading: **Vzdělávání** + serif italic *v pohybu.*
- Copy (2 columns on desktop):
  - Erasmus+ je vzdělávací program pod záštitou Evropské unie, jehož cílem je podpora spolupráce a mobilit ve všech sférách vzdělávání.
  - Cílem Erasmu je zvýšení kvality a přiměřenosti kvalifikací a dovedností. Na naší škole věříme, že stejně důležité jako studium je i praktické použití naučených znalostí.
  - Různé druhy projektů s partnerskými školami ze zahraničí jsou jednou z cest, které k této praxi napomáhají. Nedílnou součástí je pak pro studenty i možnost využití cizích jazyků a vyzkoušení si svých jazykových kompetencí.
- Divider: `EU Program od 1987`

### Section 02 — Co přinášíme
- Background: paper
- Label: `02 — Co přinášíme`
- 3 cards (hover lift):

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 01 | Globe | Mezinárodní spolupráce | Projektové Erasmy propojují instituce napříč Evropou. Každý projekt přináší nové perspektivy a zkušenosti, které nelze získat doma. |
| 02 | MessageSquare | Jazykové dovednosti | Reálná komunikace v cizím jazyce je nenahraditelná. Erasmus+ dává studentům příležitost ověřit si jazykové kompetence v autentickém prostředí. |
| 03 | Backpack | Praktické zkušenosti | Výjezdy do partnerských škol, tematické úkoly a videokonference — zkušenosti, které žádná učebnice nenaučí. |

### Manifesto (dark section)
- Background: dark `#1A1816`, subtle architecture texture at 7% opacity
- Line 1: Tradiční výuka se zaměřuje na: **teorii ve třídách.**
- Line 2: My se zaměřujeme na:
- Large serif italic: **skutečné zkušenosti** + accent *v Evropě.*

### Section 03 — Projekty (`#projekty`)
- Background: bg
- Label: `03 — Projekty`
- Heading: **Erasmus** + serif italic *projekty.*
- Intro: Projektové Erasmy jsou zacílené na spolupráci mezi jednotlivými institucemi. Výhodou těchto projektů je jejich rozmanitost náplně.
- Details (3 paragraphs):
  1. Každý program má své téma a výstupy jsou vždy jiné — záleží na domluvě mezi zúčastněnými organizacemi.
  2. Obecně se snažíme vybírat projekty, které prohlubují ekonomické, ekologické a dobrovolnické dovednosti spojené s jazykovou vybaveností.
  3. Studenti se účastní videokonferencí, plní tematické úkoly a v různě velkých skupinách mají možnost vycestovat do partnerských škol.
- Stats row:

| Value | Label |
|-------|-------|
| EU | Program |
| 27+ | Zemí zapojeno |
| ∞ | Zkušeností |

### Footer
- Background: ink, rounded top
- Brand: ANOA+ — Erasmus+ program naší školy — propojujeme studenty s Evropou a světem.
- Navigace: O programu, Projekty
- Zdroje (external, new tab):
  - Erasmus+ EU → https://erasmus-plus.ec.europa.eu
- Bottom: green pulse “Systém aktivní”, © 2025 ANOA Erasmus+

---

## Metadata
- **title:** ANOA Erasmus+
- **description:** Erasmus+ je vzdělávací program Evropské unie, který propojuje studenty a školy napříč celou Evropou.
- **html lang:** `cs`

---

## Dependencies
- `framer-motion`
- `lucide-react`

## File structure (suggested)
```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Values.tsx
  Manifesto.tsx
  Projects.tsx
  Footer.tsx
```
