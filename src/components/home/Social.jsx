import  { useRef } from 'react';
import hoverSoundFile from '../../assets/effects/pop-sound-effect-226108.mp3';
import './home.css'

const Social = () => {
  const hoverSound = useRef(new Audio(hoverSoundFile)); 

  const playSound = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0; 
      hoverSound.current.play().catch((error) => {
        console.error('Error playing sound:', error);
      });
    }
  };

  console.log('Hello')

  return (
    <div className="home__social">
      <div className="group relative">
        <a
          href="https://github.com/hasithaDa"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound} 
        >
          <i className="uil uil-github-alt"></i>
        </a>
        <span className="tooltip-content">GitHub</span>
      </div>

      <div className="group relative">
        <a
          href="https://www.linkedin.com/in/hasitha-da/"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-linkedin"></i>
        </a>
        <span className="tooltip-content">LinkedIn</span>
      </div>

      <div className="group relative">
        <a
          href="https://medium.com/@hamdhasitha"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-medium-m"></i>
        </a>
        <span className="tooltip-content">Medium</span>
      </div>

      <div className="group relative">
        <a
          href="https://www.instagram.com/hasitha_dar/"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-instagram"></i>
        </a>
        <span className="tooltip-content">Instagram</span>
      </div>
    </div>
  );
};

export default Social;
