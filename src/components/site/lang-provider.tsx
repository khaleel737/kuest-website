'use client'

import * as React from 'react'

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'zh', label: '中文', flag: '🇨🇳' }
] as const

export type LangCode = (typeof LANGUAGES)[number]['code']

type Ctx = {
  lang: LangCode
  setLang: (l: LangCode) => void
}

const LangContext = React.createContext<Ctx>({
  lang: 'en',
  setLang: () => {}
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<LangCode>('en')

  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem('kuest_lang') as LangCode | null
      if (saved && LANGUAGES.some((l) => l.code === saved)) setLang(saved)
    } catch {}
  }, [])

  const update = React.useCallback((l: LangCode) => {
    setLang(l)
    try {
      window.localStorage.setItem('kuest_lang', l)
    } catch {}
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang: update }}>{children}</LangContext.Provider>
  )
}

export function useLang() {
  return React.useContext(LangContext)
}
