// src/pages/Research.jsx
import { Link } from 'react-router-dom'

const sampleProjects = [
  {
    id: 1,
    title: 'Pose-based punch analysis (PoC)',
    summary: 'Using MediaPipe to extract joints and compute velocity/angle for punch scoring.',
    status: 'Ongoing'
  },
  {
    id: 2,
    title: 'AI-driven lesson personalization',
    summary: 'Adaptive lesson generator that recommends drills based on performance.',
    status: 'Planned'
  },
  {
    id: 3,
    title: 'Ethics & training framework',
    summary: 'Philosophical research connecting stoic and Greek virtue ethics to modern training.',
    status: 'Completed'
  }
]

export default function Research() {
  return (
    <div className="container page">
      <Link to="/" className="back">← Back</Link>
      <h2>Research & Projects</h2>
      <p>Ongoing and completed studies, proofs-of-concept and project notes for Areté System.</p>

      <div className="projects">
        {sampleProjects.map(p => (
          <article key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p className="muted">{p.summary}</p>
            <div className={`pill ${p.status === 'Completed' ? 'done' : p.status === 'Ongoing' ? 'ongoing' : 'planned'}`}>
              {p.status}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
