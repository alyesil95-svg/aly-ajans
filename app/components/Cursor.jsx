'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    function onMove(e) {
      setPos({ x: e.clientX, y: e.clientY })
    }
    function onDown() { setClicked(true); setTimeout(() => setClicked(false), 400) }
    function onEnter() { setHovered(true) }
    function onLeave() { setHovered(false) }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)

    const links = document.querySelectorAll('a, button, [style*="cursor"]')
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
    }
  }, [])

  return (
    <>
      {/* Ana nokta */}
      <motion.div
        animate={{ x: pos.x - 5, y: pos.y - 5, scale: clicked ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 800, damping: 30, mass: 0.3 }}
        style={{
          position: 'fixed', zIndex: 99999,
          width: '10px', height: '10px',
          borderRadius: '50%',
          background: '#dc2626',
          pointerEvents: 'none',
          mixBlendMode: 'difference'
        }}
      />

      {/* Dış halka */}
      <motion.div
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: clicked ? 2.5 : hovered ? 1.8 : 1,
          opacity: clicked ? 0 : 1,
          borderColor: hovered ? '#16a34a' : '#dc2626'
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
        style={{
          position: 'fixed', zIndex: 99998,
          width: '40px', height: '40px',
          borderRadius: '50%',
          border: '1.5px solid #dc2626',
          pointerEvents: 'none',
        }}
      />

      {/* Tıklama patlaması */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            key={Date.now()}
            initial={{ x: pos.x - 20, y: pos.y - 20, scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              position: 'fixed', zIndex: 99997,
              width: '40px', height: '40px',
              borderRadius: '50%',
              border: '1.5px solid #dc2626',
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}