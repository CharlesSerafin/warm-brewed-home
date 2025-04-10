
import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundPosition: 'center 30%',
            transform: isLoaded ? 'scale(1)' : 'scale(1.05)',
            transition: 'transform 1.5s ease-out'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full z-10 flex flex-col justify-center items-center text-center text-white container-custom px-4">
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-white/20">
            <AvatarImage src="./lovable-uploads/3c465608-22ef-41de-b445-601993784427.png" alt="Charles Ungsod" />
            <AvatarFallback>CU</AvatarFallback>
          </Avatar>
          <span className="inline-block mb-4 text-sm md:text-base uppercase tracking-widest border-b border-white/30 pb-2">Welcome to my portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Charles Ungsod</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/90">
            Computer Science student passionate about creating elegant, 
            responsive, and user-friendly web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/20 transition-colors">
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/70">Scroll Down</span>
            <div className="w-5 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
