# Data Model

## Contract Entity

```typescript
interface Contract {
  id: string;
  title: string;
  content: string;
  uploadDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## Database Tables

**contracts:**
- id UUID PRIMARY KEY
- title VARCHAR(255) NOT NULL
- content TEXT
- upload_date TIMESTAMP
- created_at TIMESTAMP DEFAULT NOW()
- updated_at TIMESTAMP DEFAULT NOW()
