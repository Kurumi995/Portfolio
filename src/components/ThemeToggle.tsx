import type { Theme } from '../lib/theme'
import { Icon } from './Icon'

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <button className="iconBtn" type="button" onClick={onToggle} aria-label="Toggle theme">
      {theme === 'dark' ? <Icon name="sun" /> : <Icon name="moon" />}
    </button>
  )
}


