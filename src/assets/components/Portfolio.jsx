import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from "react";
import logo from "../logo.png";
import portpc from "../portpc.jpg";
import ht5 from "../ht5.png";
import cos from "../cos.png";
import gitalt from "../gitalt.png";
import sop from "../sop.png";
import don from "../don.png";
import star from "../star.png";
import mobile from "../mobile.png";
import location from "../location.png";
import email from "../email.png";
import clock from "../clock.png";
import hambur from '../hambur.png'
import "././portfolio.css";

const Portfolio = () => {
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        "YOUR_TEMPLATE_ID", // template ID
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

  return (
    <div className="m-0 p-0 box-border font-mullish">
      {/* Navigation Bar */}
      <div className=" shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-4xl font-bold text-blue-900 hover:text-blue-500 transition duration-300">
              ZEN.IT.
            </span>
            <span className="hidden sm:block text-xl md:text-2xl font-bold text-gray-700 hover:text-blue-500 transition duration-300">
              SOLUTION
            </span>
            <img src={logo} alt="Logo" className="h-8 w-8 md:h-10 md:w-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-lg font-medium">
              <li><a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="/">Home</a></li>
              <li><a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="About">About</a></li>
              <li><a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="Services">Services</a></li>
              <li><a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="portfolio">Portfolio</a></li>
              <li><a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="#contact5">Contact</a></li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button 
            id="menu-button" 
            type="button" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            <img className="h-6 w-6" src={hambur} alt="menu button" />
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden bg-white transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="flex flex-col items-center gap-4 py-4 text-lg font-medium">
            <li><a className="text-blue-500 p-2 hover:text-blue-300 transition duration-300 block" href="/">Home</a></li>
            <li><a className="text-blue-500 p-2 hover:text-blue-300 transition duration-300 block" href="About">About</a></li>
            <li><a className="text-blue-500 p-2 hover:text-blue-300 transition duration-300 block" href="Services">Services</a></li>
            <li><a className="text-blue-500 p-2 hover:text-blue-300 transition duration-300 block" href="portfolio">Portfolio</a></li>
            <li><a className="text-blue-500 p-2 hover:text-blue-300 transition duration-300 block" href="#contact5">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div id="mov" className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-blue-800 mb-4">
              ZEN.IT.SOLUTION
            </h1>
            <h2 className="text-xl md:text-3xl text-blue-600 mb-6">
              Web Development Company
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              I create beautiful, functional websites and web applications with a focus on user experience and clean code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="bg-gray-600 hover:bg-gray-300 text-white hover:text-black px-6 py-3 rounded-lg transition duration-300 text-center">
                View My Work →
              </a>
              <a href="#contact5" className="border border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-lg transition duration-300 text-center">
                Contact Us →
              </a>
            </div>
          </div>

          {/* Card Content */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-auto max-w-md">
              <div className="p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 text-center">
                  Crafting Digital Excellence
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 text-center">
                  We transform ideas into <span className="text-blue-600 font-semibold">immersive digital experiences</span> that captivate audiences and drive results.
                </p>
                <div className="text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base">
                    <a href="#contact5">Start Your Project →</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="container mx-auto mt-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 justify-between">
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-500 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <div className="w-full h-full bg-gradient-to-r from-blue-200 to-green-200 flex items-center justify-center text-white text-2xl md:text-4xl lg:text-6xl font-bold">
                    ZEN.IT.
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 md:-right-4 bg-gray-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-lg">
                  <span className="text-xs md:text-sm">1+ Years Experience</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <img
                className="w-full max-w-md lg:max-w-full rounded-2xl shadow-xl"
                src={portpc}
                alt="Portfolio"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">About Us</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate web developer with over 5 years of experience creating dynamic, responsive websites and web applications. I specialize in front-end development but also have strong back-end skills.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                My approach combines technical expertise with an eye for design to deliver solutions that are both functional and visually appealing.
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { number: "50+", text: "Projects Completed" },
                  { number: "50+", text: "Happy Clients" },
                  { number: "1+", text: "Years Experience" },
                  { number: "7+", text: "Technologies Mastered" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
                    <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-1 md:mb-2">{item.number}</div>
                    <div className="text-sm md:text-base text-gray-600">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">My Skills</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 md:mb-6">Technical Skills</h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  { skill: "HTML/CSS", percentage: 95 },
                  { skill: "JavaScript", percentage: 90 },
                  { skill: "React", percentage: 85 },
                  { skill: "Node.js", percentage: 80 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm md:text-base">{item.skill}</span>
                      <span className="text-sm md:text-base">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-blue-200 rounded-full">
                      <div 
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 md:mb-6">Professional Skills</h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  { skill: "Communication", percentage: 90 },
                  { skill: "Problem Solving", percentage: 95 },
                  { skill: "Team Collaboration", percentage: 85 },
                  { skill: "Project Management", percentage: 80 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm md:text-base">{item.skill}</span>
                      <span className="text-sm md:text-base">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-blue-200 rounded-full">
                      <div 
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl font-semibold mb-6 md:mb-8 text-center">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[ht5, cos, sop, star, don, gitalt].map((tech, index) => (
                <div key={index} className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-md flex items-center justify-center transition-transform hover:scale-110">
                  <img src={tech} alt="Technology" className="w-8 h-8 md:w-10 md:h-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
            Here are some of my recent works showcasing different technologies and solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "Website Development", 
                description: "A fully responsive e-commerce platform with product filtering and cart functionality.",
                technologies: ["React", "Node.js", "MongoDB"]
              },
              { 
                title: "APP Development", 
                description: "A drag-and-drop task management application with user authentication.",
                technologies: ["Vue.js", "Express", "MySQL"]
              },
              { 
                title: "SEO Optimization", 
                description: "A responsive travel blog with content management system and comment functionality.",
                technologies: ["React.js/Tailwind", "JavaScript", "PHP"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs md:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-blue-600 font-semibold hover:underline text-sm md:text-base">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact5" className="py-16 bg-blue-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Reach out to discuss your project or request a consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-6 md:mb-8">
                Fill out the form or contact us through other channels listed below:
              </p>

              <div className="space-y-4 md:space-y-6">
                {[
                  { icon: location, title: "Address", content: "Islamabad, Punjab, Pakistan" },
                  { icon: mobile, title: "Phone", content: "(+92) 322 7757470" },
                  { icon: email, title: "Email", content: "zen.it.solution0@mail.com" },
                  { icon: clock, title: "Working Hours", content: "Monday-Friday: 9AM - 5PM" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 flex-shrink-0">
                      <img className="h-8 w-8 md:h-10 md:w-10" src={item.icon} alt={item.title} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">{item.title}</h4>
                      <p className="text-sm md:text-base">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 md:mt-10">
                <h4 className="font-bold text-lg md:text-xl mb-4">Follow Us</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Facebook", url: "https://web.facebook.com/profile.php?id=61580902258081" },
                    { name: "Twitter", url: "#" },
                    { name: "Instagram", url: "#" },
                    { name: "LinkedIn", url: "https://www.linkedin.com/public-profile/settings" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="font-semibold text-blue-600 hover:text-blue-800 transition-colors text-sm md:text-base"
                    >
                      {social.name} →
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                <div className="mb-4 md:mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium text-sm md:text-base">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                <div className="mb-4 md:mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium text-sm md:text-base">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                <div className="mb-4 md:mb-6">
                  <label htmlFor="phone" className="block mb-2 font-medium text-sm md:text-base">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No..."
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                <div className="mb-4 md:mb-6">
                  <label htmlFor="projectType" className="block mb-2 font-medium text-sm md:text-base">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
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
                  <label htmlFor="message" className="block mb-2 font-medium text-sm md:text-base">Your Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Project Details"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:bg-gray-400 text-sm md:text-base"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-sm md:text-base">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-sm md:text-base">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ZEN.IT.<span className="text-blue-300">SOLUTION</span>
              </h2>
              <p className="text-blue-200 text-sm md:text-base leading-relaxed">
                Creating innovative solutions for the digital world. Empowering businesses through technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((link, index) => (
                  <li key={index}>
                    <a href={link === "Home" ? "/" : link} className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "Web Development", "App Development", "Cloud Solutions", 
                  "Custom Logo Design", "Graphic Design", "SEO Optimization"
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
              <p className="text-blue-200 mb-4 text-sm md:text-base">
                Get the latest updates and offers
              </p>
              <a href="#contact5" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors text-sm md:text-base">
                Subscribe →
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-blue-600 text-center">
            <p className="text-blue-300 text-sm md:text-base">© 2024 Zen IT Solution. All rights reserved.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <a key={index} href="#" className="text-blue-300 hover:text-white transition-colors text-xs md:text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
