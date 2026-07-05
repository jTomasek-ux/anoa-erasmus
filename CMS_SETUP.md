# Správa obsahu webu (pro učitele)

Web ANOA Erasmus+ má jednoduchý admin panel. **Nemusíte znát programování** — jen vyplňujete formuláře a klikáte na **Publikovat**.

## Přihlášení

1. Otevřete **[anoa-erasmus.vercel.app/admin](https://anoa-erasmus.vercel.app/admin)**
2. Přihlaste se přes **Google** (školní účet)
3. Uvidíte menu v češtině

## Co můžete měnit


| V menu               | Co tam najdete                                       |
| -------------------- | ---------------------------------------------------- |
| **Nastavení webu**   | Logo, úvodní fotka, nadpisy, kontaktní e-mail, menu  |
| **Stránky**          | Texty jednotlivých stránek (Projekty, Akreditace, …) |
| **Názory studentů**  | Přidat / upravit rozhovory se studenty               |
| **Náš tým**          | Fotka, životopis, otázky a odpovědi                  |
| **Partnerské školy** | Školy, loga, fotogalerie                             |


## Jak upravit text

1. V levém menu klikněte na položku (např. **Stránky → Projekty**)
2. Upravte text v polích
3. Klikněte **Publikovat** (vpravo nahoře)
4. Počkejte cca 1 minutu — změna se objeví na webu

## Jak nahrát fotku

1. Klikněte do pole **Soubor** nebo **Fotografie**
2. Přetáhněte obrázek z počítače, nebo klikněte a vyberte soubor
3. Vyplňte **Popis obrázku** (krátký popis — pomáhá nevidomým návštěvníkům)
4. Klikněte **Publikovat**

## Tipy

- **Nepanikařte** — dokud nekliknete Publikovat, na webu se nic nezmění
- **Design a barvy** mění jen Tomáš (programátor) — vy upravujete jen texty a fotky
- Při problému pište na **[m.najmanova@anoa.cz](mailto:m.najmanova@anoa.cz)** nebo Tomášovi

---

# Nastavení pro vývojáře (Tomáš)

## 1. Vytvořit Sanity projekt

1. Jděte na [sanity.io/manage](https://www.sanity.io/manage)
2. Vytvořte projekt **anoa-erasmus**, dataset **production**
3. Zkopírujte **Project ID**

## 2. Proměnné prostředí

V `.env.local` a na Vercelu:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=váš_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_TOKEN=token_s_právy_editor
SANITY_REVALIDATE_SECRET=náhodný_dlouhý_řetězec
```

## 3. Google přihlášení pro učitelku

V [sanity.io/manage](https://www.sanity.io/manage) → váš projekt → **API** → **CORS origins**:

- Přidejte `https://anoa-erasmus.vercel.app`
- Přidejte `http://localhost:3000` (pro vývoj)

V **Members** pozvěte e-mail učitelky jako **Editor**.

V **Authentication** zapněte **Google** provider.

## 4. Webhook (automatická aktualizace webu po publikování)

V Sanity → **API** → **Webhooks** → Create:

- **URL:** `https://anoa-erasmus.vercel.app/api/revalidate`
- **Method:** POST
- **Headers:** `Authorization: Bearer VÁŠ_SANITY_REVALIDATE_SECRET`
- **Trigger on:** Create, Update, Delete
- **Filter:** `_type in ["siteSettings", "page", "studentQuote", "teamMember", "partnerSchool"]`

## 5. Lokální vývoj

```bash
npm run dev
```

Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## 6. Naplnění obsahu

Dokud není Sanity naplněné, web zobrazuje stávající obsah z kódu (záložní režim).

Po vytvoření projektu spusťte (jednorázově — naplní admin stávajícím obsahem webu):

```bash
npm run seed:cms
```

Tím se do Sanity zkopíruje veškerý text, který je teď na webu. Pak v `/admin` uvidíte předvyplněné stránky.

(nebo ručně vytvořte dokument **Nastavení webu** v adminu a postupně doplňte stránky)