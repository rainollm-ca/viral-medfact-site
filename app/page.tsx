export default function Home() {
  return (
    <>
      <header>
        <div className="logo">DrMed<span>Fact</span></div>
        <nav>
          <a href="https://legal.rainomotion.com/terms" target="_blank" rel="noopener">Terms of Service</a>
          <a href="https://legal.rainomotion.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>
        </nav>
      </header>

      <main>
        <div className="hero-tag">Medical Education on TikTok</div>
        <h1>
          Health facts,<br />
          <em>made viral.</em>
        </h1>
        <p className="subtitle">
          DrMedFact delivers accurate, evidence-based medical information to millions
          on TikTok and social media — breaking down complex health topics into
          clear, actionable content.
        </p>
        <div className="cta-row">
          <a href="https://www.tiktok.com/@viral.medfact" className="btn btn-primary" target="_blank" rel="noopener">
            Follow on TikTok
          </a>
          <a href="https://www.instagram.com/viral.medfact" className="btn btn-outline" target="_blank" rel="noopener">
            Instagram
          </a>
        </div>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">🩺</div>
            <h3>Evidence-Based</h3>
            <p>Every claim backed by<br />medical literature</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌍</div>
            <h3>Multilingual</h3>
            <p>Content in English,<br />Arabic &amp; more</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎓</div>
            <h3>Community-First</h3>
            <p>Built for patients<br />and learners</p>
          </div>
        </div>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} DrMedFact. All rights reserved.</span>
        <div className="legal-links">
          <a href="https://legal.rainomotion.com/terms" target="_blank" rel="noopener">Terms of Service</a>
          <a href="https://legal.rainomotion.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>
        </div>
      </footer>
    </>
  )
}
