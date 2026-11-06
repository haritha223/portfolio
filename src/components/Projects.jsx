import { ArrowUpRight, Github } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const PROJECTS = [
  {
    id: '01',
    name: 'Mobility Assistance App',
    subtitle: 'For people with disabilities',
    description:
      'A location-based Flask web application that helps wheelchair users discover accessible places such as ramps and elevators.',
    tech: ['Python', 'Flask', 'OpenStreetMap Overpass API', 'SQLite'],
    accent: 'sage',
  },
  {
    id: '02',
    name: 'AI YouTube Dubbing',
    subtitle: 'Speech-to-speech translation pipeline',
    description:
      'An AI-powered YouTube dubbing application that converts video speech into another language — built and deployed end to end.',
    tech: ['Python', 'FastAPI', 'Whisper', 'NLLB-200', 'AWS EC2', 'AWS S3'],
    accent: 'blue',
  },
  {
    id: '03',
    name: 'Indian Nagish',
    subtitle: 'Assistive communication app',
    description:
      'A real-time assistive communication application that converts speech to text and text to speech, supporting 11 Indian languages.',
    tech: ['Python', 'Google Speech-to-Text API', 'SpeechRecognition', 'gTTS'],
    accent: 'sage',
  },
  {
    id: '04',
    name: 'Employee Payslip Management',
    subtitle: 'Payroll system',
    description:
      'A Java and MySQL payroll management system with separate HR and employee access, automated salary calculations, tax deductions, PF and allowances.',
    tech: ['Java', 'MySQL'],
    accent: 'blue',
  },
]

/**
 * Abstract visual placeholder for each project — distinct per accent,
 * no fabricated screenshots.
 */
function ProjectVisual({ accent, index }) {
  return (
    <div className={`project__visual project__visual--${accent}`} aria-hidden="true">
      <span className="project__visual-index mono-label">{index}</span>
      <div className="project__visual-bars">
        <span /><span /><span /><span /><span />
      </div>
      <div className="project__visual-ring" />
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section projects" id="work">
      <SectionHeading
        index="02"
        label="Selected Work"
        title="Selected Work."
        intro="Four projects, each built to solve a specific problem — from accessibility to payroll automation."
      />

      <div className="projects__list">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} className="project" delay={i * 0.08}>
            <article className="project__card">
              <div className="project__media">
                <ProjectVisual accent={p.accent} index={p.id} />
                <div className="project__links">
                  <a
                    href="https://github.com/haritha223"
                    target="_blank"
                    rel="noreferrer"
                    className="project__icon-btn"
                    aria-label={`${p.name} on GitHub`}
                  >
                    <Github size={16} />
                  </a>
                  <button className="project__icon-btn project__icon-btn--case" aria-label={`Case study for ${p.name}`}>
                    Case study <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              <div className="project__body">
                <div className="project__head">
                  <span className="mono-label">Project {p.id}</span>
                  <h3 className="project__name">{p.name}</h3>
                  <p className="project__subtitle">{p.subtitle}</p>
                </div>
                <p className="project__desc">{p.description}</p>
                <ul className="project__tech" aria-label="Technologies used">
                  {p.tech.map((t) => (
                    <li key={t} className="mono-label">{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
