# Orlinski Realty Group Website

A premium institutional website for ORLINSKI REALTY GROUP (ORG), focused on Branded Residences & Hospitality partnerships.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** components (via utility classes)
- **Framer Motion** for animations
- **Lucide Icons** for iconography
- **Sanity.io** for CMS (brands, projects, press, insights, team)
- **Supabase** for database, auth, and storage
- **tRPC** for type-safe API routes
- **Vercel** ready for deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Sanity.io account and project
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd orlinskirealtygroup
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in the required environment variables (see `.env.example` for details).

4. Set up Sanity:
```bash
cd studio
npm install
# or
pnpm install
```

5. Initialize Sanity (if not already done):
```bash
cd studio
npx sanity init
```

6. Set up Supabase:
   - Create a new Supabase project
   - Run the migrations in `supabase/migrations/001_create_tables.sql` via Supabase SQL editor or CLI

### Development

1. Start the Next.js development server:
```bash
npm run dev
# or
pnpm dev
```

2. Start Sanity Studio (in a separate terminal):
```bash
cd studio
npm run dev
# or
pnpm dev
```

The website will be available at `http://localhost:3000` and Sanity Studio at `http://localhost:3333`.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── developers/        # Developers page (priority)
│   ├── press/             # Press page (priority)
│   ├── brands/            # Brands listing and dynamic routes
│   ├── projects/          # Projects listing and dynamic routes
│   ├── insights/           # Insights listing and dynamic routes
│   ├── contact/            # Contact/qualification form
│   └── api/trpc/          # tRPC API routes
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── BentoGrid.tsx
│   ├── EditorialCard.tsx
│   ├── PressCard.tsx
│   ├── CTAButton.tsx
│   └── QualificationForm.tsx
├── lib/                   # Utilities and configurations
│   ├── sanity.ts          # Sanity client and queries
│   ├── supabase.ts       # Supabase client
│   ├── trpc/             # tRPC setup
│   └── utils.ts          # Utility functions
├── studio/               # Sanity Studio
│   └── schemas/          # Sanity content schemas
└── supabase/
    └── migrations/       # Supabase SQL migrations
```

## Key Features

### Qualification Form & NDA-First Flow

The qualification form (`/contact`) routes submissions based on:
- **Developer/Landowner** with GDV ≥ $50M → NDA request
- **Investor** → Private access request
- **Others** → Polite close

All submissions are stored in Supabase with spam protection (honeypot).

### CMS Integration

Sanity.io manages:
- **Brands**: Brand ecosystem content
- **Projects**: Portfolio projects (with confidential flags)
- **Press Items**: Press coverage and announcements
- **Insights**: Long-form thought leadership
- **Team**: Team member profiles

### Design System

- **Colors**: Black (#0B0B0B), Off-white (#F5F5F2), Stone (#D6D2C4), Gold (#C9A24D), Graphite (#1E1E1E)
- **Typography**: Space Grotesk (headings), Inter (body)
- **Style**: Minimal, editorial, architectural spacing

## Environment Variables

See `.env.example` for required variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN` (for write access)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Sanity Studio

Deploy Sanity Studio separately:
```bash
cd studio
npm run deploy
```

### Supabase

Run migrations via Supabase dashboard or CLI before deployment.

## Scripts

- `npm run dev` - Start Next.js dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run studio` - Start Sanity Studio (from root)
- `npm run format` - Format code with Prettier

## License

Private - Orlinski Realty Group
