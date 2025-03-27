
import { MapPin, Mail, Phone, Laptop } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Location = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium reveal">GET IN TOUCH</span>
          <h2 className="section-title mt-2 reveal">Contact Me</h2>
          <p className="text-muted-foreground reveal">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 reveal">
            <div className="bg-muted h-96 rounded-xl overflow-hidden relative">
              <form className="h-full flex flex-col p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <div className="mt-auto">
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:col-span-2 reveal">
            <div className="bg-card rounded-xl shadow-sm p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/70 p-2 rounded-lg mt-1">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">San Francisco, California<br />United States</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/70 p-2 rounded-lg mt-1">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@alexmorgan.dev</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/70 p-2 rounded-lg mt-1">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">(+1) 555-123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/70 p-2 rounded-lg mt-1">
                  <Laptop size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Availability</h4>
                  <p className="text-muted-foreground">Available for freelance projects<br />and full-time opportunities</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#" className="btn-secondary w-full text-center block">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
