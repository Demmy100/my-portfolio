import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="bg-black w-full h-screen">
     <Navbar/>
     <About/>
     <Skills/>
     <Work/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
