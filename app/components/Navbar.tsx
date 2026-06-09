'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [hovered, setHovered] = useState(false)
  const letters = ['A', 'L', 'Y']
  const colors = ['#dc2626', '#16a34a', '#2563eb']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.5rem 2rem',
      background: 'transparent',
      backdropFilter: 'none'
    }}>
      <a href="#" style={{ textDecoration: 'none' }}>
        <div
          style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div style={{ display: 'flex', lineHeight: '1' }}>
            {letters.map((l, i) => (
              <motion.span
                key={i}
                animate={hovered ? {
                  y: [0, -15, 0],
                  scale: [1, 1.3, 1],
                } : { y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.08, type: 'spring', stiffness: 200, damping: 10 }}
                style={{
                  fontSize: '48px', fontWeight: '900',
                  letterSpacing: '-3px', display: 'inline-block',
                  color: hovered ? colors[i] : 'white',
                  textShadow: hovered ? `0 0 20px ${colors[i]}` : '0 0 20px rgba(255,255,255,0.3)',
                  cursor: 'pointer'
                }}
              >{l}</motion.span>
            ))}
          </div>
          <motion.span
            animate={hovered ? { letterSpacing: '8px', color: '#dc2626' } : { letterSpacing: '5px', color: 'rgba(255,255,255,0.5)' }}
            transition={{ duration: 0.4 }}
            style={{ fontSize: '13px', fontWeight: '600', marginBottom: '7px', display: 'inline-block', fontFamily: 'monospace' }}
          >AJANS</motion.span>
        </div>
      </a>

      <div style={{ display: 'flex', gap: '2rem', fontSize: '13px', fontFamily: 'monospace' }}>
        {[
          { label: 'Hizmetler', href: '#hizmetler' },
          { label: 'Nasıl Çalışırız?', href: '#surec' },
          { label: 'Hakkımızda', href: '#hakkimizda' },
          { label: 'İletişim', href: '#iletisim' },
        ].map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ color: '#dc2626', y: -2 }}
            style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'inline-block' }}
          >{item.label}</motion.a>
        ))}
      </div>
    </nav>
  )
}