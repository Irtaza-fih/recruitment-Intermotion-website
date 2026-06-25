# Recruitment Intermotion Website (FIH Consultancy)

- Site: recruitmentintermotion.nl
- Stack: Vite + React + TypeScript + Tailwind + shadcn/ui
- Backend: Supabase (project ref `fbiseqzzvbpeprzsycoy`)
- Deployment: push to `main` triggers `.github/workflows/deploy.yml`, which builds and FTP-deploys `dist/` to Hostinger `public_html/`

## Rules
- Never commit `.env`. Frontend env vars must use the `VITE_` prefix (Vite only exposes `VITE_*` to `import.meta.env`) — see [src/integrations/supabase/client.ts](src/integrations/supabase/client.ts).
- Always run `npm run build` and confirm it succeeds before deploying.
- The Supabase `service_role`/secret key must only live in Supabase Edge Function secrets, never in frontend code or `VITE_`-prefixed env vars.
- For any UI work (new components, pages, styling, layout), use the `frontend-design` skill.
