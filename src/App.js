import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      document.title = 'Patrick van Halm';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
