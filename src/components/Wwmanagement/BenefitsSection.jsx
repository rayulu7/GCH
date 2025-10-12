import React from "react";

const benefits = [
  "Purifies your Wastewater by removing contaminants & harmful substances.",
  "As the purified wastewater is released into water bodies, the aquatic ecosystem will be preserved.",
  "It even prevents Soil, underground water table contamination.",
  "The treated sewage wastewater can be reused for several purposes like cleaning, flushing, etc. in domestic and industrial spaces.",
  "Treating the industrial wastewater before releasing into the atmosphere will reduce the Greenhouse Gas Emissions also."
];

const BenefitsSection = () => {
  return (
    <section className="py-0 bg-white">
      {/* Outer Container */}
      <div
        className="
          max-w-[1200px] mx-auto
          px-[15px] pt-[60px]   /* top padding only */
          bg-[#f7f7f7]
          rounded-[15px]
          shadow-[0_8px_30px_rgba(0,0,0,0.1)]
        "
        style={{ height: "699px" }}
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-[20px]">
          Benefits of Effluent/Sewage Treatment Plant
        </h2>
        <p className="text-base text-center text-gray-600 mb-8">
          Benefits of Effluent/Sewage Treatment Plants are many, they are
        </p>

        {/* Benefits List */}
        <ul>
          {benefits.map((text, i) => (
            <li key={i} className="flex justify-center">
              <div
                className="
                  flex items-center
                  w-[1128px]
                  bg-white border border-gray-300
                  rounded-lg shadow-sm
                  px-5 py-5
                  my-[20px]      /* ✅ margin top + bottom for spacing */
                  hover:shadow-md transition
                "
              >
                {/* Icon */}
                <span className="mr-4 text-blue-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 10h7l-3 3 3 3h-7" />
                    <path d="M3 12h10" />
                    <path d="M3 12a4 4 0 0 1 4-4h3" />
                  </svg>
                </span>

                {/* Text */}
                <p className="text-[16px] leading-[24px] text-gray-800 m-0">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
