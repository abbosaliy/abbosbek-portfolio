import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Header } from './components/Header';
import Hero from './components/Hero';
import Projecte from './components/Projects/Projecte';

import Skills from './components/Skills';

export default function App() {
  return (
    <div className="relative min-h-screen dark:bg-gray-900 text-white ">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projecte/>
        <Contact/>
        <Footer/>
    </div>
  );
}
