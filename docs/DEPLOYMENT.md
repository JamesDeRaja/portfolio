# Deployment Access (Vercel 401 Fix)

If your deployed site returns **401 Unauthorized**, this is typically caused by **Vercel Deployment Protection** (Vercel Authentication and/or Password Protection), not a frontend build issue.

## Disable Deployment Protection in Vercel

1. Open **Vercel Dashboard**.
2. Go to **Project → Settings → Deployment Protection**.
3. Disable **Vercel Authentication** and/or **Password Protection** for **Production** (and **Preview** too, if needed).
4. Ensure **Production deployments are Public**.
5. Re-deploy after toggling these settings.

> Note: When Deployment Protection is enabled, Vercel can return HTTP **401** for site requests.

## Verification Checklist

- [ ] Open the **Production URL** and confirm `GET /` returns **200**.
- [ ] Confirm assets load (example: `/assets/index-*.js` returns **200**).
- [ ] Confirm the app renders in the browser.
