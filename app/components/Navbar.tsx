'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [hovered, setHovered] = useState(false)

  const letters = ['A', 'L', 'Y']
  const colors = ['#dc2626', '#16a34a', '#2563eb']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <a href="#" style={{ textDecoration: 'none' }}>
        <div
          className="flex items-end gap-3"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div style={{ display: 'flex', lineHeight: '1' }}>
            {letters.map((l, i) => (
              <motion.span
                key={i}
                animate={hovered ? {
                  y: [0, -15, 0],
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.3, 1],
                } : { y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.08, type: 'spring', stiffness: 200, damping: 10 }}
                style={{
                  fontSize: '48px', fontWeight: '900',
                  letterSpacing: '-3px', display: 'inline-block',
                  background: hovered ? 'none' : 'linear-gradient(135deg, #dc2626, #16a34a)',
                  WebkitBackgroundClip: hovered ? 'unset' : 'text',
                  WebkitTextFillColor: hovered ? colors[i] : 'transparent',
                  cursor: 'pointer'
                }}
              >{l}</motion.span>
            ))}
          </div>
          <motion.span
            animate={hovered ? { letterSpacing: '8px', color: '#dc2626' } : { letterSpacing: '5px', color: '#6b7280' }}
            transition={{ duration: 0.4 }}
            style={{ fontSize: '15px', fontWeight: '600', marginBottom: '7px', display: 'inline-block' }}
          >AJANS</motion.span>
        </div>
      </a>

      <div className="flex gap-8 text-sm text-gray-600">
        <a href="#hizmetler" className="hover:text-gray-900 transition-colors">Hizmetler</a>
        <a href="#surec" className="hover:text-gray-900 transition-colors">Nasıl Çalışırız?</a>
        <a href="#hakkimizda" className="hover:text-gray-900 transition-colors">Hakkımızda</a>
        <a href="#iletisim" className="hover:text-gray-900 transition-colors">İletişim</a>
      </div>
    </nav>
  )
}