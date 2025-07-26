
import { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Code, Users, Wrench } from 'lucide-react';

interface ContributionsProps {
  darkMode: boolean;
}

const Contributions = ({ darkMode }: ContributionsProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <section className="max-w-4xl mx-auto py-16 px-6">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif tracking-tight">
          Her Contributions
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light opacity-90">
          Dhontomma's impact extended far beyond lines of code. Here are just a few ways she made our world better.
        </p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg hover:scale-105 ${
            darkMode 
              ? 'bg-white text-black hover:bg-gray-100' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          <span>{isOpen ? 'Hide Details' : 'Show Her Impact'}</span>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {/* Dropdown Content */}
        <div className={`mt-8 overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
  );
};

export default Contributions;
