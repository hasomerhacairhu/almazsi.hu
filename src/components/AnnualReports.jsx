import React from 'react'
import reports from '../content/reports.json'

export default function AnnualReports() {
return (
    <section className="mx-auto max-w-6xl px-4 py-4" aria-labelledby="reports-heading">
        <h2 id="reports-heading" className="text-2xl md:text-3xl font-semibold">
            Éves beszámolók és közhasznúsági mellékletek
        </h2>

        <div className="mt-6 grid gap-4">
            {reports.map(({ year, report, annual }) => (
                <div key={year} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                        <strong className="text-slate-900">{year}</strong>
                        <div className="text-sm text-slate-700">
                            {report && (
                                <>
                                    <a
                                        href={report}
                                        className="text-brand hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${year}. évi elnöki beszámoló megnyitása új lapon`}
                                    >
                                        Elnöki beszámoló
                                    </a>
                                </>
                            )}
                            {report && annual && (
                                <span className="mx-2 text-slate-400" aria-hidden>|</span>
                            )}
                            {annual && (
                                <>
                                    <a
                                        href={annual}
                                        className="text-brand hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${year}. évi egyszerűsített éves beszámolója és közhasznúsági melléklet`}
                                    >
                                        Egyszerűsített éves beszámolója és közhasznúsági melléklet
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">
            A közzétett dokumentumok az Alapítvány Kuratóriuma által jóváhagyott hivatalos iratok.
        </p>
    </section>
)
}
