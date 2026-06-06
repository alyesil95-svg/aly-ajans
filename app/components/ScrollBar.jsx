'use client'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Ana progress bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '3px',
          scaleX,
          transformOrigin: 'left',
          background: 'linear-gradient(90deg, #dc2626, #ff6b6b, #dc2626)',
          zIndex: 99999,
          boxShadow: '0 0 10px rgba(220,38,38,0.8), 0 0 20px rgba(220,38,38,0.4)',
        }}
      />

      {/* Parlayan uç nokta */}
      <motion.div
        style={{
          position: 'fixed',
          top: '-3px', left: 0, right: 0,
          height: '8px',
          scaleX,
          transformOrigin: 'left',
          background: 'linear-gradient(90deg, transparent 90%, rgba(255,255,255,0.9) 100%)',
          zIndex: 99999,
          filter: 'blur(2px)',
        }}
      />
    </>
  )
}