'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function Counter({ target, suffix }: { target: number, suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  useEffect(() => {
    if (!inView) { setCount(0); return }
    let start = 0
    const step = target / (2000 / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Hakkimizda() {
  return (
    <section id="hakkimizda" style={{
      background: 'transparent',
      padding: '8rem 2rem',
      position: 'relative', zIndex: 1
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            style={{
              display: 'inline-block', padding: '6px 20px', borderRadius: '50px',
              border: '1px solid rgba(220,38,38,0.4)', color: '#dc2626',
              fontSize: '12px', fontWeight: '600', letterSpacing: '3px',
              textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: 'monospace'
            }}>Kimiz?</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: '900', color: 'white',
              lineHeight: '1.1', marginBottom: '1.5rem', fontFamily: 'monospace'
            }}
          >
            İzmir'in En Yaratıcı<br />
            <span style={{
              background: 'linear-gradient(135deg, #dc2626, #7c3aed)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Dijital Ajansı</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}
          >
            Markaları dijital dünyada zirveye taşıyan, yaratıcılığı teknolojiyle buluşturan bir ekibiz.
          </motion.p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>

          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -100, rotate: -3 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
            viewport={{ once: false, amount: 0.3 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: '24px', overflow: 'hidden',
              position: 'relative', aspectRatio: '4/3',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src="/coding.mp4" type="video/mp4" />
              </video>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(220,38,38,0.15), rgba(124,58,237,0.15))'
              }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              { title: 'Yaratıcılık', desc: 'Her proje için özgün, akılda kalıcı tasarımlar üretiyoruz.', icon: '✦' },
              { title: 'Teknoloji', desc: 'En güncel teknolojilerle geleceğe hazır çözümler sunuyoruz.', icon: '⟡' },
              { title: 'Sonuç', desc: 'Ölçülebilir başarılar ve gerçek büyüme sağlıyoruz.', icon: '◈' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: false }}
                whileHover={{ borderColor: 'rgba(220,38,38,0.4)', scale: 1.02, x: 8 }}
                style={{
                  display: 'flex', gap: '1rem', marginBottom: '1.5rem',
                  padding: '1.5rem', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'default'
                }}
              >
                <span style={{ fontSize: '24px', color: '#dc2626', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h4 style={{ color: 'white', fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sayaçlar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {[
            { target: 50, suffix: '+', label: 'Tamamlanan Proje', renk: '#dc2626' },
            { target: 30, suffix: '+', label: 'Mutlu Müşteri', renk: '#16a34a' },
            { target: 3, suffix: '+', label: 'Yıllık Deneyim', renk: '#2563eb' },
            { target: 100, suffix: '%', label: 'Müşteri Memnuniyeti', renk: '#7c3aed' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                textAlign: 'center', padding: '2rem', borderRadius: '20px',
                border: `1px solid ${item.renk}30`,
                background: `${item.renk}10`,
                backdropFilter: 'blur(10px)',
                cursor: 'default'
              }}
            >
              <div style={{
                fontSize: '3.5rem', fontWeight: '900',
                color: item.renk, marginBottom: '8px', fontFamily: 'monospace',
                textShadow: `0 0 20px ${item.renk}60`
              }}>
                <Counter target={item.target} suffix={item.suffix} />
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: '500', letterSpacing: '1px', fontFamily: 'monospace' }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}