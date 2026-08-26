# Maple Leaf Edu-Travel Contact Worker

This Cloudflare Worker receives the homepage enquiry form and forwards it by email to:

`xushaochun@mapleleaf.net.cn`

## Cost

- Cloudflare Workers Free is usually enough for normal website enquiries.
- The Worker uses Cloudflare Email Sending through an Email binding.
- Cloudflare's pricing page says sending to verified destination addresses is available on Free and Paid plans.

## Required Cloudflare Setup

1. Log in to Cloudflare.
2. Enable Email Routing / Email Sending for the account.
3. Add and verify `xushaochun@mapleleaf.net.cn` as a destination address.
4. Deploy the Worker:

```powershell
cd cloudflare-worker
npx wrangler login
npx wrangler deploy
```

5. Add a route for the production website:

```text
https://www.mapleleafedutravel.com/api/contact
```

If the domain is not managed through Cloudflare DNS yet, use the generated `workers.dev` URL instead and update `data-endpoint` in `index.html`.

## Local Website Testing

The static website can still be opened locally. Form submission requires the Worker to be deployed, because the email binding only exists on Cloudflare.
