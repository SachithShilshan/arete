// src/pages/Unity.jsx
import { Link } from 'react-router-dom'
export default function Unity() {
  return (
    <div className="container page">
      <Link to="/" className="back">← Back</Link>
      <h2>Ἑνότης (Henótēs) — The Unity</h2>
      <p>Where body, mind and spirit converge — flow state, leadership and holistic practice.</p>

      <div className="feature-grid">
        <div className="feature">
          <h3>Integration</h3>
          <p>Combined drills and flow training integrating technique and mindfulness.</p>
        </div>
        <div className="feature">
          <h3>Leadership</h3>
          <p>Teaching by example and embedding the philosophy into practice.</p>
        </div>
        <div className="feature">
          <h3>Flow Mechanics</h3>
          <p>Exercises to reach and sustain flow in practice and conflict.</p>
        </div>
      </div>
    </div>
  )
}
