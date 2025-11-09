# Abhi — Portfolio (Next.js 14 + Tailwind)

Fast, clean, recruiter‑friendly portfolio. Deployed to Vercel by default.

## Quick start

```bash
pnpm i # or npm i / yarn
pnpm dev
```

Edit `site.config.ts` and `lib/projects.ts` to personalize.

## Deploy (Vercel)

1. Push to GitHub (repo name: `portfolio`).
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Next.js. Keep defaults. Deploy.

### Connect `is-a.dev` subdomain

1. In Vercel > Project > Settings > Domains > Add: `yourname.is-a.dev`.
2. Vercel will show a CNAME target like `cname.vercel-dns.com`.
3. In your `is-a.dev` PR, add a DNS record for your subdomain:
   - Type: `CNAME`
   - Value: the Vercel CNAME target
4. After merge + DNS propagation, HTTPS will be automatic.

## Alternative: GitHub Pages

If you prefer GitHub Pages:
- Use `next export` (static) or switch to a static site generator (Astro) for pure static hosting.
- Or use Cloudflare Pages for Next.js SSR with adapters.

## Customize

- `site.config.ts`: name, links, bio, resume link.
- `lib/projects.ts`: featured projects with highlights.
- Add more routes under `app/` as needed.

## Notes

- The `/api/github` route fetches your public repos to enable a dynamic projects section later.
- No secrets required for public data.
