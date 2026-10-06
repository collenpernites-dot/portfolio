import { useEffect, useState } from 'react'
import slide1 from '../assets/2-pro.jpg'
import slide2 from '../assets/3-pro.jpg'
import slide3 from '../assets/4-pro.jpg'

const slides = [slide1, slide2, slide3]

export default function ImageSlider({ className = '', alt = '' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full rounded-[inherit] object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          } ${i === 0 ? 'relative' : ''}`}
        />
      ))}
    </div>
  )
}
