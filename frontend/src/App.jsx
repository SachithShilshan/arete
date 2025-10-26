import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Body from './pages/Body'
import Mind from './pages/Mind'
import Spirit from './pages/Spirit'
import Unity from './pages/Unity'
import Research from './pages/Research'

export default function App() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <header className="hero">
        <div className="container header-inner">
          <div>
            <h1 className="brand">ἀρετή — Areté System</h1>
            <p className="subtitle">Areté – The Next Level of Humanity — Body · Mind · Spirit · Unity</p>
          </div>

          <nav className="nav">
            <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
            <button className="nav-btn" onClick={() => navigate('/research')}>Research</button>
            <a className="nav-cta" href="#/research">Projects</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/body" element={<Body />} />
          <Route path="/mind" element={<Mind />} />
          <Route path="/spirit" element={<Spirit />} />
          <Route path="/unity" element={<Unity />} />
          <Route path="/research" element={<Research />} />
        </Routes>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Areté System</p>
        </footer>
      </main>
    </div>
  )
}
