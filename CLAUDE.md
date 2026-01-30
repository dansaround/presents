# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Enhanced linkhub/linktree alternative called "Presents" - creates dynamic, feature-rich agent profiles with social media integration, property listings (for realtors), CTAs, and multimedia content. Now built as a monorepo with Next.js 14 + Strapi CMS.

## Monorepo Structure

```
presents/
├── apps/
│   ├── web/                    # Next.js 14 App Router
│   │   ├── app/
│   │   │   ├── (auth)/         # /sign-in, /sign-up
│   │   │   ├── (dashboard)/    # Protected: /dashboard, /editor/[id]
│   │   │   ├── @[slug]/        # Public profile pages
│   │   │   └── api/webhooks/   # Clerk webhooks
│   │   ├── components/
│   │   │   ├── blocks/         # Block renderers (registry pattern)
│   │   │   ├── editor/         # Drag-drop editor components
│   │   │   ├── profile/        # ProfileWrapper, ProfileRenderer
│   │   │   └── ui/             # shadcn/ui components
│   │   ├── lib/                # Strapi client, utils
│   │   └── middleware.ts       # Custom domains + auth
│   │
│   └── cms/                    # Strapi v4
│       └── src/
│           ├── api/profile/    # Profile collection
│           └── components/blocks/  # Dynamic zone blocks
│
├── packages/shared/            # Shared TypeScript types
└── legacy/                     # Original Vite + React code (reference only)
```

## Commands

```bash
# Root (runs both apps)
pnpm dev              # Start both Next.js and Strapi
pnpm build            # Build both apps
pnpm lint             # Lint all workspaces

# Individual apps
pnpm dev:web          # Start Next.js dev server (port 3000)
pnpm dev:cms          # Start Strapi dev server (port 1337)
pnpm build:web        # Build Next.js for production
pnpm build:cms        # Build Strapi admin
```

## Architecture

### Tech Stack
- **Next.js 14** (App Router) + **TypeScript** for frontend
- **Strapi v4** as headless CMS
- **Tailwind CSS** + **shadcn/ui** for styling
- **Clerk** for authentication
- **@dnd-kit** for drag-and-drop editor
- **pnpm workspaces** for monorepo management

### Key Patterns

**Block System**: Profiles are composed of dynamic blocks stored in Strapi's dynamic zone. Each block type has a corresponding React renderer in `apps/web/components/blocks/`.

**Block Registry**: Use `getBlockComponent(type)` from `components/blocks/registry.ts` to render blocks dynamically.

**Shared Types**: All TypeScript interfaces live in `packages/shared` and are imported as `@presents/shared`.

### Adding New Blocks

1. Add type definition in `packages/shared/src/types/blocks.ts`
2. Create Strapi component in `apps/cms/src/components/blocks/`
3. Create React renderer in `apps/web/components/blocks/`
4. Register in `apps/web/components/blocks/registry.ts`

### Profile Routes

- `/@[slug]` - Public profile pages (SSR)
- `/dashboard` - User's profile list
- `/editor/[profileId]` - Drag-and-drop editor

## Legacy Code Reference

The `legacy/` folder contains the original Vite + React implementation. Use for reference on:
- Component styling patterns (`*.styles.ts`)
- Profile data structure (`people.ts`)
- Property carousel implementation (`Properties/`)

## Environment Variables

### apps/web/.env.local
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=
```

### apps/cms/.env
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=
ADMIN_JWT_SECRET=
API_TOKEN_SALT=
```
