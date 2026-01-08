import { useEffect, useMemo, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { content } from './content'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { ThemeToggle } from './components/ThemeToggle'
import { applyTheme, getInitialTheme, type Theme } from './lib/theme'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Research } from './pages/Research'

function App() {
  const initialTheme = useMemo(() => getInitialTheme(), [])
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const location = useLocation()

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname, location.search])

  return (
    <div className="app">
      <button
        className="skip"
        type="button"
        onClick={() => {
          const el = document.getElementById('content')
          if (el instanceof HTMLElement) el.focus()
        }}
      >
        Skip to content
      </button>
      <Nav
        left={
          <Link className="brand" to="/" aria-label="Go to home">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandText">{content.profile.name}</span>
          </Link>
        }
        right={<ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />}
        links={[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/research', label: 'Research' },
          { to: '/projects', label: 'Project' },
        ]}
      />

      <main id="content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
