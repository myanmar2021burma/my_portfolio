import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import useHashPage from './hooks/useHashPage.js';

const PAGES = {
  home: Home,
  about: About,
  projects: Projects,
  contact: Contact,
};

export default function App() {
  const [page, navigate] = useHashPage();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  const Page = PAGES[page];

  return (
    <div className="container">
      <Navbar
        page={page}
        onNavigate={navigate}
        dark={dark}
        onToggleDark={() => setDark((d) => !d)}
      />

      {/* key={page} remounts the page so the stagger + fade animations replay on every switch */}
      <div className="page" key={page}>
        <Page />
      </div>

      <footer>
        <i className="fas fa-crown" /> Thet Htar — Yellow Borders & Yellow Fill | Staggered Titles |
        Hover Cards
      </footer>
    </div>
  );
}
