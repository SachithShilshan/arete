import { Link } from 'react-router-dom'

export default function Body() {
  return (
    <section className="page">
      <h2>Σῶμα (Sōma) — The Body</h2>

      <p className="lead">
        The body is the instrument of skill. We train for strength, speed, alignment and resilience.
      </p>

      <div className="features">
        <div className="feature">
          <h4>Strength & Endurance</h4>
          <p>Progressive resistance, interval conditioning, technique-rooted hypertrophy.</p>
        </div>
        <div className="feature">
          <h4>Mobility & Flexibility</h4>
          <p>Joint integrity, dynamic flexibility work, movement patterning.</p>
        </div>
        <div className="feature">
          <h4>Combat Technique</h4>
          <p>Precision drills for strikes, blocks, stances and weapon work.</p>
        </div>
      </div>

      <Link to="/" className="back-link">← Back</Link>
    </section>
  )
}
