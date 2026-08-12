# Maple Leaf Edu-Travel Website Test

Static bilingual test website for Maple Leaf Edu-Travel.

## Open Locally

Double-click `index.html`, or open it in any modern browser.

For a local server preview:

```powershell
python -m http.server 8124
```

Then open `http://127.0.0.1:8124/index.html`.

## File Structure

- `index.html` - homepage with the selected public-facing content
- `about.html` - light internal About page for group background figures
- `programs.html` - light internal Programs page
- `stories.html` - light internal Stories page
- `styles.css` - visual system, responsive layout and image placeholder styling
- `script.js` - language switching, mobile menu, reveal animation, demo form and policy modal logic
- `assets/` - future logo and image assets

## Content Policy

The homepage intentionally uses only the selected concise copy approved in the working brief. The attached English handbook was used only as a factual reference. Long handbook content should not be copied directly onto the homepage.

Keep the following content on internal pages or in reviewed future pages:

- Full history of Maple Leaf Educational Systems
- Complete city and country lists
- Nearly 100 schools, 32,000+ students and 5,000+ faculty and staff
- Detailed Study in China formats
- Campus facility lists
- Full service process
- Tourism licence details
- Partner information
- Long corporate descriptions

## Replace Logo

Place the approved logo inside `assets/`, then update the `.brand-mark` element in each HTML file or replace it with an `<img>` tag.

## Replace Images

The current site uses editorial image placeholders. Each placeholder includes a recommended size. Replace the placeholder elements with approved photos only after copyright and consent are confirmed.

## Modify Text

Homepage English and Chinese text lives in `index.html` and `script.js`. Update both the visible English fallback and the translation keys in `script.js`.

## Deployment

The current GitHub Pages setup publishes from the `gh-pages` branch. After edits:

```powershell
git add .
git commit -m "Describe the change"
git push origin main
git branch -f gh-pages main
git push -f origin gh-pages
```

## Still Needs Company Confirmation

- Official logo and visual identity assets
- Approved photography and permissions
- Whether `info@mapleleafedutravel.com` is active
- Privacy Policy and Terms of Use legal review
- Final programme naming, scope, pricing and operational responsibilities
