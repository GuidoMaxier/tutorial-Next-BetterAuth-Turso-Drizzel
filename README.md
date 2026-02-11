# Auth Mastery: Next.js + Better Auth + Turso + Drizzle

Project status: Production Ready | Version: 1.0.0

A high-performance authentication boilerplate and tutorial implemented with the modern web stack. This repository serves as a practical guide for developers looking to implement secure, scalable, and beautiful authentication systems.

---

## Technical Stack

| Category            | Technology                         |
| :------------------ | :--------------------------------- |
| **Framework**       | Next.js 16 (App Router)            |
| **Authentication**  | Better Auth (Google & Credentials) |
| **Database**        | Turso (Distributed SQLite)         |
| **ORM**             | Drizzle ORM                        |
| **Package Manager** | PNPM                               |
| **UI/Styling**      | Tailwind CSS 4.0 + Lucide Icons    |

---

## Core Features

- **Social Login**: Full integration with Google OAuth.
- **Session Management**: Secure, server-side session handling.
- **Route Protection**: Advanced middleware (proxy) for securing sensitive pages.
- **Edge Compatible**: Blazing fast performance using Turso's edge database.
- **Developer Experience**: Type-safe database queries and automated migrations.
- **Premium UI**: Clean, modern interface with glassmorphism and responsive design.

---

## Getting Started

### 1. Installation

Clone the repository and install dependencies using PNPM:

```bash
pnpm install
```

### 2. Environment Setup

Create a `.env.local` file in the `my-app` directory. Refer to `.env.local.example` for the required keys.

```bash
# Required Keys
TURSO_CONNECTION_URL=your_url
TURSO_AUTH_TOKEN=your_token
BETTER_AUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
```

### 3. Database Sync

Push your schema to Turso:

```bash
cd my-app
pnpm drizzle-kit push
```

### 4. Run Development Server

```bash
pnpm dev
```

---

## Internal Tutorial

The application includes a built-in interactive tutorial. Once the server is running, navigate to:
`http://localhost:3000/tutorial`

This section provides the exact code blocks used to build:

- The database schema for Better Auth.
- Server-side auth configuration.
- The Google Login button implementation.
- Middleware route protection.

---

## Architecture

- `my-app/db/`: Database schema and connection client.
- `my-app/lib/`: Unified auth configuration and client-side hooks.
- `my-app/app/api/auth/[...better-auth]/`: Dynamic route handler for all auth events.
- `my-app/middleware.ts`: Global protection for secure routes.

---

## License

MIT License - feel free to use this template for your own projects.
