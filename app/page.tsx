'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hizmetler from './components/Hizmetler'
import Hakkimizda from './components/Hakkimizda'
import Iletisim from './components/Iletisim'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Surec from './components/Surec'

function ScrollBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <>
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: '5px', scaleX, transformOrigin: 'left',
          background: 'linear-gradient(90deg, #dc2626, #ff6b6b, #dc2626)',
          zIndex: 99999,
          boxShadow: '0 0 15px rgba(220,38,38,0.9), 0 0 30px rgba(220,38,38,0.5)',
        }}
      />
      <motion.div
        style={{
          position: 'fixed', top: '-4px', left: 0, right: 0,
          height: '12px', scaleX, transformOrigin: 'left',
          background: 'linear-gradient(90deg, transparent 85%, rgba(255,100,100,1) 100%)',
          zIndex: 99999, filter: 'blur(3px)',
        }}
      />
    </>
  )
}

function Loader({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200)
    const t2 = setTimeout(() => setPhase(2), 1600)
    const t3 = setTimeout(() => setPhase(3), 2600)
    const t4 = setTimeout(() => onDone(), 3400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  useEffect(() => {
    let start = 0
    const target = phase >= 3 ? 100 : phase >= 2 ? 65 : phase >= 1 ? 25 : 0
    const timer = setInterval(() => {
      start += 1
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 12)
    return () => clearInterval(timer)
  }, [phase])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const cols = Math.floor(canvas.width / 20)
    const drops = Array(cols).fill(0).map(() => Math.random() * -50)
    const chars = '01アイウエオカキALYAJANS</>{}[]'
    function draw() {
      ctx.fillStyle = 'rgba(8,8,8,0.06)'
      ctx.fillRect(0, 0, canvas!.width, canvas!.height)
      ctx.font = '12px monospace'
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const alpha = Math.random() * 0.15 + 0.03
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fillText(char, i * 20, y * 20)
        if (y * 20 > canvas!.height && Math.random() > 0.98) drops[i] = 0
        drops[i] += 0.3
      })
      requestAnimationFrame(draw)
    }
    draw()
  }, [])

  return (
    <motion.div
      exit={{ clipPath: 'inset(100% 0 0 0)' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#050505',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px', pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          initial={{ top: '-10px', opacity: 0 }}
          animate={phase >= 1 ? { top: ['0%', '100%', '0%'], opacity: [0, 0.6, 0.6, 0] } : {}}
          transition={{ duration: 2, ease: 'linear' }}
          style={{
            position: 'absolute', left: '-100px', right: '-100px', height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.8), transparent)',
            boxShadow: '0 0 20px rgba(220,38,38,0.5)', zIndex: 20
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={phase >= 1 ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(220,38,38,0.6)', letterSpacing: '2px', marginBottom: '2rem' }}
        >{'<SYSTEM INIT /> [0x4131 0x4C59]'}</motion.div>

        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          {['A', 'L', 'Y'].map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
              animate={phase >= 1 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(100px, 16vw, 180px)', fontWeight: '900',
                letterSpacing: '-8px', lineHeight: 0.85, fontFamily: 'monospace',
                display: 'inline-block', color: 'transparent',
                WebkitTextStroke: i === 0 ? '2px #ffffff' : i === 1 ? '1px rgba(255,255,255,0.5)' : '2px #dc2626',
                textShadow: i === 2 ? '0 0 60px rgba(220,38,38,0.4)' : 'none'
              }}
            >{l}</motion.span>
          ))}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={phase >= 2 ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute', top: '45%', left: '-10px', right: '-10px', height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.8), rgba(255,255,255,0.3), rgba(220,38,38,0.8), transparent)',
              transformOrigin: 'left', boxShadow: '0 0 10px rgba(220,38,38,0.5)'
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}
        >
          <motion.div animate={{ width: phase >= 2 ? '50px' : '0px' }} transition={{ duration: 0.5 }} style={{ height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '8px' }}>AJANS</span>
          <motion.div animate={{ width: phase >= 2 ? '50px' : '0px' }} transition={{ duration: 0.5 }} style={{ height: '1px', background: 'rgba(255,255,255,0.2)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(22,163,74,0.7)', letterSpacing: '1px', marginTop: '1.5rem' }}
        >
          {phase >= 3 ? '▮ READY' : phase >= 2 ? '▮ LOADING ASSETS...' : '▮ INITIALIZING...'}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 1 ? { opacity: 1 } : {}}
        style={{ position: 'absolute', bottom: '30px', left: '30px', fontFamily: 'monospace', fontSize: '9px', color: 'rgba(255,255,255,0.2)', letterSpacing: '1px', lineHeight: '1.8' }}
      >
        <div>SYS://ALY_AJANS</div>
        <div>BUILD_v2.0.26</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 1 ? { opacity: 1 } : {}}
        style={{ position: 'absolute', bottom: '30px', right: '30px', fontFamily: 'monospace', fontSize: '32px', fontWeight: '900', color: 'rgba(255,255,255,0.08)', letterSpacing: '-2px' }}
      >{String(count).padStart(3, '0')}</motion.div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          style={{ height: '100%', background: 'linear-gradient(90deg, #dc2626, #ffffff)', boxShadow: '0 0 10px #dc2626' }}
          initial={{ width: '0%' }}
          animate={{ width: count + '%' }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

function GlobalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    const dots: { x: number; y: number; dx: number; dy: number; r: number }[] = []
    for (let i = 0; i < 120; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
        r: Math.random() * 2.5 + 1
      })
    }
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 }
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })
    function draw() {
      if (!canvas || !ctx) return
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
    window.addEventListener('resize', resize)
    return function() { window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.5 }}
    />
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <Cursor />
          <ScrollBar />
          <GlobalCanvas />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Navbar />
            <Hero />
            <Hizmetler />
            <Surec />
            <Hakkimizda />
            <Iletisim />
            <Footer />
          </div>
        </motion.main>
      )}
    </>
  )
}