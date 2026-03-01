# Deployment Architecture

## Infrastructure

**Railway:**
- PostgreSQL 16 database (persistent volume)
- NestJS API service (Node.js 20)
- Auto-deploy from GitHub main branch

**Vercel:**
- Next.js web frontend
- Auto-deploy from GitHub main branch

**Cloudflare:**
- DNS management
- SSL termination (instant via proxy)
- DDoS protection

## Domains

- API: https://api.juris-bootstrap-v521.agentifai.io
- Web: https://juris-bootstrap-v521.agentifai.io

## Environment Variables

**API (Railway):**
- NODE_ENV=production
- PORT=3000
- DATABASE_URL=[auto-configured]
- CORS_ORIGIN=https://juris-bootstrap-v521.agentifai.io

**Web (Vercel):**
- NEXT_PUBLIC_API_URL=https://api.juris-bootstrap-v521.agentifai.io
