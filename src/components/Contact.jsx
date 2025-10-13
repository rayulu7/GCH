import React, { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "Solar Installation",
  "Water & Waste-water Management",
];

// const cities = [
//   "Hyderabad",
//   "Bangalore",
//   "Chennai",
//   "Delhi",
//   "Mumbai"
// ];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <section id="contact-us" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h2>
        </div>

        {/* Left Column - Contact Information */}
        {/* <div className="space-y-8 animate-fade-in-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Contact Us for Affordable Solutions
            </h3>
            <p className="text-gray-600 text-lg">
              We're here to help you. Reach out for inquiries, collaborations, or support and we'll respond promptly.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600">+91-9182445715 / +91-9182445300</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Address</p>
                <p className="text-gray-600">Mansoorabad, Telangana, India</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">info@greencarbonhub.com</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact Form - Centered */}
        <div className="max-w-xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
              />
              {/* <select
                name="city"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                value={form.city}
                onChange={handleChange}
              >
                <option value="">Choose City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select> */}
              <select
                name="service"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                value={form.service}
                onChange={handleChange}
              >
                <option value="">Choose Service</option>
                {services.map((svc) => (
                  <option key={svc} value={svc}>{svc}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors animate-fade-up"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}