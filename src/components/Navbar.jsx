import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import resumeUrl from '../assets/resume.pdf?url'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="font-display text-lg font-bold text-ink-950">
          Collen<span className="text-accent-600">.</span>Pernites
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === l.href.slice(1) ? 'text-accent-700 bg-accent-50' : 'text-ink-600 hover:text-accent-700 hover:bg-ink-50'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumeUrl}
              download
              className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-700"
            >
              <Download size={16} /> Resume
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-ink-100 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-medium text-ink-700 hover:bg-ink-50">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={resumeUrl} download className="block px-6 py-3 text-sm font-semibold text-accent-700">
              Download Resume
            </a>
          </li>
          <li className="px-6 py-3">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </header>
  )
}
