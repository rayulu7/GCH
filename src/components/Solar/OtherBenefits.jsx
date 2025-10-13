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

export default function OtherBenefits({ type = "residential" }) {
  const [isVisible, setIsVisible] = useState(false);
  const benefits = type === "industrial" ? industrialBenefits : residentialBenefits;
  const [activeBenefit, setActiveBenefit] = useState(benefits[0]);

  useEffect(() => {
    setIsVisible(true);
    setActiveBenefit(benefits[0]);
  }, [type]);

  return (
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
  );
}
