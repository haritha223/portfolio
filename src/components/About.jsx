import { GraduationCap, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section className="section about" id="about">
      <SectionHeading index="01" label="About" title="A little about me." />

      <div className="about__grid">
        <Reveal className="about__text">
          <p className="about__lead">
            I'm currently pursuing my B.E. in Computer Science and Engineering
            at KGiSL Institute of Technology, Coimbatore. I enjoy exploring
            software technologies, developing practical applications and
            improving my problem-solving skills.
          </p>
          <p>
            My interests include software development, AI-based applications
            and cloud technologies — and I like building things that solve
            real problems for real people.
          </p>
        </Reveal>

        <Reveal className="about__card" delay={0.15}>
          <div className="about__card-head">
            <GraduationCap size={18} aria-hidden="true" />
            <span className="mono-label">Education</span>
          </div>
          <div className="about__card-body">
            <p className="about__degree">B.E. Computer Science &amp; Engineering</p>
            <p className="about__school">KGiSL Institute of Technology</p>
            <p className="about__meta">
              <MapPin size={13} aria-hidden="true" /> Coimbatore, Tamil Nadu
            </p>
            <p className="about__cgpa mono-label">CGPA — 7.9 / 10</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
