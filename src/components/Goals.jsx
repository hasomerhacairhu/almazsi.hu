import React from 'react'
import GOALS from '../content/goals.js'

export default function Goals() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-4">
      <h2 className="text-2xl md:text-3xl font-semibold">Céljaink</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {GOALS.map(({ title, Icon }) => {
          return (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand to-brand-light text-white ring-1 ring-inset ring-white/40 flex items-center justify-center shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-slate-900">{title}</h3>
                  {/* Később bővíthető rövid leírással */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
