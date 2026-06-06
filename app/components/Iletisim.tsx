'use client'
import { motion } from 'framer-motion'

export default function Iletisim() {
  return (
    <section id="iletisim" style={{
      background: '#ffffff',
      padding: '8rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '800px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>

        <motion.span
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.8 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            display: 'inline-block',
            padding: '6px 20px',
            borderRadius: '50px',
            border: '1px solid rgba(220,38,38,0.3)',
            color: '#dc2626',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
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
            fontWeight: '900',
            color: '#111827',
            lineHeight: '1.1',
            marginBottom: '1.5rem'
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
              background: 'linear-gradient(135deg, #dc2626, #16a34a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
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
          style={{ color: '#6b7280', fontSize: '18px', marginBottom: '3rem', lineHeight: '1.8' }}
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
            whileHover={{ scale: 1.08, y: -5, rotate: -1 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#16a34a', color: 'white',
              padding: '16px 32px', borderRadius: '50px',
              fontWeight: '600', fontSize: '16px', textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(22,163,74,0.3)'
            }}
          >
            WhatsApp ile Yaz
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.08, y: -5, rotate: 1 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'white', color: '#111827',
              padding: '16px 32px', borderRadius: '50px',
              fontWeight: '600', fontSize: '16px', textDecoration: 'none',
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
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
              style={{ textAlign: 'center', cursor: 'default' }}
            >
              <div style={{
                fontSize: '12px', color: '#dc2626', fontWeight: '600',
                letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px'
              }}>{item.label}</div>
              <div style={{ fontSize: '14px', color: '#374151', fontWeight: '500' }}>{item.value}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}