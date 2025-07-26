
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-current border-opacity-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span>Created with</span>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span>and endless love</span>
          </div>
          
          <p className="text-sm opacity-60">
            © {currentYear} • In loving memory of Dhontomma
          </p>
          
          <div className="pt-4">
            <p className="text-xs opacity-40 font-light">
              "The best way to honor someone is to live the values they embodied."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
