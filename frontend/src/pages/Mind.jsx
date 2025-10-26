// src/pages/Mind.jsx
import { Link } from 'react-router-dom'
export default function Mind() {
  return (
    <div className="container page">
      <Link to="/" className="back">← Back</Link>
      <h2>Νοῦς (Nous) — The Mind</h2>
      <p>Tools and training to sharpen attention, decision making and emotional resilience.</p>

      <div className="feature-grid">
        <div className="feature">
          <h3>Focus Training</h3>
          <p>Concentration exercises, reaction training and mental drills.</p>
        </div>
        <div className="feature">
          <h3>Strategy & Tactics</h3>
          <p>Structured sparring scenarios and strategic frameworks.</p>
        </div>
        <div className="feature">
          <h3>Learning Systems</h3>
          <p>Adaptive lesson plans powered by AI to accelerate skill acquisition.</p>
        </div>
      </div>
    </div>
  )
}
