---
project: Input Data Radja Production
register: product
aesthetic_direction: industrial / signage
color_strategy: committed
design_system: native HTML + bespoke CSS tokens
design_variance: 5
motion_intensity: 2
visual_density: 6
---

## Design Read

Factory-floor clarity with the depth of a quality-inspection window: Radja blue carries the interface, while restrained glass panes let the garment-workshop image show through without compromising legibility.

## Signature

Blue-tinted glass panels with a fine, bright upper edge and a faint inset reflection. This borrows the transparency of the Payroll Radja home summary panes, then applies it consistently to the daily-work form and history without adding a blur layer or decorative animation.

## Inspiration

- `../../../payroll/index.html` — took the blue photographic atmosphere, translucent summary panes, and light pane edges; rejected its opaque white menu cards, mixed accent colors, and any extra blur work.
- `../factory-background.jpg` — existing garment-workshop image remains the contextual texture behind every tab; keep the left-side blue fade so text surfaces stay calm.
- Synthesis: the shared Radja blue and workshop setting anchor the family resemblance; a single blue-glass material and quieter semantic tints distinguish the input tool from Payroll.

## Color (locked)

| role | OKLCH | hex | use |
|------|-------|-----|-----|
| background | `oklch(31.5% 0.122 263.1)` | `#0D2B6E` | Page ground and image-fade base |
| surface / glass | `oklch(96.1% 0.019 255.5)` | `#EAF3FF` | Light glass tint; render translucent at 82–90% opacity |
| elevated / input | `oklch(93.3% 0.026 248.1)` | `#DCEBFA` | Input wells and secondary panes |
| text | `oklch(28.1% 0.070 260.8)` | `#14284B` | Text on light glass |
| muted | `oklch(39.0% 0.081 254.3)` | `#24466F` | Secondary labels on light glass |
| accent | `oklch(42.9% 0.139 258.5)` | `#164C9A` | Deep-blue glass panes and primary state |
| success | `oklch(69.6% 0.149 162.5)` | `#10B981` | Existing success status only |
| warning | `oklch(76.9% 0.165 70.1)` | `#F59E0B` | Existing warning status only |
| danger | `oklch(63.7% 0.208 25.3)` | `#EF4444` | Existing destructive/error status only |

Contrast checks: `#14284B` on `#EAF3FF` = 13.08:1; `#24466F` on `#DCEBFA` = 7.94:1; white on `#164C9A` = 8.29:1; white on `#0D2B6E` = 13.23:1. Use light-glass/dark-text and dark-glass/white-text pairings; do not put text directly over the photo.

## Type (locked)

| role | family | use | notes |
|------|--------|-----|-------|
| display | Plus Jakarta Sans | App and card headings | Existing family; 800–900 weight, compact line height |
| body | Plus Jakarta Sans | Forms and explanatory copy | Existing family; 500–700 weight |
| utility | Plus Jakarta Sans with tabular numerals | Totals, quantities, dates | Keep current font load and avoid layout shift |

One humanist/geometric sans family in varied weights keeps the product familiar and avoids adding font downloads.

## Scales (locked)

- `spacing`: 4px rhythm — 4, 8, 12, 16, 20, 24, 32px.
- `radius`: 8px controls, 12px pills, 16px compact panes, 20px major cards, 24px sheets.
- `motion`: 100ms pressed feedback, 180ms state transition, 250ms sheet entry; `cubic-bezier(0.2, 0.7, 0.2, 1)`, no bounce; honor `prefers-reduced-motion`.
- `elevation`: blue-tinted shadows plus one subtle inset highlight; no stacked heavy shadows.
- `glass`: translucent blue/ice fills and 1px edge; do not use `backdrop-filter`, CSS filters, animated gradients, or additional image layers. If the browser lacks alpha blending, provide an opaque token fallback.
- `z-index`: existing app stacking remains unchanged; do not alter overlays or sticky controls for a surface restyle.

## Voice

`register`: plain, practical Indonesian. `action vocabulary`: keep existing labels and actions such as “Input Data”, “Riwayat Minggu Ini”, and “Simpan Data”; this visual update must not rewrite app copy.

Every screen must read as the same product if placed side by side.
