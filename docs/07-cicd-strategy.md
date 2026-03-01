# CI/CD Strategy

## GitHub Actions

**Workflow:** .github/workflows/ci.yml

**Triggers:**
- Push to main branch
- Pull request to main

**Jobs:**

1. **Test API:**
   - Checkout code
   - Setup Node.js 20
   - Install dependencies
   - Run linter
   - Run unit tests

2. **Test Web:**
   - Checkout code
   - Setup Node.js 20
   - Install dependencies
   - Run linter
   - Build Next.js

3. **Deploy:**
   - Railway auto-deploys API
   - Vercel auto-deploys Web

## Deployment Flow

1. Push to main
2. GitHub Actions runs tests
3. Railway auto-deploys API (on success)
4. Vercel auto-deploys Web (on success)
5. Health checks verify deployment
