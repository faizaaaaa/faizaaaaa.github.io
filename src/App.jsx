import './App.css'
import CLOUDS from 'vanta/src/vanta.clouds'
import { useEffect } from 'react'
import StarrySky from './StarrySky';
import Typer from './Typer';
import Song from './Song';




function App() {

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



  return (
    <div className="app">
      <div className="bg" id="vanta"></div>
      <StarrySky />
      <Typer />
      <Song audioFile="public/sounds/hills.wav" />
    </div>
  )
}

export default App
