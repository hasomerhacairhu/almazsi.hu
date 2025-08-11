import { GALLERY } from '../config/gallery'
import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import ITEMS from '../content/activities.js'

export default function Activities() {
  const [index, setIndex] = useState(-1)

  const openModal = (img) => {
    const i = GALLERY.activities.findIndex((g) => g.key === img.key)
    setIndex(i)
  }
  const onKeyOpen = (e, img) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openModal(img)
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-4">
      <h2 className="text-2xl md:text-3xl font-semibold">Tevékenységünk</h2>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ITEMS.map((it) => (
          <div key={it.title} className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-2 text-slate-700 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-semibold">Galéria</h3>
        <p className="mt-2 text-slate-600 text-sm">
          Válogatás a nyilvános Facebook galériánkból. További képeket a teljes galériában találsz:{" "}
          <a
            href="https://www.facebook.com/hasomerhacair/photos_albums"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Facebook galéria megtekintése
          </a>
          .
        </p>
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.activities.map((img) => (
            <div key={img.key} className="group cursor-zoom-in">
              <div
                role="button"
                tabIndex={0}
                aria-label={img.alt}
                onClick={() => openModal(img)}
                onKeyDown={(e) => onKeyOpen(e, img)}
                className="aspect-[4/3] w-full rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm transition duration-200 hover:shadow-md hover:border-brand/40"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="block object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={GALLERY.activities.map((img) => ({ src: img.url, description: img.alt }))}
          animation={{ fade: 200, swipe: 250 }}
          controller={{ closeOnBackdropClick: true }}
        />
      </div>
    </section>
  )
}
