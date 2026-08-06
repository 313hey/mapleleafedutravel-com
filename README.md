# Maple Leaf Edu-Travel Website Test Version

This is a static bilingual test website for `mapleleafedutravel.com`, built with plain HTML, CSS and vanilla JavaScript.

## How to Open

Double-click `index.html` in this folder. The site does not require Node.js, React, Vue, a build step or a local server.

## File Structure

- `index.html` — page structure and bilingual content
- `styles.css` — visual system, responsive layout and animations
- `script.js` — language switch, mobile navigation, form demo message and policy modals
- `assets/` — reserved for approved logo and photography

## Replace the Logo

The current logo is a text placeholder in the navigation. To replace it:

1. Add the official logo file to `assets/`.
2. In `index.html`, replace `<span class="brand-mark">ML</span>` with an `<img>` element.
3. Add suitable CSS for the image size in `styles.css`.

Recommended logo format: transparent SVG, PNG or WebP.

## Replace Images

The website currently uses designed placeholder areas to avoid copyright risk.

Recommended image sizes:

- Hero: 1920 × 1080 pixels
- Destinations: 900 × 620 pixels
- About section: 1200 × 900 pixels

Use only owned, licensed or company-approved images. Replace each `.image-placeholder` block in `index.html` with an `<img>` tag and keep meaningful `alt` text.

## Modify Text

Most visible text is controlled in two places:

- Initial HTML content in `index.html`
- Bilingual replacement text in the `translations` object inside `script.js`

When editing public copy, update both English and Chinese versions so the language switch stays complete.

## Preparing for Deployment

Before publishing:

1. Replace the logo and image placeholders with approved assets.
2. Confirm the official email address and contact details.
3. Have legal or company leadership review Privacy Policy and Terms of Use text.
4. Connect the inquiry form to an approved backend, CRM, email service or form provider.
5. Test the final site in Chrome, Edge, Safari and on mobile devices.
6. Upload all files to the web host for `mapleleafedutravel.com`.

## Deploying with GitHub Pages

1. Create a GitHub repository named `mapleleafedutravel-com`.
2. Push this folder to the repository.
3. In GitHub, open `Settings` → `Pages`.
4. Set `Source` to `Deploy from a branch`.
5. Set `Branch` to `main` and folder to `/root`.
6. Confirm the custom domain is `www.mapleleafedutravel.com`.
7. After GitHub verifies the domain, enable `Enforce HTTPS`.

DNS record for the `www` domain:

```text
Type: CNAME
Name: www
Value: your-github-username.github.io
```

The included `CNAME` file already sets the GitHub Pages custom domain to:

```text
www.mapleleafedutravel.com
```

## Content Requiring Company Confirmation

- Official logo and brand usage rules
- Whether `info@mapleleafedutravel.com` is active
- Final postal address formatting
- Approved program names and itineraries
- Safety, insurance and emergency response wording
- Privacy Policy and Terms of Use
- Any public claims about schools, partners, certifications, awards or project statistics
