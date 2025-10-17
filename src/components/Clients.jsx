import React, { useState, useEffect, useRef } from 'react';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const clients = [
    {
      id: 1,
      name: "General Electric",
      image: "/ge.png",
      description: "Leading renewable energy solutions provider"
    },
    {
      id: 2,
      name: "AP Food Processing Society", 
      image: "/ap.png",
      description: "Sustainable technology innovation partner"
    }
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`
          text-center mb-16 transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations in sustainable energy solutions
          </p>
        </div>

        {/* Client Display - Responsive */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-3 lg:gap-4">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`
                bg-white rounded-xl p-4 shadow-lg transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
