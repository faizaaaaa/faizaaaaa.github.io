import './App.css'
import CLOUDS from 'vanta/src/vanta.clouds'
import { useEffect } from 'react'
import StarrySky from './StarrySky';
import Typer from './Typer';
import Sections from './Sections';



function App() {


  useEffect(() => {
    window.scrollTo({
      top: 20, // Adjust this to the desired scroll position
      behavior: 'smooth'
    });
  }, []);


  useEffect(() => {
    CLOUDS({
      el: '#vanta',
      mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0x8484ac,
    cloudColor: 0xc7c7e1,
    speed: 1.40
      
    })


  }, [])


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log('Scrolling to:', sectionId, section);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 20,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app">
      <div className="bg" id="vanta"></div>
      <StarrySky />
      <Typer />
      

      <Sections /> {/* Render the Sections component */}

      <div className="scroll-button-container">
      <button className="scroll-button" onClick={scrollToTop}>
       Home
      </button>
      <button className="scroll-button" onClick={() => scrollToSection('section2')}>
      Work
      </button>
      <button className="scroll-button" onClick={() => scrollToSection('section3')}>
      Projects
      </button>
      <button className="scroll-button" onClick={() => scrollToSection('section4')}>
      Hobbies
      </button>
      <button className="scroll-button" onClick={() => scrollToSection('section4')}>
      Contact
      </button>
      </div>
    </div>
  );
}

export default App
