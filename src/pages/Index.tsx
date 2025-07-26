
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';
import About from '../components/About';
import Contributions from '../components/Contributions';
import TributeMessage from '../components/TributeMessage';
import Footer from '../components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode ? 'bg-black text-white' : 'bg-white text-black'
    } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Background Music */}
        <audio autoPlay loop className="hidden">
          <source src="/your-background-music.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <Header darkMode={darkMode} />
        <About />
        <Contributions darkMode={darkMode} />
        <TributeMessage />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
