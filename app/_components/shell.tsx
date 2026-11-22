import Link from "next/link";
import type { ReactNode } from "react";

/** Shared chrome for the legal, support and app pages. */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-zinc-50 selection:bg-purple-500/30">
      <nav className="border-b border-white/5 bg-black/50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500" />
            Myth Apps
          </Link>
          <div className="flex gap-5 text-sm text-zinc-400">
            <Link href="/support" className="hover:text-white">Support</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-6 py-12">{children}</main>
      <footer className="py-8 px-6 border-t border-white/10 text-center text-zinc-500 text-sm">
        <p>© {2026} Myth Apps · <a className="underline" href="mailto:hello@mythapps.com">hello@mythapps.com</a></p>
      </footer>
    </div>
  );
}

/** Long-form text styling without a typography plugin. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <article className="space-y-4 text-zinc-300 leading-relaxed [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:text-white [&_h1]:tracking-tight [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:pt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_h3]:pt-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-purple-300 [&_a]:underline [&_strong]:text-white">
      {children}
    </article>
  );
}
