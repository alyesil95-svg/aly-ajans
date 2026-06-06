'use client'
import { motion } from 'framer-motion'

const links = {
  hizmetler: ['Web Sitesi', 'Mobil Uygulama', 'Dijital Pazarlama', 'Otomasyon', 'GEO / AEO', 'Strateji'],
  sirket: ['Hakkımızda', 'Hizmetler', 'İletişim'],
}

export default function Footer() {
  return (
    <footer style={{ background: '#080808', position: 'relative', overflow: 'hidden' }}>

      {/* Arka plan grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none'
      }} />

      {/* Üst kısım */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem 3rem', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>

          {/* Sol — marka */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', marginBottom: '1.5rem' }}>
              <span style={{
                fontSize: '52px', fontWeight: '900', letterSpacing: '-3px', lineHeight: '1',
                background: 'linear-gradient(135deg, #dc2626, #16a34a)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>ALY</span>
              <span style={{
                fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.3)',
                letterSpacing: '5px', marginBottom: '6px'
              }}>AJANS</span>
            </div>

            <p style={{
              color: 'rgba(255,255,255,0.4)', fontSize: '14px',
              lineHeight: '1.8', maxWidth: '300px', marginBottom: '2rem'
            }}>
              İzmir Balçova merkezli dijital ajansımız, markaları dijital dünyada zirveye taşıyor.
            </p>

            {/* Sosyal medya */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { label: 'Instagram', icon: 'IG', href: '#' },
                { label: 'LinkedIn', icon: 'IN', href: '#' },
                { label: 'Twitter', icon: 'TW', href: '#' },
                { label: 'WhatsApp', icon: 'WA', href: '#' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1, borderColor: '#dc2626', color: '#dc2626' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '40px', height: '40px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '10px', fontWeight: '700',
                    fontFamily: 'monospace', letterSpacing: '0',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s'
                  }}
                >{s.icon}</motion.a>
              ))}
            </div>
          </motion.div>

          {/* Orta — Hizmetler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 style={{
              color: 'rgba(255,255,255,0.9)', fontSize: '12px',
              fontWeight: '600', letterSpacing: '3px',
              textTransform: 'uppercase', marginBottom: '1.5rem'
            }}>Hizmetler</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.hizmetler.map((l) => (
                <motion.a
                  key={l}
                  href="#hizmetler"
                  whileHover={{ x: 6, color: '#dc2626' }}
                  style={{
                    color: 'rgba(255,255,255,0.35)', fontSize: '13px',
                    textDecoration: 'none', transition: 'color 0.2s',
                    display: 'inline-block'
                  }}
                >{l}</motion.a>
              ))}
            </div>
          </motion.div>

          {/* Sağ — İletişim */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 style={{
              color: 'rgba(255,255,255,0.9)', fontSize: '12px',
              fontWeight: '600', letterSpacing: '3px',
              textTransform: 'uppercase', marginBottom: '1.5rem'
            }}>İletişim</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Konum', value: 'Balçova, İzmir' },
                { label: 'Telefon', value: '+90 500 000 00 00' },
                { label: 'E-posta', value: 'info@alyajans.com' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: '10px', color: '#dc2626', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '3px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA butonu */}
            <motion.a
              href="#iletisim"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-block', marginTop: '1.5rem',
                padding: '10px 24px', borderRadius: '50px',
                background: '#dc2626', color: 'white',
                fontSize: '13px', fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(220,38,38,0.3)'
              }}
            >Teklif Al →</motion.a>
          </motion.div>
        </div>

        {/* Ayırıcı çizgi */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)', marginBottom: '2rem' }} />

        {/* Alt kısım */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>
            © 2026 ALY Ajans — Tüm hakları saklıdır.
          </span>
          <div style={{ display: 'flex', gap: '1px' }}>
            {'ALY AJANS'.split('').map((l, i) => (
              <motion.span
                key={i}
                whileHover={{ color: '#dc2626', y: -3 }}
                style={{
                  color: 'rgba(255,255,255,0.08)',
                  fontSize: '11px', fontWeight: '900',
                  fontFamily: 'monospace', letterSpacing: '2px',
                  display: 'inline-block', cursor: 'default'
                }}
              >{l}</motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}