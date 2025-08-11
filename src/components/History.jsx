import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal'
import { GALLERY } from '../content/gallery'
import historyHtml from '../content/history.html?raw'

export default function History() {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)

  // When modal opens, set image sources for key members gallery
  useEffect(() => {
    if (!open || !contentRef.current) return
    const root = contentRef.current
    // Support both a map of links or an array of objects
    const map = GALLERY.historyMembers
      ? Object.fromEntries((GALLERY.history || []).map(({ key, url }) => [key, url]))
      : (GALLERY.history && !Array.isArray(GALLERY.history))
        ? GALLERY.history
        : Object.fromEntries((GALLERY.history || []).map(({ key, url }) => [key, url]))
    Object.entries(map).forEach(([key, src]) => {
      const img = root.querySelector(`img[data-img-key="${key}"]`)
      if (img && !img.src) img.src = src
      const link = root.querySelector(`a[data-img-link="${key}"]`)
      if (link && !link.getAttribute('href')) {
        link.setAttribute('href', src)
        link.setAttribute('target', '_blank')
        link.setAttribute('rel', 'noreferrer')
      }
    })
  }, [open])

  return (
    <section className="mx-auto max-w-6xl px-4 py-4">
      <h2 className="text-2xl md:text-3xl font-semibold">Előtörténet</h2>
      <p className="mt-4 text-slate-700">
        1989-ben lehetőség nyílt a Hasomer Hacair magyarországi ifjúsági szervezet újjászervezésére. 1997-ben létrejött
        az Alapítvány a Magyar Zsidó Ifjúságért, hogy a közösségi életet és a fiatalok fejlődését támogassa.
      </p>
      <button
        className="mt-4 inline-block rounded-md bg-brand px-4 py-2 text-sm text-white hover:bg-brand-dark"
        onClick={() => setOpen(true)}
      >
        Tovább olvasom
      </button>

    <Modal isOpen={open} onClose={() => setOpen(false)} title="Előtörténet">
        <article className="prose prose-slate max-w-none" ref={contentRef}>
          <div dangerouslySetInnerHTML={{ __html: historyHtml }} />
        </article>
      </Modal>
    </section>
  )
}
