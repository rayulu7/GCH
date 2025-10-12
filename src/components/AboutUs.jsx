import React from 'react';
import { Users, Target, Eye, Award, Shield, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const leadershipTeam = [
    {
      id: 1,
      name: 'Civil Servant Leader',
      position: 'Founder & CEO',
      experience: '23+ Years Experience',
      specialization: 'Power Management, Waste Management',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    }
  ];

  const certifications = [
    { id: 1, name: 'ISO 9001:2015', description: 'Quality Management System' },
    { id: 2, name: 'ISO 14001:2015', description: 'Environmental Management' },
    { id: 3, name: 'OHSAS 18001', description: 'Occupational Health & Safety' },
    { id: 4, name: 'Solar Installation Certified', description: 'Renewable Energy Solutions' }
  ];

  const values = [
    { id: 1, icon: <Target className="w-8 h-8" />, title: 'Mission', description: 'To provide comprehensive Net-Zero solutions that help organizations and individuals reduce their carbon footprint while achieving economic benefits.' },
    { id: 2, icon: <Eye className="w-8 h-8" />, title: 'Vision', description: 'To be India\'s leading provider of sustainable energy and waste management solutions, contributing to a greener and more sustainable future.' },
    { id: 3, icon: <Shield className="w-8 h-8" />, title: 'Values', description: 'Integrity, Innovation, Sustainability, and Excellence in delivering environmental solutions that make a real difference.' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner Image */}
      <section className="relative">
        {/* Banner Image */}
        <div className="relative w-full" style={{ height: '469px' }}>
          <img 
            src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1440&h=469&dpr=1"
            alt="About Green Carbon Hub"
            className="w-full h-full object-cover"
            style={{ width: '1440px', height: '469px' }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h1 className="text-5xl font-bold mb-6">About Green Carbon Hub</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Leading the transformation towards Net-Zero solutions with 23+ years of expertise 
                in power management, solid waste management, and liquid waste management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Feature Cards Section */}
      <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Certified Engineers Card */}
            <div className="flex items-center p-6 bg-white shadow-lg rounded-lg" style={{ width: '409.99px', height: '149.6px' }}>
              <div className="flex-shrink-0 mr-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Certified Engineers</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our certified engineers are dedicated to delivering high-quality solar solutions that meet your energy needs.
                </p>
              </div>
            </div>

            {/* 24/7 Customer Support Card */}
            <div className="flex items-center p-6 bg-white shadow-lg rounded-lg" style={{ width: '409.99px', height: '149.6px' }}>
              <div className="flex-shrink-0 mr-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">24/7 Customer Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our customer support team is available around the clock to assist with any questions or concerns you may have.
                </p>
              </div>
            </div>

            {/* Affordable Solar Solutions Card */}
            <div className="flex items-center p-6 bg-white shadow-lg rounded-lg" style={{ width: '409.99px', height: '149.6px' }}>
              <div className="flex-shrink-0 mr-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Affordable Solar Solutions</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We offer cost-effective solar energy systems to help you reduce your energy bills and contribute to a greener environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Green Carbon Hub Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative" style={{ paddingRight: '160px' }}>
                <img 
                  src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=425&h=588&dpr=1"
                  alt="Solar Engineer"
                  className="rounded-lg shadow-lg"
                  style={{ width: '425px', height: '587.76px' }}
                />
                
                {/* Success Badge with Rotation Animation - Half on Image */}
                <div className="absolute top-6 right-0 tp-about-icon-space p-relative d-inline-block" style={{ width: '130px', height: '131px', right: '95px' }}>
                  {/* Rotating Text Badge */}
                  <img 
                    src="/about-text.png" 
                    alt="text"
                    className="tp-rotate-infinite w-full h-full object-contain"
                  />
                  
                  {/* Centered Logo */}
                  <img 
                    src="/about-text-shape.png" 
                    alt="thumb"
                    className="position-middle object-contain"
                    style={{ width: '34px', height: '36px' }}
                  />
                </div>
                
                {/* Small Embedded Image */}
                <div className="absolute bottom-6 right-6 rounded-lg overflow-hidden shadow-lg w-80 h-80">
                  <img 
                    src="https://images.pexels.com/photos/9875365/pexels-photo-9875365.jpeg?auto=compress&cs=tinysrgb&w=310&h=330&dpr=1"
                    alt="Solar Installation Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-3">
                  About Green Carbon Hub
                </h3>
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  Transforming the World with Sustainable Solar Solutions
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                At Green Carbon Hub, we are committed to creating a sustainable future through innovative 
                renewable energy solutions. Our mission is to harness the power of solar energy to create 
                a cleaner, greener planet for generations to come.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Leading the transition to solar energy solutions</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Making renewable energy accessible for all</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Committed to innovation and sustainable solutions</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GreenCarbonHub Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose GreenCarbonHub?</h2>
            <p className="text-xl text-gray-600">Accelerate your Net Zero journey with GreenCarbonHub!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Standardized Service Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer" style={{ width: '277.5px', height: '350px' }}>
              <div className="p-5" style={{ paddingTop: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-600 hover:scale-110">
                    <svg className="w-8 h-8 text-green-600 transition-colors duration-300 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Standardized, High-Quality Service</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Consistent, standardized scopes of work ensured by rigorously vetted partners for high-quality and sustainable impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Affordability Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer" style={{ width: '277.5px', height: '350px' }}>
              <div className="p-5" style={{ paddingTop: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-600 hover:scale-110">
                    <svg className="w-8 h-8 text-green-600 transition-colors duration-300 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Industry-Leading Affordability</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    GCH offers competitive pricing for Net-Zero services, ensuring cost-effective sustainable change for all.
                  </p>
                </div>
              </div>
            </div>

            {/* All-in-One Solutions Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer" style={{ width: '277.5px', height: '350px' }}>
              <div className="p-5" style={{ paddingTop: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-600 hover:scale-110">
                    <svg className="w-8 h-8 text-green-600 transition-colors duration-300 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">All-in-One Net-Zero Solutions Hub</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    From solar installations to waste management, GCH covers all your Net-Zero needs under one roof.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Assurance Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer" style={{ width: '277.5px', height: '350px' }}>
              <div className="p-5" style={{ paddingTop: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-600 hover:scale-110">
                    <svg className="w-8 h-8 text-green-600 transition-colors duration-300 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">100% Quality Assurance</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Expert teams and a satisfaction guarantee ensure effective and seamless transitions to Net Zero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-green-600 font-semibold text-lg mb-2">OUR 4 WORKING STEPS</h3>
            <h2 className="text-4xl font-bold text-gray-800">Our Proven Process</h2>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 01: Initial Consultation */}
              <div className="text-center relative">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-green-100 relative">
                    <img 
                      src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
                      alt="Initial Consultation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-3 -left-3 w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-gray-800">01</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Initial Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We start by understanding your energy needs and evaluating your location to determine the best solar solution for you.
                </p>
                
                {/* Arrow to Step 02 */}
                <div className="hidden lg:block absolute top-16 left-full transform translate-x-4">
                  <svg className="w-8 h-8 text-gray-300 transition-colors duration-300 hover:text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              {/* Step 02: System Design */}
              <div className="text-center relative">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-green-100 relative">
                    <img 
                      src="https://images.pexels.com/photos/9875365/pexels-photo-9875365.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
                      alt="System Design"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-3 -left-3 w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-gray-800">02</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">System Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team of experts designs a customized solar energy system that maximizes efficiency and savings based on your needs.
                </p>
                
                {/* Arrow to Step 03 */}
                <div className="hidden lg:block absolute top-16 left-full transform translate-x-4">
                  <svg className="w-8 h-8 text-gray-300 transition-colors duration-300 hover:text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              {/* Step 03: Install & Activate */}
              <div className="text-center relative">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-green-100 relative">
                    <img 
                      src="https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
                      alt="Install & Activate"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-3 -left-3 w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-gray-800">03</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Install & Activate</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our professional team installs the solar panels and system components efficiently, ensuring everything is up and running smoothly.
                </p>
                
                {/* Arrow to Step 04 */}
                <div className="hidden lg:block absolute top-16 left-full transform translate-x-4">
                  <svg className="w-8 h-8 text-gray-300 transition-colors duration-300 hover:text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              {/* Step 04: System Monitoring */}
              <div className="text-center relative">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-green-100 relative">
                    <img 
                      src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
                      alt="System Monitoring"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-3 -left-3 w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-gray-800">04</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">System Monitoring</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide ongoing monitoring to ensure optimal system performance, identifying any issues before they arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  GreenCarbonHub is promoted by a Civil Servant with 23 years of experience in administration, 
                  specializing in power management, solid waste management, and liquid waste management.
                </p>
                <p>
                  With a team of experienced subject experts, GreenCarbonHub offers complete Net-Zero solutions 
                  under one roof. We combine administrative expertise with technical excellence to deliver 
                  sustainable solutions that make a real impact.
                </p>
                <p>
                  Our commitment to environmental sustainability and our deep understanding of both public 
                  sector challenges and private sector efficiency makes us uniquely positioned to help 
                  organizations achieve their sustainability goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="Green Carbon Hub Team"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">Building a sustainable future through innovation and expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.id} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-green-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals driving sustainable solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-gray-500">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600">Quality and compliance at the highest level</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-green-50 border border-green-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-green-600 mb-4 flex justify-center">
                  <Award className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Green Carbon Hub?</h2>
            <p className="text-xl text-green-100">The advantages that set us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">23+ Years Experience</h3>
              <p className="text-green-100">Decades of expertise in administration and environmental management</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Complete Solutions</h3>
              <p className="text-green-100">End-to-end Net-Zero solutions under one roof</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Excellence</h3>
              <p className="text-green-100">ISO certified processes and quality standards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Partner</h3>
              <p className="text-green-100">Reliable solutions backed by civil service expertise</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Animation Styles */}
      <style>{`
        @keyframes rotateInfinite {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .tp-rotate-infinite {
          animation: rotateInfinite 10s linear infinite;
        }
        
        .tp-about-icon-space {
          border-radius: 50%;
          padding: 10px;
          background-color: white;
          box-shadow: 0 20px 30px 0 rgba(3, 4, 28, 0.1);
        }
        
        .position-middle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};
0
export default AboutUs;