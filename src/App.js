import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/services/Services';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
