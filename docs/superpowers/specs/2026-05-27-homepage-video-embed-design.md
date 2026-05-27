# Design Spec: Homepage Video Embed (index2.html)

**Date:** 2026-05-27  
**Status:** Approved

---

## Overview

Embed the YouTube video (currently only on `tour_video.html`) directly on the homepage. The video appears to the right of the logo and "Welcome to ICE Tours VT" heading on desktop. On mobile it stacks below them. `index.html` is not modified.

---

## Output

Create `index2.html` — a new full homepage based on `index.html`, with a revised hero section.

`tour_video.html` is left unchanged.

---

## Layout

### Desktop (≥ 769px)

```
┌─────────────────────┬──────────────────────────┐
│   [logo image]      │                          │
│                     │    [YouTube iframe]      │
│  Welcome to ICE     │    16:9 aspect ratio     │
│  Tours VT           │    height = left col     │
└─────────────────────┴──────────────────────────┘

  [intro paragraphs — full width]
  [bus marginalia image]

  [social bar]
```

- `.hero-row`: `display: flex; align-items: stretch; gap: 30px; min-height: 300px`
- `.hero-left`: `flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center`
  - Contains: logo `<img>` + `<h1>`
- `.hero-video`: `flex: 0 0 auto; aspect-ratio: 16/9; align-self: stretch`
  - Contains: `<iframe>` with `width: 100%; height: 100%`
  - Browser computes width from row height automatically via `aspect-ratio`

### Mobile (≤ 768px)

- `.hero-row` switches to `flex-direction: column`
- `.hero-video` gets `width: 100%; aspect-ratio: 16/9; height: auto`
  - Browser scales height from width via `aspect-ratio`

---

## CSS Changes

New classes added to `styles.css` (no existing rules modified):

| Class | Purpose |
|---|---|
| `.hero-row` | Flex container for the two-column hero section |
| `.hero-left` | Left column: logo + h1 |
| `.hero-video` | Right column: YouTube iframe wrapper |

Responsive overrides added inside the existing `@media (max-width: 768px)` block.

---

## Content

`index2.html` contains:
- Google Analytics tag (same as `index.html`)
- `<div id="header-placeholder">` + `includes.js` (standard header/footer injection)
- `.hero-row` with `.hero-left` (logo + h1) and `.hero-video` (iframe from `tour_video.html`)
- `.homepage-intro` paragraphs below hero (unchanged from `index.html`)
- `.social-bar` (unchanged from `index.html`)

YouTube embed URL: `https://www.youtube.com/embed/gTMsB1U_kYM?si=OfzcLf0jxC6u3zJe`  
(same as `tour_video.html`)

---

## Out of Scope

- No changes to `index.html`
- No changes to `tour_video.html`
- No navigation link changes in `header.html`

---

## Known Note

`header.html` currently points its logo link and "Home" nav link to `index.html`. Per `CLAUDE.md`, the header logo should link to `index2.html`. Updating those links is **out of scope** for this task — user explicitly requested only creating `index2.html`.
