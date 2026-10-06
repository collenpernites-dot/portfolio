import { MapPin, Briefcase, Sparkles, Download } from 'lucide-react'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import ImageSlider from './ImageSlider'
import resumeUrl from '../assets/resume.pdf?url'

const strengths = [
  { title: 'Organization', desc: 'Structured systems that keep work on track.' },
  { title: 'Creativity', desc: 'On-brand visuals and engaging content.' },
  { title: 'Communication', desc: 'Clear, timely, and professional.' },
  { title: 'Problem Solving', desc: 'Calm, resourceful, and dependable.' },
  { title: 'Attention to Detail', desc: 'Accuracy checked, every time.' },
  { title: 'Adaptability', desc: 'Comfortable across tools and tasks.' },
]

const specialties = ['Virtual Assistance', 'UI/UX Design', 'Graphic Design', 'Social Media Management', 'Data Entry', 'Bookkeeping']

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal>
          <ImageSlider alt="Collen Alexes E. Pernites" className="w-full max-w-md rounded-2xl border border-ink-200 shadow-card" />
          <div className="mt-6 max-w-md rounded-2xl border border-ink-200 bg-ink-50 p-6 shadow-card">
            <h3 className="font-display text-lg font-bold text-ink-950">Professional Info</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent-600" />
                <div><dt className="text-ink-400">Location</dt><dd className="font-medium text-ink-800">Valencia, Bukidnon, Philippines</dd></div>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={16} className="text-accent-600" />
                <div><dt className="text-ink-400">Current Role</dt><dd className="font-medium text-ink-800">Virtual Assistant & Designer</dd></div>
              </div>
              <div>
                <dt className="mb-2 flex items-center gap-2 text-ink-400"><Sparkles size={16} className="text-accent-600" /> Core Specialties</dt>
                <dd className="flex flex-wrap gap-2">
                  {specialties.map((s) => (
                    <span key={s} className="rounded-full border border-accent-200 bg-white px-3 py-1 text-xs font-medium text-accent-700">{s}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
        <div>
          <SectionTitle eyebrow="About" title="About Me" />
          <p className="text-ink-600 leading-relaxed">
            I’m Collen, a skilled <strong className="text-ink-900">Virtual Assistant</strong> with extensive expertise in{' '}
            <strong className="text-ink-900">UI/UX Design</strong>,{' '}
            <strong className="text-ink-900">Social Media Management</strong> and{' '}
            <strong className="text-ink-900">Graphic Design</strong>. Previously, I served as an{' '}
            <strong className="text-ink-900">Executive Assistant</strong> at FWD Life Insurance for years, where I honed my
            organizational and administrative skills. My goal is to craft engaging content that truly connects with audiences
            and enhances brand presence.
          </p>
          <a href={resumeUrl} download className="mt-6 inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-card hover:border-accent-500 hover:text-accent-700">
            <Download size={16} /> Download Resume
          </a>
          <h3 className="mt-10 font-display text-xl font-bold text-ink-950">What I Bring</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {strengths.map((s) => (
              <div key={s.title} className="rounded-xl border border-ink-200 bg-white p-4 shadow-card hover:border-accent-400">
                <p className="font-semibold text-ink-900">{s.title}</p>
                <p className="mt-1 text-xs text-ink-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
