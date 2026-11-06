import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track which section is in view for the active nav indicator.
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <button className="nav__brand mono-label" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        HD<span className="nav__brand-dot">.</span>
      </button>

      <nav className="nav__links" aria-label="Primary">
        {LINKS.map((l) => (
          <button
            key={l.id}
            className={`nav__link ${active === l.id ? 'nav__link--active' : ''}`}
            onClick={() => goTo(l.id)}
          >
            {l.label}
          </button>
        ))}
      </nav>

      <a
        className="nav__cta"
        href="https://linkedin.com/in/haritha-d-6690b3315"
        target="_blank"
        rel="noreferrer"
      >
        Let's talk <ArrowUpRight size={14} aria-hidden="true" />
      </a>

      <button
        className="nav__burger"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <button key={l.id} className="nav__mobile-link" onClick={() => goTo(l.id)}>
              <span className="mono-label">0{LINKS.indexOf(l) + 1}</span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
