import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { services } from '../data/services'

const categories = ['All', ...new Set(services.map((s) => s.category))]

export default function Services() {
  const [filter, setFilter] = useState('All')
  const [openIndex, setOpenIndex] = useState(null)
  const visible = filter === 'All' ? services : services.filter((s) => s.category === filter)

  return (
    <section id="services" className="section-pad border-t border-ink-100 bg-ink-50">
      <div className="container-x">
        <SectionTitle eyebrow="Services" title="What I Can Do" subtitle="Reliable digital support across admin, creative, and marketing needs." />
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === c ? 'border-accent-600 bg-accent-600 text-white' : 'border-ink-200 bg-white text-ink-600 hover:border-accent-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => {
            const Icon = s.icon
            const open = openIndex === s.title
            return (
              <Reveal key={s.title}>
                <div className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-card transition-shadow hover:shadow-lift">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                    <Icon size={22} />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold text-ink-950">{s.title}</h3>
                    <span className="rounded-full bg-ink-50 px-2.5 py-0.5 text-xs font-medium text-ink-500">{s.category}</span>
                  </div>
                  <p className="mt-2 flex-1 text-sm text-ink-600">{s.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.skills.map((sk) => (
                      <span key={sk} className="rounded-md border border-ink-200 px-2 py-0.5 text-xs text-ink-600">{sk}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => setOpenIndex(open ? null : s.title)}
                    aria-expanded={open}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800"
                  >
                    Learn More <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && <p className="mt-3 rounded-lg bg-ink-50 p-3 text-sm text-ink-600">{s.details}</p>}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
