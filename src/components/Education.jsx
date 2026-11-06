import { Award, BadgeCheck, Languages } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const EDUCATION = [
  {
    degree: 'B.E. Computer Science & Engineering',
    school: 'KGiSL Institute of Technology, Coimbatore',
    score: 'CGPA 7.9',
  },
  {
    degree: 'Higher Secondary',
    school: 'GSR Matric Higher Secondary School, Coimbatore',
    score: '78%',
  },
  {
    degree: 'Secondary',
    school: 'GSR Matric Higher Secondary School, Coimbatore',
    score: '84%',
  },
]

const ACHIEVEMENTS = [
  'Runner-Up — PyExpo Hackathon',
  'Participant — Smart India Hackathon 2025',
]

const CERTIFICATIONS = ['Diploma in Computer Application']
const LANGUAGES = ['Tamil', 'English']

export default function Education() {
  return (
    <section className="section education" id="education">
      <SectionHeading index="05" label="Education & More" title="Background & credentials." />

      <div className="edu__grid">
        <Reveal className="edu__block">
          <h3 className="edu__block-title mono-label">Education</h3>
          <ul className="edu__list">
            {EDUCATION.map((e) => (
              <li key={e.degree} className="edu__item">
                <div>
                  <p className="edu__degree">{e.degree}</p>
                  <p className="edu__school">{e.school}</p>
                </div>
                <span className="mono-label edu__score">{e.score}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="edu__block" delay={0.1}>
          <h3 className="edu__block-title mono-label">
            <Award size={14} aria-hidden="true" /> Achievements
          </h3>
          <ul className="edu__plain-list">
            {ACHIEVEMENTS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="edu__block" delay={0.15}>
          <h3 className="edu__block-title mono-label">
            <BadgeCheck size={14} aria-hidden="true" /> Certifications
          </h3>
          <ul className="edu__plain-list">
            {CERTIFICATIONS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="edu__block" delay={0.2}>
          <h3 className="edu__block-title mono-label">
            <Languages size={14} aria-hidden="true" /> Languages
          </h3>
          <ul className="edu__plain-list">
            {LANGUAGES.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
