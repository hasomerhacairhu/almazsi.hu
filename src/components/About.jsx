import React, { useState } from 'react'
import { GALLERY } from '../config/gallery'
import Lightbox from 'yet-another-react-lightbox'
import aboutHtml from '../content/about.html?raw'

export default function About() {
  const [index, setIndex] = useState(-1)

  const openModal = (img) => {
    const i = GALLERY.about.findIndex((g) => g.key === img.key)
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
      <h2 className="text-2xl md:text-3xl font-semibold">
        Kik vagyunk?
      </h2>
      <article className="mt-4 prose prose-slate max-w-none">
        <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
      </article>
  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {GALLERY.about.map((img) => (
          <div key={img.key} className="group cursor-zoom-in" >
            <div
              role="button"
              tabIndex={0}
              aria-label={img.alt}
              onClick={() => openModal(img)}
              onKeyDown={(e) => onKeyOpen(e, img)}
      className="aspect-square w-full rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm transition duration-200 hover:shadow-md hover:border-brand/40"
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

      {/* Lightbox néző */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={GALLERY.about.map((img) => ({ src: img.url, description: img.alt }))}
        animation={{ fade: 200, swipe: 250 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </section>
  )
}
