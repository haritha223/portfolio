import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'SQL', 'C', 'C++'],
  },
  {
    title: 'Frameworks & APIs',
    skills: ['Flask', 'FastAPI', 'Google Maps API', 'Overpass API', 'Google Speech-to-Text'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQLite'],
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS EC2', 'AWS S3', 'Git', 'GitHub', 'VS Code', 'Linux'],
  },
  {
    title: 'Core Computer Science',
    skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems'],
  },
]

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <SectionHeading index="04" label="Technical Skills" title="What I work with." />

      <div className="skills__grid">
        {SKILL_GROUPS.map((g, i) => (
          <Reveal key={g.title} className="skills__group" delay={i * 0.06}>
            <h3 className="skills__title mono-label">{g.title}</h3>
            <ul className="skills__list">
              {g.skills.map((s) => (
                <li key={s} className="skills__item">{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
