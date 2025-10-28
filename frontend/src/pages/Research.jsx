import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'AI-Assisted Technique Scoring',
    subtitle: 'Vision + biomechanics',
    details: 'Pose extraction and scoring for strikes and stances. Deliver concise corrections & drill suggestions.'
  },
  {
    title: 'Flow State Measurement',
    subtitle: 'Psychophysiology & metrics',
    details: 'Combine breathing patterns and performance data to infer flow and adapt training.'
  },
  {
    title: 'Curriculum Personalization',
    subtitle: 'Adaptive learning',
    details: 'Session embeddings and recommendations for individualized progressions.'
  }
]

export default function Research() {
  return (
    <section className="page">
      <h2>Research & Projects</h2>
      <p className="muted">Work that powers the Areté System — experimental, ongoing, and completed.</p>

      <div className="research-grid">
        {projects.map((p, i) => (
          <article key={i} className="project">
            <h3>{p.title}</h3>
            <p className="small-muted">{p.subtitle}</p>
            <p>{p.details}</p>
          </article>
        ))}
      </div>

      <h3 style={{ marginTop: '2.5rem', color: 'var(--accent)' }}>📊 Power BI Dashboard</h3>
      <p className="muted">
        Interactive analytics and research metrics for the Areté System — real-time data visualization.
      </p>

      {/* 🔽 Responsive Power BI embed */}
      <div className="powerbi-container">
        <iframe
          title="Areté Power BI Dashboard"
          src="https://app.powerbi.com/reportEmbed?reportId=4ce8262e-8c41-42bc-93ee-d80be922ad50&autoAuth=true&ctid=c1e2da04-87a7-4c79-90a9-0a2a54d6db05&actionBarEnabled=true"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>

      <Link to="/" className="back-link">← Back</Link>
    </section>
  )
}
