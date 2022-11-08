import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/services/Services';
import OurTeam from "./components/OurTeam/OurTeam";
import Contact from './Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <OurTeam/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
