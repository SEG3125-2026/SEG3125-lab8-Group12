import { House, Info, Library, Plus } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" role="presentation" aria-hidden="true">
      <path
        d="M10 12h18c6 0 10 3 12 6 2-3 6-6 12-6h2v34h-2c-6 0-10 2-12 5-2-3-6-5-12-5H10V12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M32 18v28" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

const navigationLinks = [
  { to: '/', label: 'Home', icon: House },
  { to: '/about', label: 'About', icon: Info },
  { to: '/browse', label: 'Browse', icon: Library },
  { to: '/create', label: 'Create', icon: Plus },
]

function TopNav() {
  return (
    <header className="top-nav">
      <NavLink to="/" className="brand" aria-label="uoDecks home">
        <BrandMark />
        <span className="brand-wordmark">
          uo<span>Decks</span>
        </span>
      </NavLink>

      <nav className="top-nav__links" aria-label="Primary">
        {navigationLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              isActive ? 'top-nav__link top-nav__link--active' : 'top-nav__link'
            }
          >
            <link.icon size={18} strokeWidth={2.1} />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default TopNav
