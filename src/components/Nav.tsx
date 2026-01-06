import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

export function Nav({
  left,
  right,
  links,
}: {
  left: ReactNode
  right: ReactNode
  links: { to: string; label: string }[]
}) {
  return (
    <header className="navWrap">
      <div className="nav">
        <div className="navLeft">{left}</div>
        <nav className="navLinks" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              className={({ isActive }) => `navLink${isActive ? ' active' : ''}`}
              to={l.to}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="navRight">{right}</div>
      </div>
    </header>
  )
}


