'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add(time => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Parallax — Hero
    gsap.to('.hero-content', {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    })

    // Hizmetler — soldan sağdan gelme
    gsap.utils.toArray('.hizmet-card').forEach((card, i) => {
      gsap.fromTo(card,
        { x: i % 2 === 0 ? -80 : 80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.5
          }
        }
      )
    })

    // Başlıklar — yukarıdan gelme
    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.fromTo(title,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 0.8
          }
        }
      )
    })

    // Sayaçlar section — zoom efekti
    gsap.fromTo('.counter-section',
      { scale: 0.92, opacity: 0 },
      {
        scale: 1, opacity: 1,
        scrollTrigger: {
          trigger: '.counter-section',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1
        }
      }
    )

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return null
}