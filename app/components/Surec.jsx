'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const adimlar = [
  {
    numara: '01',
    baslik: 'Analiz',
    aciklama: 'Markanızı, hedef kitlenizi ve rakiplerinizi derinlemesine analiz ediyoruz. Veriye dayalı içgörülerle güçlü bir temel oluşturuyoruz.',
    icon: '◎',
    renk: '#dc2626',
    detaylar: ['Pazar araştırması', 'Rakip analizi', 'Hedef kitle tespiti']
  },
  {
    numara: '02',
    baslik: 'Strateji',
    aciklama: 'Size özel dijital büyüme planı hazırlıyoruz. Her adımı ölçülebilir hedeflerle destekliyoruz.',
    icon: '◈',
    renk: '#2563eb',
    detaylar: ['Dijital yol haritası', 'KPI belirleme', 'Bütçe planlaması']
  },
  {
    numara: '03',
    baslik: 'Geliştirme',
    aciklama: 'Tasarım ve geliştirme süreçlerini en güncel teknolojilerle hayata geçiriyoruz. Her detay özenle işleniyor.',
    icon: '⟡',
    renk: '#16a34a',
    detaylar: ['UI/UX tasarım', 'Frontend & Backend', 'Test & optimizasyon']
  },
  {
    numara: '04',
    baslik: 'Yayın & Büyüme',
    aciklama: 'Projenizi canlıya alıyor, performansı sürekli izliyor ve büyümenizi hızlandırıyoruz.',
    icon: '✦',
    renk: '#7c3aed',
    detaylar: ['Canlı yayın', 'Performans takibi', 'Sürekli optimizasyon']
  },
]

function AdimKart({ adim, isLeft }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.02, y: -4 }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '2rem',
        border: `1px solid ${adim.renk}33`,
        boxShadow: `0 10px 40px ${adim.renk}15`,
        textAlign: isLeft ? 'right' : 'left',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-20px', [isLeft ? 'left' : 'right']: '-20px',
        width: '120px', height: '120px',
        borderRadius: '50%',
        background: `${adim.renk}10`,
        pointerEvents: 'none'
      }} />

      <div style={{
        fontSize: '52px', fontWeight: '900',
        color: `${adim.renk}25`, fontFamily: 'monospace',
        lineHeight: 1, marginBottom: '0.5rem'
      }}>{adim.numara}</div>

      <h3 style={{
        fontSize: '22px', fontWeight: '800',
        color: 'white', marginBottom: '0.75rem'
      }}>{adim.baslik}</h3>

      <p style={{
        fontSize: '14px', color: 'rgba(255,255,255,0.55)',
        lineHeight: '1.7', marginBottom: '1.25rem'
      }}>{adim.aciklama}</p>

      <div style={{
        display: 'flex', flexDirection: 'column',
        gap: '6px', alignItems: isLeft ? 'flex-end' : 'flex-start'
      }}>
        {adim.detaylar.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 20 : -20 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            style={{
              display: 'flex', alignItems: 'center',
              gap: '8px',
              flexDirection: isLeft ? 'row-reverse' : 'row'
            }}
          >
            <div style={{
              width: '6px', height: '6px',
              borderRadius: '50%', background: adim.renk, flexShrink: 0
            }} />
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: '500', fontFamily: 'monospace' }}>{d}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          position: 'absolute', bottom: 0,
          [isLeft ? 'right' : 'left']: 0,
          width: '60%', height: '3px',
          background: `linear-gradient(${isLeft ? '270deg' : '90deg'}, ${adim.renk}, transparent)`,
          transformOrigin: isLeft ? 'right' : 'left',
          borderRadius: '2px'
        }}
      />
    </motion.div>
  )
}

function Adim({ adim, index, toplam }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 80 }}
        style={{ padding: '2rem', display: isLeft ? 'block' : 'none' }}
      >
        {isLeft && <AdimKart adim={adim} isLeft={true} />}
      </motion.div>

      {!isLeft && <div />}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        {index > 0 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6 }}
            style={{ width: '2px', height: '60px', background: `linear-gradient(180deg, transparent, ${adim.renk})`, transformOrigin: 'top' }}
          />
        )}
        {index === 0 && <div style={{ height: '60px' }} />}

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
          style={{
            width: '60px', height: '60px', borderRadius: '50%',
            border: `2px solid ${adim.renk}`,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 25px ${adim.renk}60, 0 0 50px ${adim.renk}30`,
            position: 'relative', zIndex: 2, flexShrink: 0
          }}
        >
          <motion.span
            animate={inView ? { rotate: [0, 360] } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ fontSize: '22px', color: adim.renk }}
          >{adim.icon}</motion.span>
        </motion.div>

        {index < toplam - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ width: '2px', height: '60px', background: `linear-gradient(180deg, ${adim.renk}, transparent)`, transformOrigin: 'top' }}
          />
        )}
        {index === toplam - 1 && <div style={{ height: '60px' }} />}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
        transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 80 }}
        style={{ padding: '2rem', display: !isLeft ? 'block' : 'none' }}
      >
        {!isLeft && <AdimKart adim={adim} isLeft={false} />}
      </motion.div>

      {isLeft && <div />}
    </div>
  )
}

export default function Surec() {
  return (
    <section id="surec" style={{
      padding: '8rem 2rem',
      background: 'transparent',
      position: 'relative', zIndex: 1
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block', padding: '6px 20px',
              borderRadius: '50px', border: '1px solid rgba(220,38,38,0.4)',
              color: '#dc2626', fontSize: '12px', fontWeight: '600',
              letterSpacing: '3px', textTransform: 'uppercase',
              marginBottom: '1.5rem', fontFamily: 'monospace'
            }}
          >Süreç</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: '900', color: 'white',
              marginBottom: '1rem', fontFamily: 'monospace'
            }}
          >Nasıl Çalışırız?</motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', maxWidth: '500px', margin: '0 auto', fontFamily: 'monospace' }}
          >
            4 adımda markanızı dijital dünyada zirveye taşıyoruz.
          </motion.p>
        </motion.div>

        <div>
          {adimlar.map((adim, index) => (
            <Adim key={adim.numara} adim={adim} index={index} toplam={adimlar.length} />
          ))}
        </div>
      </div>
    </section>
  )
}