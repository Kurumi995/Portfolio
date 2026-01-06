export type Theme = 'light' | 'dark'

const storageKey = 'theme'

export function getInitialTheme(): Theme {
  const saved = typeof window !== 'undefined' ? window.localStorage.getItem(storageKey) : null
  if (saved === 'light' || saved === 'dark') return saved
  const prefersDark =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = theme
  try {
    window.localStorage.setItem(storageKey, theme)
  } catch {
    return
  }
}


