import { useDarkMode } from './hooks/useDarkMode';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { CaseStudies } from './components/sections/CaseStudies';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
