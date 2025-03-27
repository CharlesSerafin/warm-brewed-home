
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
            <span className="text-primary font-medium reveal">OUR STORY</span>
            <h2 className="section-title mt-2 reveal">A Warm Place to Gather & Enjoy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 reveal">
              Founded in 2010, Café Bistro started as a small corner café with a passion for quality coffee and homemade pastries. Over the years, we've grown into a beloved community hub where friends gather, work gets done, and memories are made.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 reveal">
              We carefully source our coffee beans from ethical, sustainable farms around the world, and our pastries are baked fresh daily using traditional recipes and premium ingredients.
            </p>
            <div className="flex items-center gap-8 mt-8 reveal">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary mb-1">12+</span>
                <span className="text-sm text-muted-foreground">Years of Service</span>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary mb-1">20+</span>
                <span className="text-sm text-muted-foreground">Coffee Varieties</span>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary mb-1">15+</span>
                <span className="text-sm text-muted-foreground">Fresh Pastries</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-cafe-100 -translate-x-6 -translate-y-6 rounded-lg"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="Inside our café"
                  className="w-full h-auto object-cover aspect-video"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.7273 14.7273C18.6063 15.0909 18.6273 15.4818 18.7891 15.8319C18.9508 16.1819 19.2417 16.4729 19.6 16.6364L19.5455 16.7273C19.2364 17.4545 18.8182 18.1182 18.3091 18.7273L18.2182 18.7273C17.8613 18.7142 17.5123 18.8229 17.2349 19.0273C16.9575 19.2318 16.7715 19.5195 16.7091 19.8364C16.6468 20.1532 16.7118 20.4806 16.8926 20.7509C17.0734 21.0213 17.3561 21.2138 17.6727 21.2909L17.6182 21.3818C16.4775 22.0091 15.2221 22.4519 13.9091 22.6909L13.8545 22.6364C13.5411 22.5211 13.1998 22.5164 12.8834 22.623C12.567 22.7296 12.2931 22.9407 12.1029 23.2234C11.9128 23.5061 11.8184 23.8428 11.8353 24.1819C11.8522 24.521 11.9795 24.8468 12.2 25.1091H12C9.78 25.1091 7.61731 24.5007 5.7462 23.3601C3.8751 22.2195 2.37993 20.591 1.43139 18.6669C0.482843 16.7427 0.110979 14.6007 0.360128 12.4845C0.609277 10.3683 1.46875 8.36909 2.83244 6.72242C4.19614 5.07575 6.0098 3.84961 8.05356 3.18307C10.0973 2.51653 12.2896 2.43476 14.379 2.94781C16.4683 3.46086 18.3667 4.54691 19.8443 6.08406C21.3219 7.62121 22.3217 9.55456 22.7455 11.6546L22.6546 11.7C22.5249 12.0166 22.5096 12.3681 22.6114 12.6954C22.7133 13.0227 22.9258 13.3051 23.213 13.4931C23.5002 13.6811 23.8437 13.7625 24.1854 13.7236C24.5272 13.6847 24.8442 13.5281 25.0727 13.2818V13.3818C25.2402 14.4226 25.226 15.4829 25.0309 16.5182L24.9455 16.5636C24.5965 16.7199 24.3094 16.9827 24.1291 17.3122C23.9488 17.6417 23.8851 18.019 23.9479 18.3855C24.0107 18.752 24.1966 19.0855 24.4734 19.3325C24.7503 19.5796 25.1008 19.7255 25.4682 19.7455L25.5182 19.8364C25.038 20.964 24.3323 21.9897 23.4364 22.8546L23.3455 22.8546C23.0152 22.848 22.6937 22.9517 22.431 23.1466C22.1683 23.3415 21.9798 23.6158 21.8943 23.9257C21.8089 24.2356 21.8309 24.5649 21.9569 24.86C22.0828 25.1551 22.3052 25.4006 22.5864 25.5546L22.5318 25.6455C21.2545 26.4001 19.8524 26.9295 18.3909 27.2091L18.3364 27.1545C18.0225 27.0252 17.6752 27.0103 17.3501 27.1121C17.025 27.2139 16.7424 27.4269 16.5545 27.7147C16.3666 28.0024 16.2855 28.3464 16.3248 28.6884C16.364 29.0305 16.5213 29.3474 16.7682 29.5755V29.6182" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <h4 className="font-medium">Cozy Atmosphere</h4>
                    <p className="text-xs text-muted-foreground">Perfect for work & gatherings</p>
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
