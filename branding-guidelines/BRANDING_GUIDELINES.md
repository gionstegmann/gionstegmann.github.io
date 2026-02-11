# Design System (GIONI_OS)

## 1. Visual Identity
**Theme:** Rugged Digital, Organic Tech, "The Mango Aesthetic." High contrast, raw textures mixed with clean vectors, and a distinct adventurous spirit.

**Archetype:** The Explorer Creator (The Mango-Hacker)
We build independent solutions with the grit of a mechanic and the curiosity of a traveler. We don't just write code; we map the terrain.

***Voice***
**Authentic, Direct, Enthusiastic.**
We speak from experience (the "saddle"), avoiding corporate jargon. We are transparent about the process ("building in public") and inject personality ("a mango twist") where appropriate.

***Visuals***
**Cinematic, High-Contrast, Warm.**
We prioritize natural lighting, mountains, and machinery. The UI feels tactile—like a well-worn notebook or a dashboard—rather than clinical glass.

## 2. Color Palette

### Base
* **Background:** Off-White / Cream (`#F4F4F4` - Paper) / Dark Mode (`#1A1A1A` - Asphalt).
* **Foreground:** Deep Charcoal (`#0D0D0D`) / Dark Mode (`#F0F0F0`).
* **Muted:** Dust Grey (`#A1A1AA`).
* **Surface:** `bg-white dark:bg-zinc-900` (Solid, high opacity, no blur).
* **Borders:** `border-zinc-300 dark:border-zinc-700` (Crisp lines).

### Brand (The Core Triad)
* **Primary (The Mango):** Vibrant Orange (`#FF9F43`) - Used for CTAs, highlights, and energy.
* **Secondary (The Terrain):** Lime Moss (`#87A330`) - Used for success states, nature elements, and grounding.
* **Tertiary (The Machine):** Suzuki Black/Grey (`#2B2B2B`) - Used for headers, strong lines, and technical details.

### Semantic Colors (The "Adventure")
* **Flight/Travel:** Sky Blue (`text-sky-700 bg-sky-100`).
* **Code/Build:** Slate (`text-slate-800 bg-slate-200`).
* **Motorcycle/Drive:** Rust/Dark Orange (`text-orange-900 bg-orange-200`).
* **Nature/Hike:** Forest Green (`text-green-800 bg-green-100`).
* **Food/Mango:** Golden Yellow (`text-yellow-800 bg-yellow-100`).
* **Error/Stop:** Burnt Red (`text-red-800 bg-red-100`).

## 3. Typography
* **Font:** `Montserrat` (Google Fonts).
* **Style:** Geometric, Bold, Functional.
* **Scale:**
    * `h1`: `font-black uppercase tracking-wide` (The "Headline" look).
    * `h2`: `font-bold`.
    * `h3`: `font-semibold`.
    * `body`: `font-medium` (High readability).
    * `code`: `JetBrains Mono` or `Fira Code` (For the hacker aspect).

## 4. Components & Tokens

### Cards (The Bento Modules)
* **Style:** Solid, Opaque, High Contrast.
* **Border Radius:** `rounded-2xl` (Smooth, like a pebble or a fuel tank curve).
* **Shadow:** Deep, soft shadow `shadow-lg` to lift elements off the "ground."
* **Structure:** Gap-separated layouts (Bento style).

### Buttons
* **Primary:** Mango Orange Background, White Text. `font-bold uppercase tracking-wider`. `rounded-xl`.
* **Secondary:** Outline Style. Thick borders (`border-2`).
* **Interaction:** `hover:bg-orange-500` (Slightly darker mango).

### Timeline & Editor
* **Concept:** "The Route Map."
* **Editor Layout:**
    * **Toolbox:** "Gear." Rugged icons, simple strokes.
    * **Stage:** "The Road." Center focus. Background mimics a map texture or subtle noise.
    * **Inspector:** "Diagnostics." Clean data entry.
* **Sticky Day Indicator:**
    * Now resembles a **Milestone Marker**.
    * Active day: Mango Orange square with white bold text (`bg-[#FF9F43] text-white`).

## 5. Design Styles
* **No Glass, Just Mass:** Avoid translucent blurs. Use solid colors and bold hierarchy.
* **Micro-interactions:** Snappy and mechanical. Toggle switches should feel like clicking a switch on a handlebar.
* **Imagery:** Always include context. A laptop isn't just a laptop; it's a laptop *on a wooden table with a mango slice*.

## 6. Breakpoints
* **Desktop:** Full "Mission Control" dashboard.
* **Mobile:** Optimized for quick glancing while on the go.
* **Tablet:** ideal for the "Digital Nomad" workflow.

## 7. Motion
* **Feel:** Kinetic and Physical.
* **Transitions:** Slide-ins from bottom (like pulling up a map).
* **Hover:** Elements lift up (`-translate-y-1`) rather than just changing color.