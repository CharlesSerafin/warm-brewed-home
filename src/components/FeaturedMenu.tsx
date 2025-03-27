
import { useState, useEffect, useRef } from 'react';

const menuItems = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Our house specialty with a blend of espresso, steamed milk, and a hint of vanilla",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80",
    category: "drinks"
  },
  {
    id: 2,
    name: "Almond Croissant",
    description: "Buttery, flaky pastry filled with almond cream and topped with sliced almonds",
    price: "$3.95",
    image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "pastries"
  },
  {
    id: 3,
    name: "Avocado Toast",
    description: "Sourdough bread topped with avocado, cherry tomatoes, feta cheese, and microgreens",
    price: "$6.95",
    image: "https://images.unsplash.com/photo-1603046891744-1f76eb10aec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "food"
  },
  {
    id: 4,
    name: "Iced Cold Brew",
    description: "Smooth, rich coffee brewed for 12 hours, served over ice",
    price: "$4.25",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "drinks"
  },
  {
    id: 5,
    name: "Chocolate Cake",
    description: "Rich, moist chocolate cake with a decadent ganache frosting",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
    category: "pastries"
  },
  {
    id: 6,
    name: "Breakfast Sandwich",
    description: "Scrambled eggs, aged cheddar, spinach, and bacon on a toasted brioche bun",
    price: "$7.95",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "food"
  }
];

const categories = [
  { id: "all", label: "All Items" },
  { id: "drinks", label: "Drinks" },
  { id: "pastries", label: "Pastries" },
  { id: "food", label: "Food" }
];

const FeaturedMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

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
    <section id="menu" ref={sectionRef} className="py-20 md:py-28">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-medium reveal">OUR MENU</span>
          <h2 className="section-title mt-2 reveal">Featured Items</h2>
          <p className="text-muted-foreground mb-12 reveal">
            Explore our most popular coffee selections, pastries, and light meals.
            Everything is made with premium ingredients and lots of love.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-12 reveal">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                  {item.category === "drinks" ? "Drink" : item.category === "pastries" ? "Pastry" : "Food"}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-primary font-medium">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <button className="w-full py-2 border border-primary/20 rounded-md text-primary hover:bg-primary/5 transition-colors text-sm">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a href="#" className="btn-secondary">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
