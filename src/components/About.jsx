import StaggerText from './StaggerText.jsx';

const SKILLS = [
  { icon: 'fas fa-comments', label: 'Strong Communication' },
  { icon: 'fas fa-clock', label: 'Time Management' },
  { icon: 'fas fa-sync-alt', label: 'Adaptability' },
  { icon: 'fas fa-search', label: 'Attention to Detail' },
  { icon: 'fas fa-lightbulb', label: 'Problem-Solving' },
  { icon: 'fab fa-react', label: 'React/Next.js' },
  { icon: 'fab fa-js', label: 'JavaScript/TS' },
  { icon: 'fas fa-wind', label: 'Tailwind CSS' },
];

const WHY = [
  { icon: 'fas fa-chart-line', title: 'Research-Driven', text: 'User insights first' },
  { icon: 'fas fa-users', title: 'Reliable Partner', text: 'Clear deadlines' },
  { icon: 'fas fa-laptop-house', title: 'Flexible Availability', text: 'Remote friendly' },
  { icon: 'fas fa-tasks', title: 'Holistic Ownership', text: 'Concept to launch' },
];

const EXPERIENCE = [
  {
    title: 'Front-End',
    sub: '2026-Present',
    text: '🔥 I have been learning React (state, hooks ..).',
  },
  {
    title: 'Soft Skill',
    sub: 'Communication ·',
    text: '3+ years of presentations and group projects.',
  },
  {
    title: 'Other Skill',
    sub: 'Content Creator, Editor & Researcher',
    text: '✍️ I use Canva, PowerPoint, CapCut etc.',
  },
];

export default function About() {
  return (
    <>
      <div className="card">
        <StaggerText as="h2" className="stagger-title" icon="fas fa-user-astronaut" text="Introduction" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: 2 }}>
            <p>
              မဂ္ဂလာပါ! ကျွန်ုပ် Thet Htar ပါ။ Computer Science student and Front-End developer နှင့်
              creative problem solver. ကျွန်ုပ်ဟာ သုံးစွဲသူများအတွက် ဆွဲဆောင်မှုရှိသော web
              applications များကို တည်ဆောက်ရာတွင် စိတ်ပါဝင်စားပါသည်။
            </p>
            <p style={{ marginTop: '1rem' }}>
              I specialize in crafting responsive, accessible, and high-performance digital products
              and also prediction with data science. With a blend of design thinking and clean code,
              I help brands stand out.
            </p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div className="flower-border">
              <img src="/image/aa.jpg" alt="flower profile" />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <StaggerText as="h2" className="stagger-title" icon="fas fa-cogs" text="Skill & Expertise" />
        <div>
          {SKILLS.map((s) => (
            <span key={s.label} className="tech-tag">
              <i className={s.icon} /> {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="card">
        <StaggerText as="h2" className="stagger-title" icon="fas fa-handshake" text="Why Work With Me" />
        <div className="grid-2" style={{ gap: '1.5rem' }}>
          {WHY.map((w) => (
            <div key={w.title} className="why-item">
              <i className={w.icon} />
              <h4>{w.title}</h4>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <StaggerText as="h2" className="stagger-title" icon="fas fa-briefcase" text="Experience" />
        {EXPERIENCE.map((e) => (
          <div key={e.title} className="exp-item-custom">
            <h3>{e.title}</h3>
            <p>
              <strong>{e.sub}</strong>
            </p>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
