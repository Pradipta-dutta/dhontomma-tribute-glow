
import { useState, useEffect } from 'react';
import { Moon, Sun, ChevronDown, ChevronUp, Heart, Code, Users, Wrench, Volume2, VolumeX } from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContributionsOpen, setIsContributionsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contributions = [
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Mentored junior developers with infinite patience and care"
    },
    {
      icon: <Code className="w-5 h-5" />,
      text: "Contributed to open-source projects with passion and dedication"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Organized community meetups and collaborative coding sessions"
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      text: "Built innovative tools that transformed team workflows"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode ? 'bg-black text-white' : 'bg-white text-black'
    } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`fixed top-6 right-6 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            darkMode 
              ? 'bg-white/10 text-white hover:bg-white/20' 
              : 'bg-black/10 text-black hover:bg-black/20'
          } backdrop-blur-sm border ${
            darkMode ? 'border-white/20' : 'border-black/20'
          }`}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Music Toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`fixed top-6 right-20 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            darkMode 
              ? 'bg-white/10 text-white hover:bg-white/20' 
              : 'bg-black/10 text-black hover:bg-black/20'
          } backdrop-blur-sm border ${
            darkMode ? 'border-white/20' : 'border-black/20'
          }`}
          aria-label="Toggle music"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        
        {/* Background Music */}
        <audio autoPlay loop muted={isMuted} className="hidden">
          <source src="/your-background-music.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        {/* Header Section */}
        <header className="text-center py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src="/dhontomma.jpg"
                  alt="Dhontomma"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-opacity-20 border-gray-300 hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23374151' font-family='Arial, sans-serif' font-size='16'%3EDhontomma%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className={`absolute inset-0 rounded-full ${
                  darkMode ? 'shadow-white/10' : 'shadow-black/10'
                } shadow-2xl`}></div>
              </div>
            </div>

            {/* Title */}
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 font-serif ${
              darkMode ? 'text-white' : 'text-black'
            } tracking-tight`}>
              Dhontomma
            </h1>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl font-light ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            } max-w-2xl mx-auto leading-relaxed`}>
              A Brilliant Developer, A Loving Friend, A Beautiful Soul
            </p>
            
            {/* Decorative Line */}
            <div className={`w-32 h-1 mx-auto mt-8 rounded-full ${
              darkMode ? 'bg-white' : 'bg-black'
            } opacity-30`}></div>
          </div>
        </header>

        {/* About Section */}
        <section className="max-w-4xl mx-auto py-16 px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif tracking-tight">
              About Dhontomma
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed mb-6 font-light">
                Dhontomma was more than just a brilliant developer — she was a mentor, a guide, and a friend to all who knew her.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
                Her dedication to helping others, her passion for learning, and her boundless kindness left an indelible mark on everyone's heart. Through her code, her wisdom, and her love, she touched countless lives and made the world a brighter place.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="flex justify-center mt-12 space-x-2">
              <div className="w-2 h-2 rounded-full bg-current opacity-40"></div>
              <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
              <div className="w-2 h-2 rounded-full bg-current opacity-40"></div>
            </div>
          </div>
        </section>

        {/* Contributions Section */}
        <section className="max-w-4xl mx-auto py-16 px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif tracking-tight">
              Her Contributions
            </h2>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light opacity-90">
              Dhontomma's impact extended far beyond lines of code. Here are just a few ways she made our world better.
            </p>

            <button
              onClick={() => setIsContributionsOpen(!isContributionsOpen)}
              className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg hover:scale-105 ${
                darkMode 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              <span>{isContributionsOpen ? 'Hide Details' : 'Show Her Impact'}</span>
              {isContributionsOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {/* Dropdown Content */}
            <div className={`mt-8 overflow-hidden transition-all duration-500 ${
              isContributionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-6">
                  {contributions.map((contribution, index) => (
                    <li
                      key={index}
                      className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                        darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className={`flex-shrink-0 p-2 rounded-full ${
                        darkMode ? 'bg-white/10' : 'bg-black/10'
                      }`}>
                        {contribution.icon}
                      </div>
                      <p className="text-left text-lg font-light leading-relaxed">
                        {contribution.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tribute Message Section */}
        <section className="max-w-4xl mx-auto py-16 px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif tracking-tight">
              A Heartfelt Tribute
            </h2>
            
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed font-light italic">
                  "You were more than a friend — you were a guiding light, a source of wisdom, and a blessing that touched every life you encountered."
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed font-light">
                  Your gentle spirit, your brilliant mind, and your loving heart continue to inspire us every day. Though we can no longer see your smile or hear your laughter, your presence lives on in the code you wrote, the people you mentored, and the love you shared.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed font-light">
                  Wherever you are now, we hope you're at peace, knowing that your legacy of kindness and brilliance will forever remain in our hearts.
                </p>
                
                <div className="pt-6">
                  <p className="text-2xl font-medium font-serif">
                    You will always be remembered. You will always be loved. ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-current border-opacity-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-lg">
                <span>Created with</span>
                <Heart className="w-5 h-5 text-red-500 fill-current" />
                <span>and endless love</span>
              </div>
              
              <p className="text-sm opacity-60">
                © {new Date().getFullYear()} • In loving memory of Dhontomma
              </p>
              
              <div className="pt-4">
                <p className="text-xs opacity-40 font-light">
                  "The best way to honor someone is to live the values they embodied."
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
