import StaggerText from './StaggerText.jsx';

// The CV PDF lives in /public, so it is served from the site root.
const CV_URL = '/image/Eain_Thet_Htar_Maung_CV.pdf';

export default function Home() {
  return (
    <>
      <div className="yellow-fill-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: 2 }}>
            <h1 style={{ fontSize: '3rem' }}>
              Thet <span className="purple-gradient">Htar</span>
            </h1>
            <StaggerText
              as="p"
              text="Beginner frontend developer & full-stack enthusiast"
              style={{ fontSize: '1.3rem', margin: '0.8rem 0', fontWeight: 500 }}
            />
            <p>
              5th‑semester computer science student, building future‑ready web experiences with
              modern UI/UX, React, fetch API, and java. Passionate about turning ideas into
              interactive reality.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={CV_URL} target="_blank" rel="noreferrer" className="btn-primary cv-btn">
                <i className="fas fa-eye" /> View CV
              </a>
              <a href={CV_URL} download="Eain_Thet_Htar_Maung_CV.pdf" className="btn-outline">
                <i className="fas fa-download" /> Download CV
              </a>
              <a
                href="https://github.com/myanmar2021burma"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <i className="fab fa-github" /> GitHub
              </a>
            </div>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div className="square-boundary">
              <img src="/image/a.jpg" alt="Profile photo" />
            </div>
          </div>
        </div>
      </div>
      <div className="card" style={{ textAlign: 'center' }}>
        <i className="fas fa-quote-left" style={{ color: 'var(--purple-accent)' }} /> "Never giving
        up is a professional tool, not a replacement."
      </div>
    </>
  );
}
