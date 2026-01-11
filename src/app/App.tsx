import { Hero } from './components/portfolio/Hero';
import { About } from './components/portfolio/About';
import { Skills } from './components/portfolio/Skills';
import { Projects } from './components/portfolio/Projects';
import { Experience } from './components/portfolio/Experience';
import { Achievements } from './components/portfolio/Achievements';
import { Education } from './components/portfolio/Education';
import { Footer } from './components/portfolio/Footer';
import { PortfolioNav } from './components/portfolio/PortfolioNav';
import { ScrollToTop } from './components/portfolio/ScrollToTop';
import { Stats } from './components/portfolio/Stats';

function App() {
  return (
    <div className="min-h-screen text-white antialiased">
      <PortfolioNav />
      <ScrollToTop />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
