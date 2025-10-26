// src/pages/Spirit.jsx
import { Link } from 'react-router-dom'
export default function Spirit() {
  return (
    <div className="container page">
      <Link to="/" className="back">← Back</Link>
      <h2>Πνεῦμα (Pneuma) — The Spirit</h2>
      <p>Breathwork, meditation, values and ethical training to stabilize purpose and calm.</p>

      <div className="feature-grid">
        <div className="feature">
          <h3>Breath & Energy</h3>
          <p>Breathing protocols for endurance, recovery and focus.</p>
        </div>
        <div className="feature">
          <h3>Meditative Practice</h3>
          <p>Guided mindfulness and ethical reflection exercises.</p>
        </div>
        <div className="feature">
          <h3>Purpose</h3>
          <p>Frameworks to align goals with long-term growth and virtue.</p>
        </div>
      </div>
    </div>
  )
}
