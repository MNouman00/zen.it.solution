import "./About.css";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import midvideo from "../midvideo.mp4";
import bulb from "../bulb.png";
import hand from "../hand.png";
import medal from "../medal.png";
import logo from "../logo.png";
import abpic from "../abpic.jpg";
import nomi from "../nomi.jpg";
import mobile from "../mobile.png";
import location from "../location.png";
import email from "../email.png";
import clock from "../clock.png";
import hambur from '../hambur.png';

const About = () => {
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

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Turning Ideas Into Digital Reality";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="m-0 p-0 box-border font-mullish">
      {/* Navigation */}
      <div className="shadow-md fixed flex items-center justify-between p-4 sm:p-8 top-0 left-0 w-full z-10 ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="hover:text-blue-500 transition duration-300 text-2xl sm:text-4xl font-bold text-blue-900">
              ZEN.IT.
            </span>
            <span className="hidden sm:block hover:text-blue-500 transition duration-300 text-2xl font-bold text-gray-700">
              SOLUTION
            </span>
            <img src={logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-lg font-medium">
              <li><a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="/">Home</a></li>
              <li><a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="About">About</a></li>
              <li><a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="Services">Services</a></li>
              <li><a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="portfolio">Portfolio</a></li>
              <li><a className="text-blue-500 p-2 border rounded-2xl hover:text-blue-300 transition duration-300" href="#contact3">Contact</a></li>
            </ul>
          </div>
 
          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="md:hidden z-20"
            onClick={toggleMenu}
          >
            <img className="h-6 w-6" src={hambur} alt="Menu" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-center justify-center transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}>
          <button 
            className="absolute top-4 right-4 text-2xl"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <ul className="flex flex-col items-center gap-8 text-xl font-medium">
            <li><a className="text-blue-500 hover:text-blue-300 transition duration-300" href="/" onClick={toggleMenu}>Home</a></li>
            <li><a className="text-blue-500 hover:text-blue-300 transition duration-300" href="About" onClick={toggleMenu}>About</a></li>
            <li><a className="text-blue-500 hover:text-blue-300 transition duration-300" href="Services" onClick={toggleMenu}>Services</a></li>
            <li><a className="text-blue-500 hover:text-blue-300 transition duration-300" href="portfolio" onClick={toggleMenu}>Portfolio</a></li>
            <li><a className="text-blue-500 hover:text-blue-300 transition duration-300" href="#contact3" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-center p-7 ">
          <div id="mov" className="text-center lg:text-left lg:w-1/2 ">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-blue-700 hover:text-blue-500">ZEN.IT.SOLUTION</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6">
              We are a team of passionate developers, designers, and digital strategists dedicated to creating exceptional web experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#our-story" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-center">
                Our Story →
              </a>
              <a href="#our-team" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition text-center">
                Meet Our Team →
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              className="w-full h-96 max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
              src={abpic}
              alt="About us"
            />
          </div>
        </section>
      </div>

      {/* Animated Text Section */}
      <div className="h-20 sm:h-28 w-full bg-blue-100 flex items-center justify-center">
        <h2 className="font-black text-xl sm:text-3xl text-blue-700 text-center px-4">
          {displayedText}
          <span className="cursor">|</span>
        </h2>
      </div>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { number: "50+", text: "Projects Completed" },
              { number: "50+", text: "Happy Clients" },
              { number: "1+", text: "Years Experience" },
              { number: "7", text: "Team Members" }
            ].map((stat, index) => (
              <div key={index} className="stat-card text-center p-4 sm:p-6 bg-blue-300 rounded-lg">
                <div className="text-2xl sm:text-4xl font-bold text-blue-700 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="our-story" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Story</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                From small beginnings to big dreams
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in 2025, <span className="text-blue-500 font-bold">Zen.It</span> started as a small team of two developers working out of a garage.
              </p>
              <p className="text-gray-600 mb-4">
                We've maintained our commitment to quality and personal service while expanding our team and capabilities.
              </p>
              <p className="text-gray-600">
                Our mission remains the same: to help businesses of all sizes establish a powerful online presence.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-blue-300 shadow-lg rounded-lg overflow-hidden">
                <video className="w-full h-auto" loop autoPlay muted playsInline>
                  <source src={midvideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Values</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: bulb, title: "Innovation", text: "We stay ahead of industry trends and continuously explore new technologies." },
              { icon: hand, title: "Collaboration", text: "We work closely with our clients throughout the process." },
              { icon: medal, title: "Excellence", text: "We're committed to delivering the highest quality work." }
            ].map((value, index) => (
              <div key={index} className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <img className="h-6 sm:h-8 w-auto" src={value.icon} alt={value.title} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="our-team" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Our diverse team of experts brings together years of experience in web development, design, and digital marketing.
            </p>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Team Member 1 */}
            <div className="team-member bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="bg-gradient-to-br from-sky-200 via-blue-200 to-indigo-300 h-48 sm:h-60 flex items-center justify-center">
                <img className="w-full h-full " src={nomi} alt="Muhammad Nouman" />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold">MUHAMAD NOUMAN</h3>
                <p className="text-blue-600 mb-3 sm:mb-4">CEO & Founder</p>
                <div className="flex justify-center gap-3 sm:gap-4">
                  <a href="https://www.linkedin.com" className="text-blue-400 hover:text-blue-600 text-sm">LinkedIn →</a>
                  <a href="https://facebook.com" className="text-blue-400 hover:text-blue-600 text-sm">Facebook →</a>
                </div>
              </div>
            </div>

            {/* Additional team members with placeholder content */}
            {[2, 3, 4].map((num) => (
              <div key={num} className="team-member bg-white rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-200 h-48 sm:h-60 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo coming soon</span>
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold">Team Member {num}</h3>
                  <p className="text-blue-600 mb-3 sm:mb-4">Position</p>
                  <div className="flex justify-center gap-3 sm:gap-4">
                    <span className="text-gray-400 text-sm">Social links</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-6 sm:mb-10 text-blue-100">
            Let's discuss how we can help bring your ideas to life with our web development expertise.
          </p>
          <a
            href="#contact3"
            className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition inline-block"
          >
            Get in Touch →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact3" className="py-12 sm:py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Reach out to discuss your project or request a consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <p className="mb-6 sm:mb-8">Fill out the form or contact us through other channels listed below:</p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: location, title: "Address", text: "Islamabad, Punjab, Pakistan" },
                  { icon: mobile, title: "Phone", text: "(+92) 322 7757470" },
                  { icon: email, title: "Email", text: "zen.it.solution0@mail.com" },
                  { icon: clock, title: "Working Hours", text: "Monday-Friday: 9AM - 5PM" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 sm:mr-4">
                      <img className="h-8 w-8 sm:h-10 sm:w-10" src={contact.icon} alt={contact.title} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">{contact.title}</h4>
                      <p className="text-sm sm:text-base">{contact.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10">
                <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform) => (
                    <a key={platform} href="#" className="font-bold text-blue-600 hover:text-blue-800 transition text-sm sm:text-base">
                      {platform} →
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium text-sm sm:text-base">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                    placeholder="Your name..."
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium text-sm sm:text-base">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                    placeholder="Your email..."
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="phone" className="block mb-2 font-medium text-sm sm:text-base">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                    placeholder="Your phone number..."
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="projectType" className="block mb-2 font-medium text-sm sm:text-base">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
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

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium text-sm sm:text-base">Your Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:bg-gray-400 text-sm sm:text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-sm">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-sm">
                    Sorry, there was an error. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-200 text-blue-900 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            {/* Company Info */}
            <div className="md:w-1/4">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                ZEN.IT.<span className="text-blue-600">SOLUTION</span>
              </h2>
              <p className="text-sm sm:text-base">
                Creating innovative solutions for the digital world. Empowering businesses through technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={link === "Home" ? "/" : link} className="text-blue-600 hover:text-blue-800 transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                {[
                  "Web Development", "App Development", "Cloud Solutions", 
                  "Custom Logo Design", "Graphic Design", "SEO Optimization"
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-400 pt-8 text-center">
            <h3 className="text-xl font-semibold mb-2">
              <a href="#contact1" className="text-blue-600 hover:text-blue-800">Join Us →</a>
            </h3>
            <p className="text-blue-700 text-sm sm:text-base">Get the latest updates and offers</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-400 pt-8 text-center text-sm">
            <p>© 2023 Zen IT Solution. All rights reserved.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <a key={link} href="#" className="text-blue-600 hover:text-blue-800 transition">
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

export default About;
