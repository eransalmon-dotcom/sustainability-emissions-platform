# Sustainability Emissions Reporting Platform

Annual sustainability reporting platform for factories, emissions calculations, factor governance, and 2030 scenarios.

## MVP

- Factory-specific reporting start year
- Continuous annual reporting after the start year
- Distinction between zero and missing data
- kCO2e factory calculations and tCO2e group calculations
- Natural-gas unit conversion and formulas
- Emission-factor source/version tracking
- Submission, approval, and locked reports
- CSV/XLSX imports and audit history

## Stack

- Next.js + React + TypeScript
- PostgreSQL
- Docker Compose
- Prisma

## Development

```bash
npm install
npm run dev
```

For the database:

```bash
docker compose up -d postgres
npx prisma migrate dev
```

## Safety

Do not commit real factory data, credentials, access tokens, or source documents containing restricted information.
