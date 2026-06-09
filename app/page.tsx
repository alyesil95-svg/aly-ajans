'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import * as THREE from 'three'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hizmetler from './components/Hizmetler'
import Hakkimizda from './components/Hakkimizda'
import Iletisim from './components/Iletisim'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Surec from './components/Surec'
import SmoothScroll from './components/SmoothScroll'

const colors = ['#dc2626', '#7c3aed', '#2563eb', '#ff4444', '#9d4edd']

function GlobalNeon() {
  const leftLines = Array.from({ length: 30 }).map((_, i) => ({
    top: `${(i / 30) * 100}%`,
    width: `${60 + (i * 17) % 80}px`,
    color: colors[i % colors.length],
    delay: (i * 0.3) % 3,
    duration: 2.5 + (i % 3)
  }))

  const rightLines = Array.from({ length: 30 }).map((_, i) => ({
    top: `${((i + 0.5) / 30) * 100}%`,
    width: `${60 + (i * 13) % 80}px`,
    color: colors[(i + 2) % colors.length],
    delay: (i * 0.25) % 3,
    duration: 2.5 + (i % 4)
  }))

  return (
    <>
      <div style={{ position: 'absolute', left: 0, top: 0, width: '200px', height: '100%', pointerEvents: 'none', zIndex: 2, overflow: 'hidden' }}>
        {leftLines.map((line, i) => (
          <motion.div key={i}
            animate={{ opacity: [0.15, 0.7, 0.15], x: [0, 12, 0] }}
            transition={{ duration: line.duration, delay: line.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: line.top, left: '8px',
              width: line.width, height: '1.5px',
              background: `linear-gradient(90deg, ${line.color}, transparent)`,
              boxShadow: `0 0 8px ${line.color}, 0 0 16px ${line.color}`,
              borderRadius: '2px'
            }}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div key={`dl-${i}`}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1], y: [0, -10, 0] }}
            transition={{ duration: 2 + i * 0.4, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: `${8 + i * 8}%`, left: `${10 + (i % 4) * 30}px`,
              width: `${4 + (i % 3) * 3}px`, height: `${4 + (i % 3) * 3}px`,
              borderRadius: '50%', background: colors[i % colors.length],
              boxShadow: `0 0 8px ${colors[i % colors.length]}, 0 0 16px ${colors[i % colors.length]}`
            }}
          />
        ))}
      </div>

      <div style={{ position: 'absolute', right: 0, top: 0, width: '200px', height: '100%', pointerEvents: 'none', zIndex: 2, overflow: 'hidden' }}>
        {rightLines.map((line, i) => (
          <motion.div key={i}
            animate={{ opacity: [0.15, 0.7, 0.15], x: [0, -12, 0] }}
            transition={{ duration: line.duration, delay: line.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: line.top, right: '8px',
              width: line.width, height: '1.5px',
              background: `linear-gradient(270deg, ${line.color}, transparent)`,
              boxShadow: `0 0 8px ${line.color}, 0 0 16px ${line.color}`,
              borderRadius: '2px'
            }}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div key={`dr-${i}`}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1], y: [0, -10, 0] }}
            transition={{ duration: 2 + i * 0.4, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: `${5 + i * 8}%`, right: `${10 + (i % 4) * 30}px`,
              width: `${4 + (i % 3) * 3}px`, height: `${4 + (i % 3) * 3}px`,
              borderRadius: '50%', background: colors[(i + 1) % colors.length],
              boxShadow: `0 0 8px ${colors[(i + 1) % colors.length]}, 0 0 16px ${colors[(i + 1) % colors.length]}`
            }}
          />
        ))}
      </div>
    </>
  )
}

function GlobalBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)
    camera.position.z = 30

    const codeChars = '01{}[]<>()=>/\\+*&|!?#@$%ABCDEFabcdef;:'
    const particles: { sprite: THREE.Sprite, velocity: { x: number, y: number, z: number } }[] = []

    for (let i = 0; i < 150; i++) {
      const canvas = document.createElement('canvas')
      canvas.width = 64; canvas.height = 64
      const ctx = canvas.getContext('2d')!
      const char = codeChars[Math.floor(Math.random() * codeChars.length)]
      const hue = Math.random() < 0.4 ? 0 : Math.random() < 0.6 ? 270 : 220
      ctx.fillStyle = `hsla(${hue}, 100%, 70%, ${Math.random() * 0.4 + 0.1})`
      ctx.font = 'bold 48px monospace'
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      ctx.fillText(char, 32, 32)
      const texture = new THREE.CanvasTexture(canvas)
      const mat = new THREE.SpriteMaterial({ map: texture, transparent: true })
      const sprite = new THREE.Sprite(mat)
      sprite.position.set((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 40)
      const scale = Math.random() * 2 + 0.5
      sprite.scale.set(scale, scale, 1)
      scene.add(sprite)
      particles.push({ sprite, velocity: { x: (Math.random() - 0.5) * 0.02, y: (Math.random() - 0.5) * 0.02, z: (Math.random() - 0.5) * 0.01 } })
    }

    const starGeo = new THREE.BufferGeometry()
    const starPos = new Float32Array(2000 * 3)
    const starCol = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 200
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 200
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 200
      const c = new THREE.Color()
      c.setHSL(Math.random() < 0.3 ? 0.6 : Math.random() < 0.5 ? 0.75 : 0, 1, 0.8)
      starCol[i * 3] = c.r; starCol[i * 3 + 1] = c.g; starCol[i * 3 + 2] = c.b
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3))
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.2, vertexColors: true, transparent: true, opacity: 0.7 }))
    scene.add(stars)

    const mouse = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }
    function onMouseMove(e: MouseEvent) { mouse.x = (e.clientX / window.innerWidth - 0.5) * 2; mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2 }
    window.addEventListener('mousemove', onMouseMove)

    let animId: number; let t = 0
    function animate() {
      animId = requestAnimationFrame(animate); t += 0.005
      particles.forEach((p, i) => {
        p.sprite.position.x += p.velocity.x + Math.sin(t + i) * 0.004
        p.sprite.position.y += p.velocity.y + Math.cos(t + i * 0.5) * 0.004
        p.sprite.position.z += p.velocity.z
        if (p.sprite.position.x > 50) p.sprite.position.x = -50
        if (p.sprite.position.x < -50) p.sprite.position.x = 50
        if (p.sprite.position.y > 50) p.sprite.position.y = -50
        if (p.sprite.position.y < -50) p.sprite.position.y = 50
        if (p.sprite.position.z > 20) p.sprite.position.z = -20
        if (p.sprite.position.z < -20) p.sprite.position.z = 20
        p.sprite.material.opacity = 0.2 + Math.sin(t * 2 + i) * 0.2
      })
      stars.rotation.y += 0.0002; stars.rotation.x += 0.0001
      target.x += (mouse.x * 0.4 - target.x) * 0.04
      target.y += (mouse.y * 0.4 - target.y) * 0.04
      camera.position.x += (target.x - camera.position.x) * 0.03
      camera.position.y += (target.y - camera.position.y) * 0.03
      camera.lookAt(scene.position)
      renderer.render(scene, camera)
    }
    animate()

    function onResize() { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight) }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('mousemove', onMouseMove); window.removeEventListener('resize', onResize); if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement); renderer.dispose() }
  }, [])

  return <div ref={mountRef} style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />
}

function ScrollBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return (
    <>
      <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '5px', scaleX, transformOrigin: 'left', background: 'linear-gradient(90deg, #dc2626, #ff6b6b, #dc2626)', zIndex: 99999, boxShadow: '0 0 15px rgba(220,38,38,0.9)' }} />
      <motion.div style={{ position: 'fixed', top: '-4px', left: 0, right: 0, height: '12px', scaleX, transformOrigin: 'left', background: 'linear-gradient(90deg, transparent 85%, rgba(255,100,100,1) 100%)', zIndex: 99999, filter: 'blur(3px)' }} />
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
    canvas.width = window.innerWidth; canvas.height = window.innerHeight
    const cols = Math.floor(canvas.width / 20)
    const drops = Array(cols).fill(0).map(() => Math.random() * -50)
    const chars = '01アイウエオALYAJANS</>{}[]'
    function draw() {
      ctx.fillStyle = 'rgba(8,8,8,0.06)'
      ctx.fillRect(0, 0, canvas!.width, canvas!.height)
      ctx.font = '12px monospace'
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.15 + 0.03})`
        ctx.fillText(char, i * 20, y * 20)
        if (y * 20 > canvas!.height && Math.random() > 0.98) drops[i] = 0
        drops[i] += 0.3
      })
      requestAnimationFrame(draw)
    }
    draw()
  }, [])

  return (
    <motion.div exit={{ clipPath: 'inset(100% 0 0 0)' }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
          style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(220,38,38,0.6)', letterSpacing: '2px', marginBottom: '2rem' }}>
          {'<SYSTEM INIT /> [0x4131 0x4C59]'}
        </motion.div>
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          {['A', 'L', 'Y'].map((l, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }} animate={phase >= 1 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(100px, 16vw, 180px)', fontWeight: '900', letterSpacing: '-8px', lineHeight: 0.85, fontFamily: 'monospace', display: 'inline-block', color: 'transparent', WebkitTextStroke: i === 0 ? '2px #ffffff' : i === 1 ? '1px rgba(255,255,255,0.5)' : '2px #dc2626' }}>
              {l}
            </motion.span>
          ))}
          <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={phase >= 2 ? { scaleX: 1, opacity: 1 } : {}} transition={{ duration: 0.3 }}
            style={{ position: 'absolute', top: '45%', left: '-10px', right: '-10px', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.8), rgba(255,255,255,0.3), rgba(220,38,38,0.8), transparent)', transformOrigin: 'left' }} />
        </div>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={phase >= 2 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
          <motion.div animate={{ width: phase >= 2 ? '50px' : '0px' }} transition={{ duration: 0.5 }} style={{ height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '8px' }}>AJANS</span>
          <motion.div animate={{ width: phase >= 2 ? '50px' : '0px' }} transition={{ duration: 0.5 }} style={{ height: '1px', background: 'rgba(255,255,255,0.2)' }} />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={phase >= 2 ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(22,163,74,0.7)', letterSpacing: '1px', marginTop: '1.5rem' }}>
          {phase >= 3 ? '▮ READY' : phase >= 2 ? '▮ LOADING ASSETS...' : '▮ INITIALIZING...'}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: 1 } : {}}
        style={{ position: 'absolute', bottom: '30px', left: '30px', fontFamily: 'monospace', fontSize: '9px', color: 'rgba(255,255,255,0.2)', lineHeight: '1.8' }}>
        <div>SYS://ALY_AJANS</div><div>BUILD_v2.0.26</div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: 1 } : {}}
        style={{ position: 'absolute', bottom: '30px', right: '30px', fontFamily: 'monospace', fontSize: '32px', fontWeight: '900', color: 'rgba(255,255,255,0.08)' }}>
        {String(count).padStart(3, '0')}
      </motion.div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'rgba(255,255,255,0.05)' }}>
        <motion.div style={{ height: '100%', background: 'linear-gradient(90deg, #dc2626, #ffffff)', boxShadow: '0 0 10px #dc2626' }} initial={{ width: '0%' }} animate={{ width: count + '%' }} transition={{ duration: 0.3 }} />
      </div>
    </motion.div>
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
          style={{
            position: 'relative',
            background: 'radial-gradient(ellipse at 50% 0%, #2d0060 0%, #150030 25%, #0d0020 50%, #150030 75%, #2d0060 100%)'
          }}
        >
          <SmoothScroll />
          <Cursor />
          <ScrollBar />
          <GlobalBackground />

          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
            <GlobalNeon />
          </div>

          <div style={{ position: 'relative', zIndex: 3 }}>
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