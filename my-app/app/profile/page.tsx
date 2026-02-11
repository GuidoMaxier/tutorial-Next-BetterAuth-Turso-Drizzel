"use client";

import { authClient } from "@/lib/auth-client";
import { Loader2, Mail, Shield, User, Calendar, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/");
        }
    }, [session, isPending, router]);

    if (isPending) {
        return (
            <div className="flex h-[80vh] w-full items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-indigo-500" />
            </div>
        );
    }

    if (!session) return null;

    return (
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center sm:flex-row sm:items-end sm:gap-8">
                <div className="relative group">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-zinc-900 bg-zinc-800 shadow-2xl">
                        {session.user.image ? (
                            <img
                                src={session.user.image}
                                alt={session.user.name}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center">
                                <User className="h-16 w-16 text-zinc-600" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-6 text-center sm:text-left sm:flex-1">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        {session.user.name}
                    </h1>
                    <p className="mt-2 text-lg font-medium text-indigo-400">
                        Authorized User
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 text-zinc-400 mb-4">
                        <Mail className="h-5 w-5" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Email Address</h3>
                    </div>
                    <p className="text-lg text-white font-medium">{session.user.email}</p>
                    <div className="mt-4 flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                            Verified account
                        </span>
                    </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 text-zinc-400 mb-4">
                        <Shield className="h-5 w-5" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider">User ID</h3>
                    </div>
                    <p className="text-sm text-zinc-300 font-mono break-all bg-black/30 p-2 rounded-lg">
                        {session.user.id}
                    </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 text-zinc-400 mb-4">
                        <Calendar className="h-5 w-5" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Account History</h3>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-500">Created:</span>
                            <span className="text-zinc-200">
                                {new Date(session.user.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-500">Last seen:</span>
                            <span className="text-zinc-200">Just now</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 text-zinc-400 mb-4">
                        <MapPin className="h-5 w-5" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Session Info</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-zinc-300">
                            <span className="text-zinc-500">Expires at:</span> {new Date(session.session.expiresAt).toLocaleTimeString()}
                        </p>
                        <p className="text-zinc-300">
                            <span className="text-zinc-500">Browser:</span> {session.session.userAgent?.split("/")[0]}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    Raw Session Metadata
                </h3>
                <pre className="overflow-x-auto rounded-xl bg-black/40 p-4 font-mono text-xs text-indigo-300/80">
                    {JSON.stringify(session, null, 4)}
                </pre>
            </div>
        </div>
    );
}
