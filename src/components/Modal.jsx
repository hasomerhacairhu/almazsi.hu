import React, { useEffect } from 'react'

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.()
    }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative mx-4 w-full max-w-3xl max-h-[85vh] rounded-lg bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3 flex-none">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            aria-label="Bezárás"
            className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 text-slate-800">
          {children}
        </div>
      </div>
    </div>
  )
}
