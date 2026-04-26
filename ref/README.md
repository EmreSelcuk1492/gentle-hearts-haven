# Attain Energy Healing — Brand & Design System

**Developer & Agent Reference Document**

**Client:** Asli Selcuk · attainenergyhealing.com
**Last updated:** 2026
**File:** `index.html` (homepage reference build)

---

## 1. Brand Overview

**Business:** Holistic energy healing practice offering personalized sessions, courses, and retreats.

**Practitioner:** Asli Selcuk — certified Trainer & Specialist, World Institute of Incurable Diseases (WIID), BEwell Science™ modality. Bilingual: English & Turkish. Based in Washington State, USA.

**Core offering:** A whole-person healing approach addressing the mental, emotional, and spiritual constitution. Methods include breathwork, gentle movement, and guided meditation. Focus on healing chronic stress, burnout, emotional exhaustion, grief, anger, resentment, fatigue, sadness, and despair. Also supports prevention of future physical and emotional health issues by teaching clients self-healing tools.

**Target audience:** Anyone experiencing chronic stress, burnout, emotional pain, or spiritual disconnection — regardless of background, gender, or belief system. Not limited to any demographic.

**Tone of brand:** Calm. Safe. Like a deep exhale. Warm without being vague. Grounded without being heavy. Spiritual without alienating skeptics. Professional without being clinical.

---

## 2. Brand Positioning

### Tagline options (approved by client)

- "Heal what you're carrying. Move forward whole." (primary — used in footer)
- "You weren't always this tired. Let's find your way back." (hero headline)
- "Breathe. Move. Release. Heal." (mantra — used in band element)
- "Your path back to yourself — body, mind, and spirit."

### Voice & copy principles

- **Lead with the feeling, not the modality.** Visitors feel exhausted, sad, stuck, angry. Speak that language first. Introduce BEwell Science™ / energy healing terminology after trust is established.
- **Outcome-first descriptions.** "Feel calmer within a week" beats "BEwell Science™ energy session."
- **Bridge skeptics.** Many ideal clients are skeptical (engineers, corporate professionals, scientists). Language like "nervous system regulation," "breathwork," and "somatic release" is accessible and science-adjacent.
- **Inclusive.** Never gender-specific. Never age-specific. Never faith-specific.
- **Personal.** Asli is the brand. Use her name and voice. Avoid corporate distance.

### Key pain point language (use in copy, SEO, meta)

chronic stress · burnout recovery · emotional exhaustion · persistent fatigue · unexplained sadness · feeling empty or numb · anger & frustration · resentment & bitterness · anxiety without a clear cause · can't relax · spiritual disconnect · feeling stuck · chronic illness & emotional root · trauma · despair

---

## 3. Color Palette

**System:** Cool & Calm (base) + Warm & Luminous (accent)

The palette has two layers. Sage green and slate provide the structural calm. Gold is reserved exclusively for moments of warmth, invitation, and action — it should never dominate.

```css
:root {
  /* ── Cool & Calm — Base ── */
  --bg:          #F6F5F2;   /* Page background — warm off-white */
  --surface:     #E8EEEB;   /* Cards, hero right panel, method section bg */
  --surface-2:   #D4E0DA;   /* About image placeholder, deeper surface */
  --ink:         #2C3230;   /* Primary text, headings */
  --ink-soft:    #4E5752;   /* Body copy, secondary text */
  --ink-muted:   #7A8580;   /* Captions, hints, footer copy */
  --sage:        #7C9A8A;   /* Nav links hover, section labels, list dots, eyebrows */
  --sage-deep:   #4A6B5C;   /* Primary button background, italic heading accent (non-gold) */
  --slate:       #8A9BA8;   /* Alternate cool accent, unused in v1 */
  --slate-light: #C4CDD4;   /* About image surface */
  --dark-bg:     #2C3230;   /* Mantra band, testimonial section, footer */
  --dark-text:   #B8CFC8;   /* Text on dark backgrounds — sage-tinted white */
  --border:      rgba(124, 154, 138, 0.18); /* All dividers and borders */

  /* ── Warm & Luminous — Accent ── */
  --gold:        #B49450;   /* Mantra dividers, quote mark, testimonial attribution, footer nav titles */
  --gold-deep:   #8A6E2C;   /* CTA button bg, nav CTA text, italic em in headlines, credential tags */
  --gold-pale:   #F0E4C0;   /* Method card numbers (background tone) */
  --gold-text:   #F5EDD8;   /* Text on gold-deep backgrounds, mantra band words */
}
```

### Color usage rules

| Element | Color |
|---|---|
| Page background | `--bg` |
| Hero right panel | `--surface` |
| Method section background | `--surface` |
| Dark band (mantra, testimonial, footer) | `--dark-bg` |
| Primary text & headings | `--ink` |
| Body / secondary text | `--ink-soft` |
| Muted text, captions | `--ink-muted` |
| Section labels, eyebrows, list dots | `--sage` |
| Primary action button (sage) | `--sage-deep` bg, white text |
| CTA button (gold) | `--gold-deep` bg, `--gold-text` text |
| Nav CTA | `--gold` border, `--gold-deep` text |
| Italic emphasis in headlines | `--gold-deep` |
| Mantra band words | `--gold-text` on `--dark-bg` |
| Mantra dividers | `--gold` |
| Method card numbers | `--gold-pale` |
| Testimonial quote mark | `--gold` |
| Testimonial attribution | `--gold` |
| Credential tags | `--gold` border, `--gold-deep` text |
| Logo center dot | `#B49450` (= `--gold`) |
| All borders and dividers | `--border` |

### The golden rule of the accent

Gold appears **only** at emotional focal points and calls to action:
- The italic word in the hero headline
- The CTA button
- The mantra band
- Testimonial accents
- The logo center dot
- Credential tags

**Never use gold as a background fill on large surfaces.** It should feel like a warm flicker, not a flood.

---

## 4. Typography

### Fonts

```html
<!-- Include in <head> -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap" rel="stylesheet">
```

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / headings | Cormorant Garamond | 300 (Light) | 28–58px fluid |
| Italic emphasis | Cormorant Garamond | 300 Italic | Same as heading |
| Body copy | Jost | 300 (Light) | 14–16px |
| Labels, eyebrows, caps | Jost | 300 | 9–11px |
| Buttons | Jost | 300 | 11px |

### Typography rules

- **All caps text:** Use sparingly. Only for labels, eyebrows, nav, buttons, and attribution. Never for body copy.
- **Letter spacing:** Caps text should have `letter-spacing: 0.18em–0.3em`. Display text: `letter-spacing: -0.01em` (slight negative at large sizes).
- **Line height:** Display `1.12–1.2` · Body `1.7–1.9` · Tight UI labels `1.0–1.1`
- **Italic:** Reserve for Cormorant Garamond. Italics carry emotional weight — use for the one word in a headline that needs feeling, or for pull quotes.
- **Never bold Jost at 700** — it breaks the light, calm aesthetic. Max weight is 400 for emphasis, 300 for everything else.

### Type scale

```css
/* Display */
h1: clamp(40px, 5vw, 58px)
h2: clamp(28px, 4vw, 42px)
h3: 22–24px

/* Body */
body:    16px / 1.7
lead:    15px / 1.85
small:   14px / 1.85
caption: 13px / 1.7
label:   10–11px / 1.0 (all caps, tracked)
```

---

## 5. Logo

### Mark description

A minimal circular mark consisting of:
- An outer circle (stroke only, `--sage`)
- An inner vertical ellipse (stroke only, `--sage`) — evokes the body/breath
- A horizontal line through the center (stroke, `--sage`) — the horizon / equilibrium
- A filled center dot (`--gold` / `#B49450`) — the warm core, the self
- A subtle outer ring on the dot (stroke, `--gold`, low opacity) — radiating warmth

### Logo SVG (copy-paste ready)

```html
<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="18.5" stroke="#7C9A8A" stroke-width="0.9"/>
  <ellipse cx="20" cy="20" rx="8" ry="14.5" stroke="#7C9A8A" stroke-width="0.9"/>
  <line x1="4" y1="20" x2="36" y2="20" stroke="#7C9A8A" stroke-width="0.9"/>
  <circle cx="20" cy="20" r="2.5" fill="#B49450"/>
  <circle cx="20" cy="20" r="6" stroke="#B49450" stroke-width="0.5" opacity="0.3"/>
</svg>
```

### Wordmark

```
ATTAIN               ← Cormorant Garamond, 300, uppercase, tracked
Energy Healing       ← Jost, 300, 9px, tracked wide, --ink-muted
```

### Logo usage rules

- Minimum size: 28px height
- Clear space: Equal to the height of the "A" on all sides
- On dark backgrounds: Reduce sage stroke opacity to 0.6; gold dot remains full opacity
- Do not recolor the gold dot — it is the brand's warmth signature
- Do not add drop shadows or gradients

---

## 6. Spacing & Layout

### Grid

- **Max content width:** 1100px
- **Side padding:** 2rem (32px) on all viewports
- **Hero:** 2-column, 50/50
- **Content sections:** 2-column for text+list layouts; 3-column for method cards
- **Full-bleed sections:** Mantra band, testimonial, footer (no max-width constraint on background)

### Spacing scale

```
xs:  0.5rem  (8px)   — tight gaps, inline
sm:  1rem   (16px)   — element spacing
md:  2rem   (32px)   — section inner padding
lg:  4rem   (64px)   — between major elements
xl:  6rem   (96px)   — section padding top/bottom
```

### Borders

- All dividers: `1px solid var(--border)` (= `rgba(124,154,138,0.18)`)
- No box shadows. No gradients. No rounded corners (use `border-radius: 2px` maximum for minor UI elements).
- Cards use 2px gap, not borders, to separate — the gap itself is the divider.

---

## 7. UI Patterns

### Section structure

Every content section follows this pattern:

```html
<p class="section-label">Short label</p>   <!-- sage, all caps, tracked, with rule -->
<h2 class="section-title">Heading</h2>      <!-- Cormorant Garamond, light -->
<!-- content -->
```

### The eyebrow / section-label

Always preceded by a short horizontal rule (via `::before` pseudo-element in CSS). Color: `--sage`. Size: 10px. Letter spacing: 0.3em.

### Mantra band

A full-bleed dark bar (`--dark-bg`) with italic Cormorant Garamond words in `--gold-text`, separated by thin gold vertical lines. Used once between hero and content. Can be reused as a footer element or social header.

### Method cards

Three cards side-by-side, separated by a 2px gap. Each card:
- White/off-white background
- Oversized number in `--gold-pale` (decorative, bottom-right absolute)
- Short sage rule (32px wide, 1px) as visual opener
- Cormorant Garamond title
- Jost 300 body

### Testimonial section

Full-bleed dark background. Centered large italic quote (Cormorant Garamond). Gold oversized quote mark. Gold attribution text. Navigation dots (sage inactive, gold active).

### Buttons

| Type | Style |
|---|---|
| Primary (sage) | `--sage-deep` bg, white text, no border-radius, Jost 300, 11px, 0.2em tracking |
| Primary (gold) | `--gold-deep` bg, `--gold-text` text — used for main CTAs |
| Ghost | Gold bottom-border only, `--gold-deep` text |
| Nav CTA | Gold border, `--gold-deep` text, hover fills `--gold-deep` |

---

## 8. Illustration Style

The site uses SVG illustrations, not photographs, for structural elements. Key motifs:

- **Concentric ellipses** — representing breath, energy fields, expansion. Drawn in sage strokes at low opacity.
- **Gestural figure** — a simple, non-gendered human silhouette in an open/receiving posture. Sage fills, very low opacity.
- **Gold center point** — always placed at the center of the figure's torso or the center of a composition. Represents the self / the healing core.
- **Botanical elements** — sparse leaf/stem motifs at the edges of the hero, in sage/teal tones, very low opacity. Suggest natural, organic healing.

### When adding photography:

- Use soft, natural light (no harsh studio lighting)
- Muted, cool-to-neutral tones that complement the sage palette
- No busy backgrounds — plain wall, nature, or soft interior
- Portrait of Asli should feel warm and approachable, not overly posed

---

## 9. Page Structure (Homepage)

```
<header>         Sticky navigation
  <nav>          Logo + Nav links + Gold CTA
<main>
  <section>      Hero — 2-column (text left, illustration right)
  <div>          Mantra band — "Breathe · Move · Release · Heal"
  <section>      Who this is for — 2-column (text + signal list)
  <section>      The approach — 3 method cards
  <section>      Testimonial — full bleed dark
  <section>      About Asli — 2-column (photo left, text right)
  <section>      FAQ — 2-column (label left, questions right)
  <section>      CTA — centered, gold button
<footer>         3-column grid + bottom bar
```

---

## 10. Additional Pages to Build

| Page | Priority | Notes |
|---|---|---|
| Services / Sessions | High | Individual sessions, packages, intro offer. Lead with outcomes, not modality names. |
| About | High | Full bio, credentials, personal story, photo gallery |
| Retreats | Medium | Healing & Longevity Retreat details, dates, location |
| Courses | Medium | Online courses via Thinkific (existing) — embed or link |
| Contact / Booking | High | Simple form + discovery call CTA. Consider Calendly embed. |
| Blog / Resources | Low (SEO) | Articles targeting burnout, stress, emotional health keywords |

---

## 11. SEO Notes

- **Primary keywords:** holistic healing, burnout recovery, energy healing Washington State, breathwork sessions, stress relief meditation, emotional healing
- **Long-tail:** "how to heal from burnout naturally," "breathwork for anxiety," "holistic approach to stress," "energy healing for grief"
- **Meta description template:** "Holistic healing for [pain point] — through breathwork, gentle movement, and guided meditation. Book a free session with Asli Selcuk."
- Alt text on all images. Aria labels on all interactive elements (included in reference build).

---

## 12. Tech Notes

- **Fonts:** Google Fonts CDN (Cormorant Garamond + Jost). No fallback needed beyond Georgia/system-ui.
- **No JavaScript frameworks required** for this design — pure HTML/CSS with minimal vanilla JS for nav toggle and testimonial dots.
- **Recommended platforms:** Squarespace (easiest for client self-management), Framer (most design-faithful), Webflow (most flexible)
- **Booking:** Recommend Calendly embed for discovery call CTA
- **Forms:** Simple `mailto:` or Netlify Forms / Typeform embed
- **Analytics:** Google Analytics 4 or Plausible (privacy-friendly)

---

> This document should be read alongside `index.html` which is the reference build of the homepage.
> All CSS variables are defined in `:root` at the top of the stylesheet in `index.html`.
> For questions, refer to the conversation history with Asli Selcuk for full brand rationale.
