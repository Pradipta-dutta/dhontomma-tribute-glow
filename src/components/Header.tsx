
interface HeaderProps {
  darkMode: boolean;
}

const Header = ({ darkMode }: HeaderProps) => {
  return (
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
                // Fallback to a placeholder if image doesn't exist
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
  );
};

export default Header;
