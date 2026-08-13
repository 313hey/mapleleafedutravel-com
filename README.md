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
- `styles.css` - visual system, responsive layout, editorial imagery and motion styling
- `script.js` - language switching, mobile menu, scroll storytelling, reveal animation, demo form and policy modal logic
- `assets/` - logo assets
- `public/media/` - replaceable homepage photography and future video assets

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

The header currently uses:

- `assets/maple-leaf-crest-web.png`
- `assets/ml-edu-travel-wordmark-web.png`

Replace those files with approved final logo exports using the same filenames, or update the `<img>` paths in each HTML file.

## Replace Images

The homepage now uses temporary editorial prototype images under `public/media/`. Replace them with approved Maple Leaf photography using the same filenames where possible.

See `public/media/README.md` for the full media checklist, including hero video, program images, journey images, learning images and video story assets.

Only use photography and video after copyright, student consent and company approval are confirmed.

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
- Whether `edu-travel@mapleleafedutravel.com` is active
- Privacy Policy and Terms of Use legal review
- Final programme naming, scope, pricing and operational responsibilities
