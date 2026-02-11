import { ShieldAlert, LogIn, Home } from "lucide-react";
import Link from "next/link";

export default function UnauthorizedPage() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
            <div className="relative mb-8">
                <div className="absolute -inset-4 rounded-full bg-rose-500/20 blur-2xl animate-pulse"></div>
                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-rose-500/30 bg-rose-500/10 text-rose-500">
                    <ShieldAlert size={48} />
                </div>
            </div>

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Access Restricted
            </h1>
            
            <p className="mb-10 max-w-md text-lg text-zinc-400">
                The page you are trying to access is protected. Please sign in with your account to continue.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-all hover:bg-zinc-200 active:scale-95"
                >
                    <LogIn size={18} />
                    Login with Google
                </Link>
                
                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-95"
                >
                    <Home size={18} />
                    Back to Home
                </Link>
            </div>

            <div className="mt-16 text-xs font-medium uppercase tracking-[0.2em] text-rose-500/50">
                Error 401: Unauthorized
            </div>
        </div>
    );
}
