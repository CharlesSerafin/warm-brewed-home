
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedMenu from '../components/FeaturedMenu';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="w-16 h-16 relative">
          <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 rounded-full bg-cafe-700 flex items-center justify-center">
              <span className="text-white font-bold text-xs">CU</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedMenu />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  );
};

export default Index;
