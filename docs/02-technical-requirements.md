# Technical Requirements

## Backend (NestJS API)

- Node.js 20+
- TypeScript
- PostgreSQL 16
- JWT authentication
- OpenAPI/Swagger docs
- Health check endpoint: /health

## Frontend (Next.js Web)

- Next.js 14+
- TypeScript
- Tailwind CSS
- React 18+
- API client for backend

## Infrastructure

- Railway: PostgreSQL + API
- Vercel: Web frontend
- Cloudflare: DNS + SSL
- GitHub: Source control + CI/CD

## Deployment

- API: Railway auto-deploy from main branch
- Web: Vercel auto-deploy from main branch
- Custom domains: api.juris-bootstrap-v521.agentifai.io, juris-bootstrap-v521.agentifai.io
