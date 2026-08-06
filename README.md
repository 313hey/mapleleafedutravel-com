# Maple Leaf Edu-Travel Static Website

This is a bilingual test website for Maple Leaf Edu-Travel, built as a pure static site with HTML, CSS and vanilla JavaScript.

## Open Locally

Double-click `index.html` to open the site in a browser. No build step, Node.js, React, Vue or package installation is required.

## Files

- `index.html` - page structure and default English content
- `styles.css` - editorial visual system, responsive layout and interaction styling
- `script.js` - EN / 中文 switching, mobile navigation, demonstration form and policy modals
- `assets/` - reserved for approved logo and photography
- `CNAME` - GitHub Pages custom domain

## Replace Logo

The current logo is a simple `ML` placeholder. Add the approved logo to `assets/`, then replace the `.brand-mark` element in `index.html` with an image tag. Keep a clear text brand name beside it for accessibility.

## Replace Images

The site uses refined image placeholder areas to avoid copyright risk. Replace the placeholder blocks with approved photography only.

Recommended sizes:

- Hero image: 2200 x 1400
- Program image: 1400 x 1200
- Destination image: 1500 x 1100

Use owned, licensed or company-approved images only.

## Modify Text

Most visible bilingual copy is in `script.js` inside the `translations` object. When updating wording, edit both `en` and `zh` entries.

## Deployment Notes

The site is suitable for GitHub Pages or any static host. The current GitHub Pages custom domain is:

```text
www.mapleleafedutravel.com
```

For GitHub Pages, publish the root folder from the selected branch and keep the `CNAME` file in the root.

## Content Still Requiring Company Confirmation

- Official logo and brand guidelines
- Approved photography
- Whether `info@mapleleafedutravel.com` is active
- Final address formatting
- Program details and itinerary wording
- Insurance and safety wording
- Privacy Policy and Terms of Use
- Any public claims about schools, partners, certifications, awards or project statistics
