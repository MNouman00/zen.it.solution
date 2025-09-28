import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from "react";
import clod from "../clod.png";
import brush from "../brush.png";
import mobile from "../mobile.png";
import code from "../code.png";
import laptop from "../laptop.png";
import pancil from "../pancil.png";
import print from "../print.png";
import logo from "../logo.png";
import location from "../location.png";
import email from "../email.png";
import clock from "../clock.png";
import hambur from '../hambur.png'
import "./Services.css";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const result = await emailjs.send(
        "service_id74el4",
        "YOUR_TEMPLATE_ID",
        formData,
        "OEwTebJxZPaj18xsj"
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="m-0 p-0 box-border font-mullish">
      {/* Navigation Bar */}
      <div className="shadow-md fixed flex items-center justify-between p-4 md:p-8 top-0 left-0 w-full z-10 ">
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between gap-2">
            <span className="hover:text-blue-500 transition duration-300 text-2xl md:text-4xl font-bold text-blue-900">
              ZEN.IT.
            </span>
            <span className="hover:text-blue-500 transition duration-300 text-xl md:text-2xl font-bold text-gray-700 hidden sm:block">
              SOLUTION
            </span>
            <img src={logo} alt="Logo" className="h-8 w-8 md:h-10 md:w-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between gap-8">
            <ul className="flex items-center justify-between gap-8 text-lg font-medium">
              <li>
                <a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="About">
                  About
                </a>
              </li>
              <li>
                <a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="Services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="#contact4">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="md:hidden z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img className="h-6 w-6" src={hambur} alt="Menu button" />
          </button>

          {/* Mobile Navigation Menu */}
          <div className={`fixed top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-center justify-center transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <button 
              className="absolute top-6 right-6 text-2xl"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
            <ul className="flex flex-col items-center gap-8 text-xl font-medium">
              <li>
                <a className="text-blue-500 p-2 rounded-2xl hover:text-blue-300 transition duration-300" href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a className="text-blue-500 p-2 rounded-2xl hover:text-blue-300 transition duration-300" href="About" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a className="text-blue-500 p-2 rounded-2xl hover:text-blue-300 transition duration-300" href="Services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a className="text-blue-500 p-2 rounded-2xl hover:text-blue-300 transition duration-300" href="portfolio" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-blue-500 p-2 rounded-2xl hover:text-blue-300 transition duration-300" href="#contact4" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 to-secondary">
        <div id="mov" className="mx-auto px-4 text-center max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Our Professional Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-10 px-4">
            We provide cutting-edge digital solutions to help your business thrive in the modern world
          </p>
          <a
            href="#contact4"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg transition inline-block"
          >
            Get in Touch →
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 md:mb-4">
              What We Offer
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
              Comprehensive digital services to elevate your brand and online presence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Service Cards - Updated with responsive padding */}
            {[
              { icon: code, title: "Web Development", description: "Custom websites and web applications built with modern technologies..." },
              { icon: mobile, title: "App Development", description: "Unique and memorable logos that represent your brand identity..." },
              { icon: clod, title: "Cloud Solutions", description: "Visually appealing designs for marketing materials, social media..." },
              { icon: brush, title: "Custom Logo Design", description: "Professional designs for business cards, brochures, flyers..." },
              { icon: laptop, title: "UI/UX Designing", description: "User-centered interface designs that provide intuitive experiences..." },
              { icon: code, title: "SEO Optimization", description: "Native and cross-platform mobile apps for iOS and Android..." }
            ].map((service, index) => (
              <div key={index} className="service-card bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl">
                <div className="p-4 md:p-6 flex items-center">
                  <div className="service-icon w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl mr-4 md:mr-5">
                    <img className="w-6 h-6 md:w-8 md:h-8" src={service.icon} alt={service.title} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-600 border-l-2 pl-3">
                    {service.title}
                  </h3>
                </div>
                <div className="px-4 pb-4 md:px-6 md:pb-6">
                  <p className="mb-3 md:mb-4 text-sm md:text-base">
                    {service.description}
                  </p>
                  <ul className="space-y-1 md:space-y-2">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-center text-blue-400 text-sm md:text-base">
                        <span className="mr-2">✓</span> Feature {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact3" className="py-12 md:py-16 bg-blue-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Get In Touch
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
              Reach out to discuss your project or request a consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
              <p className="mb-6 md:mb-8">
                Fill out the form or contact us through other channels listed below:
              </p>

              <div className="space-y-4 md:space-y-6">
                {[
                  { icon: location, title: "Address", text: "Islamabad, Punjab, Pakistan" },
                  { icon: mobile, title: "Phone", text: "(+92) 322 7757470" },
                  { icon: email, title: "Email", text: "zen.it.solution0@mail.com" },
                  { icon: clock, title: "Working Hours", text: "Monday-Friday: 9AM - 5PM" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 md:mr-4">
                      <img className="h-8 w-8 md:h-12 md:w-10" src={contact.icon} alt={contact.title} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base md:text-lg">{contact.title}</h4>
                      <p className="text-sm md:text-base">{contact.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-10">
                <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">Follow Us</h4>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="font-bold text-blue-400 hover:text-blue-600 text-sm md:text-base transition"
                    >
                      {social} →
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact1">
              <form onSubmit={handleSubmit} className="bg-white text-blue-500 rounded-xl p-6 md:p-8 shadow-lg">
                <div className="mb-4 md:mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium text-sm md:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
                  />
                </div>
                
                <div className="mb-4 md:mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium text-sm md:text-base">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
                  />
                </div>
                
                <div className="mb-4 md:mb-6">
                  <label htmlFor="phone" className="block mb-2 font-medium text-sm md:text-base">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No..."
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
                  />
                </div>

                <div className="mb-4 md:mb-6">
                  <label htmlFor="projectType" className="block mb-2 font-medium text-sm md:text-base">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
                  >
                    <option value="">Select Project Type</option>
                    <option value="website">Website Development</option>
                    <option value="ecommerce">App Development</option>
                    <option value="webapp">Cloud Solutions</option>
                    <option value="redesign">Custom Logo Design</option>
                    <option value="maintenance">Graphic Design</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium text-sm md:text-base">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Project Details"
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition disabled:bg-gray-400 text-base md:text-lg"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>

                {submitStatus === "success" && (
                  <div className="status-message success mt-4 p-3 bg-green-100 text-green-700 rounded text-sm md:text-base">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="status-message error mt-4 p-3 bg-red-100 text-red-700 rounded text-sm md:text-base">
                    Sorry, there was an error sending your message.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-blue-200 text-blue-900 py-12 md:py-20">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12">
            {/* Company Info */}
            <div className="lg:w-1/4">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                ZEN.IT.<span className="text-blue-500">SOLUTION</span>
              </h2>
              <p className="mb-4 text-sm md:text-base">
                Creating innovative solutions for the digital world. Empowering businesses through technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={link === "Home" ? "/" : link} className="text-blue-500 hover:text-blue-700 transition text-sm md:text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-3 md:mb-4">Services</h3>
              <ul className="space-y-2">
                {["Web Development", "App Development", "Cloud Solutions", "Custom Logo Design", "Graphic Design", "SEO Optimization"].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-blue-500 hover:text-blue-700 transition text-sm md:text-base">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-500 text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                <a href="#contact1" className="text-blue-600 hover:text-blue-800">Join Us →</a>
              </h3>
              <p className="text-blue-600 text-sm md:text-base">Get the latest updates and offers</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-500 text-center">
            <p className="text-gray-800 text-sm md:text-base mb-2">© 2023 Zen IT Solution. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy) => (
                <a key={policy} href="#" className="text-gray-800 hover:text-blue-700 text-xs md:text-sm transition">
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;