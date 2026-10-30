# Glass Surfaces: Input Data and Riwayat

> Binds to [`DESIGN.md`](./DESIGN.md). Every screen must read as the same product if placed side by side.

## Design Read and direction

Industrial / signage, interpreted as quality-inspection glass for a garment production tool: bright pane edges, Radja-blue tint, restrained transparency, and functional hierarchy. This is specific to the existing workshop image and Payroll Radja reference rather than a generic glass dashboard.

## Scope and guardrails

- Restyle existing cards and pill-like controls across Input Data and Riwayat. Keep all copy, data, validation, event handlers, tab behavior, and DOM order unchanged.
- Follow Payroll Radja's translucent blue stat panes and photo-fade context, not its opaque menu-card style.
- Use only CSS translucent fills, borders, and a subtle inset highlight. Do not add `backdrop-filter`, filter effects, JS, packages, requests, image layers, or animations. This avoids compositing work across many simultaneous surfaces.
- Keep the existing optimized factory photo/background and its offline cache behavior unchanged.
- The outer form cards should read as glass over the photo; inner inputs remain quieter, slightly more opaque glass to preserve focus and text clarity. Edges should be 1.5px: present enough to define each surface without looking heavy.
- Semantic green, amber, and red remain reserved for existing statuses; they are translucent tints rather than solid opaque cards.

## Flow and states

### Input work

User opens Input Data → selects employee → selects brand and work → enters quantity → checks summary → saves. Glass treatment changes no steps or state transitions.

| State | Required visual behavior |
|-------|--------------------------|
| Initial/loading | Existing loading overlay remains legible and above all panes. |
| Empty/selection required | Empty summary and disabled inputs/buttons remain visibly disabled; labels retain contrast. |
| Ready to save | Summary and enabled save button remain distinct from the glass panels; keep the existing primary-action treatment and tap target. |
| Error/input locked | Existing warning/error surface remains understandable, with dark text on light tint or white text on a sufficiently opaque blue tint. |
| Saving/success | Preserve existing loading feedback and toast; toast remains above all cards and never inherits card opacity. |
| Offline/pending sync | Existing sync status and action retain their current order and affordance. |

### Weekly history

User opens Riwayat Minggu Ini → views entry count, total and list → refreshes. Loading, no selected employee, empty list, populated list, and network error remain distinguishable; glass styling must not change refresh or scrolling behavior.

## Component specification

| Existing surface | Treatment |
|------------------|-----------|
| Header badge and stat panes | Continue the Payroll reference: translucent white-blue pane, fine light border, restrained inset edge. White text only on blue header panes. |
| Employee and work form cards | Shared ice-blue glass fill with enough opacity for dark labels; a thin brighter top edge and quiet blue shadow. Remove the opaque gradient fills while retaining their current text hierarchy. |
| Inputs, employee chip, quantity control | Slightly more opaque light-blue glass wells with a 1.5px visible edge and focus ring; give the employee-section chip a faint inset highlight and restrained blue shadow so it does not read flat. Preserve native select/input behavior and disabled state. |
| Summary card and rows | Light glass pane; ready state uses a stronger blue tint and existing blue text; maintain divider visibility. |
| History card, stats, list, items | Reuse the same material family; deep-blue pane with white text for the main history surface, lighter translucent inner rows. Preserve list scroll and item separation. |
| Tab bar and tab buttons | Glass rail; inactive control is transparent with muted text, active tab is the strongest blue pane with white text and a visible focus ring. |
| Staging, popup/detail sections, chips, badges | Light glass for information groups; status colors remain semantic and low-area. Popup dimmer/sheet hierarchy remains unchanged. |
| Primary buttons and toasts | Keep their existing distinct action/feedback roles; do not turn every button into a passive translucent pane. Add only a matching glass edge where it improves consistency. |

### Interaction, responsive, accessibility

- Hover is optional on touch devices; active state uses a small color/opacity shift, not scale animation.
- Keyboard focus remains visibly distinct from glass borders. Disabled controls remain non-interactive.
- Keep all current touch target sizes, safe-area spacing, and responsive breakpoints.
- Respect `prefers-reduced-motion`; this treatment requires no new motion.
- Maintain WCAG AA with the locked pairings in `DESIGN.md`. Ensure text is on a sufficiently opaque surface rather than over the photo. Respect forced-colors mode with system colors.

## Acceptance criteria

- [ ] All existing card and pill surfaces in both tabs use the same blue/ice glass material language, with deliberate light/dark variants.
- [ ] Payroll reference is recognizable in the pane translucency and bright edge, without copying its opaque cards or introducing mixed accent colors.
- [ ] Text, labels, disabled state, focus, active tab, empty history, and locked/error states remain readable and distinct.
- [ ] No changes to DOM behavior, event handlers, business logic, network requests, service worker caching, or image size.
- [ ] No new dependencies, `backdrop-filter`, CSS `filter`, or repeated GPU-heavy blur layers.
- [ ] At 320×480, 390×844, and 768×1024, no horizontal overflow; both tabs retain their previous scroll behavior.
- [ ] `git diff --check` passes; inspect the rendered UI at a narrow phone viewport and a wider viewport.

## Pre-flight

- [x] One locked identity and one palette; this spec binds to `DESIGN.md`.
- [x] Named direction is industrial / signage; the workshop context and Payroll Radja panes are the source.
- [x] Generic glassmorphism is explicitly constrained: no blur, no decorative animation, no extra layers.
- [x] Existing functional states and offline behavior are documented as invariants.
- [x] Contrast ratios and fallback surface pairings are recorded in `DESIGN.md`.
- [x] Existing copy, focus behavior, touch targets, safe areas, and reduced-motion behavior are preserved.
- [x] One primary task action per existing view is unchanged.
- [x] Taste critique (0–4): distinctiveness 3; hierarchy 3; consistency 4; accessibility 3; state coverage 3; copy 4; restraint 4; motion motivation 4. Total 28/32; no axis ≤2.

## Build handoff

- **Target:** general-purpose engineering agent; static HTML/CSS application.
- **System:** native HTML + existing bespoke CSS tokens. Do not add a component framework or dependencies; this offline-first single-file app has no framework and performance is a stated requirement.
- **Files:** update only the CSS in `index.html`; preserve all existing content, JavaScript, the optimized background asset, and cache configuration.
- **Instruction:** Implement exactly this spec. Use the locked tokens; do not redesign or re-implement behavior.
