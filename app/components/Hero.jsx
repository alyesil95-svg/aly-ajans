'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const neonLeft = [
  { top: '10%', width: '120px', color: '#dc2626', delay: 0, duration: 3 },
  { top: '25%', width: '80px', color: '#7c3aed', delay: 0.5, duration: 4 },
  { top: '40%', width: '150px', color: '#2563eb', delay: 1, duration: 3.5 },
  { top: '55%', width: '90px', color: '#dc2626', delay: 1.5, duration: 2.5 },
  { top: '70%', width: '110px', color: '#7c3aed', delay: 0.8, duration: 4.5 },
  { top: '85%', width: '70px', color: '#2563eb', delay: 0.3, duration: 3 },
]

const neonRight = [
  { top: '15%', width: '100px', color: '#7c3aed', delay: 0.2, duration: 4 },
  { top: '30%', width: '130px', color: '#dc2626', delay: 0.7, duration: 3 },
  { top: '45%', width: '85px', color: '#2563eb', delay: 1.2, duration: 3.5 },
  { top: '60%', width: '140px', color: '#dc2626', delay: 0.4, duration: 2.5 },
  { top: '75%', width: '95px', color: '#7c3aed', delay: 1, duration: 4 },
  { top: '90%', width: '75px', color: '#2563eb', delay: 0.6, duration: 3 },
]

const orbLeft = [
  { top: '20%', left: '5%', color: '#dc2626', size: 8, delay: 0 },
  { top: '45%', left: '12%', color: '#7c3aed', size: 6, delay: 0.5 },
  { top: '65%', left: '3%', color: '#2563eb', size: 10, delay: 1 },
  { top: '80%', left: '18%', color: '#dc2626', size: 5, delay: 1.5 },
  { top: '35%', left: '20%', color: '#7c3aed', size: 7, delay: 0.8 },
]

const orbRight = [
  { top: '15%', right: '8%', color: '#7c3aed', size: 9, delay: 0.3 },
  { top: '35%', right: '3%', color: '#dc2626', size: 6, delay: 0.8 },
  { top: '55%', right: '15%', color: '#2563eb', size: 11, delay: 0.2 },
  { top: '72%', right: '5%', color: '#dc2626', size: 7, delay: 1.2 },
  { top: '88%', right: '12%', color: '#7c3aed', size: 5, delay: 0.6 },
]

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital@1&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  useEffect(() => {
    if (!titleRef.current) return
    const words = titleRef.current.querySelectorAll('.word')
    gsap.fromTo(words,
      { y: 150, opacity: 0, skewY: 8 },
      { y: 0, opacity: 1, skewY: 0, duration: 1.4, stagger: 0.2, ease: 'power2.out', delay: 0.8 }
    )
  }, [])

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: 'transparent'
    }}>

      {/* Sol neon çizgiler */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: '25%', height: '100%', pointerEvents: 'none' }}>
        {neonLeft.map((line, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 0.9, 0.3], x: [0, 10, 0] }}
            transition={{ duration: line.duration, delay: line.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: line.top,
              left: '10px',
              width: line.width,
              height: '2px',
              background: line.color,
              boxShadow: `0 0 8px ${line.color}, 0 0 20px ${line.color}`,
              borderRadius: '2px'
            }}
          />
        ))}
        {orbLeft.map((orb, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1], y: [0, -8, 0] }}
            transition={{ duration: 2 + i * 0.5, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: orb.top,
              left: orb.left,
              width: orb.size,
              height: orb.size,
              borderRadius: '50%',
              background: orb.color,
              boxShadow: `0 0 10px ${orb.color}, 0 0 20px ${orb.color}`
            }}
          />
        ))}
      </div>

      {/* Sağ neon çizgiler */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: '25%', height: '100%', pointerEvents: 'none' }}>
        {neonRight.map((line, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 0.9, 0.3], x: [0, -10, 0] }}
            transition={{ duration: line.duration, delay: line.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: line.top,
              right: '10px',
              width: line.width,
              height: '2px',
              background: line.color,
              boxShadow: `0 0 8px ${line.color}, 0 0 20px ${line.color}`,
              borderRadius: '2px'
            }}
          />
        ))}
        {orbRight.map((orb, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1], y: [0, -8, 0] }}
            transition={{ duration: 2 + i * 0.5, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: orb.top,
              right: orb.right,
              width: orb.size,
              height: orb.size,
              borderRadius: '50%',
              background: orb.color,
              boxShadow: `0 0 10px ${orb.color}, 0 0 20px ${orb.color}`
            }}
          />
        ))}
      </div>

      {/* İçerik */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 2rem', maxWidth: '700px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}
        >
          <div style={{ width: '40px', height: '1px', background: 'rgba(220,38,38,0.5)' }} />
          <span style={{
            color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(14px, 2vw, 20px)',
            fontFamily: 'Playfair Display, serif', fontStyle: 'italic', letterSpacing: '3px'
          }}>Dijital Ajans — İzmir</span>
          <div style={{ width: '40px', height: '1px', background: 'rgba(220,38,38,0.5)' }} />
        </motion.div>

        <div ref={titleRef} style={{ marginBottom: '2.5rem', lineHeight: 0.9 }}>
          <div style={{ overflow: 'hidden', marginBottom: '0.05em' }}>
            <span className="word" style={{
              display: 'block', fontSize: 'clamp(4rem, 11vw, 10rem)', fontWeight: '400',
              color: 'rgba(255,255,255,0.9)', fontFamily: 'Bebas Neue, sans-serif',
              letterSpacing: '8px', lineHeight: 1, opacity: 0
            }}>Markanı</span>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '0.05em' }}>
            <span className="word" style={{
              display: 'block', fontSize: 'clamp(5.5rem, 16vw, 15rem)', fontWeight: '400',
              fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '6px', lineHeight: 0.85,
              background: 'linear-gradient(135deg, #dc2626 0%, #ff4d4d 50%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: 0
            }}>Dijitale</span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span className="word" style={{
              display: 'block', fontSize: 'clamp(4rem, 11vw, 10rem)', fontWeight: '400',
              color: 'rgba(255,255,255,0.9)', fontFamily: 'Bebas Neue, sans-serif',
              letterSpacing: '8px', lineHeight: 1, opacity: 0
            }}>Taşıyoruz</span>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: 'easeOut' }}
          style={{
            width: '80px', height: '1px', margin: '0 auto 2.5rem',
            background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.6), transparent)',
            transformOrigin: 'center'
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          style={{
            color: 'rgba(255,255,255,0.3)', fontSize: '12px',
            maxWidth: '400px', margin: '0 auto 3.5rem', lineHeight: '2.5',
            fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '5px', textTransform: 'uppercase'
          }}
        >Web · Mobil · Pazarlama · Otomasyon</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#iletisim"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(220,38,38,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '16px 52px', background: '#dc2626', color: 'white',
              fontWeight: '400', fontSize: '13px', letterSpacing: '4px',
              textDecoration: 'none', fontFamily: 'Bebas Neue, sans-serif',
              textTransform: 'uppercase', display: 'inline-block',
              boxShadow: '0 0 20px rgba(220,38,38,0.3)'
            }}
          >Hemen Başla</motion.a>
          <motion.a
            href="#hizmetler"
            whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '16px 52px', background: 'transparent',
              color: 'rgba(255,255,255,0.5)', fontWeight: '400', fontSize: '13px',
              letterSpacing: '4px', textDecoration: 'none',
              fontFamily: 'Bebas Neue, sans-serif', textTransform: 'uppercase',
              display: 'inline-block', border: '1px solid rgba(255,255,255,0.15)'
            }}
          >Keşfet</motion.a>
        </motion.div>
      </div>
    </section>
  )
}