'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const dots = []
    for (let i = 0; i < 120; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
        r: Math.random() * 2.5 + 1
      })
    }

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 }
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach(function(dot, i) {
        const distToMouse = Math.sqrt((dot.x - mouse.x) ** 2 + (dot.y - mouse.y) ** 2)
        if (distToMouse < 120) {
          const angle = Math.atan2(dot.y - mouse.y, dot.x - mouse.x)
          dot.x += Math.cos(angle) * 2
          dot.y += Math.sin(angle) * 2
        }
        dot.x += dot.dx
        dot.y += dot.dy
        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(220,38,38,0.7)'
        ctx.fill()
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[j].x - dot.x
          const dy = dots[j].y - dot.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.5
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = 'rgba(22,163,74,' + alpha + ')'
            ctx.lineWidth = (1 - dist / 150) * 1.5
            ctx.stroke()
          }
        }
      })
      requestAnimationFrame(draw)
    }
    draw()

    function handleResize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return function() { window.removeEventListener('resize', handleResize) }
  }, [])

  const rows = [
    { text: 'Markanı', color: '#111827' },
    { text: 'Dijitale', color: '#dc2626' },
    { text: 'Taşıyoruz', color: '#111827' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#f8faff' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: -30, letterSpacing: '20px' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '4px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-6"
        >
          Dijital Ajans — İzmir
        </motion.p>

        <div className="leading-none mb-6">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center flex-wrap">
              {row.text.split('').map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 80, rotate: Math.random() * 40 - 20 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: rowIndex * 0.4 + i * 0.06,
                    type: 'spring',
                    stiffness: 100,
                    damping: 12
                  }}
                  whileHover={{
                    scale: 1.3,
                    color: '#dc2626',
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 7rem)',
                    fontWeight: '900',
                    color: row.color,
                    display: 'inline-block',
                    cursor: 'default',
                    textShadow: '0 0 30px rgba(255,255,255,0.8)'
                  }}
                >{l}</motion.span>
              ))}
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-gray-500 text-lg max-w-xl mx-auto mb-10"
          style={{ textShadow: '0 0 20px rgba(255,255,255,1)' }}
        >
          Web sitesi, mobil uygulama, dijital pazarlama ve otomasyon ile işletmenizi büyütüyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8, type: 'spring', stiffness: 80 }}
          className="flex gap-4 justify-center"
        >
          <motion.a
            href="#iletisim"
            whileHover={{ scale: 1.08, y: -4, rotate: -1 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: '#dc2626', color: 'white',
              padding: '16px 36px', borderRadius: '50px',
              fontWeight: '700', fontSize: '16px', textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(220,38,38,0.4)',
              display: 'inline-block'
            }}
          >
            Hemen Başlayalım
          </motion.a>
          <motion.a
            href="#hizmetler"
            whileHover={{ scale: 1.08, y: -4, rotate: 1 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: 'white', color: '#374151',
              padding: '16px 36px', borderRadius: '50px',
              fontWeight: '700', fontSize: '16px', textDecoration: 'none',
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              display: 'inline-block'
            }}
          >
            Hizmetlerimiz
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}