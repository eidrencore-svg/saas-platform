# SaaS Platform

A modern SaaS starter built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **NextAuth**, **Prisma**, and **Stripe**.

## Features

- Landing page with pricing section
- Authentication (credentials + OAuth ready) via NextAuth
- Protected dashboard route
- PostgreSQL database via Prisma ORM
- Stripe subscriptions + webhook handler
- TypeScript end-to-end

## Getting Started

```bash
cp .env.example .env   # fill in your secrets
npm install
npx prisma migrate dev --name init
npm run dev
```

Open http://localhost:3000

## Project Structure

```
prisma/schema.prisma      Database models (User, Account, Session, Subscription)
src/app/                  App Router pages (landing, login, dashboard, API)
src/lib/                  auth, db, stripe helpers
src/middleware.ts         Route protection
```
