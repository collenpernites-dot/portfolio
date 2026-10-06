export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-ink-500 md:flex-row">
        <p className="font-semibold text-ink-900">Collen Alexes E. Pernites</p>
        <p>Virtual Assistant · UI/UX Designer · Graphic Designer · Social Media Manager</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
