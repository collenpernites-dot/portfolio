import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-x">
        <SectionTitle eyebrow="Career" title="Work Experience" />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-0 h-full w-px bg-ink-200 md:left-1/2" aria-hidden="true" />
          {experience.map((exp, i) => {
            const Icon = exp.icon
            return (
              <Reveal key={exp.company + exp.period} className={`relative mb-10 md:flex md:items-center ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-5 top-6 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-accent-200 bg-white text-accent-700 shadow-card md:left-1/2">
                  <Icon size={18} />
                </div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
                  <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-ink-950">{exp.company}</h3>
                      <span className="rounded-full bg-accent-50 px-3 py-0.5 text-xs font-bold text-accent-700">{exp.period}</span>
                    </div>
                    <p className="mt-1 font-semibold text-accent-700">{exp.role}</p>
                    <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-ink-600">
                      {exp.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
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
