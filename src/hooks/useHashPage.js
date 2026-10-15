import { useCallback, useEffect, useState } from 'react';

const PAGES = ['home', 'about', 'projects', 'contact'];

const readHash = () => {
  const hash = window.location.hash.substring(1);
  return PAGES.includes(hash) ? hash : 'home';
};

export default function useHashPage() {
  const [page, setPage] = useState(readHash);

  useEffect(() => {
    const onHashChange = () => setPage(readHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((next) => {
    if (!PAGES.includes(next)) return;
    window.location.hash = next;
    setPage(next);
  }, []);

  return [page, navigate];
}
