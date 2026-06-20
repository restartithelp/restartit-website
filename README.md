# RestartIT website

Static, multi-page marketing site for **RestartIT**, flat-rate, mobile, on-site residential IT support serving Paris, Brantford and southern Ontario. Hosted on **GitHub Pages** at **https://restartithelp.ca**.

## Structure

```
.
├── CNAME                 # custom domain (restartithelp.ca), do not delete
├── .nojekyll             # serve files as-is (skip Jekyll processing)
├── index.html            # Home, hero, what I do, why mobile/flat-rate, FAQ, CTAs
├── services.html         # Core / Additional / Add-on service tiers (no prices)
├── about.html            # About RestartIT + Meet the Team (placeholder profiles)
├── contact.html          # Contact details + embedded Google booking form
├── 404.html              # Branded not-found page
├── css/
│   └── styles.css        # Shared design system (brand palette + components)
├── js/
│   └── main.js           # Mobile nav, scroll reveals, footer year
└── assets/
    ├── logo-horizontal.png        # Nav + footer lockup (transparent bg, cream text)
    ├── logo-horizontal-light.png  # Transparent lockup (navy text, for light use)
    ├── logo-square.png            # Circular mark, hero + social
    ├── favicon-32.png / favicon-64.png / apple-touch-icon.png
    └── og-image.png               # 1200×630 social share image
```

There is no build step, it's plain HTML, CSS and a little vanilla JS. Open any `.html` file in a browser to preview, or run a local server from this folder.

## Brand

| Token        | Hex       | Use                                   |
|--------------|-----------|---------------------------------------|
| Navy         | `#18253F` | Primary background / brand            |
| Deep navy    | `#0F1A2E` | Footer, section gradients             |
| Cream        | `#F4EFE9` | Primary text on navy                  |
| Copper-brown | `#A8714A` | Accent, buttons, links, highlights   |
| Steel-blue   | `#9FB0CB` | Muted/secondary text                  |

All colours live as CSS variables at the top of `css/styles.css`.

## Editing common things

- **Team profiles:** in `about.html`, search for `[Your name here]` / `[Name here]` / `[Bio here]`. To add a photo, drop an image in `assets/` and replace the placeholder `<svg>` inside `.profile__photo` with `<img src="assets/your-photo.jpg" alt="Name">`.
- **Services:** edit the `<article class="card service-card">` blocks in `services.html`.
- **FAQ answers:** in `index.html`, inside the `.faq` section.
- **Contact info / hours:** phone (`tel:+15197711542`), email (`mailto:restartithelp@gmail.com`), Facebook URL and hours appear in the footer of every page and on `contact.html`.
- **Booking form:** the primary CTA points to `https://forms.gle/L2N94EabjLBqyMtm6`; the embedded version on `contact.html` uses the same form.

## Deploy (GitHub Pages)

Commit and push to the Pages branch (e.g. `main`). With the `CNAME` file present and the custom domain configured in repo **Settings → Pages**, the site publishes to https://restartithelp.ca.
