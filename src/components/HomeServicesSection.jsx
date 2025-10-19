import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Maintenance',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      content: 'We\'re working on comprehensive solar maintenance solutions.',
      link: '/maintenance'
    },
    {
      id: 2,
      title: 'Investments',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      content: 'We\'re working on sustainable investment opportunities.',
      link: '/investments'
    },
    {
      id: 3,
      title: 'GCH Store',
      image: '/solar_service.jpg',
      content: 'We\'re working on our sustainable technology store.',
      link: '/store'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2 w-full max-w-sm ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.content}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Stay tuned for updates!
                </p>

                <Link
                  to={service.link}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
