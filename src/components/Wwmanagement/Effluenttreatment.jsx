import React from "react";

const Effluenttreatment = () => {
  return (
    <section className="w-full bg-[#EBF3ED]">
      {/* Fixed-size outer card */}
      <div
        className="mx-auto rounded-[15px] shadow-xl px-[15px] pb-[60px]"
        style={{ width: 1200, backgroundColor: "#EBF3ED" }}
      >
        {/* Heading */}
        <h4 className="text-[32px] font-bold text-[#333333] text-center mb-[55px] pt-6">
          Expert Sewage Treatment Plant Services in India
        </h4>

        {/* Content Row: 570 + 30 + 570 = 1170 inside 1200 - 15 - 15 */}
        <div className="grid grid-cols-1 md:[grid-template-columns:570px_570px] md:gap-x-[30px] gap-y-10 justify-center items-start">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/E2.jpeg"
              alt="Expert Effluent Treatment Plant Services in India"
              className="block rounded shadow-md shrink-0"
              style={{
                width: 570, // hard pixel width
                height: 400.6, // hard pixel height
                objectFit: "cover", // use 'contain' if you prefer no cropping
                maxWidth: "none", // defeat global responsive img rules
                maxHeight: "none", // defeat global responsive img rules
              }}
            />
          </div>

          {/* Right: Description */}
          <div className="w-[570px] space-y-6">
            <p className="text-[18px] leading-8 text-justify text-[#333333]">
              Effluent treatment plants (ETP) are playing a crucial role in
              protecting the environment by purifying the industrial wastewater.
              Generally the Industrial wastewater consists of a higher
              concentration of hazardous chemicals, heavy metals and a few other
              pollutants which are harmful if they are released directly into
              the environment without treating or purifying.
            </p>
            <p className="text-[18px] leading-8 text-justify text-[#333333]">
              Our Expert Effluent Treatment Plant team will verify your
              Industrial wastewater, design a proper Effluent Treatment Plant
              setup and install accordingly. Furthermore, provides Effluent
              Treatment Plant maintenance services, repairs and supply plant
              components if necessary. If you are looking forward to install
              Effluent treatment plant in India, then we are always at your
              service. Contact today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effluenttreatment;
