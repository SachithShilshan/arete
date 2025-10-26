import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section id="intro">
        <h2>What is Areté?</h2>

        <p>
          Areté embodies the pursuit of perfection in every aspect of life — strength, wisdom, and harmony — the state where power and purpose unite.
        </p>
        <p>
          In the modern age, Areté reawakens this timeless ideal. By uniting martial art, philosophy, and artificial intelligence, Areté transforms human development into a dynamic path of mastery.
        </p>
        <p>
          Through the balance of discipline, thought, and technology, it guides individuals to master both technique and life itself — evolving human potential to the next level.
        </p>
        <p>
          Rooted in the Four Pillars of Areté, it strengthens the body, the mind, the spirit and the unity that binds them all.
        </p>
        <p>
          Areté is not a destination but a state of becoming — where body, mind, and spirit move as one, guided by wisdom and enhanced by intelligence.
        </p>
      </section>

      <section id="system" className="mt-28">
        <h2>System Architecture</h2>
        <div className="grid clickable-grid">
          <Link to="/body" className="card">
            <h3>Σῶμα — The Body</h3>
            <p>Strength, mobility, technique — develop a precise and powerful instrument of movement.</p>
          </Link>

          <Link to="/mind" className="card">
            <h3>Νοῦς — The Mind</h3>
            <p>Focus, strategy, emotional regulation — clarity under pressure.</p>
          </Link>

          <Link to="/spirit" className="card">
            <h3>Πνεῦμα — The Spirit</h3>
            <p>Breath, meditation, moral purpose — power guided by intent.</p>
          </Link>

          <Link to="/unity" className="card">
            <h3>Ἑνότης — The Unity</h3>
            <p>Integration of all pillars — flow, leadership, embodiment.</p>
          </Link>
        </div>
      </section>

      <section id="research-preview" className="mt-28">
        <h2>Research & Projects</h2>
        <p className="muted">Ongoing and completed work that supports the Areté System — AI coaching, pose analysis, curriculum design, and more.</p>

        <div className="research-cards">
          <article className="research-card">
            <h4>AI-Assisted Technique Scoring</h4>
            <p className="small-muted">Vision + biomechanics</p>
            <details>
              <summary>Summary</summary>
              <p>Real-time pose extraction using lightweight models to score strike mechanics and offer corrective cues.</p>
            </details>
            <Link to="/research" className="read-more">View project</Link>
          </article>

          <article className="research-card">
            <h4>Flow State Measurement</h4>
            <p className="small-muted">Psychophysiology & metrics</p>
            <details>
              <summary>Summary</summary>
              <p>Combining breathing, heart-rate proxies, and performance metrics to infer flow states during training.</p>
            </details>
            <Link to="/research" className="read-more">View project</Link>
          </article>

          <article className="research-card">
            <h4>Curriculum Personalization</h4>
            <p className="small-muted">Adaptive learning</p>
            <details>
              <summary>Summary</summary>
              <p>Use session embeddings to recommend targeted drills and progression plans for each trainee.</p>
            </details>
            <Link to="/research" className="read-more">View project</Link>
          </article>
        </div>
      </section>
    </>
  )
}
