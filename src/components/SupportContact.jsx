import React from 'react'

export default function SupportContact() {
  const [copied, setCopied] = React.useState(false)
  const TAX_ID = '18160855-1-42'

  const copyTaxId = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(TAX_ID)
      } else {
        const ta = document.createElement('textarea')
        ta.value = TAX_ID
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (_) {
      setCopied(false)
    }
  }
  return (
    <section className="mx-auto max-w-6xl px-4 py-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Támogatás és kapcsolat
      </h2>
      <p className="mb-4 text-slate-700">
        Az Alapítvány a Magyar Zsidó Ifjúságért a magyar zsidó fiatalok identitását és közösségi életét erősíti oktatási, kulturális és szociális programokkal. Támogatásoddal táborokat, kulturális eseményeket és ifjúsági projekteket valósíthatunk meg.
        <br />
        Ahhoz, hogy mindezt folytatni tudjuk, szükségünk van a támogatásodra – akár egyszeri, akár rendszeres adomány formájában. Csatlakozz hozzánk, és legyél része egy élő, aktív és befogadó közösség fenntartásának!
      </p>

      <div className="mb-8">
        <div className="bg-white rounded-lg shadow p-6 border border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-lg font-bold text-brand mb-1">
              Alapítvány a Magyar Zsidó Ifjúságért
            </div>
            <div className="text-base font-semibold tracking-widest text-slate-700 mb-2">
              ALMAZSI
            </div>
            <div className="text-sm text-slate-600 mb-1">
              <span className="font-semibold">Cím:</span> 1061 Budapest, Paulay Ede utca 1.
            </div>
            <div className="text-sm text-slate-600 mb-1">
              <span className="font-semibold">Adószám:</span> 18160855-1-42
            </div>
            <div className="text-sm text-slate-600 mb-1">
              <span className="font-semibold">Nyilvántartási szám:</span> 01-01-0006912
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 w-full md:w-[420px] md:shrink-0">
            <div className="text-sm text-slate-600 mb-1">Bankszámla</div>
            <div className="font-mono font-semibold text-lg mb-1">
              HUF 11701011-21201000
            </div>
            <div className="text-xs text-slate-500 mb-1">
              IBAN: <span className="font-mono">HU46 1170 1011 2120 1000 0000 0000</span>
            </div>
            <div className="text-xs text-slate-500 mb-1">
              Bank neve: OTP Bank
            </div>
            <div className="text-xs text-slate-500 mb-1">
              SWIFT (BIC): OTPVHUHB
            </div>
            <div className="text-xs text-slate-500">
              Bank székhelye: 1051 Budapest, Nádor utca 16.
            </div>
          </div>
        </div>
      </div>

      {/* SZJA 1% kártya */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow p-6 border border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-lg font-bold text-brand mb-1">
              Ajánld fel adód 1%-át – támogasd a jövő közösségét!
            </h2>
            <p className="text-sm text-slate-600">
              Minden évben dönthetsz róla, hova kerüljön személyi jövedelemadód 1%-a. Ha az Alapítvány a Magyar Zsidó Ifjúságért-t választod,
              hozzájárulsz ahhoz, hogy zsidó fiatalok tanulhassanak, fejlődhessenek, és közösségben élhessék meg identitásukat.
              <br />
              Az 1% felajánlása neked semmibe sem kerül, számunkra viszont hatalmas segítség!
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 w-full md:w-[420px] md:shrink-0">
            <div className="text-sm text-slate-600 mb-1">Adószámunk</div>
            <div className="font-mono font-semibold text-2xl md:text-3xl tracking-wider select-all">{TAX_ID}</div>
            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                onClick={copyTaxId}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-brand text-white hover:bg-brand-dark text-sm"
              >
                Másold az adószámot
              </button>
              <span aria-live="polite" className={`text-xs ${copied ? 'text-green-600' : 'text-transparent'}`}>
                Kimásolva
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-white rounded-lg shadow p-6 border border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-lg font-bold text-brand mb-1">
              Kapcsolatfelvétel
            </div>
            <div className="text-base font-semibold tracking-widest text-slate-700 mb-2">
              Lépj velünk kapcsolatba!
            </div>
            <div className="text-sm text-slate-600 mb-1">
              Ha kérdésed van, vagy szeretnél többet megtudni programjainkról, írj nekünk bátran.
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 w-full md:w-[420px] md:shrink-0">
            <div className="text-sm text-slate-600 mb-1">E-mail</div>
            <a
              href="mailto:hello@almazsi.hu"
              className="font-mono font-semibold text-lg text-brand hover:text-brand-dark"
            >
              hello@almazsi.hu
            </a>
            <div className="text-xs text-slate-500 mt-2">
              Vagy keress minket a Hasomer Hacair csatornáin és közösségi oldalain. <a href="https://somer.hu/kapcsolat" className="underline text-brand hover:text-brand-dark" target="_blank" rel="noopener noreferrer">somer.hu/kapcsolat</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="https://somer.hu"
          className="inline-block mt-4 px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Látogasd meg a közösségünk!
        </a>
      </div>
    </section>
  );
}
