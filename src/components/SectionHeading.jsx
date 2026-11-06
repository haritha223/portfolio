import Reveal from './Reveal.jsx'

/**
 * SectionHeading — consistent editorial section header.
 * Renders a mono index label, large heading and optional intro.
 */
export default function SectionHeading({ index, label, title, intro }) {
  return (
    <Reveal className="section-heading">
      <div className="section-heading__meta">
        <span className="mono-label">{index}</span>
        <span className="mono-label section-heading__label">{label}</span>
      </div>
      <h2 className="section-heading__title">{title}</h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </Reveal>
  )
}
