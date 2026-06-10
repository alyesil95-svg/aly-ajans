'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [hovered, setHovered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const letters = ['A', 'L', 'Y']
  const colors = ['#dc2626', '#16a34a', '#2563eb']

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const navItems = [
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Nasıl Çalışırız?', href: '#surec' },
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'İletişim', href: '#iletisim' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '1rem 1.2rem' : '1.5rem 2rem',
        background: 'rgba(10,0,24,0.6)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <div
            style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div style={{ display: 'flex', lineHeight: '1' }}>
              {letters.map((l, i) => (
                <motion.span
                  key={i}
                  animate={hovered ? { y: [0, -10, 0], scale: [1, 1.2, 1] } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08, type: 'spring', stiffness: 200, damping: 10 }}
                  style={{
                    fontSize: isMobile ? '32px' : '42px',
                    fontWeight: '900', letterSpacing: '-2px',
                    display: 'inline-block',
                    color: hovered ? colors[i] : 'white',
                    textShadow: hovered ? `0 0 20px ${colors[i]}` : '0 0 20px rgba(255,255,255,0.3)',
                  }}
                >{l}</motion.span>
              ))}
            </div>
            <motion.span
              animate={hovered ? { letterSpacing: '6px', color: '#dc2626' } : { letterSpacing: '4px', color: 'rgba(255,255,255,0.5)' }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: '11px', fontWeight: '600', marginBottom: '5px', display: 'inline-block', fontFamily: 'monospace' }}
            >AJANS</motion.span>
          </div>
        </a>

        {/* Desktop menü */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem', fontSize: '13px', fontFamily: 'monospace' }}>
            {navItems.map(item => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ color: '#dc2626', y: -2 }}
                style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'inline-block' }}
              >{item.label}</motion.a>
            ))}
          </div>
        )}

        {/* Hamburger butonu */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: '5px',
              padding: '4px'
            }}
          >
            <motion.div
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{ width: '24px', height: '2px', background: 'white', borderRadius: '2px' }}
            />
            <motion.div
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ width: '24px', height: '2px', background: 'white', borderRadius: '2px' }}
            />
            <motion.div
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{ width: '24px', height: '2px', background: 'white', borderRadius: '2px' }}
            />
          </button>
        )}
      </nav>

      {/* Mobil menü */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0,
              zIndex: 8999,
              background: 'rgba(10,0,24,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(220,38,38,0.2)',
              padding: '1.5rem 0'
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '1rem 2rem',
                  color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                  fontFamily: 'monospace', fontSize: '16px', letterSpacing: '3px',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}
              >{item.label}</motion.a>
            ))}

            {/* Sosyal medya */}
            <div style={{ padding: '1rem 2rem', display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href="https://instagram.com/alyajans" target="_blank" style={{ color: 'rgba(220,38,38,0.8)', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '2px', textDecoration: 'none' }}>@alyajans</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}