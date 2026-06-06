'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const hizmetler = [
  {
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=200&fit=crop',
    baslik: 'Web Sitesi',
    aciklama: 'Modern, hızlı ve etkileyici web siteleri tasarlıyoruz.',
    renk: '#2563eb',
    detay: 'Markanıza özel, modern ve hızlı web siteleri tasarlıyoruz. Next.js, React gibi güncel teknolojilerle SEO uyumlu, mobil öncelikli siteler üretiyoruz. Ziyaretçilerinizi müşteriye dönüştüren landing page\'lerden kurumsal sitelere kadar her ölçekte çözüm sunuyoruz.',
    maddeler: ['Next.js & React ile modern yapı', 'SEO uyumlu & hızlı', 'Mobil öncelikli tasarım', 'Landing page & kurumsal site']
  },
  {
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
    baslik: 'Mobil Uygulama',
    aciklama: 'iOS ve Android için kullanıcı dostu uygulamalar.',
    renk: '#16a34a',
    detay: 'iOS ve Android için kullanıcı deneyimini ön planda tutan uygulamalar geliştiriyoruz. React Native ile tek kodla iki platforma hizmet veriyoruz. Fikrinizi App Store ve Google Play\'de hayata geçiriyoruz.',
    maddeler: ['React Native ile çoklu platform', 'App Store & Google Play', 'Kullanıcı odaklı UX/UI', 'Hızlı prototip & geliştirme']
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
    baslik: 'Dijital Pazarlama',
    aciklama: 'Meta Ads, Google Ads ve SEO ile büyütüyoruz.',
    renk: '#dc2626',
    detay: 'Meta Ads, Google Ads ve SEO stratejileriyle markanızı doğru kitleye ulaştırıyoruz. Reklam bütçenizi en verimli şekilde kullanarak ölçülebilir sonuçlar elde ediyoruz.',
    maddeler: ['Meta & Google Ads yönetimi', 'SEO & içerik stratejisi', 'Ölçülebilir ROI odaklı', 'A/B test & optimizasyon']
  },
  {
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop',
    baslik: 'Otomasyon',
    aciklama: 'İş süreçlerinizi otomatikleştiriyoruz.',
    renk: '#ca8a04',
    detay: 'Tekrar eden iş süreçlerinizi otomatikleştirerek zamandan ve maliyetten tasarruf ettiriyoruz. N8N, Zapier ve özel sistemlerle iş akışlarınızı akıllı hale getiriyoruz.',
    maddeler: ['N8N & Zapier entegrasyonu', 'Özel otomasyon sistemleri', 'CRM & ERP bağlantısı', 'Zaman & maliyet tasarrufu']
  },
  {
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=200&fit=crop',
    baslik: 'GEO / AEO',
    aciklama: 'Yapay zeka destekli içerik optimizasyonu.',
    renk: '#7c3aed',
    detay: 'Yapay zeka arama motorlarında (ChatGPT, Gemini, Perplexity) markanızın öne çıkması için içerik optimizasyonu yapıyoruz. Geleceğin araması için bugünden hazırlanıyoruz.',
    maddeler: ['ChatGPT & Gemini optimizasyonu', 'AI arama görünürlüğü', 'İçerik stratejisi', 'Geleceğe hazır SEO']
  },
  {
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
    baslik: 'Strateji',
    aciklama: 'Özel dijital büyüme stratejileri oluşturuyoruz.',
    renk: '#0891b2',
    detay: 'Markanız için veri odaklı, özel dijital büyüme stratejileri oluşturuyoruz. Rakip analizi, hedef kitle araştırması ve büyüme planlamasıyla doğru yönde ilerlemenizi sağlıyoruz.',
    maddeler: ['Rakip & pazar analizi', 'Hedef kitle araştırması', 'Büyüme planlaması', 'Veri odaklı kararlar']
  },
]

const directions = [
  { x: -120 }, { x: 120 }, { x: -120 },
  { x: 120 }, { x: -120 }, { x: 120 },
]

function Card({ h, i }) {
  const cardRef = useRef(null)
  const [acik, setAcik] = useState(false)

  function handleMouseMove(e) {
    if (acik) return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 8
    const rotateY = (centerX - x) / 8
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    card.style.boxShadow = `${(x - centerX) / 10}px ${(y - centerY) / 10}px 40px rgba(0,0,0,0.2)`
  }

  function handleMouseLeave() {
    if (acik) return
    const card = cardRef.current
    if (card) {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
      card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: directions[i].x, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: directions[i].x, scale: 0.9 }}
      transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', stiffness: 80, damping: 15 }}
      viewport={{ once: false, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setAcik(!acik)}
      style={{
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.15s ease',
        boxShadow: acik ? `0 20px 60px ${h.renk}33` : '0 4px 20px rgba(0,0,0,0.08)',
        border: acik ? `1.5px solid ${h.renk}55` : '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <AnimatePresence mode="wait">
        {!acik ? (
          <motion.div
            key="kapali"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: 'relative' }}>
              <motion.img
                src={h.img}
                alt={h.baslik}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(transparent 60%, rgba(0,0,0,0.2))',
                pointerEvents: 'none'
              }} />
              <div style={{
                position: 'absolute', bottom: '10px', right: '10px',
                background: 'white', borderRadius: '20px',
                padding: '4px 12px', fontSize: '11px', fontWeight: '600',
                color: h.renk, opacity: 0.9
              }}>Detaylar →</div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>{h.baslik}</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>{h.aciklama}</p>
              <div style={{ marginTop: '1rem', width: '40px', height: '3px', borderRadius: '2px', background: h.renk }} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="acik"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
            style={{ padding: '2rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: h.renk + '22', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: h.renk }} />
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); setAcik(false) }}
                style={{
                  background: '#f3f4f6', border: 'none', borderRadius: '50%',
                  width: '32px', height: '32px', cursor: 'pointer',
                  fontSize: '18px', color: '#6b7280', display: 'flex',
                  alignItems: 'center', justifyContent: 'center'
                }}
              >×</motion.button>
            </div>

            <h3 style={{
              fontSize: '24px', fontWeight: '900', color: '#111827',
              marginBottom: '1rem', background: `linear-gradient(135deg, ${h.renk}, #111827)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>{h.baslik}</h3>

            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              {h.detay}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {h.maddeler.map((madde, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: j * 0.08 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '8px 12px', borderRadius: '8px',
                    background: h.renk + '0a'
                  }}
                >
                  <div style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: h.renk, flexShrink: 0
                  }} />
                  <span style={{ fontSize: '13px', color: '#374151', fontWeight: '500' }}>{madde}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                marginTop: '1.5rem', padding: '12px 24px',
                background: h.renk, borderRadius: '50px',
                color: 'white', fontWeight: '600', fontSize: '14px',
                textAlign: 'center', cursor: 'pointer',
                boxShadow: `0 8px 24px ${h.renk}44`
              }}
            >
              Teklif Al →
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Hizmetler() {
  return (
    <section id="hizmetler" style={{ padding: '8rem 2rem', background: '#ffffff', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            style={{
              display: 'inline-block', padding: '6px 20px', borderRadius: '50px',
              border: '1px solid rgba(220,38,38,0.3)', color: '#dc2626',
              fontSize: '12px', fontWeight: '600', letterSpacing: '3px',
              textTransform: 'uppercase', marginBottom: '1.5rem'
            }}
          >Neler Yapıyoruz</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: '#111827' }}
          >Hizmetlerimiz</motion.h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {hizmetler.map((h, i) => <Card key={h.baslik} h={h} i={i} />)}
        </div>
      </div>
    </section>
  )
}