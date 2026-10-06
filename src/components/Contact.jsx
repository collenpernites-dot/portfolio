import { useState } from 'react'
import { Phone, MapPin, Mail, Globe, AtSign, Link2, Send, CheckCircle2, Loader2 } from 'lucide-react'
import SectionTitle from './SectionTitle'

const socials = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: AtSign, href: '#', label: 'Instagram' },
  { icon: Link2, href: '#', label: 'LinkedIn' },
  { icon: Send, href: '#', label: 'Telegram' },
]

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!values.name.trim()) e.name = 'Full name is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Enter a valid email address.'
    if (!values.subject.trim()) e.subject = 'Subject is required.'
    if (values.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    setErrors(e2)
    if (Object.keys(e2).length > 0) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setValues({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  const inputClass = (field) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 ${
      errors[field] ? 'border-red-400' : 'border-ink-200'
    }`

  return (
    <section id="contact" className="section-pad border-t border-ink-100 bg-ink-50">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Contact" title="Let's Work Together" />
          <p className="text-ink-600">
            Have a project, business task, or digital support need? I’d be happy to discuss how I can help.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <p className="flex items-center gap-3"><Phone size={18} className="text-accent-600" /> <span><strong className="text-ink-900">Phone:</strong> 09068297943</span></p>
            <p className="flex items-center gap-3"><MapPin size={18} className="text-accent-600" /> <span><strong className="text-ink-900">Location:</strong> Valencia, Bukidnon, Philippines</span></p>
            <p className="flex items-center gap-3"><Mail size={18} className="text-accent-600" /> <span><strong className="text-ink-900">Email:</strong> available on request</span></p>
          </div>
          <div className="mt-8 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 hover:border-accent-400 hover:text-accent-700">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink-800">Full Name</label>
              <input id="name" name="name" value={values.name} onChange={handleChange} className={inputClass('name')} />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink-800">Email Address</label>
              <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={inputClass('email')} />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-ink-800">Subject</label>
              <input id="subject" name="subject" value={values.subject} onChange={handleChange} className={inputClass('subject')} />
              {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink-800">Message</label>
              <textarea id="message" name="message" rows="5" value={values.message} onChange={handleChange} className={inputClass('message')} />
              {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-5 py-3 text-sm font-semibold text-white hover:bg-accent-700 disabled:opacity-60"
            >
              {status === 'sending' ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : 'Send Message'}
            </button>
            {status === 'sent' && (
              <p className="flex items-center gap-2 text-sm font-medium text-accent-700">
                <CheckCircle2 size={16} /> Thanks! Your message has been sent successfully.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
