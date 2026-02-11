import { ShieldCheck, Zap, Database, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate pt-14">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
              Complete Authentication for Modern Apps
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              The ultimate guide implementation including Next.js, Drizzle ORM, Turso DB, and Better Auth with Google integration.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/tutorial"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all active:scale-95"
              >
                Start Tutorial
              </Link>
              <Link
                href="/profile"
                className="text-sm font-semibold leading-6 text-zinc-400 hover:text-white transition-colors"
              >
                Go to Profile
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-yellow-400" />}
              title="PNPM Speed"
              description="Fast, disk space efficient package management."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-6 w-6 text-indigo-400" />}
              title="Better Auth"
              description="The most comprehensive auth library for the web."
            />
            <FeatureCard 
              icon={<Database className="h-6 w-6 text-emerald-400" />}
              title="Turso DB"
              description="SQLite at the edge. Distributed and blazing fast."
            />
            <FeatureCard 
              icon={<Globe className="h-6 w-6 text-purple-400" />}
              title="Drizzle ORM"
              description="Headless Type-safe ORM with magical DX."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/5 p-8 transition-hover hover:bg-white/10">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
        {icon}
      </div>
      <h3 className="mt-6 font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
    </div>
  );
}
