'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function Hero() {
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital@1&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    tl.fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' })
    .fromTo(line1Ref.current, { y: 100, opacity: 0, skewY: 5 }, { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: 'power2.out' }, '-=0.4')
    .fromTo(line2Ref.current, { y: 100, opacity: 0, skewY: 5 }, { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: 'power2.out' }, '-=0.8')
    .fromTo(line3Ref.current, { y: 100, opacity: 0, skewY: 5 }, { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: 'power2.out' }, '-=0.8')
    .fromTo(buttonsRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4')
  }, [])

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: 'transparent'
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 2rem', maxWidth: '900px', margin: '0 auto' }}>

        <div ref={subtitleRef} style={{
          marginBottom: '3rem', display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '16px', opacity: 0
        }}>
          <div style={{ width: '40px', height: '1px', background: 'rgba(220,38,38,0.5)' }} />
          <span style={{
            color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(14px, 2vw, 20px)',
            fontFamily: 'Playfair Display, serif', fontStyle: 'italic', letterSpacing: '3px'
          }}>Dijital Ajans — İzmir</span>
          <div style={{ width: '40px', height: '1px', background: 'rgba(220,38,38,0.5)' }} />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ overflow: 'hidden', marginBottom: '0.05em' }}>
            <div ref={line1Ref} style={{
              fontSize: 'clamp(4rem, 11vw, 10rem)', fontWeight: '400',
              color: 'rgba(255,255,255,0.9)', fontFamily: 'Bebas Neue, sans-serif',
              letterSpacing: '8px', lineHeight: 1, opacity: 0, display: 'inline-block'
            }}>Markanı</div>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '0.05em' }}>
            <div ref={line2Ref} style={{
              fontSize: 'clamp(5.5rem, 16vw, 15rem)', fontWeight: '400',
              fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '6px', lineHeight: 0.85,
              background: 'linear-gradient(135deg, #dc2626 0%, #ff4d4d 50%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              opacity: 0, display: 'inline-block'
            }}>Dijitale</div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div ref={line3Ref} style={{
              fontSize: 'clamp(4rem, 11vw, 10rem)', fontWeight: '400',
              color: 'rgba(255,255,255,0.9)', fontFamily: 'Bebas Neue, sans-serif',
              letterSpacing: '8px', lineHeight: 1, opacity: 0, display: 'inline-block'
            }}>Taşıyoruz</div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2.5, ease: 'easeOut' }}
          style={{
            width: '80px', height: '1px', margin: '0 auto 2.5rem',
            background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.6), transparent)',
            transformOrigin: 'center'
          }}
        />

        <p style={{
          color: 'rgba(255,255,255,0.3)', fontSize: '12px',
          maxWidth: '400px', margin: '0 auto 3.5rem', lineHeight: '2.5',
          fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '5px', textTransform: 'uppercase'
        }}>Web · Mobil · Pazarlama · Otomasyon</p>

        <div ref={buttonsRef} style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', opacity: 0 }}>
          <a href="#hizmetler"
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(220,38,38,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(220,38,38,0.3)' }}
            style={{
              padding: '16px 52px', background: '#dc2626', color: 'white',
              fontWeight: '400', fontSize: '13px', letterSpacing: '4px',
              textDecoration: 'none', fontFamily: 'Bebas Neue, sans-serif',
              textTransform: 'uppercase', display: 'inline-block',
              boxShadow: '0 0 20px rgba(220,38,38,0.3)', transition: 'all 0.3s ease'
            }}>Hemen Başla</a>
          <a href="#hizmetler"
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            style={{
              padding: '16px 52px', background: 'transparent',
              color: 'rgba(255,255,255,0.5)', fontWeight: '400', fontSize: '13px',
              letterSpacing: '4px', textDecoration: 'none',
              fontFamily: 'Bebas Neue, sans-serif', textTransform: 'uppercase',
              display: 'inline-block', border: '1px solid rgba(255,255,255,0.15)',
              transition: 'all 0.3s ease'
            }}>Keşfet</a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          style={{
            position: 'absolute', bottom: '-80px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}
        >
          <motion.span
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              color: 'rgba(255,255,255,0.4)', fontSize: '10px',
              letterSpacing: '4px', fontFamily: 'Bebas Neue, sans-serif'
            }}
          >SCROLL</motion.span>
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: '1px', height: '40px',
              background: 'linear-gradient(180deg, rgba(220,38,38,0.8), transparent)'
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}