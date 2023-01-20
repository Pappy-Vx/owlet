
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import { BsArrowUp } from 'react-icons/bs';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <div className='navigator'>
      <a href="#hero">
      <button >
        <BsArrowUp className='navigator-btn'/>
      </button>
      </a>
    </div>
    <Navbar />
    <Hero />
    <About />
    <Info />
    <Footer />
    </>
  );
}

export default App;
