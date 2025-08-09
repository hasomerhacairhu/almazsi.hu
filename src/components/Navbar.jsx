import React from 'react'

const NAV = [
  { href: '#hero', label: 'Kezdőlap' },
  { href: '#about', label: 'Kik vagyunk?' },
  { href: '#goals', label: 'Céljaink' },
  { href: '#activities', label: 'Tevékenységünk' },
  { href: '#history', label: 'Előtörténet' },
  { href: '#reports', label: 'Beszámolók' },
  // Hírek menüpont külső linkre mutat
  { href: 'https://somer.hu/category/hirek/', label: 'Hírek', external: true },
  { href: '#support', label: 'Támogatás' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-semibold text-brand hover:text-brand-light">ALMAZSI</a>
        <ul className="hidden md:flex gap-6 text-sm">
          {NAV.map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-brand">
                  {item.label}
                </a>
              ) : (
                <a href={item.href} className="hover:text-brand">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
  <a href="https://somer.hu" target="_blank" rel="noreferrer" className="hidden md:inline-block px-3 py-1.5 rounded-md bg-brand text-white text-sm hover:bg-brand-dark">
          Látogasd meg a közösségünk!
        </a>
      </nav>
    </header>
  )
}
