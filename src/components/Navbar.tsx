
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-cafe-700 flex items-center justify-center">
            <span className="text-white font-bold">CU</span>
          </div>
          <span className="text-xl font-serif font-semibold">Charles Ungsod</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          </li>
          <li>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
          </li>
          <li>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </li>
          <li>
            <a href="#" className="btn-primary">Resume</a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-md transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="container-custom flex flex-col py-4 gap-4">
          <li>
            <a 
              href="#" 
              className="block py-2 px-4 hover:bg-secondary/50 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="block py-2 px-4 hover:bg-secondary/50 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="block py-2 px-4 hover:bg-secondary/50 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#testimonials" 
              className="block py-2 px-4 hover:bg-secondary/50 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="block py-2 px-4 hover:bg-secondary/50 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block py-2 px-4 bg-primary text-primary-foreground rounded-md"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
