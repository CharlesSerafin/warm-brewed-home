
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/150?img=33",
    content: "This café is my second home. The staff remembers my order, the coffee is always perfect, and the atmosphere is so inviting. I come here to work at least three times a week!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Local Business Owner",
    image: "https://i.pravatar.cc/150?img=12",
    content: "I've tried coffee shops all over the city, and Café Bistro consistently serves the best espresso I've ever had. Their croissants are also worth waking up early for!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Writer",
    image: "https://i.pravatar.cc/150?img=5",
    content: "I've written half my novel sitting at my favorite corner table here. The ambient music, delicious coffee, and friendly service create the perfect creative environment.",
    rating: 4
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Food Blogger",
    image: "https://i.pravatar.cc/150?img=65",
    content: "As someone who reviews cafés professionally, I can say with confidence that this place gets everything right - from the ethically sourced beans to the skillfully prepared drinks and delightful pastries.",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

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
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 8000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-28 bg-secondary/30 reveal">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium">TESTIMONIALS</span>
          <h2 className="section-title mt-2">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            We're proud to have created a welcoming space where our guests love to return. 
            Here's what some of our regular customers have to say.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-xl shadow-sm p-8 md:p-10">
                    <div className="flex items-center mb-4">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <p className="text-lg italic mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-background/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-background transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-background/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-background transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
