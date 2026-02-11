"use client";

import { authClient } from "@/lib/auth-client";
import { LogIn, LogOut, User, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const { data: session, isPending } = authClient.useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/profile",
        });
    };

    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20" />
                        <span className="text-xl font-bold tracking-tight text-white">AuthApp</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/tutorial" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Tutorial
                        </Link>
                        <Link href="/profile" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Profile
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {isPending ? (
                        <Loader2 className="h-5 w-5 animate-spin text-zinc-500" />
                    ) : session ? (
                        <div className="relative">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pr-3 transition-hover hover:bg-white/10"
                            >
                                {session.user.image ? (
                                    <img
                                        src={session.user.image}
                                        alt={session.user.name}
                                        className="h-8 w-8 rounded-full object-cover shadow-sm"
                                    />
                                ) : (
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800">
                                        <User className="h-4 w-4 text-zinc-400" />
                                    </div>
                                )}
                                <span className="text-sm font-medium text-white hidden sm:inline">
                                    {session.user.name.split(" ")[0]}
                                </span>
                            </button>

                            {isMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl border border-white/10 bg-zinc-900 p-1 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-3 py-2 border-b border-white/5">
                                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Account</p>
                                        <p className="text-sm font-medium text-white truncate">{session.user.email}</p>
                                    </div>
                                    <Link
                                        href="/profile"
                                        className="flex w-full items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <User className="h-4 w-4" /> Profile
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="flex w-full items-center gap-3 px-3 py-2 text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors"
                                    >
                                        <LogOut className="h-4 w-4" /> Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={handleLogin}
                            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition-all hover:pr-8 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <LogIn className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                                Login with Google
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
