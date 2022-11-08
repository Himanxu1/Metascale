import './App.css';
import Cta from './components/cta/Cta';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/services/Services';
import OurTeam from "./components/OurTeam/OurTeam";
import Contact from './Contact/Contact';
import Testimonial from './components/testimonial/Testimonial';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <Fade bottom>
      <Navbar/>
      <Hero/>
      <Services/>
      <OurTeam/>
      <Testimonial/>
      <Cta/>
      <Contact/>
      <Footer/>
      </Fade>
    </div>
  );
}

export default App;
