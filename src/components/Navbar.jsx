import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NAV = [
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
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen((v) => !v)
  const handleClose = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-semibold text-brand hover:text-brand-light" onClick={handleClose}>ALMAZSI</a>
        {/* Desktop menu */}
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
        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand/40"
          aria-label="Menü megnyitása"
          aria-expanded={open}
          onClick={handleToggle}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>
      {/* Mobile slide-down menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <ul className="flex flex-col gap-3 text-sm">
              {NAV.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block py-1 hover:text-brand"
                      onClick={handleClose}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-1 hover:text-brand"
                      onClick={handleClose}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="https://somer.hu"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block w-full text-center px-3 py-2 rounded-md bg-brand text-white text-sm hover:bg-brand-dark"
              onClick={handleClose}
            >
              Látogasd meg a közösségünk!
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
