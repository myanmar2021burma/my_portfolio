import StaggerText from './StaggerText.jsx';

const PROJECTS = [
  {
    title: 'Event Management & Ticket Booking',
    images: ['/image/Login.jpg', '/image/delete.jpg', '/image/getpost.jpg'],
    description:
      'This is an Event management and ticket booking website with java, html, css, js, api. It needs MySQL, Tomcat, JDK 17 and MySQL Connector/J. This is a fourth year group project with 5 members.',
    tags: ['html', 'CSS', 'Java'],
  },
  {
    title: 'Sale & Customer Management System',
    images: [
      '/image/dash.jpg',
      '/image/sign.jpg',
      '/image/popup.jpg',
    ],
    description:
      'A sale & customer management system  used for pos , B2B Supply,Distributors& Wholesalers, Real Estate & Construction',
    tags: ['React', 'node.js', 'postgreSQL'],
  },
];

const TOOLS = [
  'HTML5/CSS3',
  'JavaScript (ES6+)',
  'React / Next.js',
  'Tailwind CSS',
  'Node.js',
  'Firebase',
  'Git/GitHub',
  'Figma',
  'Three.js',
  'Vercel',
  'Photoshop/Canva',
  'Material UI',
];

const SERVICES = [
  { icon: 'fas fa-paintbrush', title: 'UI/UX Design', text: 'Wireframes, prototypes, user testing' },
  { icon: 'fas fa-code', title: 'Front-End Development', text: 'Responsive, interactive websites' },
  { icon: 'fas fa-rocket', title: 'Performance Optimization', text: 'Fast loading, SEO, Core Web Vitals' },
  { icon: 'fas fa-mobile-alt', title: 'Mobile-First Design', text: 'Flawless cross-device experiences' },
];

export default function Projects() {
  return (
    <>
      <StaggerText as="h2" className="stagger-title" icon="fas fa-code-branch" text="Featured Projects" />
      {PROJECTS.map((p) => (
        <div key={p.title} className="yellow-fill-card">
          <h3 style={{ fontSize: '1.6rem', color: 'var(--purple-accent)' }}>{p.title}</h3>
          <div className="image-row">
            {p.images.map((src, i) => (
              <img key={src} src={src} alt={`${p.title} view ${i + 1}`} />
            ))}
          </div>
          <p>{p.description}</p>
          <div>
            {p.tags.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}

      <StaggerText as="h2" className="stagger-title" icon="fas fa-microchip" text="Tech Stacks & Tools" />
      <div className="card">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
          {TOOLS.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <StaggerText as="h2" className="stagger-title" icon="fas fa-concierge-bell" text="Services" />
      <div className="grid-2">
        {SERVICES.map((s) => (
          <div key={s.title} className="project-card">
            <i className={s.icon} style={{ fontSize: '2rem' }} />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
