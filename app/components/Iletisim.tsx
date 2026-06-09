'use client'
import { motion } from 'framer-motion'

export default function Iletisim() {
  return (
    <section id="iletisim" style={{
      background: 'transparent',
      padding: '8rem 2rem',
      position: 'relative', zIndex: 1
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>

        <motion.span
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.8 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            display: 'inline-block', padding: '6px 20px', borderRadius: '50px',
            border: '1px solid rgba(220,38,38,0.4)', color: '#dc2626',
            fontSize: '12px', fontWeight: '600', letterSpacing: '3px',
            textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: 'monospace'
          }}
        >İletişim</motion.span>

        <motion.h2
          initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: -5 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 80, damping: 12 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: '900', color: 'white',
            lineHeight: '1.1', marginBottom: '1.5rem', fontFamily: 'monospace'
          }}
        >
          Projenizi<br />
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            style={{
              background: 'linear-gradient(135deg, #dc2626, #7c3aed)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >Konuşalım</motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          style={{
            color: 'rgba(255,255,255,0.5)', fontSize: '18px',
            marginBottom: '3rem', lineHeight: '1.8', fontFamily: 'monospace'
          }}
        >
          Markanız için neler yapabileceğimizi keşfedelim.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          <motion.a
            href="https://wa.me/905000000000"
            whileHover={{ scale: 1.08, y: -5, rotate: -1, boxShadow: '0 0 40px rgba(22,163,74,0.6)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(22,163,74,0.2)', color: '#16a34a',
              padding: '16px 32px', borderRadius: '50px',
              fontWeight: '600', fontSize: '16px', textDecoration: 'none',
              border: '1px solid rgba(22,163,74,0.4)', fontFamily: 'monospace',
              boxShadow: '0 0 20px rgba(22,163,74,0.2)'
            }}
          >
            WhatsApp ile Yaz
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.08, y: -5, rotate: 1, borderColor: 'rgba(180,120,255,0.8)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.8)',
              padding: '16px 32px', borderRadius: '50px',
              fontWeight: '600', fontSize: '16px', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'monospace',
              backdropFilter: 'blur(10px)'
            }}
          >
            E-posta Gönder
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false }}
          style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {[
            { label: 'Konum', value: 'Balçova, İzmir' },
            { label: 'Telefon', value: '+90 500 000 00 00' },
            { label: 'E-posta', value: 'info@alyajans.com' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5, scale: 1.05 }}
              style={{
                textAlign: 'center', cursor: 'default',
                padding: '1rem 1.5rem', borderRadius: '16px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{
                fontSize: '10px', color: '#dc2626', fontWeight: '600',
                letterSpacing: '2px', textTransform: 'uppercase',
                marginBottom: '4px', fontFamily: 'monospace'
              }}>{item.label}</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: '500', fontFamily: 'monospace' }}>{item.value}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}