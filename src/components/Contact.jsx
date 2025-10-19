import React, { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "Solar Installation",
  "Water & Waste-water Management",
];

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

        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h2>
        </div>

        {}

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
              {}
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