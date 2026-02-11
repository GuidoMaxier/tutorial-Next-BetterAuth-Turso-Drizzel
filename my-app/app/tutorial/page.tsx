"use client";

import { CheckCircle2, Code2, Database, Key, Layout, Server, Zap } from "lucide-react";

export default function TutorialPage() {
    const steps = [
        {
            icon: <Zap className="h-6 w-6 text-yellow-500" />,
            title: "Project Setup",
            description: "Initialize Next.js with pnpm and install core dependencies for Auth and Database.",
            code: `pnpm create next-app@latest my-app\ncd my-app\npnpm add better-auth drizzle-orm @libsql/client\npnpm add -D drizzle-kit dotenv`
        },
        {
            icon: <Database className="h-6 w-6 text-emerald-500" />,
            title: "Database Configuration",
            description: "Setup Turso SQLite and define your Drizzle schema for Better Auth tables.",
            code: `// db/schema.ts\nimport { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";\n\nexport const user = sqliteTable("user", {\n  id: text("id").primaryKey(),\n  name: text("name").notNull(),\n  email: text("email").notNull().unique(),\n  // ... other tables: session, account`
        },
        {
            icon: <Key className="h-6 w-6 text-indigo-500" />,
            title: "Auth Server Logic",
            description: "Configure Better Auth with the Drizzle adapter and Google social provider.",
            code: `// lib/auth.ts\nexport const auth = betterAuth({\n  database: drizzleAdapter(db, {\n    provider: "sqlite",\n    schema: schema,\n  }),\n  socialProviders: {\n    google: { clientId: ..., clientSecret: ... }\n  }\n})`
        },
        {
            icon: <Layout className="h-6 w-6 text-purple-500" />,
            title: "Client-Side Login Button",
            description: "The classic login button that triggers the Google OAuth flow.",
            code: `"use client";\nimport { authClient } from "@/lib/auth-client";\n\nexport function LoginButton() {\n  return (\n    <button onClick={() => authClient.signIn.social({ provider: "google" })}>\n      Login with Google\n    </button>\n  );\n}`
        },
        {
            icon: <Server className="h-6 w-6 text-blue-500" />,
            title: "Route Protection",
            description: "Secure your pages using Next.js Middleware to verify sessions before access.",
            code: `// middleware.ts\nexport default async function middleware(req) {\n  const { data: session } = await betterFetch("/api/auth/get-session");\n  if (!session) return NextResponse.redirect("/");\n}`
        }
    ];

    return (
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-4">
                    Step-by-Step Tutorial
                </h1>
                <p className="text-xl text-zinc-400">
                    Everything you need to replicate this professional auth system.
                </p>
            </div>

            <div className="space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className="relative pl-12 pb-12 last:pb-0">
                        {/* Timeline Line */}
                        {index !== steps.length - 1 && (
                            <div className="absolute left-6 top-10 -bottom-6 w-px bg-zinc-800" />
                        )}
                        
                        <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950">
                            {step.icon}
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:bg-zinc-900/80">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <span className="text-zinc-600 font-mono text-sm leading-none">0{index + 1}</span>
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-zinc-400 max-w-2xl">{step.description}</p>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                                    <CheckCircle2 className="h-4 w-4" /> Ready to copy
                                </div>
                            </div>

                            <div className="relative group mt-4">
                                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-700 opacity-20 blur group-hover:opacity-40 transition duration-500"></div>
                                <div className="relative rounded-xl border border-white/10 bg-black/60 p-6 overflow-hidden">
                                    <div className="absolute right-4 top-4">
                                        <Code2 className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                                    </div>
                                    <pre className="font-mono text-sm text-indigo-300/90 overflow-x-auto selection:bg-indigo-500/30">
                                        {step.code}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 p-12 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Want the full source?</h2>
                <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                    Check out the complete GUIDE.md in the project root for more details on Turso CLI and Google Cloud Console configuration.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href="https://github.com/GuidoMaxier/tutorial-Next-BetterAuth-Turso-Drizzel"
                        className="rounded-full bg-white px-8 py-3 text-black font-bold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        GitHub Repository
                    </a>
                </div>
            </div>
        </div>
    );
}
