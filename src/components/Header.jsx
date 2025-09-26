import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight">Voltex LLC</a>
        <nav className="flex items-center gap-3">
          <a
            href="https://voltex.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:bg-black hover:text-white transition"
            title="Էներգետիկ լուծումներ / Energy solutions"
          >
            Էներգետիկ լուծումներ / Energy solutions
          </a>
        </nav>
      </div>
    </header>
  );
}
