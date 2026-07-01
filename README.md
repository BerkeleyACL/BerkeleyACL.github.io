# Autonomous Controls Laboratory — UC Berkeley Website

A clean, accessible, dependency-free static website for the Autonomous Controls
Laboratory (ACL) as it relocates from the University of Washington to UC
Berkeley's Department of Mechanical Engineering. Content was adapted from the
lab's previous site, [uwacl.com](https://uwacl.com/).

## Structure

| File | Purpose |
|---|---|
| `index.html` | Home — mission, research themes, recent news |
| `home.html` | Redirect to `index.html` (the real home page) |
| `research.html` | Research areas and selected projects |
| `people.html` | PI bio, current members, incoming-student and alumni placeholders |
| `publications.html` | Selected publications, Scholar/arXiv/GitHub links |
| `news.html` | Full news archive by year |
| `contact.html` | How to join the lab and contact info |
| `projects/*.html` | One detail page per highlighted project (linked from Research) |
| `assets/` | Logos (`acl_logo_full.png`, `acl_logo_blue.jpg`, header mark, favicon) and the logo animation |
| `css/style.css` | Single stylesheet (UC Berkeley palette, all layout) |
| `js/nav.js` | Mobile menu toggle + reduced-motion video handling (site works fine without JS) |

No build step, no frameworks. Open `index.html` in a browser, or host the
folder as-is on GitHub Pages, Berkeley web hosting, Netlify, etc. To run a
local server: `python3 -m http.server 4173` from this folder, then visit
http://localhost:4173.

## Design notes

- **Palette:** Berkeley Blue `#003262` and California Gold `#FDB515` (official
  UC Berkeley brand colors), with high-contrast neutrals.
- **Typography:** Serif body (Charter/Georgia) for readability, sans-serif UI
  font for headings and navigation. Body text is capped at ~70 characters per
  line.
- **Accessibility:** semantic landmarks, skip-to-content link, visible focus
  outlines, `aria-current` on active nav items, color contrast meeting WCAG AA,
  `prefers-reduced-motion` support, and a no-JS-functional navigation.

## Editing people placeholders

`people.html` has commented `TEMPLATE` blocks in the "Incoming PhD students"
and "Alumni" sections — copy a `<div class="person">` block, fill in the
initials, name, and role. To use a photo instead of an initials avatar,
replace `<div class="avatar">XX</div>` with
`<img class="avatar" src="photos/name.jpg" alt="">`.

## Before publishing — TODOs

These placeholders need real information (each is also marked with a
`<!-- TODO -->` comment in the HTML):

1. **Email address** — `behcet@berkeley.edu` is a guess; confirm the actual
   Berkeley email.
2. **Office/building address** on `contact.html`.
3. **Alumni full names and current positions** on `people.html` (placeholder
   cards are in place).
4. **Incoming PhD students** on `people.html` once announced.
5. **Curated publication list** on `publications.html` — replace the
   representative sample with full citations (authors, venue, year, DOI/arXiv
   links), e.g., exported from BibBase or BibTeX.
6. **Photos** — swap initials avatars for headshots (see above).
7. **Project figures and videos** — each page in `projects/` has placeholder
   figure/video slots with TODO comments showing the exact markup to drop in.
   Suggested location for media files: `assets/projects/`.
8. **Project paper links** — project pages currently link to arXiv author/title
   searches; replace with direct arXiv/DOI links to the specific papers.
