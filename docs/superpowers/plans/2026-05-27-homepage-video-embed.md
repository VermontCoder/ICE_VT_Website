# Homepage Video Embed Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `index2.html` — a full homepage with the YouTube video embedded to the right of the logo and heading on desktop, stacking below on mobile.

**Architecture:** Two new CSS classes (`.hero-row`, `.hero-left`, `.hero-video`) added to `styles.css` create a flex layout that sizes the video's width automatically from its height via `aspect-ratio: 16/9`. `index2.html` is a copy of `index.html` with the logo and h1 moved into a `.hero-left` column and the iframe added as `.hero-video`. No existing files are modified except `styles.css`.

**Tech Stack:** Static HTML/CSS, no build tools. CSS Flexbox + `aspect-ratio` (supported in all modern browsers: Chrome 88+, Firefox 89+, Safari 15+).

---

## File Map

| File | Action | What changes |
|---|---|---|
| `styles.css` | Modify | Add `.hero-row`, `.hero-left`, `.hero-video` rules + mobile overrides |
| `index2.html` | Create | New homepage with hero-row layout |

---

### Task 1: Add hero layout CSS to `styles.css`

**Files:**
- Modify: `styles.css` (after the existing `/* Homepage */` section, around line 164)
- Modify: `styles.css` (inside the existing `@media (max-width: 768px)` block, at the end of that block)

- [ ] **Step 1: Insert hero desktop CSS after `.homepage-intro .cta` rule**

Open `styles.css`. Find the `.homepage-intro .cta` rule (ends around line 164). Insert the following block immediately after it:

```css
/* Homepage hero row */
.hero-row {
    display: flex;
    align-items: stretch;
    gap: 30px;
    min-height: 280px;
    margin-bottom: 30px;
}

.hero-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 0;
}

.hero-video {
    flex: 0 0 auto;
    aspect-ratio: 16 / 9;
    align-self: stretch;
}

.hero-video iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
}
```

> **How this works:** `align-self: stretch` gives `.hero-video` a definite height equal to the row's cross-axis (which is the natural height of `.hero-left`). Because the video's inline size (width) is not explicitly set, `aspect-ratio: 16/9` resolves it from the block size (height). The iframe fills the div 100% × 100%.

- [ ] **Step 2: Insert hero mobile CSS inside the existing `@media (max-width: 768px)` block**

Find the closing `}` of the `@media (max-width: 768px)` block (currently the last block in `styles.css`, around line 480). Insert these rules **before** that closing `}`:

```css
    .hero-row {
        flex-direction: column;
        min-height: unset;
        gap: 20px;
    }

    .hero-video {
        width: 100%;
        aspect-ratio: 16 / 9;
        height: auto;
    }
```

> On mobile, `flex-direction: column` stacks logo/h1 first, video below. `width: 100%` on `.hero-video` makes aspect-ratio compute height from width instead of the other way around.

- [ ] **Step 3: Commit the CSS changes**

```bash
git add styles.css
git commit -m "feat: add hero-row flex layout CSS for homepage video embed"
```

---

### Task 2: Create `index2.html`

**Files:**
- Create: `index2.html`

- [ ] **Step 1: Create `index2.html` with the hero-row layout**

Create the file `index2.html` at the project root with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-J5TC0C2JZC"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-J5TC0C2JZC');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ICE Tours VT - Home</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
    <div id="header-placeholder"></div>

    <div class="main-content">
        <div class="hero-row">
            <div class="hero-left">
                <img src="img/primary_logo.png" alt="ICE Tours VT Logo" class="homepage-logo">
                <h1 class="page-title">Welcome to ICE Tours VT</h1>
            </div>
            <div class="hero-video">
                <iframe src="https://www.youtube.com/embed/gTMsB1U_kYM?si=OfzcLf0jxC6u3zJe"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
            </div>
        </div>

        <div class="homepage-intro">
            <p>
                Did you know that the Department of Homeland Security (DHS) is the fifth largest employer in
Chittenden County, Vermont? There are 8 different DHS operations throughout the county,
including 2 major national ICE operations that surveil the public and send orders out to ICE
agents around the country.
            </p>

            <p>Surprising huh?</p>

            <p>So move over maple syrup, craft beer, and fall foliage-- ICE is the new attraction in Vermont!</p>
            <p>ICE Tours VT provides guided bus tours to many of these facilities, where you will learn about the scope, scale, and history of DHS in Vermont.  Think Hollywood star tours, but instead of celebrity mansions you get federal surveillance infrastructure.  It's a little strange, a little spooky, and entirely real!</p>
            <img src="img/marginalia/ice_tours_bus_circle.png" alt="ICE Tours Bus" class="marginalia-inline">
        </div>
    </div>

    <div class="social-bar">
        <span class="social-label">Follow Us</span>
        <div class="social-icons">
            <a href="https://www.instagram.com/icetoursvt/" target="_blank" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@icetoursvt?_r=1&amp;_t=ZT-9403aGrSNRt" target="_blank" aria-label="TikTok">
                <i class="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://www.youtube.com/@ICEToursVT" target="_blank" aria-label="YouTube">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
    </div>

    <div id="footer-placeholder"></div>
    <script src="includes.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit `index2.html`**

```bash
git add index2.html
git commit -m "feat: create index2.html with embedded YouTube video in hero row"
```

---

### Task 3: Browser verification

**Files:** None — read-only verification step.

Open `index2.html` in a browser (open the file directly, or run `python -m http.server 8000` from the project root and navigate to `http://localhost:8000/index2.html`).

- [ ] **Step 1: Verify desktop layout**

At a window width ≥ 769px, confirm:
- Logo and "Welcome to ICE Tours VT" heading appear on the LEFT
- YouTube video player appears on the RIGHT
- Video and logo+heading column are the same height (or very close)
- Video proportions are clearly widescreen (16:9) — not square, not vertical

- [ ] **Step 2: Verify mobile layout**

Resize the browser window to ≤ 768px (or use DevTools → Toggle device toolbar → set width to 375px). Confirm:
- Logo and heading appear **above** the video (not side by side)
- Video fills the full column width and maintains 16:9 proportions

- [ ] **Step 3: Verify intro content is below the hero row**

At both desktop and mobile widths, confirm:
- The intro paragraphs ("Did you know…", "Surprising huh?", etc.) appear below the hero row
- The bus marginalia image appears below the paragraphs
- The social bar (Instagram / TikTok / YouTube icons) appears at the bottom

- [ ] **Step 4: Verify `index.html` is unchanged**

Open `index.html` in the browser and confirm it still looks exactly as before — no hero-row, logo and heading centered, full-width intro text.

- [ ] **Step 5: If the video height doesn't match the left column (fallback adjustment)**

If the video appears much taller or shorter than the logo+heading, the `aspect-ratio` / `align-self: stretch` interaction may need a nudge. In that case, edit `styles.css` to add an explicit height to the hero row:

```css
.hero-row {
    height: 320px;  /* add this line; remove min-height */
}
```

And update `.hero-video` to remove `align-self: stretch` (it's no longer needed with an explicit height):

```css
.hero-video {
    flex: 0 0 auto;
    aspect-ratio: 16 / 9;
    height: 100%;  /* fill the explicit row height */
}
```

Commit if the fallback was needed:

```bash
git add styles.css
git commit -m "fix: use explicit hero-row height for reliable video sizing"
```
