// src/App.jsx
import './index.css'

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="container">
          <h1>ἀρετή — Areté System</h1>
          <p className="subtitle">The Path to True Excellence — Body · Mind · Spirit · Unity</p>
          <a className="cta" href="#system">Explore the System</a>
        </div>
      </header>

      <main className="container">
        <section id="intro">
          <h2>What is Areté?</h2>
          <p>
            Areté (ἀρετή) means excellence of character, body, and soul — the realization of one’s
            highest potential. The Areté System unites martial training, philosophical practice, and
            AI coaching to master technique and life.
          </p>
        </section>

        <section id="system">
          <h2>System Architecture</h2>
          <div className="grid">
            <article>
              <h3>Σῶμα (Sōma) — The Body</h3>
              <ul>
                <li>Strength & endurance</li>
                <li>Mobility & flexibility</li>
                <li>Combat techniques & weapons</li>
              </ul>
            </article>

            <article>
              <h3>Νοῦς (Nous) — The Mind</h3>
              <ul>
                <li>Focus & concentration</li>
                <li>Emotional regulation</li>
                <li>Strategic thinking</li>
              </ul>
            </article>

            <article>
              <h3>Πνεῦμα (Pneuma) — The Spirit</h3>
              <ul>
                <li>Breath & energy control</li>
                <li>Meditation & virtue</li>
                <li>Purpose & connection</li>
              </ul>
            </article>

            <article>
              <h3>Ἑνότης (Henótēs) — The Unity</h3>
              <ul>
                <li>Flow & integration</li>
                <li>Teaching by example</li>
                <li>Embodiment of excellence</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="motto">
          <h2>Motto</h2>
          <blockquote>
            “Excellence is the Way.”<br/>
            — ἀρετή οὐ δύναμις ἐστίν, ἀλλὰ ἡ ἀλήθεια τοῦ ὄντος.
          </blockquote>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Areté System — Built with purpose and code.</p>
        </footer>
      </main>
    </div>
  )
}
