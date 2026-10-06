import { Download, Mail, MapPin } from 'lucide-react'
import Button from './Button'
import ImageSlider from './ImageSlider'
import resumeUrl from '../assets/resume.pdf?url'

const stats = [
  { value: '4+', label: 'Core Service Areas' },
  { value: '2+', label: 'Professional Experience Areas' },
  { value: '15+', label: 'Digital Skills' },
  { value: '100%', label: 'Commitment to Quality' },
]

export default function Hero() {
  return (
    <section id="home" className="border-b border-ink-100 bg-ink-50">
      <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white px-4 py-1.5 text-sm font-medium text-accent-700">
            <span className="h-2 w-2 rounded-full bg-accent-500" /> Available for Work
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink-950 md:text-5xl">
            Collen Alexes E. Pernites
          </h1>
          <p className="mt-4 text-lg font-semibold text-accent-700">
            Virtual Assistant | UI/UX Designer | Graphic Designer | Social Media Manager
          </p>
          <p className="mt-4 max-w-xl text-ink-600">
            Helping businesses stay organized, improve their digital presence, and create engaging experiences through
            reliable virtual assistance, creative design, and digital solutions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#contact">
              <Mail size={16} /> Contact Me
            </Button>
            <Button as="a" href={resumeUrl} download variant="secondary">
              <Download size={16} /> Download Resume
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-ink-200 bg-white p-4 text-center shadow-card">
                <p className="font-display text-2xl font-extrabold text-accent-700">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="rounded-2xl border border-ink-200 bg-white p-3 shadow-lift">
              <ImageSlider alt="Profile of Collen Alexes E. Pernites" className="w-full rounded-xl object-cover" />
            </div>
            <span className="absolute -top-4 -right-4 rounded-full bg-accent-600 px-4 py-1.5 text-xs font-bold text-white shadow-card">
              Available for Work
            </span>
            <span className="absolute -bottom-4 left-4 rounded-full border border-ink-200 bg-white px-4 py-1.5 text-xs font-semibold text-ink-700 shadow-card">
              UI/UX · Graphic Design · VA
            </span>
            <span className="absolute top-1/2 -left-6 hidden rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-semibold text-accent-700 shadow-card sm:block">
              <MapPin size={12} className="mr-1 inline" /> Valencia, Bukidnon
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
