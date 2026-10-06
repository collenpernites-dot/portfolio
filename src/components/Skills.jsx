import { useState } from 'react'
import { Code2, PenTool, Headset, Megaphone } from 'lucide-react'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { skills } from '../data/skills'

const categoryIcons = {
  'Frontend Development': Code2,
  Design: PenTool,
  'Virtual Assistance': Headset,
  'Digital Marketing': Megaphone,
}

export default function Skills() {
  const categories = Object.keys(skills)
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills" className="section-pad border-t border-ink-100 bg-ink-50">
      <div className="container-x">
        <SectionTitle eyebrow="Skills" title="Technical & Professional Skills" subtitle="Grouped by discipline, with honest competency levels." />
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === c ? 'border-accent-600 bg-accent-600 text-white' : 'border-ink-200 bg-white text-ink-600 hover:border-accent-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills[active].map((skill) => {
            const Icon = categoryIcons[active]
            return (
              <Reveal key={skill.name}>
                <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-card hover:shadow-lift">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-semibold text-ink-950">{skill.name}</h3>
                    <span className="ml-auto text-xs font-bold text-accent-700">{skill.level}%</span>
                  </div>
                  <p className="mt-2 text-sm text-ink-500">{skill.note}</p>
                  <div className="mt-4 h-2 w-full rounded-full bg-ink-100">
                    <div className="h-2 rounded-full bg-accent-600" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
