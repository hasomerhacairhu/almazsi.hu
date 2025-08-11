import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Alapítvány a Magyar Zsidó Ifjúságért – ALMAZSI</div>
        <div className="flex gap-4">
          <a href="https://somer.hu/category/hirek/" target="_blank" rel="noreferrer" className="hover:text-brand">Hírek</a>
          <a href="#support" className="hover:text-brand">Támogatás</a>
        </div>
      </div>
    </footer>
  )
}
