import { Briefcase } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const EXPERIENCE = [
  {
    org: 'NxtLogics',
    role: 'Cloud Computing Intern',
    period: '2026 · 15 days',
    points: [
      'Developed and deployed an AI-powered YouTube dubbing tool.',
      'Integrated Whisper for speech recognition.',
      'Integrated NLLB-200 for translation.',
      'Deployed using AWS EC2 and AWS S3.',
    ],
  },
  {
    org: 'DT Software Development and Research Pvt. Ltd.',
    role: 'Full Stack Development Intern',
    period: 'Completed',
    points: [],
  },
]

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <SectionHeading index="03" label="Experience" title="Where I've worked." />

      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.org} className="timeline__item" delay={i * 0.1}>
            <div className="timeline__rail" aria-hidden="true">
              <span className="timeline__dot" />
              {i < EXPERIENCE.length - 1 && <span className="timeline__line" />}
            </div>
            <div className="timeline__content">
              <div className="timeline__head">
                <div>
                  <h3 className="timeline__role">{e.role}</h3>
                  <p className="timeline__org">
                    <Briefcase size={14} aria-hidden="true" /> {e.org}
                  </p>
                </div>
                <span className="mono-label timeline__period">{e.period}</span>
              </div>
              {e.points.length > 0 && (
                <ul className="timeline__points">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
