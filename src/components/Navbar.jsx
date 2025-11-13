import { Menu, Heart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "#about", label: "About" },
    { href: "#ministries", label: "Ministries" },
    { href: "#events", label: "Events" },
    { href: "#stories", label: "Stories" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 text-white shadow-md">
            <Heart className="h-5 w-5" />
          </span>
          <div className="font-bold text-gray-900 leading-tight">
            Cluster 1
            <div className="text-xs font-medium text-gray-600 -mt-0.5">Youth for Christ</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:text-indigo-600 transition-colors">
              {it.label}
            </a>
          ))}
          <a href="#join" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700">
            Join Us
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-black/5">
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {items.map((it) => (
            <a key={it.href} href={it.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-black/5">
              {it.label}
            </a>
          ))}
          <a href="#join" onClick={() => setOpen(false)} className="block px-3 py-2 rounded bg-indigo-600 text-white text-center">
            Join Us
          </a>
        </div>
      )}
    </header>
  );
}
