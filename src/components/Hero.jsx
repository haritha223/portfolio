import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowDown, ArrowUpRight, Eye, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  const root = useRef(null)

  // Staggered hero text reveal on page load.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .fromTo('.hero__line-inner', { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.12 }, 0.15)
        .fromTo('.hero__fade', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 0.7)
        .fromTo('.hero__meta', { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.0)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top" ref={root}>
      {/* Decorative editorial elements */}
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="hero__badge mono-label hero__fade" aria-hidden="true">
        <span className="hero__badge-dot" />
        Open to opportunities
      </div>

      <div className="hero__inner">
        <p className="hero__eyebrow mono-label hero__fade">
          Haritha D. — Portfolio 2026
        </p>

        <h1 className="hero__title">
          <span className="hero__line">
            <span className="hero__line-inner">Turning ideas</span>
          </span>
          <span className="hero__line">
            <span className="hero__line-inner hero__line-inner--outline">into practical</span>
          </span>
          <span className="hero__line">
            <span className="hero__line-inner">
              software<span className="hero__accent">.</span>
            </span>
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__intro hero__fade">
            I'm a Computer Science Engineering student interested in software
            development, problem-solving and building practical applications
            that address real-world challenges.
          </p>

          <div className="hero__actions hero__fade">
            <a href="#work" className="btn btn--primary">
              Explore My Work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              className="btn btn--ghost"
              href="#resume"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Eye size={16} aria-hidden="true" /> View Resume
            </a>
          </div>

          <div className="hero__socials hero__fade" aria-label="Social links">
            <a
              href="https://linkedin.com/in/haritha-d-6690b3315"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/haritha223"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a href="#contact" aria-label="Contact section">
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero__meta mono-label">
        <span>Student</span>
        <span className="hero__meta-sep">/</span>
        <span>Aspiring Software Developer</span>
        <span className="hero__meta-sep">/</span>
        <span>Coimbatore, IN</span>
      </div>
    </section>
  )
}
