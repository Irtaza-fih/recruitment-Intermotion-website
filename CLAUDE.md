# Recruitment Intermotion Website (FIH Consultancy)

- Site: recruitmentintermotion.nl
- Stack: Vite + React + TypeScript + Tailwind + shadcn/ui
- Backend: Supabase (project ref `fbiseqzzvbpeprzsycoy`)
- Deployment: push to `main` triggers `.github/workflows/deploy.yml`

## Deployment setup

- **Tool:** `SamKirkland/FTP-Deploy-Action@v4.3.5`
- **Build:** `bun install` → `bun run build` (outputs to `dist/`)
- **FTP target:** `domains/recruitmentintermotion.nl/public_html/` — relative to the Hostinger FTP account root
- **Deploy mode:** incremental (only changed files uploaded per run, tracked via `.ftp-deploy-sync-state.json` in the target dir)
- ⚠️ `public_html/` at the FTP root is **NOT** the correct target — files must go to `domains/recruitmentintermotion.nl/public_html/` only
- If files stop appearing (stale sync state), delete `.ftp-deploy-sync-state.json` from `domains/recruitmentintermotion.nl/public_html/` in Hostinger File Manager and redeploy — do NOT use `dangerous-clean-slate: true` (causes FTP timeout)

## Rules
- Never commit `.env`. Frontend env vars must use the `VITE_` prefix (Vite only exposes `VITE_*` to `import.meta.env`) — see [src/integrations/supabase/client.ts](src/integrations/supabase/client.ts).
- Always run `bun run build` and confirm it succeeds before deploying.
- The Supabase `service_role`/secret key must only live in Supabase Edge Function secrets, never in frontend code or `VITE_`-prefixed env vars.
- For any UI work (new components, pages, styling, layout), use the `frontend-design` skill.
