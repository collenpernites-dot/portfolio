import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { projects, projectCategories } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <SectionTitle eyebrow="Portfolio" title="Featured Work" subtitle="A selection of design, social media, and administrative projects." />
        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((c) => (
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <Reveal key={p.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card transition-shadow hover:shadow-lift">
                <img src={p.image} alt={p.title} className="h-44 w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-bold text-accent-700">{p.category}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink-950">{p.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-accent-700">{p.role}</p>
                  <p className="mt-2 flex-1 text-sm text-ink-600">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tools.map((t) => (
                      <span key={t} className="rounded-md border border-ink-200 px-2 py-0.5 text-xs text-ink-500">{t}</span>
                    ))}
                  </div>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 hover:text-accent-800">
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
