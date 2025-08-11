import React from 'react'
import { GALLERY } from '../content/gallery'

export default function Hero() {
  const heroImg = GALLERY.hero
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-light via-teal-100 to-brand/10">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
            Alapítvány a Magyar Zsidó Ifjúságért
          </h1>
          <p className="mt-4 text-slate-600 md:text-lg">
            Támogatjuk a zsidó fiatalokat a tanulásban, önismeretben és közösségépítésben – Magyarországon és a világban.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#about" className="px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark text-sm">Tudj meg többet</a>
            <a href="https://somer.hu" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-brand text-brand hover:bg-brand/10 text-sm">Látogasd meg a közösségünk!</a>
          </div>
        </div>
        <div
          aria-hidden
          className="aspect-[4/3] lg:aspect-[16/10] rounded-xl overflow-hidden lg:col-span-3 shadow-sm transition-transform duration-300 will-change-transform hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]"
        >
          {heroImg && (
            <img
              src={heroImg.url}
              alt={heroImg.alt}
              className="block w-full h-full object-cover animate-zoomPulse"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  )
}
