import useInView from '../hooks/useInView'

export default function Reveal({ children, className = '', as: Tag = 'div' }) {
  const [ref] = useInView()
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
