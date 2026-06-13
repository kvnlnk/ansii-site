import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Charsets from './components/Charsets';
import Install from './components/Install';
import Usage from './components/Usage';
import Footer from './components/Footer';

import './styles/globals.css';
import './styles/components.css';

const GITHUB_URL = 'https://github.com/kvnlnk/ansii';

/**
 * Root application — assembles the single-page landing site.
 */
export default function App() {
  return (
    <>
      <a href="#hero" className="sr-only">Skip to content</a>

      <Nav githubUrl={GITHUB_URL} />

      <main id="main" role="main">
        <Hero />
        <Features />
        <Demo />
        <Charsets />
        <Install />
        <Usage />
      </main>

      <Footer githubUrl={GITHUB_URL} />
    </>
  );
}
