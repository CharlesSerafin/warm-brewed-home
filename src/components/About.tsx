
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-secondary/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <span className="text-primary font-medium reveal">ABOUT ME</span>
            <h2 className="section-title mt-2 reveal">Computer Science Student with a Passion for Web Development</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 reveal">
              I'm a dedicated Computer Science student with a focus on web development and software engineering. My academic journey has equipped me with strong foundations in algorithms, data structures, and various programming paradigms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 reveal">
              Beyond my coursework, I'm passionate about applying theoretical knowledge to practical projects. I enjoy building responsive web applications and exploring new technologies to expand my skill set. I'm particularly interested in creating digital experiences that are both functional and aesthetically pleasing.
            </p>
            <div className="flex items-center gap-8 mt-8 reveal">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary mb-1">3+</span>
                <span className="text-sm text-muted-foreground">Years Coding</span>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary mb-1">12+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary mb-1">5+</span>
                <span className="text-sm text-muted-foreground">Hackathons</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-cafe-100 -translate-x-6 -translate-y-6 rounded-lg"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="./images/workspace.jpg" 
                  alt="Developer workspace with laptop and code"
                  className="w-full h-auto object-cover aspect-video"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                  <div>
                    <h4 className="font-medium">CS Student</h4>
                    <p className="text-xs text-muted-foreground">Learning & Building</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
