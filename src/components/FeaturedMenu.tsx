
import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80",
    category: "fullstack",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    name: "Portfolio Dashboard",
    description: "A responsive dashboard for a financial portfolio tracker. Visualizes investment data with interactive charts and real-time updates using WebSockets.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "frontend",
    tech: ["React", "TypeScript", "D3.js", "WebSockets", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    name: "Task Management API",
    description: "A RESTful API for task management with user authentication, task CRUD operations, priority labeling, and deadline reminders. Includes comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "backend",
    tech: ["Node.js", "Express", "PostgreSQL", "Jest", "Swagger"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    name: "Weather Application",
    description: "A sleek weather app that provides current conditions and 5-day forecasts. Features geolocation, favorites, and detailed weather metrics with beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "frontend",
    tech: ["React", "Redux", "OpenWeather API", "Geolocation API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    name: "Content Management System",
    description: "A custom CMS built for a publishing company. Features include rich text editing, media management, content scheduling, and role-based access control.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
    category: "fullstack",
    tech: ["Next.js", "TypeScript", "GraphQL", "MongoDB", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    name: "Fitness Tracker Mobile App",
    description: "A React Native mobile app for fitness tracking. Includes workout planning, progress tracking, social sharing, and integration with health platforms.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "mobile",
    tech: ["React Native", "Redux", "Firebase", "HealthKit", "Google Fit"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "mobile", label: "Mobile" }
];

const FeaturedMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    <section id="projects" ref={sectionRef} className="py-20 md:py-28">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-medium reveal">MY WORK</span>
          <h2 className="section-title mt-2 reveal">Recent Projects</h2>
          <p className="text-muted-foreground mb-12 reveal">
            Here's a selection of my recent work, showcasing my skills in web development,
            design, and problem-solving across different domains.
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

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                  {project.category === "frontend" ? "Frontend" : 
                   project.category === "backend" ? "Backend" : 
                   project.category === "fullstack" ? "Full Stack" : "Mobile"}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center justify-center gap-1 flex-1 py-2 border border-primary/20 rounded-md text-primary hover:bg-primary/5 transition-colors text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center justify-center gap-1 flex-1 py-2 border border-primary/20 rounded-md text-primary hover:bg-primary/5 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a href="#" className="btn-secondary">
            See All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
