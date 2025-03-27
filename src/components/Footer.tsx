
import { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

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
    <footer id="contact" className="bg-cafe-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-cafe-500 flex items-center justify-center">
                <span className="text-white font-bold">CB</span>
              </div>
              <span className="text-xl font-serif font-semibold">Café Bistro</span>
            </div>
            <p className="text-cafe-200 mb-6">
              A cozy corner in the heart of the city, where great coffee and memorable conversations happen.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-cafe-800 hover:bg-cafe-700 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-cafe-800 hover:bg-cafe-700 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-cafe-800 hover:bg-cafe-700 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cafe-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-cafe-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#menu" className="text-cafe-200 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#location" className="text-cafe-200 hover:text-white transition-colors">Visit Us</a></li>
              <li><a href="#contact" className="text-cafe-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-cafe-400 mt-1">📍</span>
                <span className="text-cafe-200">123 Coffee Lane<br />Downtown District, City 10001</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cafe-400 mt-1">📞</span>
                <span className="text-cafe-200">(123) 456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cafe-400 mt-1">✉️</span>
                <span className="text-cafe-200">info@cafebistro.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-cafe-200 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            
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
          <span>Café Bistro</span>
        </div>

        <div className="text-center pt-8">
          <p className="text-cafe-400 text-sm">
            © {new Date().getFullYear()} Café Bistro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
