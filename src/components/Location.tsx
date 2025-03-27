
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
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
    <section id="location" ref={sectionRef} className="py-20 md:py-28">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium reveal">VISIT US</span>
          <h2 className="section-title mt-2 reveal">Find Our Café</h2>
          <p className="text-muted-foreground reveal">
            We're conveniently located in the heart of downtown. 
            Come visit us for a warm cup of coffee and a friendly atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 reveal">
            <div className="bg-muted h-96 rounded-xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2518621768937!2d2.3347050769770667!3d48.87315270162858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sPlace%20de%20l&#39;Op%C3%A9ra%2C%2075009%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1688292184525!5m2!1sen!2sus" 
                className="w-full h-full border-0" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to our café"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.1)]"></div>
            </div>
          </div>
          <div className="lg:col-span-2 reveal">
            <div className="bg-card rounded-xl shadow-sm p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Opening Hours & Contact</h3>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/70 p-2 rounded-lg mt-1">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-muted-foreground">123 Coffee Lane<br />Downtown District, City 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/70 p-2 rounded-lg mt-1">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 8:00 PM<br />
                  Saturday - Sunday: 8:00 AM - 9:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/70 p-2 rounded-lg mt-1">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/70 p-2 rounded-lg mt-1">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">info@cafebistro.com</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#contact" className="btn-primary w-full text-center block">
                  Contact Us
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
