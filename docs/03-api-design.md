# API Design

## Endpoints

**Health Check:**
- GET /health → 200 OK

**Contracts:**
- GET /contracts → List all contracts
- POST /contracts → Upload new contract
- GET /contracts/:id → Get contract details
- DELETE /contracts/:id → Delete contract

## Database Schema

**contracts table:**
- id (uuid, primary key)
- title (varchar)
- content (text)
- upload_date (timestamp)
- created_at (timestamp)
- updated_at (timestamp)
