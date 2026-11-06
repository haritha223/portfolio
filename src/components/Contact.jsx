import { ArrowUpRight, Mail } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const EMAIL = 'MAHESHWARIHARITHA8@GMAIL.COM'
const LINKEDIN = 'https://linkedin.com/in/haritha-d-6690b3315'
const GITHUB = 'https://github.com/haritha223'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <SectionHeading index="07" label="Contact" />

      <Reveal>
        <h2 className="contact__title">
          Have an interesting idea?
          <br />
          <span className="contact__title-accent">Let's connect.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="contact__links">
          <a className="contact__link" href={`mailto:${EMAIL}`}>
            <Mail size={18} aria-hidden="true" />
            <span>{EMAIL}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="contact__link" href={LINKEDIN} target="_blank" rel="noreferrer">
            <span className="mono-label">in</span>
            <span>linkedin.com/in/haritha-d</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="contact__link" href={GITHUB} target="_blank" rel="noreferrer">
            <span className="mono-label">gh</span>
            <span>github.com/haritha223</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
