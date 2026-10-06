export default function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  const styles =
    variant === 'primary'
      ? 'bg-accent-600 text-white hover:bg-accent-700 border border-accent-600'
      : variant === 'secondary'
        ? 'bg-white text-ink-900 border border-ink-200 hover:border-accent-500 hover:text-accent-700'
        : 'bg-ink-900 text-white hover:bg-ink-800 border border-ink-900'
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-card transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 ${styles} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
