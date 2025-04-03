import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <footer className="bg-cafe-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-cafe-500 flex items-center justify-center">
                <span className="text-white font-bold">CU</span>
              </div>
              <span className="text-xl font-serif font-semibold">Charles Ungsod</span>
            </div>
            <p className="text-cafe-200 mb-6">
              Computer Science student passionate about web development, software engineering, and creating user-friendly applications.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-cafe-800 hover:bg-cafe-700 transition-colors p-2 rounded-full"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="bg-cafe-800 hover:bg-cafe-700 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="bg-cafe-800 hover:bg-cafe-700 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-cafe-800 hover:bg-cafe-700 transition-colors p-2 rounded-full"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cafe-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-cafe-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-cafe-200 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="text-cafe-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-cafe-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cafe-200 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-cafe-200 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-cafe-200 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-cafe-200 hover:text-white transition-colors">API Development</a></li>
              <li><a href="#" className="text-cafe-200 hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-cafe-200 mb-4">Subscribe to receive updates about new projects, tech insights, and occasional coding tips.</p>
            
            {isSubmitted ? (
              <div className="bg-cafe-800/50 border border-cafe-700 p-3 rounded-md text-center">
                <p className="text-white">Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="bg-cafe-800 text-white placeholder:text-cafe-400 px-4 py-2 rounded-l-md flex-grow border border-cafe-700 focus:outline-none focus:border-cafe-500"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-cafe-500 hover:bg-cafe-600 px-4 py-2 rounded-r-md transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="separator">
          <span>Charles Ungsod</span>
        </div>

        <div className="text-center pt-8">
          <p className="text-cafe-400 text-sm">
            © {new Date().getFullYear()} Charles Ungsod. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
