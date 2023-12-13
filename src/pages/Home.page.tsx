import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { useEffect } from 'react';

export function HomePage() {
  useEffect(() => {
    document.title = 'Home';
  });
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
