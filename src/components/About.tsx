
const About = () => {
  return (
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
  );
};

export default About;
