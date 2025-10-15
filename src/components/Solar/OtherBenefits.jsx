import React, { useEffect, useState } from "react";
import { Sun, DollarSign, Wrench, Heart, Clock } from "lucide-react";

const residentialBenefits = [
  {
    id: 1,
    name: "Renewable & Clean Energy",
    icon: <Sun className="w-16 h-16 text-yellow-500" />,
    title: "Renewable & Clean Source of Energy",
    description:
      "As Solar Energy is a clean and renewable source, you are helping the environment by reducing carbon footprint and protecting the Earth."
  },
  {
    id: 2,
    name: "Reduces Electricity Cost",
    icon: <DollarSign className="w-16 h-16 text-blue-500" />,
    title: "Solar Energy Reduces Electricity Cost",
    description:
      "Rooftop Solar Panels can generate a good amount of electricity to power your home, which helps you to save energy bills each year."
  },
  {
    id: 3,
    name: "Low Maintenance",
    icon: <Wrench className="w-16 h-16 text-green-500" />,
    title: "Low Maintenance",
    description:
      "As the solar panels are stable, they do not require any high maintenance services, which saves time and money."
  },
  {
    id: 4,
    name: "Adds Value to Life",
    icon: <Heart className="w-16 h-16 text-red-500" />,
    title: "Adds Value to Your Life",
    description:
      "Choosing the Rooftop Solar Energy adds value to your home and makes it more attractive to potential buyers."
  },
  {
    id: 5,
    name: "High Life Span",
    icon: <Clock className="w-16 h-16 text-purple-500" />,
    title: "High Life Span",
    description:
      "Solar panels have a lifespan of 25+ years with minimal degradation, providing decades of reliable clean energy generation for your home."
  }
];

const industrialBenefits = [
  {
    id: 1,
    name: "Renewable & Clean Source Of Energy",
    icon: <Sun className="w-16 h-16 text-yellow-500" />,
    title: "Renewable & Clean Source Of Energy",
    description:
      "Industrial solar energy is a clean and renewable source that helps businesses reduce their carbon footprint and contribute to environmental sustainability."
  },
  {
    id: 2,
    name: "Solar Energy Reduces Electricity Cost",
    icon: <DollarSign className="w-16 h-16 text-blue-500" />,
    title: "Solar Energy Reduces Electricity Cost",
    description:
      "Industrial rooftop solar panels can generate significant electricity to power manufacturing facilities, reducing operational costs and energy bills."
  },
  {
    id: 3,
    name: "Maintenance Of Industrial Rooftop Solar Panels Is Low",
    icon: <Wrench className="w-16 h-16 text-green-500" />,
    title: "Maintenance Of Industrial Rooftop Solar Panels Is Low",
    description:
      "As the solar panels are stable, they do not require any high maintenance services, which saves time and money."
  },
  {
    id: 4,
    name: "Eco-Friendly And Reduces CO2 Emissions",
    icon: <Heart className="w-16 h-16 text-red-500" />,
    title: "Eco-Friendly And Reduces CO2 Emissions",
    description:
      "Industrial solar installations help businesses reduce CO2 emissions and demonstrate environmental responsibility to stakeholders and customers."
  }
];

// Residential rooftop solutions data
const residentialSolutions = [
  {
    id: 1,
    name: "Standard Residential",
    image: "/standard.jpeg",
    description: "Perfect for homes with standard roof structure - Mounting Dimensions: Back Leg 3 Feet and Front Leg 2 Feet"
  },
  {
    id: 2,
    name: "Elevated Residential",
    image: "/Elevated.jpeg",
    description: "Ideal for homes needing elevated panels - Mounting Dimensions: Back Leg 7 Feet and Front Leg 6 Feet"
  },
  {
    id: 3,
    name: "High-Rise Residential",
    image: "/Highrise.jpeg",
    description: "Best for multi-story homes - Mounting Dimensions: Back Leg 10 Feet and Front Leg 9 Feet"
  },
  {
    id: 4,
    name: "Residential Car Port",
    image: "/Carport.jpeg",
    description: "Solar car port structure for home parking areas"
  },
  {
    id: 5,
    name: "Shed Mounted Residential",
    image: "/shed.webp",
    description: "Shed mounted solar panels for residential outbuildings"
  }
];

// Rooftop Solutions Component
const ResidentialRooftopSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSolution, setActiveSolution] = useState(residentialSolutions[0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`w-full bg-gray-50 pt-12 sm:pt-16 md:pt-20 lg:pt-[80px] pb-12 sm:pb-16 md:pb-20 lg:pb-[70px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold text-[#111827]">
            Our Residential Rooftop Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Choose the perfect solar installation solution for your home with our range of residential rooftop mounting systems
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
          {/* Left Section - Solution Buttons */}
          <div className="w-full lg:w-[400px] order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-[15px]">
              {residentialSolutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolution(solution)}
                  className={`w-full pt-3 pb-4 sm:pt-4 sm:pb-5 px-3 sm:px-4 text-left text-sm sm:text-base md:text-lg lg:text-[18px] font-bold transition-all duration-200 shadow-[0px_2px_10px_0px_rgba(3,4,28,0.06)] ${
                    activeSolution.id === solution.id
                      ? 'bg-[#3A954F] text-white'
                      : 'bg-white text-[#828282] hover:bg-gray-50'
                  }`}
                  style={{ borderRadius: '10px' }}
                >
                  {solution.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-[800px] relative mb-6 lg:mb-[30px] order-1 lg:order-2">
            <div className="relative">
              <img
                src={activeSolution.image}
                alt={activeSolution.name}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute bottom-0 left-0 w-full h-full rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, rgba(31, 34, 32, 0) 30.39%, rgba(31, 34, 32, 0.8) 73.54%)'
                }}
              ></div>
            </div>
            
            {/* Image Overlay */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-3 sm:left-4 text-white p-3 sm:p-4 rounded-lg">
              <h3 className="text-base sm:text-lg font-bold mb-1">{activeSolution.name}</h3>
              <p className="text-xs sm:text-sm leading-relaxed">{activeSolution.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function OtherBenefits({ type = "residential" }) {
  const [isVisible, setIsVisible] = useState(false);
  const benefits = type === "industrial" ? industrialBenefits : residentialBenefits;
  const [activeBenefit, setActiveBenefit] = useState(benefits[0]);

  useEffect(() => {
    setIsVisible(true);
    setActiveBenefit(benefits[0]);
  }, [type]);

  return (
    <>
      {/* Rooftop Solutions Section - Only for Residential */}
      {type === "residential" && <ResidentialRooftopSolutions />}
      
      {/* Other Benefits Section */}
      <section
        className={`w-full bg-white py-12 md:py-16 lg:py-20 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ display: 'block', width: '100%' }}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16" style={{ display: 'block', width: '100%' }}>
          {/* Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827]">
              Other Benefits
            </h2>
          </div>

          {/* Force single column - NO FLEX, NO GRID */}
          <div style={{ display: 'block', width: '100%' }}>
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="w-full mb-6 bg-white rounded-lg shadow-lg p-6"
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  marginBottom: '24px',
                  clear: 'both'
                }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {React.cloneElement(benefit.icon, {
                      className: "w-12 h-12 md:w-16 md:h-16"
                    })}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-sm md:text-base text-[#333333] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
